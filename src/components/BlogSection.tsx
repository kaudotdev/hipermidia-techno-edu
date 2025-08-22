import { Link } from "react-router-dom";

const posts = [
    {
        title: 'Para Além do "Usar a Internet": O que é o Pensamento Computacional e por que a SBC insiste tanto nele?',
        tags: ["#SBC", "#pensamentocomputacional"],
        image: "src/assets/pensamento.png",
    },
    {
        title: "Gamificação: 5 Estratégias para Aumentar o Engajamento (que não são apenas joguinhos)",
        tags: ["#Gamificacao", "#MetodologiasAtivas", "#EngajamentoEscolar", "#EdTech"],
        image: "src/assets/gamificacao.png",
    },
    {
        title: "O Desafio da Conexão: Histórias de Escolas Rurais que Inovam Apesar da Desigualdade Digital",
        tags: ["#InclusãoDigital", "#DesigualdadeSocial", "#EducaçãoRural", "#PolíticasPúblicas"],
        image: "src/assets/inovacao.png",
    },
    {
        title: "Ferramentas Digitais Gratuitas que Todo Professor Deveria Conhecer em 2025",
        tags: ["#FerramentasDigitais", "#TecnologiaEducacional", "#SoftwareLivre", "#Professores"],
        image: "src/assets/ferramentas.png",
    },
    {
        title: '"Professor, isso é para hoje?" - A Formação Docente na Era Digital',
        tags: ["#FormaçãoDeProfessores", "#CapacitaçãoDocente", "#LetramentoDigital", "#Desafios" ],
        image: "src/assets/profs.png",
    },
    {
        title: "Privacidade em Risco: Como Proteger os Dados dos Alunos na Era das Plataformas Educacionais?",
        tags: ["#SegurançaDigital", "#LGPD", "#CidadaniaDigital", "#Privacidade"],
        image: "src/assets/seguranca.png",
    },
];

export default function BlogSection() {
    return (
        <section className="w-full bg-[#F5F5F8] min-h-screen flex items-center justify-center py-8 sm:py-12">
            <div className="bg-white max-w-5/7 sm:max-w-3/7 w-full mx-2 sm:mx-4 rounded-3xl shadow px-4 sm:px-8 py-6 sm:py-10 flex flex-col">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#6D6594] text-center mb-2">Blog</h1>
                <p className="text-[#A1A0B5] text-center text-base sm:text-lg mb-6 sm:mb-8">
                    Aqui estão pequenos <span className="font-semibold text-[#6D6594]">artigos atualizados semanalmente</span> sobre assuntos relacionados à Tecnologia na Educação.
                </p>
                <div className="flex flex-col gap-2 sm:gap-3">
                    {posts.map((post, i) => (
                        <Link
                            key={i}
                            to={
                                post.title.includes("Pensamento Computacional") ? "/artigo-pensamento-computacional" :
                                post.title.includes("Gamificação") ? "/artigo-gamificacao" :
                                post.title.includes("Inovam") ? "/artigo-inovacao" :
                                post.title.includes("Ferramentas Digitais") ? "/artigo-ferramentas-digitais" :
                                post.title.includes("Formação Docente") ? "/artigo-formacao-docente" :
                                post.title.includes("Privacidade em Risco") ? "/artigo-privacidade" :
                                "/blog"
                            }
                            className="bg-[#ECEBF3] rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex flex-col sm:flex-row gap-2 sm:gap-3 items-center hover:bg-[#E3E2EC] transition cursor-pointer"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full sm:w-24 h-24 object-cover rounded-lg mb-2 sm:mb-0"
                            />
                            <div className="flex-1 flex flex-col">
                                <span className="font-medium text-[#39325C] text-base">{post.title}</span>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {post.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="bg-[#D5D3E5] text-[#6D6594] text-xs font-medium rounded-lg px-2 py-0.5"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}