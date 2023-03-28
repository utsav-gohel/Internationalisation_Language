const express = require("express");
const { I18n } = require("i18n");
const app = express();

const path = require("path");
const i18n = new I18n({
  locales: ["english", "hindi", "gujarati"],
  directory: path.join(__dirname, "translation"),
  defaultLocale: "english",
});

app.use(i18n.init);

app.get("/langauge", (req, res) => {
  res.json({ id: 1, name: res.__("MESSAGE") });
});

app.listen(3000, () => {
  console.log("server started");
});
