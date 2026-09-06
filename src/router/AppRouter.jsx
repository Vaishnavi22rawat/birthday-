import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import GamePage from "../pages/Games/GamePage";
import PageDetail from "../pages/PageDetail/PageDetail";
import ThemePage from "../pages/Themes/ThemePage";
import ThemeList from "../pages/Themes/ThemeList";
import Contact from "../pages/Contact/Contact";
import ServicesPage from "../pages/Services/ServicesPage";
import BlogPage from "../pages/Blog/BlogPage";
import BlogDetail from "../pages/Blog/BlogDetail";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games-activity-for-event" element={<GamePage />} />
        <Route path="/games-activity-for-event/" element={<GamePage />} />

        <Route path="/themes" element={<ThemePage />} />
        <Route path="/themes/" element={<ThemePage />} />

        <Route path="/boys-theme-party-delhi" element={<ThemeList />} />
        <Route path="/girls-theme-party-delhi" element={<ThemeList />} />
        <Route path="/customized-theme-party-planner" element={<ThemeList />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/" element={<ServicesPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/service/" element={<ServicesPage />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/:slug" element={<PageDetail />} />
      </Routes>
    </BrowserRouter>
  );
}