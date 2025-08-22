import {Link} from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-center gap-8 min-h-[70vh]">
                <div className="flex-1 max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#6D6594] mb-6 leading-tight">
                        Abrace o Futuro <br /> da Educação com <br /> a Tecnologia.
                    </h1>
                    <p className="text-lg text-[#A1A0B5] mb-8">
                        Saiba como a tecnologia pode ajudar massivamente a transformar a educação.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link to="/beneficios" className="px-7 py-3 bg-[#6D6594] text-white rounded-full font-medium shadow hover:bg-[#574e7f] transition flex items-center gap-2 justify-center">
                            Descubra os benefícios
                            <span className="ml-1">&#8594;</span>
                        </Link>
                        <Link to="/ferramentas" className="px-7 py-3 bg-white border border-[#E3E2EC] text-[#6D6594] rounded-full font-medium shadow hover:bg-[#F4F4FB] transition flex items-center gap-2 justify-center">
                            Explore as Ferramentas
                            <span className="ml-1">&#8594;</span>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="grid grid-cols-3 grid-rows-3 gap-4 w-[280px] sm:w-[380px] h-[220px] sm:h-[300px]">
                        <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow">
                            <img
                                src="https://iili.io/KHREzhu.md.jpg"
                                alt="Crianças usando tablet"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow">
                            <img
                                src="https://iili.io/KHRExIe.md.png"
                                alt="Mãos com robô"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow">
                            <img
                                src="https://iili.io/KHREq22.md.jpg"
                                alt="Sala com tablets"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow">
                            <img
                                src="https://iili.io/KHREILb.md.png"
                                alt="Menino com robô"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden shadow">
                            <img
                                src="https://iili.io/KHREnp9.md.png"
                                alt="Aluna usando laptop"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        <section className="w-full bg-[#F5F5F8] py-12">
            <div className="max-w-4/6 mx-auto px-4 sm:px-8 md:px-12 text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#6D6594] mb-4">Sobre o projeto</h2>
                <p className="text-[#6D6594] text-lg sm:text-xl mb-6">
                    O <span className="font-bold">Techno & Edu</span> nasceu com a missão de ser um portal confiável e acessível para todos que desejam compreender o papel positivo da tecnologia na educação. Nosso propósito é mostrar que, longe de ser um obstáculo, a tecnologia pode ser uma grande aliada de educadores, estudantes, gestores e famílias, tornando o aprendizado mais envolvente, eficiente e conectado ao nosso tempo.
                </p>
                <p className="text-[#6D6594] text-base sm:text-lg mb-6">
                    Ao explorar o site, você encontrará conteúdos elaborados para desmistificar o uso da tecnologia na educação, sempre destacando seu potencial como facilitadora de novas experiências de ensino e aprendizagem:
                </p>
                <ul className="text-[#6D6594] text-base sm:text-lg mb-8 list-disc list-inside pl-4">
                    <li><span className="font-semibold">Benefícios:</span> Descubra, com dados e exemplos, como a tecnologia pode ampliar horizontes, personalizar trajetórias de aprendizagem e preparar os alunos para os desafios do futuro.</li>
                    <li><span className="font-semibold">Ferramentas digitais:</span> Conheça plataformas, aplicativos e recursos acessíveis, acompanhados de tutoriais e dicas simples para aplicação prática em sala de aula, projetos ou estudos independentes.</li>
                    <li><span className="font-semibold">Registros e estudos de caso:</span> Inspire-se com experiências reais de escolas, professores e alunos que usaram a tecnologia como aliada para superar desafios e conquistar resultados concretos.</li>
                    <li><span className="font-semibold">Blog:</span> Fique por dentro de artigos sobre tendências, metodologias inovadoras, gamificação, formação docente, segurança digital, inclusão e outros temas essenciais para a educação contemporânea.</li>
                    <li><span className="font-semibold">Contato:</span> Utilize nosso canal para tirar dúvidas, compartilhar sugestões e experiências, ou buscar apoio para iniciativas educacionais. Este espaço é feito para o diálogo e a construção coletiva.</li>
                </ul>
                <p className="text-[#6D6594] text-base sm:text-lg mb-4">
                    <span className="font-bold">Techno & Edu</span> foi desenvolvido para ser simples, acessível e útil para todos, independentemente do nível de familiaridade com tecnologia. Cada seção valoriza a clareza, os exemplos práticos e o acesso direto aos recursos, tornando a navegação fácil e intuitiva.
                </p>
                <p className="text-[#6D6594] text-base sm:text-lg">
                    Nosso compromisso é fortalecer uma educação mais inclusiva, inovadora e alinhada às necessidades do século XXI, mostrando que a tecnologia pode — e deve — ser uma parceira no desenvolvimento de novas possibilidades educativas. Navegue, experimente, inspire-se e faça parte dessa transformação!
                </p>
            </div>
        </section>
        </section>
    );
}
