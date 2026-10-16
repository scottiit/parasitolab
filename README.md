# PARASITOLAB — O mistério das estruturas

Jogo educativo de investigação parasitológica da Equipe 4, desenvolvido para apoiar o estudo de organismos e seus estágios biológicos no curso de Farmácia.

## Objetivo

Estudar dez organismos em quinze casos didáticos com microfotografias, observando estruturas, estágios biológicos e contextos de coleta e revisando as explicações após cada resposta.

## Como jogar

1. Consulte a **Colinha** antes de iniciar: cada ficha apresenta o organismo, seu estágio, características, diferenças e um botão para a referência CDC DPDx.
2. Inicie a investigação. As quinze questões são embaralhadas. Cada questão sorteia **quatro alternativas** de um conjunto de opções, sempre incluindo a correta. O sorteio e a ordem são mantidos ao recarregar. A colinha fica bloqueada durante o quiz.
3. Observe a microfotografia e amplie a imagem. Há até duas pistas; cada uma reduz em **25 pontos** o valor do acerto naquela questão.
4. Escolha uma alternativa e confira a explicação. Um acerto vale **100 pontos sem pistas**, **75 com uma pista** ou **50 com duas**. Um erro vale **0**. O máximo por nova partida é **1.500 pontos**.
5. Ao concluir, revise o relatório ou jogue novamente. A colinha volta a ficar disponível.

## Organismos e estágios representados

| Organismo | Estágio |
|---|---|
| *Entamoeba histolytica* | Trofozoíto |
| *Entamoeba coli* | Cisto maduro |
| *Endolimax nana* | Cisto maduro |
| *Iodamoeba bütschlii* | Trofozoíto |
| *Giardia duodenalis* | Trofozoíto |
| *Blastocystis hominis* | Forma vacuolar |
| *Cryptosporidium parvum / hominis* | Oocisto |
| *Cystoisospora belli* | Oocisto imaturo |
| *Balantioides coli* | Trofozoíto |
| *Trichomonas vaginalis* | Trofozoíto |

A ordem da tabela é apenas de referência; as missões são embaralhadas no jogo.

As fichas também apresentam o cisto de *E. histolytica/E. dispar*, os trofozoítos de *E. coli* e *E. nana*, e imagens de *E. histolytica* em biópsia retal e de *T. vaginalis* em colpocitologia. As cinco questões adicionais abordam esses estágios e contextos. Tecido e local de coleta são contextos da amostra, não fases biológicas novas.

## Progresso e relatórios

O progresso fica salvo no navegador, incluindo a ordem das questões e alternativas. É possível continuar a investigação após recarregar a página.

Partidas antigas de dez questões podem ser concluídas com o total original; seus relatórios e pontuações são preservados. Uma nova partida passa a usar as quinze questões.

Respostas e relatórios anteriores à penalização das pistas mantêm os pontos já obtidos. A nova regra vale para respostas registradas a partir da atualização. Alternativas antigas são completadas para quatro, preservando a resposta correta e as escolhas já feitas.

O histórico mantém os **últimos dez relatórios** e preserva a **melhor partida**, mesmo quando ela sai dessa lista. A melhor é a de maior pontuação; em empate, vence o menor tempo de conclusão.

O tempo é contado do início até a última resposta, incluindo interrupções. Partidas antigas sem medição exibem “Tempo não registrado”.

Os dados ficam no `localStorage` deste navegador. Não há cadastro, servidor de dados nem sincronização entre dispositivos. Apagar os dados do navegador pode remover o progresso e os relatórios.

## Nota científica

O quiz e a colinha usam **microfotografias fornecidas pela Equipe 4**, extraídas do documento da equipe sem alteração de pixels. As marcas e créditos presentes nas imagens foram preservados. O CDC DPDx é a referência científica dos textos; não se atribui ao CDC a autoria de todas as imagens. A ilustração da página inicial foi mantida como mascote.

Algumas fotografias contêm o nome do organismo em uma faixa inferior. Essa faixa é ocultada apenas na apresentação do quiz e da ampliação; a colinha mantém a imagem completa. As fotografias são materiais de estudo e não constituem diagnóstico laboratorial.

A morfologia isolada pode ser insuficiente para confirmar *E. histolytica* e distinguir espécies de *Cryptosporidium*. As fichas preservam essas ressalvas e indicam as referências do [CDC DPDx](https://www.cdc.gov/dpdx/).

Os estágios e os materiais visuais devem ser validados com a professora antes do uso em avaliação acadêmica.

## Tecnologia e arquivos

HTML, CSS e JavaScript estáticos, sem dependências externas e sem etapa de compilação. Interface adaptada a celular e desktop, com navegação por teclado.

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Página de entrada |
| `styles.css` | Aparência e responsividade |
| `data.js` | Organismos, casos, referências e créditos |
| `logic.js` | Pontuação, embaralhamento e armazenamento local |
| `app.js` | Telas, navegação e interação |
| `assets/` | Imagens SVG didáticas |
| `assets/microfotografias/` | Fotografias extraídas do material da equipe |
| `.nojekyll` | Publicação dos arquivos estáticos no GitHub Pages |

## Executar e publicar

Para uso local, baixe o repositório mantendo sua estrutura de pastas e abra `index.html` no navegador.

Para publicar no GitHub Pages, em **Settings → Pages**, escolha **Deploy from a branch**, selecione **main** e **/(root)** e salve. O GitHub informará o endereço após a publicação. Mantenha `index.html` na raiz; os caminhos dos arquivos são relativos.

## Créditos

Site desenvolvido por **Adriano Scotti**, do curso de **Ciência da Computação da UFOPA**, para auxiliar a **Equipe 4** e as alunas do curso de **Farmácia**.

Trabalho da disciplina de **Parasitologia**, com a professora **Sandra Layse Sarrazin**.

**Equipe 4 — alunas de Farmácia:**

1. Maria Eduarda Gomes
2. Marielen Araújo
3. Helloane Santos
4. Ana Paula Azevedo
5. Maria Eduarda Maduro

Os créditos exibidos no site estão no objeto `credits` de `data.js`.
