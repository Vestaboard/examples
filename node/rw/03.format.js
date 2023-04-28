const fetch = require("node-fetch");

fetch("https://vbml.vestaboard.com/format", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    components: [
      {
        style: {
          justify: "center",
          align: "center",
        },
        template: "All you need is love",
      },
    ],
  }),
})
  .then((res) => res.json())
  .then(console.log);
