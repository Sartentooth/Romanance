"""Transcripción local, sin corrección editorial ni incorporación automática al canon."""
import argparse
import json
import os
import time
from pathlib import Path

os.environ.setdefault("HF_HUB_DISABLE_XET", "1")
os.environ.setdefault("HF_HUB_DISABLE_SYMLINKS_WARNING", "1")

def marca(segundos):
    s = int(segundos)
    return f"{s // 3600:02}:{s // 60 % 60:02}:{s % 60:02}"

def main():
    p = argparse.ArgumentParser()
    p.add_argument("audio", type=Path)
    p.add_argument("destino", type=Path)
    p.add_argument("--modelo", default="small")
    args = p.parse_args()
    from faster_whisper import WhisperModel
    root = Path(__file__).resolve().parents[2]
    print("Cargando modelo", args.modelo, flush=True)
    local = root / "tmp/whisper-models" / args.modelo
    model = WhisperModel(str(local) if (local / "model.bin").exists() else args.modelo, device="cpu", compute_type="int8",
                         cpu_threads=8, download_root=str(root / "tmp/whisper-models"))
    args.destino.mkdir(parents=True, exist_ok=True)
    md = args.destino / "transcripcion-automatica.md"
    raw = args.destino / "segmentos-automaticos.jsonl"
    if md.exists() or raw.exists():
        raise SystemExit("Ya existe una transcripción en el destino; no se sobrescribe.")
    inicio = time.monotonic()
    segments, info = model.transcribe(str(args.audio), language="es", task="transcribe",
        beam_size=5, vad_filter=True, condition_on_previous_text=False)
    metadata = {"fuente": str(args.audio.resolve()), "modelo": args.modelo,
                "motor": "faster-whisper", "idioma": info.language,
                "duracion_segundos": info.duration, "estado": "AUTOMÁTICA SIN COTEJAR",
                "diarizacion": False}
    (args.destino / "metadatos.json").write_text(json.dumps(metadata, ensure_ascii=False, indent=2), encoding="utf-8")
    siguiente = 0
    with md.open("x", encoding="utf-8") as texto, raw.open("x", encoding="utf-8") as datos:
        texto.write("# Romanance — Preludio del viaje\n\n"
                    "**Estado: TRANSCRIPCIÓN AUTOMÁTICA SIN COTEJAR.**\n\n"
                    "Fuente: Romanance preludio del viaje.m4a. Modelo Whisper " + args.modelo + ".\n\n"
                    "No identifica hablantes. Puede contener errores, omisiones y nombres incorrectos. "
                    "No constituye por sí sola una crónica validada ni decisiones de canon.\n\n")
        for seg in segments:
            texto.write(f"**[{marca(seg.start)}–{marca(seg.end)}]** {seg.text.strip()}\n\n")
            datos.write(json.dumps({"inicio": seg.start, "fin": seg.end, "texto": seg.text,
                                    "avg_logprob": seg.avg_logprob,
                                    "no_speech_prob": seg.no_speech_prob}, ensure_ascii=False) + "\n")
            texto.flush()
            datos.flush()
            if seg.end >= siguiente:
                print(f"Audio {marca(seg.end)} / {marca(info.duration)}; ejecución {marca(time.monotonic()-inicio)}", flush=True)
                siguiente = seg.end + 120
    metadata["completada"] = True
    metadata["tiempo_proceso_segundos"] = round(time.monotonic()-inicio, 1)
    (args.destino / "metadatos.json").write_text(json.dumps(metadata, ensure_ascii=False, indent=2), encoding="utf-8")
    print("TRANSCRIPCIÓN COMPLETA:", md, flush=True)

if __name__ == "__main__":
    main()
