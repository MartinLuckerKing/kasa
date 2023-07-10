import "./App.scss";
import { AppRoutes } from "./components/Router/Routes";
import { Header } from "./../src/components/Layout/Header";
import { Footer } from "./../src/components/Layout/Footer";

function App() {
  return (
    <div className="App">
      <div className="App__center">
        <Header />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
