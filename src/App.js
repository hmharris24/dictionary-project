import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This website was coded by{" "}
            <a href="https://www.linkedin.com/in/holly-meyers/">Holly Meyers</a>{" "}
            and is{" "}
            <a href="https://github.com/hmharris24/dictionary-project">
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a href="https://subtle-mermaid-e919ba.netlify.app/">
              hosted on Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
