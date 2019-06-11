# Torus

## /add(POST,application/json)

追加を行います。

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

### リクエスト

リクエストパラメータを記載します。

|パラメータ名|必須|型|説明|
|--|:--:|--|--|
|name||String|氏名|
|tel||String|電話番号|
|mail||String|メールアドレス|

|パラメータ名|説明|
|--|--|
|name _string_ _*_|氏名|
|tel _string_ _*_|電話番号|
|mail _string_ _*_|メールアドレス|

### レスポンス

レスポンスパラメータを記載します。

<source>

**RESPONCE**

```json
[
  {
    "status": Boolean,
    "message": String
  }
]
```

</source>

|パラメータ名|型|説明|
|--|--|--|
|status|Boolean|パラメーターの備考|
|message|Srray|パラメーターの備考|
|[message]id|Integer|ID|
|[message]addreses|String|アドレス|
|[message]domain|String|ドメイン|




## /employee(GET,application/json)

employeeデータを取得します。


<source>

**PRODUCTION**
```
https://example.com/employee
```

**STAGING**
```
https://stg.example.com/employee
```

</source>

### レスポンス

<source>

**成功**

```json
[
  {
    "id": String,
    "employee_name": String,
    "employee_age": String
  },
  {
    "id": "2",
    "employee_name": String,
    "employee_age": String
  }
  ...
]
```

**失敗**

```json
[
  {
    "message": String
  }
]
```

</source>

|パラメータ名|型|説明|
|--|--|--|
|id|String|パラメーターの備考|
|employee_name|String|パラメーターの備考|
|employee_age|String|パラメーターの備考|



## /employee/{id}(GET,application/json)

employeeデータを取得します。

<source>

**PRODUCTION**
```
https://example.com/employee/{id}
```

**STAGING**
```
https://stg.example.com/employee/{id}
```

</source>

### リクエスト

|パラメータ名|必須|型|説明|
|--|:--:|--|--|
|id||String|パラメーターの備考|


### レスポンス


<source>

**成功**

```json
[
  {
    "id": String,
    "employee_name": String,
    "employee_age": String
  }
]
```

**失敗**

```json
[
  {
    "message": String
  }
]
```

</source>


|パラメータ名|型|説明|
|--|--|--|
|id|String|パラメーターの備考|
|employee_name|String|パラメーターの備考|
|employee_age|String|パラメーターの備考|
