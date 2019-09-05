import React, { useState, useEffect } from "react"
import Data from "./data.json"
import Pic1 from "./images/step_0.png"
import Pic2 from "./images/step_1.png"
import Pic3 from "./images/step_2.png"
import Pic4 from "./images/step_3.png"
import Pic5 from "./images/step_4.png"
import Pic6 from "./images/step_5.png"
import Pic7 from "./images/step_6.png"
import Pic8 from "./images/step_7.png"

const App = () => {
  const randomNumber = Math.floor(Math.random() * Data.words.length)
  // const loseText = "Boo! You Lose!"
  // const winText = "Yay! You win"

  const [randomWord, setRandomWord] = useState(
    Data.words[randomNumber].split("")
  )
  const [showLetter, setShowLetter] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(true)

  const checkLetters = e => {
    const letter = e.target.textContent
    console.log(letter)
    if (randomWord.includes(letter)) {
      console.log(true)
      setShowLetter(true)
      setButtonClicked(false)
    } else {
      console.log(false)
      setButtonClicked(false)
    }
  }

  return (
    <>
      <nav>
        <h1 className="page-title">Let's Build a Snowman!</h1>
      </nav>
      <main>
        <section className="snowman-section">Snowman goes here!</section>
        <section className="answer-display">
          {randomWord.map((item, i) => {
            if (showLetter === true) {
              return (
                <section className="space" key={i}>
                  {item}
                </section>
              )
            } else {
              return (
                <section className="space" key={i}>
                  {}
                </section>
              )
            }
          })}
        </section>
        <h3>Guess a letter!</h3>
        <section className="user-guess">
          {Data.letters.map(item => {
            return (
              <button
                key={item}
                // disabled={!buttonClicked}
                onClick={checkLetters}
                className="letter-button"
              >
                {item}
              </button>
            )
          })}
        </section>
      </main>
    </>
  )
}

export default App
