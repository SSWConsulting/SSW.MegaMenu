// import { MegaMenuLayout } from "../lib/components";
import { useEffect, useState } from "react";
// import { MegaMenuLayout } from "../dist/ssw-megamenu";
import { NavMenuColumnGroup } from "../lib/types/megamenu";

function App() {
  const [data, setData] = useState<{ menuGroups: NavMenuColumnGroup[] } | null>(
    null,
  );

  useEffect(() => {
    console.log("mounted");
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
      <header className="App-header">Test MegaMenu</header>
      {data && (
        <div className="mx-auto max-w-7xl px-8">
          {/* <MegaMenuLayout menuBarItems={data.menuGroups} /> */}
        </div>
      )}
      <pre>
        <code>{JSON.stringify(data, null, 4)}</code>
      </pre>
    </>
  );
}

export default App;
