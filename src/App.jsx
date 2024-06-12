import { Routes , Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <div className="w-100% h-100%">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
