Torus-apidoc
====

[![GitHub release](http://img.shields.io/github/release/axcelwork/gcli.svg?style=flat-square)][release]
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)][license]

[release]: https://github.com/axcelwork/torus/releases
[license]: https://github.com/axcelwork/torus/blob/master/LICENSE

## Overview
Markdown形式のドキュメントでAPIドキュメントを作成することができます。

## Description
[marked](https://www.npmjs.com/package/marked) を使用して、Markdown形式のドキュメントをHTMLファイルとPDFファイルに変換します。
保存することで自動的にエクスポートします。

レスポンシブデザインに対応し、どのデバイスでもキレイに見ることが出来ます。

## Demo
[demo](https://axcelwork.github.io/torus/dist/index.html)

## Requirement
このツールは以下のnpmモジュールを使用しています。<br>
package.jsonに記載されているので、まとめてインストールされます。

### サーバ関連
- browser-sync

### HTMLコンパイル
- ejs
- ejs-cli

### CSS コンパイル
- autoprefixer
- browserslist
- cssnano
- postcss-cli
- postcss-cssnext
- postcss-import
- postcss-mixins
- precss

### JS コンパイル
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

### 1. クローン
クローンしたあとは、`npm install` を行ってください

### 2. コンパイルとエクスポート
下記コマンドを実行すればサーバが立ち上がり、コンパイル環境が整います。

```
npm run start:project
```

### 3. resources/doc/api.md を編集する

編集すると自動的にHTMLが更新され、ブラウザもリフレッシュされます。
と同時に `/doc/` 内に `api_document.pdf` が作成されます。

## Usage
基本は通常のMarkDownと同様ですが、一部オリジナルの記法があります。

### ドキュメントタイトル
`#` はドキュメントタイトルです。<br>
必ず1つだけにしてください。<br>
HTMLでは`<h1>`に変換され、ページタイトルに適用されます。

**Example**
```:md
# ドキュメントタイトル
```

### API名
`##` はAPI名になります。<br>
HTMLでは`<h2>`に変換され、API名と左メニューに使用されます。
また、カッコ（`()`）を記述し、`POST/GET/DELETE`と`Content-Type`を加えてください。

**Example**
```:md
## API名(GET,application/json)
```

### サンプル等ソースの表示
ソースの表示はコード記法を`<source>`で括ってください。<br>
`**TEXT**`の強調記法は見出し要素となります。

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

### サンプル等ソースのカスタム記法
ソースコードのカスタム記法です。
下記のようにコードフォーマットのあとにコロン（`:`）で見出し名を設定します。

````
```js:PRODUCTION
https://example.com/add
```

```js:STAGING
https://stg.example.com/add
```
````

### パラメータ部分の特殊記法
パラメータ表の部分にのみ、特殊な記法を追加しました。<br>
下記のように、パラメータ名に 型名（`_型名_`）と 必須（`_*_`）を入れられるようにしました。

```
|パラメータ名|説明|
|--|--|
|name _string_ _*_|氏名|
|tel _string_ _*_|電話番号|
|mail _string_ _*_|メールアドレス|
```

## Licence
[MIT](https://github.com/axcelwork/tool/blob/master/LICENCE)

## Author

[axcelwork](https://github.com/axcelwork)