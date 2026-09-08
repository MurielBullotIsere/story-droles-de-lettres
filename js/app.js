const stories = [
  { title: "Le Petit Prince", author: "Saint-Exupéry", summary: "Un aviateur rencontre un enfant venu d'une autre planète." },
  { title: "La Métamorphose", author: "Kafka", summary: "Gregor Samsa se réveille transformé en insecte." },
  { title: "Le Horla", author: "Maupassant", summary: "Un homme se croit hanté par une présence invisible." },
  { title: "La Parure", author: "Maupassant", summary: "Un collier emprunté fait basculer toute une vie." },
  { title: "Le Chat noir", author: "Poe", summary: "Un homme est poursuivi par la culpabilité d'un meurtre." }
];

const list = document.getElementById("story-list");

for (let i = 0; i < stories.length; i++) {
  const story = stories[i];

  const li = document.createElement("li");
  li.className = "story-card";

  li.innerHTML = `
    <article>
      <h3>${story.title}</h3>
      <p class="story-author">Par ${story.author}</p>
      <p class="story-summary">${story.summary}</p>
    </article>
  `;

  list.appendChild(li);
}