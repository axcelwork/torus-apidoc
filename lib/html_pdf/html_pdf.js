#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const pdf = require('html-pdf');

const html_path = './dist/index.html';
const dir_path = './dist/assets';
const pdf_path = './doc/api_document.pdf';
const base_path = 'file://' + path.resolve(dir_path);

const options = {
  "base": base_path,
  "border": "10px",
  "footer": {
    "height": "20px",
    "contents": {
      default: '<div style="font-size: 8px; text-align: center; color: #333;">' + process.env.npm_package_copy + '</div>'
    }
  },
};

fs.readFile(html_path, "utf8", (err, file) => {
  if (err) {
    console.error(err);
    process.exit(err.code);
    return;
  }

  pdf.create(file, options).toFile(pdf_path, function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });


});
