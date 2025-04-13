import React, { useState, Component } from "react";

function App() {
  const msg = "Welcome to React!";
  const fruits = ["Apple", "Banana", "Cherry"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = new Date().getDay();
  const morning = new Date().getHours() < 12;

  const [rand, setRand] = useState(null);
  const [yr, setYr] = useState(2024);
  const [n, setN] = useState("");
  const [txt, setTxt] = useState("");

  const leap = (yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0;

  const prime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  const rev = txt.split("").reverse().join("");
  const pal = txt.toLowerCase() === rev.toLowerCase();

  return (
    <div style={{ padding: 10, fontFamily: "Arial" }}>
      <h1>Hello, React!</h1>
      <h2>{msg}</h2>
      <h3>Fruits:</h3>
      <ul>{fruits.map((f, i) => <li key={i}>{f}</li>)}</ul>

      <p style={{ color: "blue", fontSize: 20, fontWeight: "bold" }}>Styled message!</p>
      <p>Sum: {3 ** 2 + 4 ** 2}</p>
      <h3>{morning ? "Good Morning" : "Good Evening"}</h3>
      <p>Today is {days[day]}.</p>

      <div style={{ padding: 20 }}>
        <h1>Prime Check</h1>
        <input type="number" value={n} onChange={(e) => setN(e.target.value)} placeholder="Number" />
        {n && <p>{n} is {prime(parseInt(n)) ? "prime" : "not prime"}.</p>}

        <hr />

        <h1>Reverse & Palindrome</h1>
        <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} placeholder="Text" />
        {txt && (
          <>
            <p>Reversed: {rev}</p>
            <p>{pal ? "Palindrome" : "Not a palindrome"}.</p>
          </>
        )}
      </div>

      <button onClick={() => setRand(Math.floor(Math.random() * 100) + 1)}>Generate</button>
      {rand !== null && <p>Random: {rand}</p>}

      <p>{yr} is {leap ? "a Leap Year" : "not a Leap Year"}.</p>

      <Greet fn="Akshat" ln="MSV" />
      <Temp />
    </div>
  );
}

class Temp extends Component {
  constructor() {
    super();
    this.state = { c: "", f: "" };
  }

  toF = (e) => {
    const c = e.target.value;
    this.setState({ c, f: (c * 9 / 5 + 32).toFixed(2) });
  };

  toC = (e) => {
    const f = e.target.value;
    this.setState({ f, c: ((f - 32) * 5 / 9).toFixed(2) });
  };

  render() {
    return (
      <div>
        <input type="number" placeholder="C" value={this.state.c} onChange={this.toF} />
        <p>Celsius: {this.state.c}</p>
        <input type="number" placeholder="F" value={this.state.f} onChange={this.toC} />
        <p>Fahrenheit: {this.state.f}</p>
      </div>
    );
  }
}

class Greet extends Component {
  render() {
    return <h1>Hello, {this.props.fn} {this.props.ln}!</h1>;
  }
}

export default App;
