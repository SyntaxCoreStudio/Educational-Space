const weightInput = document.getElementById("weight");
const worldSelect = document.getElementById("world");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");
const factBox = document.getElementById("fact");
const planetIcon = document.getElementById("planetIcon");
const planetDesc = document.getElementById("planetDesc");
const planetName = document.getElementById("planetName");

const worlds = {
    Earth: {
        ratio: 1,
        icon: "🌍",
        desc: "Our home world",
        fact: "Earth is the only known world with liquid water on the surface and life (so far).",
    },
    Moon: {
        ratio: 0.165,
        icon: "🌕",
        desc: "Earth's natural satellite.",
        fact: "The moon is slowly moving away from the Earth by about 3.8cm each year.",
    },
    Mars: {
        ratio: 0.38,
        icon: "🔴",
        desc: "The red planet, cold and dusty.",
        fact: "Mars has the tallest volcano in the solar system: Olympus Mons.",
    },
    Venus: {
        ratio: 0.91,
        icon: "🟠",
        desc: "Hot, cloudy, and very hostile.",
        fact: "A day on Venus is longer than its years. It rotates extremely slowly.",
    },
    Jupiter: {
        ratio: 2.34,
        icon: "🟤",
        desc: "A gas giant with massive storms.",
        fact: "Jupiter is a gas giant. You would not stand on a solid surface like you would Earth.",
    },
};

function getSelectedWorldName() {
    return worldSelect.value;
}

function updateWorldUI(worldName) {
    const data = worlds[worldName];
    if (!data) return;

    planetIcon.textContent = data.icon;
    planetName.textContent = worldName;
    planetDesc.textContent = data.desc;
    factBox.textContent = data.fact;
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