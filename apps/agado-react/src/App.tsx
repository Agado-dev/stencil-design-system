import "./App.css";
import reactLogo from "./assets/react.svg";

import { AdButton, AdLink } from "@agado/react";
import "@agado/components/design-tokens.css";
import viteLogo from "/vite.svg";

function App() {
  function handleLongPress(_event: CustomEvent<void>) {
    console.log("Button pressed and held");
  }
  return (
    <>
      <div>
        <header>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>React Stencil POC</h1>
        </header>
      </div>
      <h1>Vite + React + Stencil</h1>
      <div className="card">
        <AdButton
          variant="primary"
          label="Click me"
          onClick={() => console.log("Button clicked")}
          onPressAndHold={handleLongPress}
        ></AdButton>
      </div>
      <div className="card">
        <AdLink href="https://agado.dev" text="Agado" type="external"></AdLink>
      </div>
    </>
  );
}

export default App;
