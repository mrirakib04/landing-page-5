import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Pillars from "./components/Pillars";
import Vision from "./components/Vision";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-2">
        <Header></Header>
        <Pillars></Pillars>
        <Vision></Vision>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
