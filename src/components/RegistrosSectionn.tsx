const registros = [
    {
        title: "Estudantes de Salvador assistem aulas com conteúdos digitais e chromebooks pelo projeto e-Nova Educação",
        meta: "Redação do Jornal Grande Bahia • Cultura • Abril 11, 2018",
        image: "src/assets/registro-salvador.png",
        desc: "Projeto e-NOVA aplicado no Colégio Luis Fernando Macedo, em Salvador.",
        pub: " ",
        link: "https://jornalgrandebahia.com.br/2018/04/estudantes-de-salvador-assistem-aulas-com-conteudos-digitais-e-chromebooks-pelo-projeto-e-nova-educacao/",
    },
    {
        title: "Educadoras mineiras ganham viagem à sede do Google nos EUA por práticas inovadoras na rede estadual",
        meta: "",
        image: "src/assets/registro_minas.png",
        desc: "Selecionadas pelo Programa Multiplica Plus, seis profissionais vão participar de imersão na Califórnia com tudo custeado pelo Governo de Minas e Google",
        pub: "",
        link: "https://www.educacao.mg.gov.br/educadoras-mineiras-ganham-viagem-a-sede-do-google-nos-eua-por-praticas-inovadoras-na-rede-estadual/",
    },
    {
        title: "Escola modelo em Goiás e elogia avanços tecnológicos na Educação do estado",
        meta: "Última Atualização em 19 de março de 2025 • Categoria Notícias",
        image: "src/assets/registro_goias.png",
        desc: "",
        pub: "",
        link: "https://goias.gov.br/educacao/google-for-education-visita-escola-modelo-em-goias-e-elogia-avancos-tecnologicos-na-educacao-do-estado/",
    },
    {
        title: "A MCC constrói uma nova referência para a educação inteligente no norte das Filipinas com a digitalização",
        meta: "",
        image: "src/assets/registros_filipinas.png",
        desc: "A MCC constrói uma nova referência para a educação inteligente no norte das Filipinas com a digitalização",
        pub: "",
        link: "https://e.huawei.com/br/case-studies/industries/education/mcc-new-benchmark-smart-education",
    },
];

function RegistrosSectionn() {
    return (
        <section className="w-full bg-[#F5F5F8] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-10">
                <h1 className="text-3xl sm:text-5xl font-bold text-[#6D6594] text-center mb-2 sm:mb-3">
                    Registros
                </h1>
                <p className="w-full max-w-2xl mx-auto text-base sm:text-2xl text-[#6D6594] font-semibold text-center mb-6 sm:mb-8 leading-tight break-words">
                    <span className="font-bold">Estudos de caso</span>
                    <span className="font-normal"> de situações que deram certo em que a tecnologia foi direcionada para a educação:</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    {registros.map((r, i) => (
                        <a
                            key={i}
                            href={r.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-2xl shadow-sm px-4 sm:px-8 py-4 sm:py-6 flex flex-col items-center border border-[#ecebf3] transition-all duration-500 ease-in-out hover:shadow-[0_8px_32px_0_rgba(109,101,148,0.32)] hover:z-10 hover:-translate-y-2 card-pop-anim"
                        >
                            <div className="w-full h-40 sm:h-50 rounded-xl overflow-hidden mb-2 sm:mb-3">
                                <img src={r.image} alt={r.title} className="object-cover w-full h-full"/>
                            </div>
                            <h2 className="font-bold text-lg text-[#39325C] leading-tight">{r.title}</h2>
                            {r.meta && <div className="text-xs text-[#A1A0B5]">{r.meta}</div>}
                            {r.pub && <div className="text-xs text-[#A1A0B5]">{r.pub}</div>}
                            <div className="bg-[#FCFCFE] border border-[#E3E2EC] rounded-xl px-3 py-3 text-xs text-[#6D6594] shadow-sm mt-2">
                                <strong>Resumo:</strong> {r.desc ? r.desc : "Registro de inovação e tecnologia aplicada na educação."}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default RegistrosSectionn;