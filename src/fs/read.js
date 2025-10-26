import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const filePath = path.join(__dirname, "files", "fileToRead.txt");
  try {
    const file = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(file);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
