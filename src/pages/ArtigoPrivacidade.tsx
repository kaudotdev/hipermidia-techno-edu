import ArticlePage from "../components/ArticlePage";
import React from "react";

const ArtigoPrivacidade: React.FC = () => (
  <ArticlePage
    title="Privacidade em Risco: Como Proteger os Dados dos Alunos na Era das Plataformas Educacionais?"
    image="src/assets/seguranca.png"
    tags={["#SegurançaDigital", "#LGPD", "#CidadaniaDigital", "#Privacidade"]}
  >
    <div className="text-base text-justify text-[#403D5C] space-y-5">
      <p>
        Ao cadastrar uma turma em um novo aplicativo educacional ou plataforma online, paramos para ler os termos de
        serviço? Sabemos quais dados dos nossos alunos estão sendo coletados e para quê? Na corrida para digitalizar a
        educação, a <b>privacidade de crianças e adolescentes</b> muitas vezes fica em segundo plano.
      </p>

      <p>
        Com a vigência da <b>Lei Geral de Proteção de Dados (LGPD)</b> no Brasil, escolas, professores e famílias
        precisam estar mais atentos do que nunca. Dados como nome, idade, desempenho acadêmico e até mesmo o
        comportamento online dos alunos são informações extremamente valiosas e, se mal utilizados, podem expô-los a
        riscos reais.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold">Como criar um ambiente digital mais seguro?</h3>

      <ol className="list-decimal list-inside pl-4 space-y-2">
        <li>
          <b>Para Escolas:</b> É fundamental criar uma <b>política clara de uso de tecnologia</b>. Antes de adotar uma
          nova ferramenta, a gestão deve avaliar sua política de privacidade e garantir que ela esteja em conformidade
          com a LGPD. Dê preferência a plataformas que se comprometem a não usar os dados dos alunos para fins
          comerciais.
          <ul className="list-disc pl-6">
            <li>Inclua formação continuada para os educadores sobre segurança de dados.</li>
            <li>Exija contratos claros com fornecedores, detalhando uso, armazenamento e exclusão dos dados.</li>
            <li>Crie canais para que pais e alunos possam tirar dúvidas e reportar situações suspeitas.</li>
          </ul>
        </li>
        <li>
          <b>Para Professores:</b> Promova a <b>cidadania digital</b> em sala de aula. Ensine os alunos sobre a
          importância de senhas fortes, os perigos de compartilhar informações pessoais e como identificar fontes
          confiáveis. Sempre que possível, utilize as ferramentas oficialmente adotadas e verificadas pela escola.
          <ul className="list-disc pl-6">
            <li>Desenvolva atividades práticas sobre privacidade, como criar senhas seguras e simular situações de
              risco.
            </li>
            <li>Estimule discussões sobre fake news, vazamento de dados e uso ético da tecnologia.</li>
            <li>Inclua temas de proteção digital no currículo transversalmente, desde os anos iniciais.</li>
          </ul>
        </li>
        <li>
          <b>Para as Famílias:</b> Conversem com seus filhos sobre sua vida online. Usem as ferramentas de controle
          parental disponíveis em dispositivos e aplicativos. Questionem a escola sobre quais plataformas estão sendo
          usadas e como os dados dos alunos são protegidos.
          <ul className="list-disc pl-6">
            <li>Oriente os filhos a nunca compartilhar dados pessoais sem conversar com um adulto.</li>
            <li>Participe de reuniões escolares e cobre transparência das instituições.</li>
            <li>Promova o diálogo sobre os benefícios e riscos das interações online.</li>
          </ul>
        </li>
      </ol>

      <h3 className="text-lg sm:text-xl font-semibold">Boas Práticas e Recomendações</h3>
      <ul className="list-disc pl-4 space-y-1">
        <li>Evite cadastros desnecessários, peça o mínimo de dados possível para usar um serviço.</li>
        <li>Mantenha softwares e aplicativos sempre atualizados para evitar vulnerabilidades.</li>
        <li>Prefira plataformas educacionais com selos de privacidade ou certificações reconhecidas.</li>
        <li>Leia e explique os termos de uso para os alunos, tornando-os agentes ativos da própria proteção.</li>
        <li>Realize simulações de incidentes digitais (como phishing ou vazamento de dados) para fortalecer a cultura de
          segurança.
        </li>
        <li>Crie um protocolo de resposta rápida caso ocorra algum incidente envolvendo dados escolares.</li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold">Por que isso importa?</h3>
      <p>
        A tecnologia é uma ferramenta educacional fantástica, mas não pode vir ao custo da <b>segurança dos nossos
        alunos</b>. Proteger seus dados é tão importante quanto ensinar matemática ou português. É um pilar essencial da
        educação para o século XXI — e depende do compromisso de todos: escolas, professores, famílias e alunos.
      </p>
    </div>
  </ArticlePage>
);

export default ArtigoPrivacidade;

