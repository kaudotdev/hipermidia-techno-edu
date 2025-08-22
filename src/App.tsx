import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BeneficiosSection from "./components/BeneficiosSection";
import FerramentasSection from "./components/FerramentasSection";
import RegistrosSection from "./components/RegistrosSectionn";
import BlogSection from "./components/BlogSection";
import ContatoSection from "./components/ContatoSection";
import Footer from "./components/Footer";
import ArtigoPensamentoComputacional from "./pages/ArtigoPensamentoComputacional";
import ArtigoGamificacao from "./pages/ArtigoGamificacao";
import ArtigoInovacao from "./pages/ArtigoInovacao";
import ArtigoFerramentasDigitais from "./pages/ArtigoFerramentasDigitais";
import ArtigoFormacaoDocente from "./pages/ArtigoFormacaoDocente.tsx";
import ArtigoPrivacidade from "./pages/ArtigoPrivacidade.tsx";

function AppContent() {
  const location = useLocation();
  return (
    <div className="bg-[#FCFCFE] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative z-0">
        <div key={location.pathname} className="page-fade-in bg-[#F5F5F8] min-h-[calc(100vh-80px)] pt-0">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/beneficios" element={<BeneficiosSection />} />
            <Route path="/ferramentas" element={<FerramentasSection />} />
            <Route path="/registros" element={<RegistrosSection />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/contatos" element={<ContatoSection />} />
            <Route path="/artigo-pensamento-computacional" element={<ArtigoPensamentoComputacional />} />
            <Route path="/artigo-gamificacao" element={<ArtigoGamificacao />} />
            <Route path="/artigo-inovacao" element={<ArtigoInovacao />} />
            <Route path="/artigo-ferramentas-digitais" element={<ArtigoFerramentasDigitais />} />
            <Route path="/artigo-formacao-docente" element={<ArtigoFormacaoDocente />} />
            <Route path="/artigo-privacidade" element={<ArtigoPrivacidade />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}