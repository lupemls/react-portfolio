import React from "react";
import atari from "./assets/images/atari-portal.png";
import arcade from "./assets/images/arcade-quest.png";
import day from "./assets/images/day-planner.png";
import rps from "./assets/images/rps-kombat.jpg";
import weather from "./assets/images/weather-dashboard.png";
import note from "./assets/images/note-taker.jpg";

const projects = [
  {
    name: "Atari Portal",
    image: atari,
    repo: "https://github.com/lupemls/first-project",
    deployed: "https://lupemls.github.io/first-project",
  },
  {
    name: "RPS Kombat",
    image: rps,
    repo: "https://github.com/lupemls/project-2",
    deployed: "https://still-peak-87577.herokuapp.com/",
  },
  {
    name: "Day Planner",
    image: day,
    repo: "https://github.com/lupemls/day-planner",
    deployed: "https://lupemls.github.io/day-planner",
  },
  {
    name: "Weather Dashboard",
    image: weather,
    repo: "https://github.com/lupemls/weather-dashboard",
    deployed: "https://lupemls.github.io/weather-dashboard",
  },
  {
    name: "Note Taker",
    image: note,
    repo: "https://github.com/lupemls/note-taker",
    deployed: "",
  },
  {
    name: "Arcade Quest",
    image: arcade,
    repo: "https://github.com/lupemls/arcade-quest",
    deployed: "https://nameless-plains-98133.herokuapp.com/",
  },
];

//takes the array of projects and maps them to create cards to be used in portfolio page
function Project() {
  return (
    <div>
      {projects.map((project) => {
        return (
          <div className="port-card">
            <a href={project.deployed}>
              <img src={project.image} class="img-fluid" alt="Responsive Pic" />
            </a>
            <div class="d-block p-2 text-white">
              <a class="link" href={project.repo}>
                {project.name} - Link to Repo
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
