const fetch = require("node-fetch");

fetch("https://rw.vestaboard.com", {
  headers: {
    "X-Vestaboard-Read-Write-Key": "MY_SECRET_KEY",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then(console.log);
