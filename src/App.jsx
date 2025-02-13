"use client"
import Home from "./Home";
import ScrollLinked from "./components/animation/ScrollLinked";

const App = () => {
  return (
    <div>
      <ScrollLinked />
      <div className="w-full h-full overflow-hidden">
        <Home />
      </div>
    </div>
  );
};
export default App;