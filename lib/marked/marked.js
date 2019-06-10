#!/usr/bin/env node

const fs = require("fs");
const marked = require("marked"); // markedパッケージを読み込む

const filePath = './resources/doc/api.md';

fs.readFile(filePath, "utf8", (err, file) => {
  if (err) {
    console.error(err);
    process.exit(err.code);
    return;
  }


  let renderer = new marked.Renderer();
  
  let title = '';
  let nav_html = '';
  renderer.heading = function (text, level, raw) {
    if ( level == 1 ) {
      title = text;
      return '';
    }
    else if (level == 2) { 
      
      let pattern = /\(.+\)/g;
      let result = text.match(pattern)[0].replace('(', '').replace(')', '').split(',');
      let tmp = text.match(pattern)[0];
      let formatted_text = text.replace(tmp, '');
      
      let val = formatted_text.replace(/\/|\{|\}/g, '');
      
      let html = '';
      html += `<div class="index" id="${val}">\n`;
      html += `<h${level} id="${val}">${formatted_text}</h${level}>\n`;

      html += '<ul>';
      result.forEach(function (_val, _index) {
        html += `<li class="${_val.toLowerCase()}">${_val}</li>\n`;
      })
      html += '</ul>';

      html += '</div>';
      
      nav_html += `<li id="${val}"><a href="#${val}">${formatted_text}</a></li>\n`;
      return html;
    }
    else {
      return `<h${level} id="${text}">${text}</h${level}>\n`
    }
    
  }

  renderer.html = function (html) {
    if (html.indexOf("<source>") != -1) {
      return html.replace('<source>', '<div class="source">');
    }
    if (html.indexOf("</source>") != -1) {
      return html.replace('</source>', '</div>');
    }
    return;
  };


  renderer.list = function (body, ordered, start) {
    if (body.indexOf("<li>GET</li>") != -1) {
      return '<ul>' + body.replace('<li>GET</li>', '<li class="get">GET</li>') + '</ul>';
    }
    if (body.indexOf("<li>POST</li>") != -1) {
      return '<ul>' + body.replace('<li>POST</li>', '<li class="post">POST</li>') + '</ul>';
    }
    
    return '<ul>' + body + '</ul>';
  };
  
  renderer.table = function (header, body) {
    return '<div class="table_block"><table><thead>' + header + '</thead><tbody>' + body + '</tbody></table></div>';
  };
 
  // []付きのセルを編集
  renderer.tablerow = function (body) {
    let pattern = /\[.+\]/g;

    let result = body.match(pattern);
    if (result != null) {
      let tmp = body.replace(result[0], '');
      return '<tr class="child">' + tmp + '</tr>';
    }
    else {
      return '<tr>' + body + '</tr>';
    }
  };

  const html = marked(file, { renderer: renderer }); // HTML文字列に変換する
  // console.log(html);

  fs.writeFileSync("resources/html/tmp/markdown.ejs", html)
  fs.writeFileSync("resources/html/tmp/title.ejs", title)
  fs.writeFileSync("resources/html/tmp/nav.ejs", nav_html)
  fs.writeFileSync("resources/html/tmp/copy.ejs", process.env.npm_package_copy)
});