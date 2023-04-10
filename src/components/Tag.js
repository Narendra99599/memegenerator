import React from "react";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";

const Tag = () => {
  const [gif, setGif] = React.useState("");
  const [loading, setLoading] = useState(true);
  const [urlData, updateUrlData] = useState("");
  const [data, updateData] = useState({
    input: "",
  });

  const url =
    `https://api.giphy.com/v1/gifs/random?api_key=VFLnGhjj5k7McO7WIJMzFxTqJiD1c4ys&tag=${urlData}&rating=g`

  async function getData() {
    console.log(url)
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
    let str = "";
    let val = data.input;
    for(let i=0; i<val.length; i++){
        if(val[i] === " ")
            str += "+"
        else
            str += val[i];
    }
    console.log(str)
    updateUrlData(str);
    getData();
  }

  function handleChange(event) {
    updateData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
    console.log(data);  
  }

  return (
    <div className="second__container">
      <h1>Tag ghify</h1>
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
      <div className="input">
        <input
          type="text"
          placeholder="enter the giffy"
          name="input"
          value={data.input}
          onChange={handleChange}
        ></input>
      </div>
      <button onClick={clickHandler} className="btn">
        Generate
      </button>
    </div>
  );
};

export default Tag;
