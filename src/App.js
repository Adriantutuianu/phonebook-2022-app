import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <Header />
      <Content Clock={Clock} />
      <Footer />
    </div>
  );
}

export default App;
