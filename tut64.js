const fs = require("fs");
// to read file
let text = fs.readFileSync("delete.txt", "utf-8");
//  suppose we have to replace
text = text.replace("vishal", "monu");

//  we can add more
console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("monu.txt", text);




