import fs from "fs";
import zlib from "zlib";
import path from "path";
import { pipeline } from "stream/promises";

const decompress = async () => {
  const iPath = path.join(import.meta.dirname, "files", "archive.gz");
  const oPath = path.join(import.meta.dirname, "files", "fileToCompress.txt");
  const readStream = fs.createReadStream(iPath);
  const gunzip = zlib.createGunzip();
  const writeStream = fs.createWriteStream(oPath);

  await pipeline(readStream, gunzip, writeStream);
};

await decompress();
