import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and Github",
    level: "Intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Data Structures",
    level: "advanced",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div className="card">
      <ProfilePhoto />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function ProfilePhoto() {
  return (
    <div className="ProfilePhoto">
      <img src="profilePic.jpg" alt="profile_photo"></img>
    </div>
  );
}
function Intro() {
  return (
    <div className="intro">
      <h1>Haripriya</h1>
      <p>
        I am currently a student at the National Institute of Agartala, pursuing
        MCA in my 2nd semester of the 1st year. My academic journey, coupled
        with hands-on experience, has equipped me with a strong foundation in
        computer applications.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="SkillList">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* <span>
        {level === "advanced" && "🚀"}
        {level === "beginner" && "👶🏻"}
        {level === "intermediate" && "👍"}
      </span> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
