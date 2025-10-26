import fs from "fs";
import zlib from "zlib";
import path from "path";
import { pipeline } from "stream/promises";

const compress = async () => {
  const iPath = path.join(import.meta.dirname, "files", "fileToCompress.txt");
  const oPath = path.join(import.meta.dirname, "files", "archive.gz");
  const readStream = fs.createReadStream(iPath)
  const gzip = zlib.createGzip()
  const writeStream = fs.createWriteStream(oPath)

  await pipeline(readStream, gzip, writeStream)
};

await compress();
