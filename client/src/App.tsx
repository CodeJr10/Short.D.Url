import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-(--color-background)">
      <Navbar />
      <div className="header">
        <h1
          className="text-4xl font-bold mb-4 text-(--color-primary)"
          id="hero-header"
        >
          Shorten long URLs into simple, shareable links in seconds
        </h1>
        <p className="">
          Why struggle with long links when you can conquer them? Compress your
          URLs, chart your course, and let every click feel like discovering
          hidden treasure on the Grand Line.
        </p>
      </div>

      <div className="link-sh-section"></div>
    </div>
  );
}

export default App;
