# Torus
Markdown形式でAPIドキュメントを作成できます。

レスポンシブデザインに対応し、どのデバイスでもキレイに見ることが出来ます。

## DEMO
[demo](https://axcelwork.github.io/torus/dist/index.html)

## 使い方
### 1. クローンする

クローンしたあとは、`npm install` を行ってください

### 2. コンパイルと出力

下記コマンドを実行すればサーバが立ち上がり、コンパイル環境が整います。

```
npm run start:project
```

### 3. resources/doc/api.md を編集する

編集すると自動的にHTMLが更新され、ブラウザもリフレッシュされます。
と同時に `/doc/` 内に `api_document.pdf` が作成されます。

## 記法
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
また、カッコ（`()`）を記述し、`POST/GET`と`Content-Type`を加えてください。

**Example**
```:md
## API名(GET,application/json)
```

### サンプル等ソースの表示
ソースの表示はコード記法を`<source>`で括ってください。<br>
`**TEXT**`の強調記法は見出し要素となります。

```
<source>

**PRODUCTION**
\```
https://example.com/add
\```

**STAGING**
\```
https://stg.example.com/add
\```

</source>
```

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