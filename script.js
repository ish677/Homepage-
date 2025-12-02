// --- Section 1: Songs ---
const songs = {
  1: { embed: "https://open.spotify.com/embed/track/6Qyc6fS4DsZjB2mRW9DsQs", msg: "Being truly seen gives courage to shine as you are."},
  2: { embed: "https://open.spotify.com/embed/track/3e0wYnFxkqinmtXebYPMSt", msg: "Even the smallest light can guide someone through the darkest night.  " },
  3: { embed: "https://open.spotify.com/embed/track/1UPB5rYJ0bzn6mNSoAHrZC", msg: "No matter the distance, love remains a safe place to return to.  " },
  4: { embed: "https://open.spotify.com/embed/track/0IuKNTVgn9vapnGU44natX", msg: "Hope grows where your heart feels safe.  " },
  5: { embed: "https://open.spotify.com/embed/track/0Qra8Ps4tJAZPqRXyehCjc", msg: "Even when love fades, heaven knows the heart still remembers.  " },
  6: { embed: "https://open.spotify.com/embed/track/1NopgVCMVhCKIm64tF7auX", msg: "A smile can hold the power to heal quiet pain. " },
  7: { embed: "https://open.spotify.com/embed/track/6wdCelHrPh7UfliNjwRTUv", msg: "Letting go is part of growing new seasons that always arrive.  " },
  8: { embed: "https://open.spotify.com/embed/track/5pvlSx0s2w3nKuyfrFnYBZ", msg: "True love touches the soul in ways words cannot reach." },
  9: { embed: "https://open.spotify.com/embed/track/4B3RmT3cGvh8By3WY9pbIx", msg: "Falling doesn’t define you, rising shows your strength." },
  10:{ embed: "https://open.spotify.com/embed/track/3ZffCQKLFLUvYM59XKLbVm", msg: "‎Every ending makes room for a brighter beginning. " }
};

const songButtonsDiv = document.getElementById('songButtons');
const songOutputDiv = document.getElementById('songOutput');

for(let i=1; i<=10; i++){
  const btn = document.createElement('button');
  btn.textContent = i;
  btn.onclick = () => {
    const s = songs[i];
    songOutputDiv.innerHTML = `
      <iframe width="300" height="170" src="${s.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <p>${s.msg}</p>
    `;
  };
  songButtonsDiv.appendChild(btn);
}

// --- Section 3: Anonymous Rant ---
function releaseRant(){
  const rant = document.getElementById('rantText');
  rant.value = "";
  alert("Your thoughts are released 🌤️");
}

// --- Section 4: Comforting Words ---
const comforts = [
"you are doing your best, even on the days it doesn’t feel like it.",
"Someone out there is grateful you exist.",
"You are allowed to slow down and breathe.",
"Your feelings are real, and they deserve to be heard.",
"You are allowed to feel proud of the small steps you do.",
"Someone out there cares more than you know.",
"You don’t have to pretend to be strong all the time.",
"It’s okay if today feels heavy.",
"Your softness is not a weakness.",
"You are worthy of gentle love.",
"You haven’t disappointed life, life is just heavy sometimes.",
"You haven’t lost yourself, you’re just finding a new version.", "You are stronger than the pain that tried to break you.",
"Healing takes time, and you are allowed every moment of it.",
"You don’t have to be perfect to be loved.",
"Your tears are not a sign of failure.",
"You deserve peace, even if you’re still learning how to find it.",
"You have a heart that keeps going, and that is beautiful.",
"It’s okay to ask for help when your hands feel tired.",
"You are worthy of kindness, especially from yourself.",
"The world is better because you’re in it.",
"You are allowed to let go of what weighs you down.",
"You deserve to feel safe inside your own mind.", "You are not behind, you are on your own path.",
"It’s okay to begin again, as many times as you need.",
"You deserve to feel seen and held.",
"Brighter days are still waiting for you.",
"You are allowed to outgrow the pain.",
"Your scars tell a story of survival, not shame.",
"You are enough, more than enough.",
"You don’t have to carry everything at once.",
"You are allowed to rest without earning it.",
"Your heart is more resilient than you think.",
"You deserve a love that feels like safety.",
"You are allowed to heal at your own pace.",
"You bring light, even on your darkest days.",
"You are not broken, you are becoming.",
"You deserve moments of quiet joy.",
"You are held, even when you cannot feel it.", "You are worthy of a tomorrow filled with hope."
];
let currentComfort = 0;
function nextComfort(){
  document.getElementById('comfortText').textContent = comforts[currentComfort];
  currentComfort = (currentComfort +1) % comforts.length;
}

// Initialize first comfort message
nextComfort();

// --- Floating Bubbles Animation ---
const bubblesContainer = document.getElementById('bubbles');

function createBubble(){
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = Math.random() * window.innerWidth + 'px';
  bubble.style.width = bubble.style.height = (10 + Math.random() * 20) + 'px';
  bubble.style.animationDuration = (8 + Math.random() * 6) + 's';
  bubblesContainer.appendChild(bubble);

  setTimeout(()=> {
    bubblesContainer.removeChild(bubble);
  }, 14000);
}

setInterval(createBubble, 400);
