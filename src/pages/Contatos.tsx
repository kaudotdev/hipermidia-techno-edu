import Navbar from "../components/Navbar";
import ContatoSection from "../components/ContatoSection";
import Footer from "../components/Footer";

export default function Contatos() {
    return (
        <div className="bg-[#FCFCFE] min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <ContatoSection />
            </main>
            <Footer />
        </div>
    );
}