import { Routes, Route } from "react-router-dom";
import { Header } from './../Layout/Header';
import { Footer } from './../Layout/Footer';
import { Banner } from '../Home/Banner';
import { Card } from '../Home/Card';
import { DisplayCard } from '../Home/DisplayCard';
 
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
        </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}