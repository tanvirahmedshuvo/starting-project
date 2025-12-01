import reactImg from "../../assets/react-core-concepts.png";
import { useState } from "react";
import './Header.css';


const reactDescriptions = ['Fundamental','Crucial','Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


//Creating & Using a First Custom Component
export default function Header() {
  // Choose a random description once per component lifecycle (stable across re-renders)
  const [description] = useState(() => reactDescriptions[genRandomInt(reactDescriptions.length - 1)]);
  

  return (
  <header>
        <img src={reactImg} alt="React: core concepts" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      );
}