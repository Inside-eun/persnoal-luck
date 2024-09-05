// 필요한 모듈을 불러옵니다
const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

// Express 애플리케이션을 생성합니다
const app = express();

// SSL 인증서 파일 경로 설정
const keyPath = path.join(__dirname, "localhost-key.pem");
const certPath = path.join(__dirname, "localhost.pem");

// SSL 옵션을 설정합니다 (인증서와 키 파일을 읽어옵니다)
const sslOptions = {
  key: fs.readFileSync(keyPath), // 개인 키
  cert: fs.readFileSync(certPath), // 인증서
};

// 라우트 설정: 기본 경로('/')에 요청이 오면 "Hello HTTPS"를 응답합니다
app.get("/", (req, res) => {
  res.send("Hello HTTPS");
});

// HTTPS 서버를 생성하고, Express 애플리케이션을 사용하여 3000 포트에서 요청을 처리합니다
https.createServer(sslOptions, app).listen(3000, () => {
  console.log("HTTPS 서버가 https://localhost:3000 에서 실행 중입니다.");
});
