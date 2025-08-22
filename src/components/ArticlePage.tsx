import React, { useState } from "react";
import { FiCopy, FiInstagram } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";

interface ArticlePageProps {
  title: string;
  image: string;
  tags?: string[];
  children: React.ReactNode;
  imageClassName?: string;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ title, image, tags, children, imageClassName }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="w-full bg-[#F5F5F8] min-h-screen flex justify-center py-6 sm:py-10">
      <div className="bg-white w-full max-w-4xl mx-2 sm:mx-4 rounded-3xl shadow px-4 sm:px-8 md:px-12 py-6 sm:py-8 flex flex-col relative">
        <img src={image} alt={title} className={`w-full h-48 sm:h-72 object-cover rounded-xl mb-4 ${imageClassName || ""}`} />
        <h1 className="text-2xl sm:text-3xl font-bold text-[#6D6594] mb-2">{title}</h1>
        <div className="flex gap-3 items-center mb-6 flex-wrap">
          <button
            className="bg-transparent hover:bg-transparent transition rounded-full p-2 flex items-center cursor-pointer"
            title="Copiar link"
            onClick={handleCopy}
            type="button"
          >
            <FiCopy size={22} color="#6D6594" />
          </button>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-transparent transition rounded-full p-2 flex items-center"
            title="Compartilhar no WhatsApp"
          >
            <RiWhatsappLine size={22} color="#6D6594" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-transparent transition rounded-full p-2 flex items-center"
            title="Instagram"
          >
            <FiInstagram size={22} color="#6D6594" />
          </a>
        </div>
        {copied && (
          <div className="fixed left-1/2 -translate-x-1/2 top-6 sm:top-10 bg-[#6D6594] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-2xl text-base sm:text-lg font-semibold z-[9999] animate-copied">
            Link copiado!
          </div>
        )}
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span key={tag} className="bg-[#D5D3E5] text-[#6D6594] text-xs font-medium rounded-lg px-2 py-0.5">{tag}</span>
            ))}
          </div>
        )}
        <div className="text-[#39325C] text-base mb-6">{children}</div>
      </div>
    </section>
  );
};

export default ArticlePage;
