import "./App.css";
import {} from "@mui/material";
import {
  Add,
  Chat,
  FavoriteRounded,
  Notifications,
  Person,
  QuestionMark,
} from "@mui/icons-material";
import MenuContainer from "./Components/MenuContainer";
import { useEffect } from "react";
import Pin from "./Components/Pin";

import Data from "./Components/Data";

function App() {
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("black"));
      this.classList.add("black");
    }

    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  return (
    <div className="App">
      <div className="menuContainer">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/pinterest-clone-c597e.appspot.com/o/pinterest-logo.png?alt=media&token=7925ba55-82d6-4172-a255-32f59c8406e4"
          alt=""
          className="logo"
        />

        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person />} />
            <MenuContainer icon={<Notifications />} />
            <MenuContainer icon={<Chat />} />
          </div>

          <div>
            <MenuContainer icon={<FavoriteRounded />} />
          </div>

          <div>
            <MenuContainer icon={<QuestionMark />} />
            <MenuContainer icon={<Add />} />
          </div>
        </div>
      </div>

      <main>
        <div className="searchBox">
          <input type="text" placeholder="Search" />
          <div className="search">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pinterest-clone-c597e.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=0a97bb0f-58ff-4e59-a004-77cf215cec87"
              alt=""
            />
          </div>
        </div>

        <div className="mainContainer">
          {Data &&
            Data.map((data) => (
              <Pin
                key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
              />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
