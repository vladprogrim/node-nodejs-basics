import fs from "fs";

const read = async () => {
  fs.readFile("./files/fileToRead.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("FS operation failed");
      throw err;
    } else {
      console.log(data);
    }
  });
};

await read();
