import { useState } from "react";
import { projects, skills } from "./Data";
import "./terminal.css";

const Terminal = () => {
  const [command, setCommand] = useState("");
  const [minimized, setMinimized] = useState(false);
  const [output, setOutput] = useState([
    "PS C:\\Umesh> Welcome to Umesh's Portfolio",
    'PS C:\\Umesh> Type "help" for available commands',
  ]);
  const [currentDirectory, setCurrentDirectory] = useState("C:\\Umesh");

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      processCommand(command);
      setCommand("");
    }
  };

  const processCommand = (input) => {
    let newOutput = [...output, `PS ${currentDirectory}> ${input}`];

    switch (input.toLowerCase()) {
      case "help":
        newOutput = [
          ...newOutput,
          "Available commands:",
          "cd home",
          "cd projects",
          "cd skills",
          "cd contact",
          "cls",
        ];
        break;
      case "cd home":
        newOutput = [...newOutput, "Navigating to Home..."];
        break;
      case "cd projects":
        newOutput = [...newOutput, "Navigating to Projects..."];
        setCurrentDirectory("C:\\Umesh\\projects");
        projects.forEach((project) => {
          newOutput.push(
            `- ${project.title}: ${project.description} (Live: ${project.liveLink})`
          );
        });
        break;
      case "cd skills":
        newOutput = [...newOutput, "Displaying Skills..."];
        setCurrentDirectory("C:\\Umesh\\skills");
        skills.forEach((skill) => {
          newOutput.push(`- ${skill}`);
        });
        break;
      case "cd ..":
        newOutput = [...newOutput, "Navigating up one level..."];
        setCurrentDirectory("C:\\Umesh");
        break;
      case "cd contact":
        newOutput = [...newOutput, "Showing Contact Info..."];
        break;
      case "cls":
        setOutput([]);
        setTimeout(() => setOutput([`PS ${currentDirectory}>`]), 0);
        break;
      default:
        newOutput = [
          ...newOutput,
          `'${input}' is not recognized as an internal command.`,
        ];
    }
    setOutput(newOutput);
  };

  return (
    <div id="terminalDiv">
      {minimized ? (
        <button onClick={() => setMinimized(false)} className="minimizedIcon">
          Terminal
        </button>
      ) : (
        <div className="terminalWindow">
          <div className="fakeMenu">
            <div className="fakeButtons fakeClose" />
            <div
              className="fakeButtons fakeMinimize"
              onClick={() => setMinimized(true)}
            />
            <div className="fakeButtons fakeZoom" />
          </div>
          <div className="fakeScreen">
            {output.map((line, index) => (
              <p key={index} className="terminalP">
                {line.startsWith("-") ? (
                  <span>
                    <span className="projectListing">
                      {line.split("(Live: ")[0]}
                    </span>
                    {line.includes("(Live: ") && (
                      <a
                        className="terminalLink"
                        href={line.match(/(Live: )(.+)/)[2]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (Live)
                      </a>
                    )}
                  </span>
                ) : (
                  line
                )}
              </p>
            ))}
            <div className="type">
              <p  className="terminalP">{`PS ${currentDirectory}>`}</p>&nbsp;
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleCommand}
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Terminal;
