import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
  const filePath = path.join(__dirname, "files");
  try {
    const files = await fs.readdir(filePath);
    console.log(files)
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
