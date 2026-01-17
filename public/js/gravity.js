const weightInput = document.getElementById("weight");
const worldSelect = document.getElementById("world");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");
const factBox = document.getElementById("fact");
const planetImg = document.getElementById("planetImg");
const planetIconFallback = document.getElementById("planetIconFallback");
const planetDesc = document.getElementById("planetDesc");
const planetName = document.getElementById("planetName");

const worlds = {
  Earth: {
    ratio: 1,
    icon: "🌍",
    img: "../assets/planets/earth.jpg",
    desc: "Our home world",
    fact: "Earth is the only known world with liquid water on the surface and life (so far).",
  },
  Moon: {
    ratio: 0.165,
    icon: "🌕",
    img: "../assets/planets/moon.jpg",
    desc: "Earth's natural satellite.",
    fact: "The moon is slowly moving away from the Earth by about 3.8cm each year.",
  },
  Mars: {
    ratio: 0.38,
    icon: "🔴",
    img: "../assets/planets/mars.jpg",
    desc: "The red planet, cold and dusty.",
    fact: "Mars has the tallest volcano in the solar system: Olympus Mons.",
  },
  Venus: {
    ratio: 0.91,
    icon: "🟠",
    img: "../assets/planets/venus.jpg",
    desc: "Hot, cloudy, and very hostile.",
    fact: "A day on Venus is longer than its years. It rotates extremely slowly.",
  },
  Jupiter: {
    ratio: 2.34,
    icon: "🟤",
    img: "../assets/planets/jupiter.jpg",
    desc: "A gas giant with massive storms.",
    fact: "Jupiter is a gas giant. You would not stand on a solid surface like you would Earth.",
  },
  Saturn: {
    ratio: 1.08,
    icon: "🪐",
    img: "../assets/planets/saturn.jpg",
    desc: "A gas giant with an average radius about 9 times that of Earth",
    fact: "Saturn is only slightly smaller than Jupiter in size, but has just about 30% of Jupiter's mass. Like Jupiter, it has no solid surface.",
  },
};

function getSelectedWorldName() {
  return worldSelect.value;
}

function updateWorldUI(worldName) {
  const data = worlds[worldName];
  if (!data) return;

  planetName.textContent = worldName;
  planetDesc.textContent = data.desc;
  factBox.textContent = data.fact;

  // Set fallback emoji
  planetIconFallback.textContent = data.icon;

  // Try to load the real image
  planetImg.src = data.img;

  // Show fallback until image loads
  planetIconFallback.style.display = "block";
  planetImg.style.display = "none";

  planetImg.onload = () => {
    planetImg.style.display = "block";
    planetIconFallback.style.display = "none";
  };

  planetImg.onerror = () => {
    planetImg.style.display = "none";
    planetIconFallback.style.display = "block";
  };
}

function calculateWeight() {
  const earthWeight = Number(weightInput.value);
  const worldName = getSelectedWorldName();

  const worldData = worlds[worldName];
  if (!worldData) {
    result.textContent = "Unknown world selected.";
    return;
  }

  updateWorldUI(worldName);

  if (!earthWeight || earthWeight <= 0) {
    result.textContent = "Please enter a valid weight above 0.";
    return;
  }

  const newWeight = earthWeight * worldData.ratio;
  result.textContent = `On ${worldName}, you would weigh about ${newWeight.toFixed(1)} kg.`;
}

calcBtn.addEventListener("click", calculateWeight);

worldSelect.addEventListener("change", calculateWeight);

weightInput.addEventListener("input", calculateWeight);

calculateWeight();
