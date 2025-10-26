import fs from "fs";
import path from "path";
import { stdout } from "process";
import { pipeline } from "stream/promises";

const read = async () => {
  const readPath = path.join(import.meta.dirname, "files", "fileToRead.txt");
  try {
    const readStream = fs.createReadStream(readPath);
    await pipeline(readStream, stdout);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

await read();
