const fs = require("fs");

// const book = {
//   title: "The Three-Body Problem",
//   author: "Cixin Liu"
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// fs.writeFileSync("1-json.json", JSON.stringify(myInfo));

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Ye WenJie";
data.age = 65;

fs.writeFileSync("1-json.json", JSON.stringify(data));

console.log(data);
