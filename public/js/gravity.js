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
  Mercury: {
    ratio: 0.38,
    icon: "☿️",
    img: "../assets/planets/mercury.jpg",
    desc: "A small rocky world, heavily cratered like the Moon.",
    fact: "Mercury is hard to spot because it never gets far from the Sun in the sky, so it's only seen briefly near sunrise or sunset.",
  },
  Venus: {
    ratio: 0.91,
    icon: "🟠",
    img: "../assets/planets/venus.jpg",
    desc: "Hot, cloudy, and very hostile.",
    fact: "A day on Venus is longer than its year. It rotates extremely slowly.",
  },
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
  Jupiter: {
    ratio: 2.34,
    icon: "🟤",
    img: "../assets/planets/jupiter.jpg",
    desc: "A gas giant with massive storms.",
    fact: "Jupiter has no solid surface you can stand on. The gravity value is measured at the cloud tops.",
  },
  Saturn: {
    ratio: 1.08,
    icon: "🪐",
    img: "../assets/planets/saturn.jpg",
    desc: "A gas giant with an average radius about 9 times that of Earth",
    fact: "Saturn is only slightly smaller than Jupiter in size, but has just about 30% of Jupiter's mass. Like Jupiter, it has no solid surface.",
  },
  Uranus: {
    ratio: 0.89,
    icon: "⛢",
    img: "../assets/planets/uranus.jpg",
    desc: "An ice giant with a blue-green color from methane in its atmosphere.",
    fact: "Uranus spins on its side, with an extreme tilt of about 98°, giving it unusual seasons.",
  },
  Neptune: {
    ratio: 1.14,
    icon: "♆",
    img: "../assets/planets/neptune.jpg",
    desc: "A distant ice giant, deep blue and very cold.",
    fact: "Neptune's winds are some of the fastest in the solar system, and its gravity is slightly stronger than Earth's.",
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
