import Footer from "./components/Footer";
import Header from "./components/Header";
import Pillars from "./components/Pillars";
import Vision from "./components/Vision";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-2">
        <Header></Header>
        <Pillars></Pillars>
        <Vision></Vision>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
