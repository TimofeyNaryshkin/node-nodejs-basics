import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  const filePath = path.join(__dirname, "files", "fresh.txt");
  const content = "I am fresh and young";
  try {
    await fs.writeFile(filePath, content, { flag: "wx" });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error("FS operation failed");
    }
  }
};

await create();
