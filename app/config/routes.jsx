import React from "react";
import ReactRouter, {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from "react-router";
import App from "../components/app.jsx";
import Details from "../components/details.jsx";

let Store = {
  students: [
    {
      id: 1,
      first_name: "Diego",
      last_name: "Villanueva",
      course: "WDi 20",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAw2AAAAJDgyMGQyMTk5LTU4NDgtNGZhMC05NzU5LWI1OWIxZGQzNDdjYQ.jpg",
      skills: ["Javascript", "CSS", "React"],
      interests: ["movies", "pubs", "travelling"]
    },
    {
      id: 2,
      first_name: "Jin",
      last_name: "Liaskos",
      course: "WDi 20",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAvTAAAAJGM2MjZlZTE2LWNiZDMtNDI4NC04ZDNjLWU0NTU4ZGZmZTc3ZQ.jpg",
      skills: ["CSS", "Graphic Design", "3d Models"],
      interests: ["restaurants", "cooking", "reading"]
    },
    {
      id: 3,
      first_name: "Kevin",
      last_name: "Li",
      course: "WDi 20",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAyAAAAAJDRiYjQyZmUzLWU4YTAtNDJkYS04YTcxLWFlMDM5ZDgwNTRmNQ.jpg",
      skills: ["React", "Javascript", "Backbone"],
      interests: ["hiking", "watching TV", "coding"]
    },
    {
      id: 4,
      first_name: "Jared",
      last_name: "Colby",
      course: "WDi 20",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/000/1db/1ba/1328749.jpg",
      skills: ["Face Recognition", "Ruby", "HTML"],
      interests: ["playing music", "running", "coding"]
    },
    {
      id: 5,
      first_name: "Hen",
      last_name: "Chow",
      course: "WDi 20",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAApvAAAAJDE2ZDMxOWViLTY0ODgtNGRiMy05YzExLTRkNzQ2M2I3Y2UyNQ.jpg",
      skills: ["Javascript", "Rails", "CSS"],
      interests: ["non profit orgs", "cakes", "coding"]
    },
    {
      id: 6,
      first_name: "Peach",
      last_name: "Tuntiwong",
      course: "WDi 20",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAnUAAAAJDQyOWE4MGE4LTVkZmQtNGZjMi1iZjVmLWE5ZDY1YTRkM2E2Nw.jpg",
      skills: ["Ruby", "HTML", "Javascript"],
      interests: ["robots", "cooking", "parties"]
    },
    {
      id: 7,
      first_name: "Peter",
      last_name: "Subotnik",
      course: "WDi 20",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/000/287/1af/340dd6e.jpg",
      skills: ["Javascript", "Backbone", "Sinatra"],
      interests: ["whiskey", "restaurants", "parties"]
    }
  ]   // close students array
}

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} students={Store.students} />
    <Route path="details/:id" component={Details} students={Store.students}/>
  </Router>
)

export default routes;
