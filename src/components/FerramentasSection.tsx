const ferramentas = [
    {
        logo: "https://iili.io/KHRTUEF.md.png",
        title: "Padlet",
        desc: (
            <>
                Imagine um mural digital infinito. O Padlet é perfeito para organizar ideias de forma visual e colaborativa. Pode ser usado para brainstorms em grupo, criar linhas do tempo interativas, painéis de inspiração para projetos ou até mesmo um portfólio digital onde os alunos postam suas atividades.
            </>
        ),
        link: "https://padlet.com",
    },
    {
        logo: "https://iili.io/KHREcp1.png",
        title: "Google Classroom",
        desc: (
            <>
                O centro de comando da sua turma. O Classroom organiza toda a vida escolar: nele, o professor posta materiais, distribui e recolhe tarefas, aplica testes e envia avisos. Ele centraliza a comunicação e integra-se perfeitamente com outras ferramentas Google, como Docs e Drive.
            </>
        ),
        link: "https://classroom.google.com",
    },
    {
        logo: "https://iili.io/KHRTeIV.png",
        title: "Khan Academy",
        desc: (
            <>
                Uma biblioteca de aulas gratuita e de alta qualidade, com foco especial em matemática, ciências e economia. A Khan Academy oferece videoaulas curtas e exercícios práticos que permitem a cada aluno aprender no seu próprio tempo, reforçando conteúdos e superando dificuldades de forma personalizada.
            </>
        ),
        link: "https://pt.khanacademy.org",
    },
    {
        logo: "https://iili.io/KHRTvLP.md.png",
        title: "Youtube",
        desc: (
            <>
                Muito mais que entretenimento, o YouTube é uma das maiores fontes de conteúdo audiovisual educativo do mundo. Nele, você encontra desde tutoriais “faça você mesmo” e documentários completos até canais de divulgação científica e aulas de universidades renomadas. É a ferramenta perfeita para a aprendizagem visual.
            </>
        ),
        link: "https://www.youtube.com",
    },
    {
        logo: "https://iili.io/KHRTkhB.png",
        title: "Google Meet",
        desc: (
            <>
                É a sua sala de aula virtual. O Meet permite a realização de aulas ao vivo (síncronas), onde professores e alunos podem interagir por vídeo. É ideal para debates, apresentações, tirar dúvidas em tempo real, e até para convidar especialistas de qualquer lugar do mundo para uma palestra.
            </>
        ),
        link: "https://meet.google.com",
    },
    {
        logo: "https://iili.io/KHRTNmQ.png",
        title: "Udemy",
        desc: (
            <>
                Uma gigantesca universidade online para o aprendizado contínuo (lifelong learning). Tanto professores quanto alunos podem encontrar cursos sobre praticamente qualquer assunto, desde programação e design até novas metodologias de ensino. É ideal para desenvolver novas habilidades no seu próprio ritmo.
            </>
        ),
        link: "https://www.udemy.com",
    },
];

export default function FerramentasSection() {
    return (
        <section className="w-full bg-[#F5F5F8] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-10">
                <h1 className="text-3xl sm:text-5xl font-bold text-[#6D6594] text-center mb-2 sm:mb-3">
                    Ferramentas
                </h1>
                <p className="text-base sm:text-lg text-[#6D6594] font-semibold text-center mb-1">
                    Ferramentas <span className="font-normal">criadas para facilitar ou compor <br className='hidden sm:block' /> a educação como forma de aprendizagem</span>
                </p>
                <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    {ferramentas.map((f) => (
                        <a
                            key={f.title}
                            href={f.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-2xl shadow-sm px-4 sm:px-8 py-4 sm:py-6 flex flex-col items-center border border-[#ecebf3] transition-all duration-500 ease-in-out hover:shadow-[0_8px_32px_0_rgba(109,101,148,0.32)] hover:z-10 hover:-translate-y-2"
                        >
                            <img
                                src={f.logo}
                                alt={f.title}
                                className="h-24 sm:h-32 max-w-[120px] sm:max-w-[160px] mx-auto object-contain"
                            />
                            <h2 className="font-bold text-base sm:text-[1.25rem] text-[#39325C] text-center">{f.title}</h2>
                            <p className="text-[#6D6594] text-sm sm:text-[0.98rem] text-center">{f.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
