Torus-apidoc
====

[![GitHub release](http://img.shields.io/github/release/axcelwork/gcli.svg?style=flat-square)][release]
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)][license]

[release]: https://github.com/axcelwork/torus-apidoc/releases
[license]: https://github.com/axcelwork/torus-apidoc/blob/master/LICENSE

## Overview
Create API document with Markdown format document


## Description
Convert markeddown documents into HTML and PDF files using [marked](https://www.npmjs.com/package/marked).<br>
Export Markdown automatically by saving.


In response to responsive design, any device can be seen beautifully.


## Demo
[demo](https://axcelwork.github.io/torus-apidoc/dist/index.html)

## Requirement
This tool uses the following npm module.<br>
As it is described in package.json, it will be installed together.


### Server related
- browser-sync

### HTML compilation
- ejs
- ejs-cli

### CSS compilation
- autoprefixer
- browserslist
- cssnano
- postcss-cli
- postcss-cssnext
- postcss-import
- postcss-mixins
- precss

### JS compilation
- glob
- webpack
- webpack-cli

### Markdown to HTML
- jsdom
- marked
- phantomjs

### HTML to PDF
- html-pdf
- html2pdf-cli

### Other
- npm-check-updates
- npm-run-all
- watch

## Install

### 1. Clone
After cloning, do `npm install`.

### 2. Compile and export
If you execute the following command, the server will start up and the compilation environment will be ready.

```
npm run start:project
```

### 3. Edit the resources/doc/api.md
Editing automatically updates the HTML and refreshes the browser. At the same time, `api_document.pdf` is created in`/doc/ `.


## Usage
The basics are the same as normal MarkDown, but there are some original notations.


### Document title
`#` Is the document title.<br>
Please be sure to have only one.
<br>
In HTML, it is converted to `<h1>` and applied to the page title.

**Example**
```:md
# Document title
```

### API name
`##` is the API name.<br>
In HTML, it is converted to `<h2>` and used for API name and left menu.
Also, write parentheses (`()`) and add `POST/GET/DELETE` and` Content-Type`.

**Example**
```:md
## API_Name(GET,application/json)
```

### Display of sample etc. source
For display of source, please enclose code notation with `<source>`.<br>
The highlighting syntax of `** TEXT **` is the heading element.

````
<source>

**PRODUCTION**
```
https://example.com/add
```

**STAGING**
```
https://stg.example.com/add
```

</source>
````

### Custom notation of sample etc. source
It is a custom notation of source code.<br>
Set the heading name with a colon (`:`) after the code format as shown below.

````
```js:PRODUCTION
https://example.com/add
```

```js:STAGING
https://stg.example.com/add
```
````

### Special notation of parameter part
A special notation was added only to the part of the parameter table.<br>
As shown below, parameter names can now be typed (`_type_name_`) and mandatory (` _ * _ `).

```
|parameter|description|
|--|--|
|name _string_ _*_|name|
|tel _string_ _*_|tell|
|mail _string_ _*_|mailaddress|
```

## Licence
[MIT](https://github.com/axcelwork/tool/blob/master/LICENCE)

## Author

[axcelwork](https://github.com/axcelwork)