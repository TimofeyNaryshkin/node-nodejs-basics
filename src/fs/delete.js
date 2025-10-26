import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
  const filePath = path.join(__dirname, "files", "fileToRemove.txt");
  try {
    await fs.rm(filePath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
