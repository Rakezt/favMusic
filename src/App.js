import React, { useState } from "react";
import "./styles.css";

const topSongs = {
  pop: [
    { artist: "Imagine Dragon", song: "Bad Liar" },
    { artist: "Ed Sheeran", song: "Perfect" },
    { artist: "Ellie Goulding", song: "Sixteen" },
    { artist: "Ed Sheeran", song: "Beautiful People" },
    { artist: "Sigrid", song: "Sucker Punch" }
  ],
  rock: [
    { artist: "Nirvana", song: "Smells like teen Spirit" },
    { artist: "Scorpions", song: "Rock You Like A Hurricane" },
    { artist: "Atreyu", song: "Super Hero" },
    { artist: "A7X", song: "Sieze the Day" },
    { artist: "Led Zeplin", song: "Immigrant Song" }
  ],
  punk: [
    { artist: "The Maine", song: "Sticky" },
    { artist: "The Plot in You", song: "Feel Nothing" },
    { artist: "The Maine", song: "English Girls" },
    { artist: "The Plot in You", song: "Disposable fix" },
    { artist: "Paramore", song: "Ain't it fun" }
  ],
  indie: [
    { artist: "The 1975", song: "Robbers" },

    { artist: "The Neighbourhood", song: "Sweather Weather" },
    { artist: "The 1975", song: "Somebody Else" },
    { artist: "Foster the people", song: "Pumped u kicks" },
    { artist: "Angus & Julia Stone", song: "Chateau" }
  ]
};

export default function App() {
  var [select, setSelect] = useState("pop");
  function changeHandler(item) {
    setSelect(item);
  }

  return (
    <div className="App">
      <h1>🤘 FAVOURITE SONG</h1>
      <h2>select genre to find out</h2>
      <div>
        {Object.keys(topSongs).map((item) => (
          <button key={item}
            onClick={() => changeHandler(item)}
            style={{
              fontSize: "1rem",
              padding: "0.5rem",
              margin: "0.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer"
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="container container-center ">
        <ol>
          {topSongs[select].map((list) => (
            <li
              key={list.name}
              style={{ border: "1px solid grey", margin: "0.5rem" }}
            >
              <div
                style={{
                  backgroundColor: "#ebeada",
                  padding: "0.3rem",
                  margin: "0.3rem"
                }}
              >
                <span style={{ color: "red" }}>Artist</span> : {list.artist}
              </div>
              <div>
                <span
                  style={{
                    color: "green",
                    padding: "0.3rem",
                    margin: "0.3rem"
                  }}
                >
                  Song
                </span>{" "}
                : {list.song}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
