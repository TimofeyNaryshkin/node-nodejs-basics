import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const oldPath = path.join(__dirname, "files", 'wrongFilename.txt');
  const newPath = path.join(__dirname, "files", 'properFilename.md');
  try {
    await fs.rename(oldPath, newPath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
