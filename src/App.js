import { useState } from "react";
import Content from "./content";
import Sidebar from "./sidebar";
import ContextBtn from "./context/contextBtn";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [shawMenu, setShawMenu] = useState(false);
  return (
    <BrowserRouter>
      <row>
        <ContextBtn.Provider value={{ shawMenu, setShawMenu }}>
          <Sidebar />
          <Content />
        </ContextBtn.Provider>
      </row>
    </BrowserRouter>
  );
}

export default App;
