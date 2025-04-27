import fs from "fs";

const create = async () => {
  fs.writeFile("./files/fresh.txt", "I am fresh and young", (err) => {
    if (err) {
      console.log("FS operation failed");
      throw err;
    }
  });
  // Write your code here
};

await create();
