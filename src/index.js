import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

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
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="Javascript" emoji="💪" color="red" />
      <Skill skill="Tailwind" emoji="👶" color="green" />
      <Skill skill="HTML+CSS" emoji="👶" color="pink" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
