import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";


function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);