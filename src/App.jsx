import Header from "./components/Header";
import Pillars from "./components/Pillars";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-2">
        <Header></Header>
        <Pillars></Pillars>
      </div>
    </div>
  );
}

export default App;
