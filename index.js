const backgrounds = ["pattern1.jfif", "patter3.jfif", "pattern2.jfif", "pattern4.jfif", "pattern5.jfif", "pattern6.jfif", "pattern7.jfif", "pattern8.jfif",
   "pattern9.jfif", "pattern10.jfif", "pattern11.jfif", "pattern12.jfif", "pattern13.jfif","pattern14.jfif"
]
let quotes = []
const RandomBackGround = Math.floor(Math.random()*14)
const quote = document.getElementById("Quote");
const body = document.querySelector("body");
body.style.backgroundImage = `url(${backgrounds[RandomBackGround]})`;

function randomQuote(){
   return Math.floor(Math.random() * 300)
}

async function GetQuote(){
   const respon = await fetch('Quotes.json');
   quotes = await respon.json();
   quote.textContent = quotes[randomQuote()]
}
GetQuote()


function newQuote(){
    quote.textContent = quotes[Math.floor(Math.random()*10)];
}
function copy(){
  const currentQuote = quote.textContent;
  navigator.clipboard.writeText(currentQuote);
}
