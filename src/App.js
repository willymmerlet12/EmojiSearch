import React, { useState } from "react";
import "./App.css";
import emojiList from "./assets/data.json";
import Footer from "./components/Footer";
import Line from "./components/Line";
import Search from "./components/Search";

function App() {
  const [results, setResults] = useState(emojiList.slice(0, 20));
  const [style, setStyle] = useState({ display: "none" });
  // Une fonction qui va être appelée à chaque modification de l'input Search
  const handleChange = (event) => {
    // console.log(event.target.value);

    // Autres méthodes possibles :
    // - include()
    // - filter()
    const value = event.target.value;
    const newResults = [];
    for (let i = 0; i < emojiList.length; i++) {
      if (
        emojiList[i].keywords.indexOf(value) !== -1 ||
        emojiList[i].title.indexOf(value) !== -1
      ) {
        if (newResults.length >= 20) {
          break;
        } else {
          newResults.push(emojiList[i]);
        }
      }
    }
    setResults(newResults);
  };

  return (
    <div className="container">
      <Search handleChange={handleChange} />
      {results.map((emoji, index) => {
        return <Line key={index} emoji={emoji} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
