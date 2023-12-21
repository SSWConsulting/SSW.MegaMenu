// import { MegaMenuLayout } from "../lib/components";
import { MegaMenuLayout } from "../dist/ssw-megamenu";
import { PhoneButton } from "../lib/components/PhoneButton";

function App() {
  return (
    <>
      <header className="App-header">Test MegaMenu</header>
      <MegaMenuLayout menuBarItems={[]} />
      <div>Some content</div>
    </>
  );
}

export default App;
