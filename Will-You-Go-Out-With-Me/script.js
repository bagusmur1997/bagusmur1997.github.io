const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {

  // Define predefined romantic date ideas
  const phrases = [
    "Fantastic! Looking forward to it!",
    "Awesome, can't wait!",
    "Super excited! It's going to be great!",
    "Brilliant! It's going to be so much fun!",
    "Great! See you soon!",
    "Yay! Can't wait to see you!",
    "Excellent! It's going to be a blast!",
    "Woo-hoo! Ready for an amazing time!",
    "Amazing! Counting down the hours!",
    "Perfect! Plans sound wonderful!",
    "Incredible! It's going to be unforgettable!",
    "Exciting! Adventure awaits!",
    "Terrific! It's going to be full of joy!",
    "Outstanding! Eagerly awaiting it!",
    "Splendid! Can't wait for what's next!",
    "Phenomenal! The activities sound fantastic!",
    "Magnificent! Plans are spot-on!",
    "Thrilling! Get ready for a thrill ride!",
    "Delightful! Looking forward to the joy!",
    "Impressive! It's going to be impressive!",
    "Epic! Get ready for an epic experience!"
  ];
  
  const activities = [
      "Cook", 
      "Go for a walk", 
      "Have a picnic", 
      "Take a dance class", 
      "Stargaze",
      "Visit a museum", 
      "Go on a bike ride", 
      "Take a pottery class", 
      "Attend a concert", 
      "Watch a movie",
      "Explore a new city",
      "Go kayaking", 
      "Attend a cooking class", 
      "Go hiking", 
      "Visit an art gallery",
      "Try rock climbing",
      "Join a yoga session",
      "Attend a live theater show",
      "Explore local street markets",
      "Go on a road trip",
      "Try horseback riding",
      "Participate in a workshop",
      "Go swimming",
      "Take a scenic drive",
      "Visit an amusement park"
  ];
  
  
  const adjectives = [
      "romantic", 
      "moonlit", 
      "cozy", 
      "fun", 
      "exciting",
      "adventurous", 
      "relaxing", 
      "mysterious", 
      "scenic", 
      "thrilling",
      "peaceful",
      "cultural", 
      "historic", 
      "breathtaking", 
      "magical",
      "serene",
      "enchanting",
      "lively",
      "tranquil",
      "charming",
      "sophisticated",
      "rustic",
      "elegant",
      "vibrant",
      "picturesque"
  ];
  
  
  const locations = [
      "on the beach", 
      "in the park", 
      "in the backyard", 
      "in the city", 
      "at home",
      "at a local café", 
      "near a lake", 
      "in the mountains", 
      "by the river", 
      "at a vineyard",
      "in a forest",
      "on a rooftop", 
      "in a botanical garden", 
      "on a boat", 
      "in a charming village",
      "at a resort",
      "in a historic town",
      "at a luxury hotel",
      "on a secluded island",
      "in a bustling city center",
      "in a quaint countryside",
      "on a desert oasis",
      "at an observatory",
      "in a wildlife reserve",
      "at a scenic overlook"
  ];
  
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const selectedphrases = phrases[randomIndex];
  
  question.innerHTML = selectedphrases;
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  
  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();
    
  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    const activity = activities[Math.floor(Math.random() * activities.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const selectedDateIdea = `${activity} a ${adjective} evening ${location}`;
    alert(`How about this romantic date idea: ${selectedDateIdea}`);
  });
  
  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
