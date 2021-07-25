import React, { useState } from "react";
import BackIMg from "../src/flower.jpg";
import IMg from "../src/i2xmhay.jpg";
import Butterfly from "../src/butterfly.jpg";
import RealFlower from "../src/realFlower.jpg";

import Blossom from "../src/blossom.jpg";
import Farm from "../src/farm.jpg";
import Petalblossom from "../src/petalblossom.jpg";

//import useWindowSize from "react-use/lib/useWindowSize";
//import Confetti from "react-confetti";

const FriendsArr = ["Gourav", "chnadresh", "hardik", "bhanu", "yash"];

export default function App() {
  var name = "gourav";
  var place = "Kota ";

  // const { width, height } = useWindowSize();
  /*var name, place;
  useEffect(() => {
    name = prompt("enter your name");
    console.log("prommt chalaa 1 ");
    place = prompt("your fav pllce");
    console.log("prommt chalaa 2");
  }, [name, place]);
*/
  const [Redlikes, setRedLikes] = useState(10);
  const [Bluelikes, setBlueLikes] = useState(20);
  const [Input, setInput] = useState("");

  function likeClickHandlerRed() {
    setRedLikes(Redlikes + 100);
  }
  function likeClickHandlerBlue() {
    setBlueLikes(Bluelikes - 10);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${Farm})`,

        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "center",
      }}
    >
      <h2>
        hiii My name is{" "}
        <span
          style={{
            textShadow: "2px 2px 4px #fff",
            padding: "px 20px",
            background: "#CC99CC",
          }}
        >
          {"⭐  " + name + "⭐  "}
        </span>
      </h2>

      <h1>my fav place is {place}</h1>
      <div
        className="buttons-div"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "20px",
        }}
      >
        <div
          style={{
            color: "white",
            textShadow: "2px 2px 4px #000000",
            fontSize: "1.5em",
            margin: "0 auto",
          }}
        >
          One Direction
          <button style={{ margin: "20px" }} onClick={likeClickHandlerRed}>
            ❤️ are {Redlikes}
          </button>
        </div>
        <div
          style={{
            color: "white",
            textShadow: "2px 2px 4px #000000",
            fontSize: "1.5em",
            margin: "0 auto",
          }}
        >
          BTS
          <button style={{ margin: "20px" }} onClick={likeClickHandlerBlue}>
            💙 are {Bluelikes}
          </button>
        </div>
      </div>
      <hr />

      <div className="printing array">
        <h2>my friends name are</h2>

        <ul>
          {FriendsArr.map(function (item) {
            return <p>{item}</p>;
          })}
          <p> {Input}</p>
        </ul>

        <input
          type="text"
          placeholder="enter your friend name"
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <p
        style={{
          color: "white",
          textShadow: "0 0 2px #000",
          padding: "20px 20px",
          background: "linear-gradient(to top, #42275a, #734b6d)",
          //textShadow: "2px 2px 4px black",
        }}
      >
        current winner is{" "}
        {Bluelikes > Redlikes
          ? " BTS with" + Bluelikes
          : "one direction with " + Redlikes + " points"}
      </p>
    </div>
  );
}
