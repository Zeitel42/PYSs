const express = require("express");
// const cors = require("cors");
require("dotenv").config({ path: "../.env" });
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 8080;
const KEY = process.env.SETLISTFM_API_KEY;
app.get("/setlists", async (req, res, next) => {
  const getArtistSet = async () => {
    const fetchResponse = await fetch(
      `https://api.setlist.fm/rest/1.0/artist/94f8947c-2d9c-4519-bcf9-6d11a24ad006/setlists?p=${req.query.p}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-api-key": `${KEY}`,
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      }
    );
    // console.log(req.query);
    const data = await fetchResponse.json();
    const setlistData = data;

    return setlistData;
  };

  res.set("Access-Control-Allow-Origin", "*"),
    res.send(JSON.stringify(await getArtistSet()));
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
