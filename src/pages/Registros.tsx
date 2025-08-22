import Navbar from "../components/Navbar";
import RegistrosSectionn from "../components/RegistrosSectionn.tsx";
import Footer from "../components/Footer";

export default function Registros() {
    return (
        <div className="bg-[#FCFCFE] min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <RegistrosSectionn />
            </main>
            <Footer />
        </div>
    );
}