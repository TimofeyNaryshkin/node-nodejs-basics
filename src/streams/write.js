import fs from "fs";
import path from "path";
import { stdin } from "process";
import { pipeline } from "stream/promises";

const write = async () => {
  const writePath = path.join(import.meta.dirname, "files", "fileToWrite.txt");
  const writeStream = fs.createWriteStream(writePath);
  await pipeline(stdin, writeStream)
};

await write();
