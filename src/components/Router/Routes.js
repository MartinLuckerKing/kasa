import { Routes, Route } from "react-router-dom";
import { Header } from './../Layout/Header';
import { Footer } from './../Layout/Footer';
import { Banner } from '../Home/Banner';
import { DisplayCard } from '../Home/DisplayCard';
import { LogementDetails } from '../LogementDetails/LogementDetails';
 
export function AppRoutes() {
  return (
    <>
    <div>
      <Header />
      <main className="centerApp">
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <DisplayCard />
            </>
          }/>
          <Route path="/logement/:id" element={
            <>
              <LogementDetails />
            </>
          }/>
        </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}