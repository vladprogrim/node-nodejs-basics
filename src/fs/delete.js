import fs from "fs";

const remove = async () => {
  fs.unlink("./files/fileToRemove.txt", (err) => {
    if (err) {
      console.log("FS operation failed");
      throw err;
    }
  });
  // Write your code here
};

await remove();
