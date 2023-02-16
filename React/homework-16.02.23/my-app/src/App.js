import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PageContent from "./components/PageContent/PageContent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
