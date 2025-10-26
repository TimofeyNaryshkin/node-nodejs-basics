import { Transform } from "stream";
import { stdin, stdout } from "process";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const str = chunk.toString();
      const reversed = str.split("").reverse().join("");
      callback(null, reversed);
    },
  });
  await pipeline(stdin, reverseTransform, stdout);
};

await transform();
