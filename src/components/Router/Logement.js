import { Routes, Route } from "react-router-dom";
import Users from './Users';
import Reports from './Reports';

export function logementRoutes() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/reports" element={<Reports />} />
      {/* autres routes d'administration ici */}
    </Routes>
  );
}