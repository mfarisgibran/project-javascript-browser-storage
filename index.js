const names = ["Muhammad", "Faris", "Gibran"];

names.push("Yaafi");
names.unshift("Febby");

localStorage.setItem("names", JSON.stringify(names));

const namesFromBrowser = JSON.parse(localStorage.getItem("names"));

console.log(namesFromBrowser);
