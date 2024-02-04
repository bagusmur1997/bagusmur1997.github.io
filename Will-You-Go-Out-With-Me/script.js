const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

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
    "Visit an art gallery"
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
    "magical"
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
    "in a charming village"
];

const generateDateIdea = () => {
  const activity = activities[Math.floor(Math.random() * activities.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];

  return `${activity} a ${adjective} evening ${location}`;
};

const handleYesClick = () => {
  question.innerHTML = "Yeahhhhhhhhhhh! See you tomorrow!!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  noBtn.removeEventListener("mouseover", handleNoMouseOver);
  noBtn.remove();

  const letsGoBtn = createLetsGoButton();
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;
  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

const createLetsGoButton = () => {
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn");
  positionLetsGoButton(letsGoBtn);

  letsGoBtn.addEventListener("click", () => {
    const randomDateIdea = generateDateIdea();
    alert(`How about this romantic date idea: ${randomDateIdea}`);
  });

  return letsGoBtn;
};

const positionLetsGoButton = (button) => {
  button.style.position = "absolute";
  button.style.left = "50%";
  button.style.top = "50%";
  button.style.transform = "translate(-50%, -50%)";
  button.style.width = "200px";
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
