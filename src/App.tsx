import React from "react";
import { MegaMenuLayout } from "../lib/components";

function App() {
  return (
    <>
      <header>Test MegaMenu</header>
      <div className="mx-auto max-w-7xl px-8">
        <MegaMenuLayout
          title="Rules"
          subtitle="Secret ingredients to quality software"
        />
      </div>
    </>
  );
}

export default App;
