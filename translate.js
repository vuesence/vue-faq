import fs from "fs";

const fileNames = [];
const text = [];

// const dir = "misc/";
const dir = "frontend/";
// const dir = "development/";
// const dir = "deployment/";
// const dir = "backend/";

processDir(dir);

function processDir(dir) {
  fs.readdirSync("./docs/" + dir).forEach((file) => {
    if (file.endsWith(".md")) {
      // console.log(file);
      fileNames.push(file);
      const data = fs.readFileSync("./docs/" + dir + file, "utf8");
      //   console.log(data);
      text.push(data);
    }
  });
  console.log(fileNames);
  // console.log(text);

  // fileNames.forEach((fn) => fs.copyFileSync(dir + fn, dir + fn + ".txt"));

  // process.exit();
  const raw = JSON.stringify({
    //   text: ["Привет"],
    text,
    source_lang: "RU",
    target_lang: "EN",
  });

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "DeepL-Auth-Key 11b71328-09dd-14fb-073c-d0f468e550b2:fx");
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://api-free.deepl.com/v2/translate", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.translations.length; i++) {
        const data = result.translations[i].text;
        fs.writeFileSync("./docs/en/" + dir + fileNames[i], data);
      }
      // console.log(result);
    })
    .catch((error) => console.log("error", error));
}
