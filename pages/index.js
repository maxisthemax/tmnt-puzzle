import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import dynamic from "next/dynamic";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const SlidingTilePuzzle = dynamic(() => import("react-sliding-tile-puzzle"), {
  ssr: false,
});

export default function Home() {
  const [newPuzzle, setNewPuzzle] = useState();
  const handleClickNewPuzzle = () => {
    setNewPuzzle(!newPuzzle);
  };

  return (
    <div style={{ width: "100%", textAlign: "-webkit-center" }}>
      <h1 style={{ fontSize: "40px", color: "#3f8228" }}>TMNT PUZZLE</h1>
      <div>
        <button
          onClick={handleClickNewPuzzle}
          style={{
            height: "30px",
            fontSize: "40px",
            minWidth: "100px",
            margin: "20px",
            background: "#95d44a",
            color: "#3f8228",
          }}
        >
          <h3>Reset</h3>
        </button>
      </div>
      <div style={{ width: "100%" }}>
        <SlidingTilePuzzle
          newPuzzle={newPuzzle}
          isOver={() => {
            console.log("12321npm");
          }}
          maxIterations={300}
          image="/1.png"
          size={1000}
        />
      </div>
    </div>
  );
}
