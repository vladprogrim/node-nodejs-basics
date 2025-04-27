import fs from "fs";

const copy = async () => {
  fs.cp("./files", "./files_copy", { recursive: true }, (err) => {
    if (err) {
      console.log("FS operation failed");
      throw err;
    }
  });
};

await copy();
