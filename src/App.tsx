// import { MegaMenuLayout } from "../lib/components";
import { useEffect, useState } from "react";
import { MegaMenuLayout } from "../dist/ssw-megamenu";
import { PhoneButton } from "../lib/components/PhoneButton";
import { NavMenuColumnGroup } from "../lib/types/megamenu";

function App() {
  const [data, setData] = useState<{ menuGroups: NavMenuColumnGroup[] } | null>(
    null,
  );

  useEffect(() => {
    fetch("http://localhost:3000/api/get-megamenu")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <pre>
        <code>{JSON.stringify(data)}</code>
      </pre>
      <header className="App-header">Test MegaMenu</header>
      {data && (
        <div className="max-w-9xl mx-auto">
          <MegaMenuLayout menuBarItems={data.menuGroups} />
        </div>
      )}
      <div>Some content</div>
    </>
  );
}

export default App;
