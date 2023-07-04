import { Routes, Route } from "react-router-dom";
import { Home } from './../../pages/Home/Home';
import { LogementDetails } from '../roomDetails/roomDetails';
import { About } from '../../pages/About/About'
import { Error404 } from '../../pages/Error/404'
 
export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logement/:id" element={<LogementDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}