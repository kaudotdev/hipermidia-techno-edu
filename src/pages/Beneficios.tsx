import Navbar from "../components/Navbar";
import BeneficiosSection from "../components/BeneficiosSection";
import Footer from "../components/Footer";

export default function Beneficios() {
    return (
        <div className="bg-[#FCFCFE] min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <BeneficiosSection />
            </main>
            <Footer />
        </div>
    );
}