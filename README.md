# Expense Tracker - mongodb

這是一個實用的Web應用程序，它使用 Node.js，Express 和 MongoDB 構建，可讓您輕鬆地通過一個帳戶記錄，查看和管理費用：創建，查看，編輯，刪除，過濾每個月( 1 ~ 12月 )費用，各類項目費用。

## Project First Look

![pic1](https://imgur.com/uKHjm73.png)

![pic2](https://imgur.com/Mnf8OSk.png)

## Features

|Functions|Detail|URL|
:---: | --- | :---:
註冊新賬號 | 1. 用戶可以通過輸入名稱，電子郵件，密碼來註冊帳戶<br>2. 註冊過的Email，再次申請會收到 "Email 已經註冊過了!" 的警告消息<br>3. 註冊用戶時 Password 和 Confirm Password 不相同，會收到 "密碼輸入錯誤，請重新輸入!" 的警告消息<br>4. 成功註冊後會自動導入登入首頁 | /users/register
首頁登入 | 1. 系統將會顯示 "請先登入才能使用" 的提示消息<br>2. 用戶可以使用已註冊的電子郵件登入 | /users/login
使用 Google 或 Facebook 帳戶登入 | 用戶可以使用自己的 Google 或 Facebook 帳戶快速登入 | /auth/google<br>/auth/facebook
登出 | 登出該帳號，系統會顯示 "你已經成功登出了" | /users/logout
查看月份費用 | 用戶登入後可以查看月份費用明細 | /filter/month/月份( 01 ~ 12 )
查看項目費用 | 用戶登入後可以查看項目費用明細 | /filter/category/項目( home, travel, leisure, food, other )
新增支出 | 用戶填寫新增支出相關資訊 ( 名稱，日期，項目，金額 ) | /records/new
編輯支出 | 用戶填寫修改支出相關資訊 ( 名稱，日期，項目，金額 ) | /records/:id/edit
刪除支出 | 用戶刪除支出相關資訊 | /records/:id/delete
---

## Install

### 先決條件
1. npm
2. Node.js v10.16.0
3. MongoDB v4.0.10

### Clone
將此儲存庫下載到本地主機<br><code>$ https://github.com/sukoyao/ExpenseTracker-mongodb.git</code>

---

## Setting

1. 創建一個 Google Cloud Platform 和 Facebook For Developer 帳戶
  - https://console.cloud.google.com
  - https://developers.facebook.com

2. 創建並獲取一個 Google Cloud Platform API 密鑰
  > API和服務 > + 啟用API和服務 > 搜尋 Google+ API 後點下啟用 > 建立憑證 > 取得網路應用程式用戶端 ID 與密碼

3. 創建一個 Facebook 應用並獲取應用 ID 和密碼
  > 我的應用程式 > 建立應用程式 > 設定基本資料 > 取得應用程式編號與密鑰 > 產品+ > Facebook登入 > 設定 > 輸入有效的 OAuth 重新導向 URI

4. 進入下載的文件夾<br>
<code>$ cd ExpenseTracker-mongodb</code>

5. 安裝 npm 軟件包<br>
<code>$ npm install</code>

6. 創建 .env 文件<br>
<code>$ touch .env</code>

7. 將 API 密鑰存儲在 .env 文件中並保存<br>
<code>FACEBOOK_ID=xxxxxxxxxxxxxxxxxxxxxxxx<br>
FACEBOOK_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx<br>
FACEBOOK_CALLBACK=xxxxxxxxxxxxxxxxxxxxxxxx<br>
<br>
GOOGLE_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxx<br>
GOOGLE_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx<br>
GOOGLE_CALLBACK=xxxxxxxxxxxxxxxxxxxxxxxx<br>
<br></code>

8. 激活伺服器<br>
<code>$ npm run dev</code>

9. 本機成功激活訊息<br>
<code>App is running on http://localhost:3000<br>
mongodb is connected</code>


