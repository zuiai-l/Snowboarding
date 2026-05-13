import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { TutorialsPage } from "@/pages/TutorialsPage";
import { EquipmentPage } from "@/pages/EquipmentPage";
import { ResortsPage } from "@/pages/ResortsPage";
import { FavoritesPage } from "@/pages/FavoritesPage";
import { TutorialDetailPage } from "@/pages/TutorialDetailPage";
import { ResortDetailPage } from "@/pages/ResortDetailPage";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/tutorials/:id" element={<TutorialDetailPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/resorts" element={<ResortsPage />} />
          <Route path="/resorts/:id" element={<ResortDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}