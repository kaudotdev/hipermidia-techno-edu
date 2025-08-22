import {useState} from "react";

export default function ContatoSection() {
    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

    return (
        <section className="w-full bg-[#F5F5F8] min-h-screen flex items-center justify-center py-12">
            <div className="bg-white max-w-3xl w-full mx-2 sm:mx-4 rounded-3xl shadow px-4 sm:px-8 py-6 sm:py-10 flex flex-col">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#6D6594] text-center mb-2">Fale conosco</h1>
                <p className="text-[#A1A0B5] text-center text-base sm:text-lg mb-6 sm:mb-8">
                    Se você tem alguma dúvida, sugestão ou quer saber mais sobre como a tecnologia pode transformar sua escola, entre em contato conosco.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                    <form className="flex-1 bg-[#F4F2FB] rounded-2xl p-4 sm:p-6 flex flex-col gap-2 sm:gap-3">
                        <h2 className="font-bold text-[#6D6594] text-base sm:text-lg mb-1 sm:mb-2">Envie uma mensagem</h2>
                        <label className="text-[#6D6594] text-xs sm:text-sm font-medium" htmlFor="nome">Nome completo:</label>
                        <input
                            id="nome"
                            type="text"
                            className="rounded-md border border-[#E3E2EC] px-2 sm:px-3 py-2 bg-white focus:outline-[#6D6594] text-[#39325C]"
                            value={form.nome}
                            onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                        />
                        <label className="text-[#6D6594] text-xs sm:text-sm font-medium" htmlFor="email">Endereço de Email:</label>
                        <input
                            id="email"
                            type="email"
                            className="rounded-md border border-[#E3E2EC] px-2 sm:px-3 py-2 bg-white focus:outline-[#6D6594] text-[#39325C]"
                            value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        />
                        <label className="text-[#6D6594] text-xs sm:text-sm font-medium" htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            rows={5}
                            className="rounded-md border border-[#E3E2EC] px-2 sm:px-3 py-2 bg-white focus:outline-[#6D6594] text-[#39325C]"
                            value={form.mensagem}
                            onChange={e => setForm(f => ({ ...f, mensagem: e.target.value }))}
                        />
                        <button
                            type="submit"
                            className="bg-[#6D6594] mt-2 text-white rounded-md py-2 font-semibold hover:bg-[#574e7f] transition"
                            onClick={e => e.preventDefault()}
                        >
                            Enviar
                        </button>
                    </form>
                    {/* Detalhes */}
                    <div className="flex-1 bg-[#F4F2FB] rounded-2xl p-4 sm:p-6 flex flex-col gap-2 sm:gap-3">
                        <h2 className="font-bold text-[#6D6594] text-base sm:text-lg mb-1 sm:mb-2">Nossos detalhes</h2>
                        <div className="text-[#6D6594] text-sm mb-2">
                            <span className="font-semibold">E-mail:</span> contato@edutech.com.br<br />
                            <span className="font-semibold">Telefone:</span> (71) 94002-8922<br />
                            <span className="font-semibold">Endereço:</span> R. Francisco Drumond, 123 - Centro, Camaçari - BA<br />
                            <span className="font-semibold">CEP:</span> 42800-500
                        </div>
                        <div className="rounded-xl overflow-hidden border border-[#E3E2EC]">
                            <iframe
                                title="Localização"
                                width="100%"
                                height="150"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps?q=R.%20Francisco%20Drumond%2C%20123%20-%20Centro%2C%20Cama%C3%A7ari%20-%20BA&output=embed"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}