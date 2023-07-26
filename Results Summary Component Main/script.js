import data from "./data.json" assert {type: 'json'};

const reaction = (data[0].category);
const memory = (data[1].category);
const verbal = (data[2].category);
const visual = (data[3].category);

document.getElementById("reaction").innerHTML = reaction;
document.getElementById("memory").innerHTML = memory;
document.getElementById("verbal").innerHTML = verbal;
document.getElementById("visual").innerHTML = visual;