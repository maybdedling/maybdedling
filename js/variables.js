let poke = parseInt(localStorage.getItem("poke")) || 50;
let food = parseInt(localStorage.getItem("food")) || 50;
let talk = parseInt(localStorage.getItem("talk")) || 50;
let now =  Date.now();
let lastSave = parseInt(localStorage.getItem("lastSave")) || now;


let speed = 5000; //in seconds
// let speed = 5000; //in seconds
let speechID;
let resourceDrainID;
let time = Math.floor((now - lastSave)/1000);

const foodDisplay = document.getElementById("food-stat");
const pokeDisplay = document.getElementById("poke-stat");
const talkDisplay = document.getElementById("talk-stat");
const textField = document.getElementById("maybdedling-speech");
const alertPane = document.getElementById("alert");

const foodButton = document.getElementById("feed");
const pokeButton = document.getElementById("poke");
const talkButton = document.getElementById("talk");
const restartButton = document.getElementById("restart-button");
const jeoverText = document.getElementById("joever-text");


const maybded = document.getElementById("maybded");

const smallTalk = ['cool', 'real', 'sick', 'damn', 'real', 'ight', 'wow', 'real', 'true'];

const setting = document.getElementById("setting");
const closeButton = document.getElementById("close-settings");
const infoButton = document.getElementById("info");