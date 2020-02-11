const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname);

const app = http.createServer((req, res) => {
  const url = req.url;
  const filePath = path.join(root, url);
  if(req.method.toLowerCase() !== 'get') return false;
  /**
   *
   * @param {string} path
   */
  const isExtention = (path, extension = '') => {
    const ext = path.match(/\.\w+$/gi)[0];
    if(!ext) return false;
    if((ext === extension || !extension)) return false;
    return true;
  }
  if (isExtention(filePath, '.png') || !fs.existsSync(filePath)) {
    res.writeHead(400, "File doesn't exist");
    res.write("File doesn't exist");
    res.end();
  } else {
      console.info(`Serving ${url}`);
      const stats = fs.statSync(filePath);
      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": stats.size
      });
      const readStream = fs.createReadStream(filePath);
      readStream.pipe(res);
  }
});

module.exports = app;
