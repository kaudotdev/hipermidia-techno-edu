import Navbar from "../components/Navbar";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function Blog() {
    return (
        <div className="bg-[#FCFCFE] min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <BlogSection />
            </main>
            <Footer />
        </div>
    );
}