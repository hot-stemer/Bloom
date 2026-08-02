const backgrounds = ["pattern1.jfif", "patter3.jfif", "pattern2.jfif", "pattern4.jfif", "pattern5.jfif", "pattern6.jfif", "pattern7.jfif", "pattern8.jfif"]
const quotes = [

 "Bloom where you are.",
  
  "You don't have to have everything figured out today."
  ,
    "Small steps are still mean you're moving forward."
  ,
 "Your softness is not a weakness; it's one of your greatest strengths."
  ,
   "The person you're becoming is worth every difficult day."
  ,
   "Rest is not falling behind. Rest is part of growing."
  ,
  
     "grow at your own pace."
  ,
  
     "Even flowers take time to bloom."
  ,
  
     "You don't need permission to believe in yourself."
  ,
  
     "Today's effort is tomorrow's confidence."
  ,
  
     "begin again as many times as you need."
  ,
   "You carry more strength than your doubts can measure."
  ,
   "Progress whispers before it shines."
  ,
   "Your dreams deserve your patience."
  ,
   "A gentle heart can still be incredibly brave."
  ,
   "Take up space. You belong here."
  ,
   "The world needs what only you can bring."
  ,
   "You are growing in ways you cannot yet see."
  ,
   "Keep watering the life you're building."
  ,
   "One kind thought about yourself can change your whole day."
  ,
   "Every sunrise is another chance to start fresh."
  ,
   "Trust yourself a little more today."
  ,
   "Your future self is quietly cheering you on."
  ,
   "Good things often grow slowly."
  ,
   "You are enough on your hardest days too."
  ,
   "The little things you do every day matter."
  ,
   "Your light doesn't become smaller because someone else shines."
  ,
   "Keep choosing yourself with kindness."
  ,
   "You have survived every difficult day so far."
  ,
   "The journey counts just as much as the destination."
  ,
   "You don't have to rush your story."
  ,
   "It's okay to outgrow places that no longer fit."
  ,
   "Your kindness is never wasted."
  ,
   "The strongest roots grow quietly."
  ,
   "You are becoming someone you'll be proud of."
  ,
   "Celebrate every tiny victory."
  ,
   "Soft hearts can change the world."
  ,
   "The best chapters are still ahead."
  ,
   "Believe in yourself before the results appear."
  ,
   "You are allowed to protect your peace."
  ,
   "Growth isn't always loud."
  ,
   "Every effort plants a seed."
  ,
   "Your courage grows every time you keep going."
  ,
   "You deserve the same kindness you give to others."
  ,
   "Your pace is perfectly valid."
  ,
   "Healing is still progress."
  ,
   "Choose hope, even in small moments."
  ,
   "You are not behind; you're on your own path."
  ,
   "Take a deep breath. You're doing better than you think."
  ,
   "The sky never rushes the sunrise."
  ,
   "You are worthy of every dream you dare to chase."
  ,
   "Let yourself be proud of how far you've come."
  ,
   "Your story is still unfolding beautifully."
  ,
   "It's okay if today feels slow."
  ,
   "You don't need to earn your worth."
  ,
   "The tiniest progress is still progress."
  ,
   "The world becomes brighter because you're in it."
  ,
   "Take things one heartbeat at a time."
  ,
   "There is beauty in beginning again."
  ,
   "Every challenge teaches your heart something new."
  ,
   "Keep showing up for yourself."
  ,
   "You are allowed to dream bigger."
  ,
   "One peaceful moment can change your day."
  ,
   "The flower doesn't compare itself to the garden."
  ,
   "Your voice deserves to be heard."
  ,
   "A calm mind can carry incredible strength."
  ,
   "Keep blooming, even after the rain."
  ,
   "The future is built from today's small choices."
  ,
   "You are capable of wonderful things."
  ,
   "Choose progress over perfection."
  ,
   "Your heart knows the way."
  ,
   "You have permission to rest."
  ,
   "A little hope goes a long way."
  ,
   "Be patient with the person you're becoming."
  ,
   "You are stronger than your fears."
  ,
   "Quiet confidence is still confidence."
  ,
   "Trust the timing of your own life."
  ,
   "Every season has its purpose."
  ,
   "You are never too late to grow."
  ,
   "Peace begins with one gentle thought."
  ,
   "Your happiness matters."
  ,
   "Every bloom starts as a tiny seed."
  ,
   "Your effort is never invisible."
  ,
   "It's okay to move slowly."
  ,
   "The version of you tomorrow will thank you today."
  ,
   "You are allowed to take breaks without giving up."
  ,
   "Even cloudy days have light."
  ,
   "Your dreams are worth protecting."
  ,
   "Be gentle with yourself today."
  ,
   "You are writing a beautiful story, one day at a time."
  ,
   "Keep choosing hope over fear."
  ,
   "Your smile is enough reason to keep going."
  ,
   "You were never meant to bloom overnight."
  ,
   "Believe that better days are already on their way."
  ,
   "The smallest act of self-love is still powerful."
  ,
   "You deserve peace as much as success."
  ,
   "You have everything you need to take the next step."
  ,
   "Bloom gently. Bloom proudly. Bloom anyway."
  ,
   "One day, you'll look back and be thankful you didn't give up."
  ,
   "You are becoming your own safe place."
  
];
const RandomQuote = Math.floor(Math.random() * 100)
const RandomBackGround = Math.floor(Math.random()*10)
const quote = document.getElementById("Quote");
const body = document.querySelector("body");
//quote.textContent = quotes[RandomQuote];
body.style.backgroundImage = `url(${backgrounds[RandomBackGround]})`;
async function GetQuote(){
    const respon = await fetch(`https://thequoteshub.com/api/random-quote?format=json`)
    const data = await respon.json();
    console.log(data)
    quote.textContent = data.text;
}
GetQuote()