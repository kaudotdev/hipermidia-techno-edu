import ArticlePage from "../components/ArticlePage";
import React from "react";

const ArtigoPensamentoComputacional: React.FC = () => (
  <ArticlePage
    title='Para Além do "Usar a Internet": O que é o Pensamento Computacional e por que a SBC insiste tanto nele?'
    image="src/assets/pensamento.png"
    tags={["#SBC", "#pensamentocomputacional"]}
  >
    <p>
      <div className="text-base text-justify text-[#403D5C] space-y-4">
        <p>
          Muitos ainda associam "informática na educação" a aulas em laboratórios para aprender a usar o Word ou pesquisar no Google.
          Embora importantes, essas são apenas habilidades instrumentais. A verdadeira revolução, defendida por especialistas e pelas
          diretrizes da Sociedade Brasileira de Computação (SBC), está no desenvolvimento do <b>Pensamento Computacional</b>.
          Mas o que é isso, afinal?
        </p>

        <p>
          Longe de ser algo exclusivo para programadores, o Pensamento Computacional é uma abordagem para resolver problemas de forma
          estruturada, lógica e criativa. É uma habilidade para a vida que ajuda a entender situações complexas, planejar estratégias
          e construir soluções eficientes, com ou sem o uso intensivo de computadores.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Os quatro pilares fundamentais</h3>

        <p>O Pensamento Computacional se baseia em quatro pilares complementares, que podem ser trabalhados em qualquer área do conhecimento:</p>

        <ol className="mt-2 mb-4 list-decimal list-inside pl-4 space-y-2">
          <li>
            <b>Decomposição:</b> Quebrar um problema grande e complexo em partes menores e mais fáceis de gerenciar. Em sala de aula, isso
            pode aparecer quando os estudantes dividem um projeto em etapas: pesquisa, planejamento, execução e revisão.
          </li>
          <li>
            <b>Reconhecimento de Padrões:</b> Identificar semelhanças, tendências ou regularidades nos dados ou no problema.
            Essa habilidade ajuda a prever comportamentos, comparar casos e aplicar soluções já testadas em situações semelhantes.
          </li>
          <li>
            <b>Abstração:</b> Focar nos detalhes importantes e ignorar as informações irrelevantes para encontrar a solução.
            É o “olhar de cima” que permite simplificar a complexidade sem perder o essencial.
          </li>
          <li>
            <b>Algoritmos:</b> Desenvolver uma solução passo a passo ou um conjunto de regras para resolver o problema.
            São instruções claras e reproduzíveis, como uma receita de bolo, um manual de uso ou um roteiro de experimento.
          </li>
        </ol>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Por que isso importa na escola?</h3>

        <p>
          O Pensamento Computacional não é uma moda passageira. Ele dialoga com a formação integral do estudante, favorece a autonomia,
          fortalece a capacidade de aprender continuamente e melhora a qualidade das produções acadêmicas. Ao tratar problemas reais com
          método e criatividade, estudantes desenvolvem postura investigativa e colaborativa.
        </p>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Promove a resolução de problemas em diferentes contextos, do cotidiano às disciplinas acadêmicas.</li>
          <li>Estimula a criatividade, pois não há uma única resposta certa: há caminhos, protótipos e iterações.</li>
          <li>Favorece o trabalho em equipe, a comunicação clara e a responsabilização por cada etapa do processo.</li>
          <li>Conecta conteúdos de Matemática, Ciências, Linguagens e Humanidades a situações concretas.</li>
          <li>Desenvolve habilidades socioemocionais como perseverança, organização e flexibilidade cognitiva.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Na Prática (e sem precisar de um PC!)</h3>

        <p>
          A beleza do Pensamento Computacional é que ele pode ser ensinado de forma "desplugada". Por exemplo, peça aos alunos para
          escreverem as instruções (o algoritmo) para fazer um sanduíche. Eles rapidamente perceberão que precisam ser extremamente
          específicos (abstração), que certas sequências se repetem (padrões) e que a tarefa é composta de várias etapas menores
          (decomposição).
        </p>

        <p>Outras ideias “desplugadas” simples e eficazes:</p>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li><b>Roteiros de deslocamento:</b> criar instruções passo a passo para chegar a um local da escola.</li>
          <li><b>Dobraduras e origamis:</b> seguir e escrever algoritmos com comandos claros, numa sequência lógica.</li>
          <li><b>Sequências de histórias:</b> ordenar cenas, identificar padrões narrativos e generalizá-los para novas criações.</li>
          <li><b>Classificações e agrupamentos:</b> categorizar objetos por critérios, entendendo padrões e exceções.</li>
          <li><b>Jogos de tabuleiro:</b> analisar regras (algoritmos), criar variações e testar o impacto de novos passos.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Com tecnologia, quando fizer sentido</h3>

        <p>
          Computadores, tablets e celulares ampliam possibilidades, mas a tecnologia é meio, não fim. Use ferramentas digitais para
          simular fenômenos, visualizar dados e prototipar ideias quando isso tornar a aprendizagem mais rica, colaborativa e
          acessível.
        </p>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li><b>Ambientes de programação em blocos:</b> ideais para criar histórias interativas, jogos e animações.</li>
          <li><b>Planilhas e visualizações:</b> para coletar, organizar e interpretar dados de investigações.</li>
          <li><b>Simuladores e laboratórios virtuais:</b> para explorar hipóteses rapidamente e com segurança.</li>
          <li><b>Robótica educacional:</b> para conectar algoritmos a ações físicas e controle de sensores e atuadores.</li>
          <li><b>Ferramentas de escrita colaborativa:</b> para planejar algoritmos e documentar processos em equipe.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Planejando uma sequência didática</h3>

        <p>Uma boa sequência pode seguir um ciclo enxuto e iterativo:</p>

        <ol className="list-decimal list-inside pl-4 space-y-1">
          <li><b>Objetivo claro:</b> que problema será resolvido e que evidências demonstrarão aprendizagem?</li>
          <li><b>Diagnóstico:</b> mapear conhecimentos prévios e definir recursos disponíveis (com e sem tecnologia).</li>
          <li><b>Exploração guiada:</b> propor desafios graduais que ativem os quatro pilares.</li>
          <li><b>Prototipagem:</b> criar, testar, errar com segurança, revisar e documentar o processo.</li>
          <li><b>Compartilhamento:</b> socializar resultados, refletir sobre escolhas e próximos passos.</li>
        </ol>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Exemplos por etapas de ensino</h3>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li><b>Educação Infantil:</b> sequências de rotinas, jogos de instruções simples, classificação de formas e cores.</li>
          <li><b>Anos Iniciais:</b> mapas de percurso, receitas, problemas matemáticos de múltiplas etapas, histórias com padrões.</li>
          <li><b>Anos Finais:</b> investigações com dados, algoritmos para experimentos, simulações, protótipos de aplicativos.</li>
          <li><b>Ensino Médio:</b> projetos interdisciplinares, análise crítica de dados, automação simples, estudos de caso.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Mitos e Verdades</h3>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li><b>Mito:</b> “Pensamento Computacional é só aprender a programar.” <b>Verdade:</b> Programar é um caminho, não o único.</li>
          <li><b>Mito:</b> “Sem laboratório equipado não dá para trabalhar.” <b>Verdade:</b> Atividades desplugadas funcionam muito bem.</li>
          <li><b>Mito:</b> “Só serve para Matemática.” <b>Verdade:</b> É transversal: Linguagens, Ciências, Humanidades e Artes também se beneficiam.</li>
          <li><b>Mito:</b> “Os alunos já ‘nascem sabendo’ tecnologia.” <b>Verdade:</b> Usar dispositivos não é o mesmo que pensar computacionalmente.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Como avaliar de maneira formativa</h3>

        <p>
          Avaliar Pensamento Computacional é acompanhar processos, não apenas o produto final. Evidências surgem em rascunhos,
          iterações e justificativas. A avaliação formativa orienta a melhoria contínua.
        </p>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li><b>Rubricas:</b> critérios para clareza de algoritmos, qualidade da decomposição e identificação de padrões.</li>
          <li><b>Checklists:</b> listas simples que ajudam estudantes a verificar etapas e organizar o trabalho.</li>
          <li><b>Portfólios:</b> coletâneas de versões, reflexões e registros de testes e revisões.</li>
          <li><b>Autoavaliação e pares:</b> feedbacks rápidos e frequentes para ajustar rumos e consolidar aprendizados.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Inclusão e acessibilidade</h3>

        <p>
          O Pensamento Computacional favorece equidade quando propomos desafios com múltiplas portas de entrada, diferentes linguagens
          de expressão e acessibilidade nos recursos (visuais, táteis, auditivos). Ritmo e mediação importam tanto quanto a ferramenta.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Formação de professores: por onde começar</h3>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Vivencie atividades como aluno para internalizar os quatro pilares na prática.</li>
          <li>Comece pequeno e escale depois: uma dinâmica curta, um mini-projeto, um piloto em uma turma.</li>
          <li>Planeje momentos de reflexão: o que funcionou, o que melhorar, quais evidências apareceram.</li>
          <li>Crie uma rede de apoio na escola: troque planos, rubricas e materiais, co-planeje e co-avalie.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Conexões com o currículo</h3>

        <p>
          O desenvolvimento do Pensamento Computacional dialoga com competências gerais da educação contemporânea: pensamento científico,
          crítico e criativo; argumentação; cultura digital; trabalho e projeto de vida. Projetos integradores potencializam essas conexões.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Um roteiro para começar já</h3>

        <ol className="list-decimal list-inside pl-4 space-y-1">
          <li>Escolha um problema real e relevante para sua turma (ex.: reduzir desperdício na cantina).</li>
          <li>Decomponha o problema em subdesafios e distribua papéis na equipe.</li>
          <li>Mapeie padrões em dados coletados (observações, entrevistas, contagens, fotos).</li>
          <li>Abstraia o essencial e defina critérios de sucesso claros.</li>
          <li>Escreva e teste algoritmos para as ações propostas; revise a partir do feedback.</li>
          <li>Registre o processo em portfólio e socialize resultados com a comunidade escolar.</li>
        </ol>

        <h3 className="text-lg sm:text-xl font-semibold text-[#403D5C]">Checklist de implementação</h3>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Objetivo de aprendizagem explicitado e conhecido pelos estudantes.</li>
          <li>Atividade que acione ao menos dois dos quatro pilares.</li>
          <li>Critérios de avaliação formativa definidos e compartilhados.</li>
          <li>Momentos planejados de feedback e revisão (iterar é aprender).</li>
          <li>Registro do processo (anotações, fotos, versões, reflexões).</li>
        </ul>

        <p>
          Ao insistir nessa abordagem, a SBC nos diz que o objetivo não é formar um exército de programadores, mas sim
          cidadãos capazes de analisar criticamente o mundo digital, resolver problemas, inovar e criar, em vez de apenas
          consumir tecnologia. É preparar os jovens para um futuro onde essas habilidades serão tão essenciais quanto ler
          e escrever.
        </p>

        <p>
          Em síntese, o Pensamento Computacional é uma lente que organiza a ação: observar, compreender, simplificar, planejar,
          testar e melhorar. Na escola, ele torna a aprendizagem mais significativa porque conecta teoria e prática, acolhe erros
          como parte do caminho e valoriza o processo tanto quanto o resultado.
        </p>

        <p>
          Comece hoje com uma atividade curta. Sinta a diferença na qualidade das perguntas, na clareza das explicações e no
          engajamento. Quando a tecnologia entrar em cena, que seja como facilitadora: jogando luz sobre o problema, ampliando
          a colaboração e tornando visível o raciocínio dos estudantes. É assim que ela deixa de ser vilã e se torna aliada.
        </p>
      </div>
    </p>
  </ArticlePage>
);

export default ArtigoPensamentoComputacional;

