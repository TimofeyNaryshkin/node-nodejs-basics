import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
  const scr = path.join(__dirname, "files");
  const dest = path.join(__dirname, "files_copy");
  try {
    await fs.cp(scr, dest, {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
