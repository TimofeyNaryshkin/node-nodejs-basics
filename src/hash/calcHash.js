import { pipeline } from "stream/promises";
import path from "path";
import { createHash } from "crypto";
import { createReadStream } from "fs";

const calculateHash = async () => {
  const filePath = path.join(
    import.meta.dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const hash = createHash("sha256");
  const readStream = createReadStream(filePath);
  const hexHash = hash.digest("hex");

  await pipeline(readStream, hash);
  console.log(hexHash);
};

await calculateHash();
