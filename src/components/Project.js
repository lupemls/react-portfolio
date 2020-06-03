import React from "react";
import images from "../../public/assets/images";

const projects = [
  {
    name: "Atari Portal",
    image: "images/atari-portal",
    repo: "https://github.com/lupemls/first-project",
    deployed: "https://lupemls.github.io/first-project",
  },
  {
    name: "RPS Kombat",
    image: "images/rps-kombat.jpg",
    repo: "https://github.com/lupemls/project-2",
    deployed: "https://still-peak-87577.herokuapp.com/",
  },
  {
    name: "Day Planner",
    image: "images/day-planner.png",
    repo: "https://github.com/lupemls/day-planner",
    deployed: "https://lupemls.github.io/day-planner",
  },
  {
    name: "Weather Dashboard",
    image: "images/weather-dashboard.png",
    repo: "https://github.com/lupemls/weather-dashboard",
    deployed: "https://lupemls.github.io/weather-dashboard",
  },
  {
    name: "Note Taker",
    image: "images/note-taker.jpg",
    repo: "https://github.com/lupemls/note-taker",
    deployed: "",
  },
  {
    name: "Arcade Quest",
    image: "images/arcade-quest.png",
    repo: "https://github.com/lupemls/arcade-quest",
    deployed: "https://nameless-plains-98133.herokuapp.com/",
  },
];

function Project() {
    return (
        <div>
            { projects.map((project) => {
                <div class="col-6">
                    <a href={ project.deployed }>
                        <img src={ project.image } class="img-fluid" alt="Responsive image"/>
                    </a>
                    <div class="d-block p-2 text-white">
                        <a class="link" href={ project.repo}>{ project.name }  -  Link to Repo</a>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Project;