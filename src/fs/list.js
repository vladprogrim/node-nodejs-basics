import fs from "fs";
// const path = require("path");

const list = async () => {
  fs.readdir("./files", (err, files) => {
    if (err) {
      console.log("FS operation failed");
    } else {
      console.log(files);
    }
  });
};

await list();
