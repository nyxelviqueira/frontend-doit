import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/users/RegisterUserPage";
import { LoginPage } from "./pages/users/LoginPage";
import { MyUserPage } from "./pages/users/MyUserPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NewServicePage } from "./pages/services/NewServicePage";
import { ListServicesPage } from "./pages/services/ServicesListPage";
import { ProfilePage } from "./pages/users/ProfilePage";
import { ServicePage } from "./pages/services/ServicePage";
import { FilterServicesPage } from "./components/filterCategories/FilterServicesPage";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<MyUserPage />} />
        <Route path="/users/:id" element={<ProfilePage />} />
        <Route path="/newservice" element={<NewServicePage />} />
        <Route path="/services" element={<ListServicesPage />} />

        <Route
          path="/services/category/:category"
          element={<FilterServicesPage />}
        />

        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
