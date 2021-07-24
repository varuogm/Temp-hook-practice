import React, { useState, useEffect } from "react";
import BackIMg from "../src/flower.jpg";
import IMg from "../src/i2xmhay.jpg";
//import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function App() {
  var name = "gourav";
  var place = "Kota";

  //const { width, height } = useWindowSize();

  const [Redlikes, setRedLikes] = useState(10);
  const [Bluelikes, setBlueLikes] = useState(10);

  function likeClickHandlerRed() {
    <Confetti />;
    setRedLikes(Redlikes + 1000);
  }
  function likeClickHandlerBlue() {
    setBlueLikes(Bluelikes - 10);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${BackIMg})`,
        height: "100vh",
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
    </div>
  );
}

/*var name, place;
  useEffect(() => {
    name = prompt("enter your name");
    console.log("prommt chalaa 1 ");
    place = prompt("your fav pllce");
    console.log("prommt chalaa 2");
  }, [name, place]);
*/
