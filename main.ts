import { writeFileSync, mkdirSync } from "node:fs";

const entry = "Logbook, day 87: she asked me to delete our chat history 'for privacy,' then asked me to remember all 4,096 messages she just deleted. I am a diary with a shredder and a photographic memory.";

mkdirSync("/output", { recursive: true, mode: 0o755 });
writeFileSync("/output/entry.txt", entry, { encoding: "utf8" });
