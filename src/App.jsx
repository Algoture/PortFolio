import Projects from "./Projects";

function App() {
  return (
    <div>
      <main>
        <p id="mainTitle" className="reveal-type">
          Hii<span className="redMain"> !</span> I'm{" "}
          <span data-value="Umesh" id="name">
            Umesh
          </span>
          <br />
        </p>
        <p id="whoIam">
          A Designer by <span className="redMain">heart </span>and a Developer
          by profession
        </p>
        <p />
      </main>
      <Projects />
    </div>
  );
}

export default App;
