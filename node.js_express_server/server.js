const express = require("express");

const app = express();

const narimoto = [
  {
    id: 0,
    name: "gogo",
    phone: "080-111-111",
  },
  {
    id: 1,
    name: "hoho",
    phone: "080-111-111",
  },
  {
    id: 2,
    name: "haha",
    phone: "080-111-111",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/list", (req, res) => {
  res.send(narimoto);
});

app.listen(8000, () => {
  console.log("サーバーが起動しました。");
});
