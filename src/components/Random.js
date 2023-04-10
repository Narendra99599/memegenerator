import React, { useState } from "react";
import { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";

function Random() {
  const [gif, setGif] = React.useState("");
  const [loading, setLoading] = useState(true);

  const url =
    "https://api.giphy.com/v1/gifs/random?api_key=VFLnGhjj5k7McO7WIJMzFxTqJiD1c4ys&tag=&rating=g";

  async function getData() {
    const responce = await fetch(url);
    const data = await responce.json();
    let src = data.data.images.fixed_width_still.url;
    setGif(src);
    setLoading(false);
  }

  const styles = {
    width: "60px",
    margin: "0 auto",
  };

  useEffect(() => {
    getData();
  }, []);

  function clickHandler() {
    setLoading(true);
    getData();
  }
  return (
    <div className="first__container">
      <h1>Random Gif</h1>
      {loading ? (
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={styles}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      ) : (
        <img src={gif} className="container__image"></img>
      )}
      <button onClick={clickHandler} className="btn">
        Generate
      </button>
    </div>
  );
}

export default Random;
