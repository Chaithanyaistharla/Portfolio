import { featuredProjects, projectTags } from "../data/projects-config.js";

const username = "Chaithanyaistharla";
const container = document.querySelector(".project-grid");

let allProjects = [];

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    allProjects = repos
      .filter(repo => !repo.fork)
      .map(repo => ({
        name: repo.name,
        description: repo.description || "Design & Web Project",
        preview: `https://${username}.github.io/${repo.name}`,
        tags: projectTags[repo.name] || []
      }));

    render("all");
    setupFilters();
  });

function render(filter) {
  container.innerHTML = "";

  const sorted = allProjects.sort((a, b) =>
    featuredProjects.includes(b.name) - featuredProjects.includes(a.name)
  );

  sorted.forEach(p => {
    if (filter !== "all" && !p.tags.includes(filter)) return;

    const card = document.createElement("div");
    card.className = `project-card ${featuredProjects.includes(p.name) ? "featured" : ""}`;
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <a href="${p.preview}" target="_blank">View Live UI →</a>
    `;
    container.appendChild(card);
  });
}

function setupFilters() {
  document.querySelectorAll(".filters button").forEach(btn => {
    btn.onclick = () => {
      document.querySelector(".filters .active").classList.remove("active");
      btn.classList.add("active");
      render(btn.dataset.filter);
    };
  });
}
