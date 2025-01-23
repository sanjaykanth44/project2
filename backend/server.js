const fs = require("fs");
const filePath = "sample.json";

const readFileAsync = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
