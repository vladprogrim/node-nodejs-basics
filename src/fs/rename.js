import fs from "fs";

const rename = async () => {
  fs.rename("./files/wrongFilename.txt", "./files/properFilename.md", (err) => {
    if (err) {
      console.log("FS operation failed");
      throw err;
    }
  });
};

await rename();
