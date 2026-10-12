(function (global) {
  "use strict";
  const data = {
  "title": "PARASITOLAB",
  "subtitle": "O mistério das estruturas",
  "version": "2.0.0",
  "credits": {
    "developer": "Adriano Scotti",
    "developerCourse": "Ciência da Computação",
    "institution": "UFOPA",
    "team": "Equipe 4",
    "studentCourse": "Farmácia",
    "subject": "",
    "discipline": "Parasitologia",
    "professor": "Sandra Layse Sarrazin",
    "students": [
      "Maria Eduarda Gomes",
      "Marielen Araújo",
      "Helloane Santos",
      "Ana Paula Azevedo",
      "Maria Eduarda Maduro"
    ]
  },
  "organisms": [
    {
      "id": "entamoeba-histolytica",
      "name": "Entamoeba histolytica",
      "verified": true,
      "stage": "Trofozoíto",
      "image": "./assets/histolytica.svg",
      "features": [
        "Trofozoíto ameboide com um núcleo e cromatina periférica fina.",
        "Carossomo geralmente pequeno e central.",
        "Pode apresentar pseudópodes e, às vezes, hemácias ingeridas."
      ],
      "difference": "Difere do trofozoíto de E. coli pelo padrão nuclear mais delicado e pela motilidade progressiva, quando observável.",
      "sourceUrl": "https://www.cdc.gov/dpdx/amebiasis/",
      "sourceName": "CDC DPDx — Amebíase",
      "note": "A morfologia isolada não confirma E. histolytica: E. dispar e outras espécies podem ser indistinguíveis; métodos específicos podem ser necessários."
    },
    {
      "id": "entamoeba-coli",
      "name": "Entamoeba coli",
      "verified": true,
      "stage": "Cisto maduro",
      "image": "./assets/entamoeba-coli.svg",
      "features": [
        "Cisto geralmente arredondado, de aproximadamente 10–35 µm.",
        "Quando maduro, apresenta tipicamente oito núcleos (ocasionalmente mais).",
        "Carossomos frequentemente excêntricos e cromatina periférica grosseira."
      ],
      "difference": "Os oito núcleos do cisto maduro ajudam a distingui-lo do cisto de E. histolytica/E. dispar, com até quatro.",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "note": "Não confundir esta ameba intestinal não patogênica com a bactéria Escherichia coli."
    },
    {
      "id": "endolimax-nana",
      "name": "Endolimax nana",
      "verified": true,
      "stage": "Cisto maduro",
      "image": "./assets/endolimax.svg",
      "features": [
        "Cisto geralmente pequeno, de cerca de 5–10 µm.",
        "Forma madura tipicamente com quatro núcleos.",
        "Carossomos grandes e irregulares, sem cromatina periférica."
      ],
      "difference": "O padrão de quatro núcleos com carossomos grandes contrasta com o cisto de Iodamoeba, que possui um núcleo e grande vacúolo de glicogênio.",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "note": ""
    },
    {
      "id": "iodamoeba-butschlii",
      "name": "Iodamoeba bütschlii",
      "verified": true,
      "stage": "Cisto",
      "image": "./assets/iodamoeba.svg",
      "features": [
        "Cisto com um único núcleo.",
        "Grande massa de glicogênio destacada, particularmente com coloração por iodo.",
        "Formato variável de arredondado a ovalado, aproximadamente 5–20 µm."
      ],
      "difference": "O grande vacúolo de glicogênio do cisto é a pista mais característica.",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "note": "A grafia sem trema Iodamoeba buetschlii também é usada nas fontes."
    },
    {
      "id": "giardia-duodenalis",
      "name": "Giardia duodenalis",
      "verified": true,
      "stage": "Trofozoíto",
      "image": "./assets/giardia.svg",
      "features": [
        "Formato piriforme com simetria bilateral.",
        "Dois núcleos normalmente reconhecíveis em preparados corados.",
        "Disco adesivo ventral, corpos medianos e oito flagelos."
      ],
      "difference": "Dois núcleos e disco ventral são pistas relevantes na comparação com outros flagelados.",
      "sourceUrl": "https://www.cdc.gov/dpdx/giardiasis/",
      "sourceName": "CDC DPDx — Giardíase",
      "note": ""
    },
    {
      "id": "blastocystis-hominis",
      "name": "Blastocystis hominis",
      "verified": true,
      "stage": "Forma vacuolar",
      "image": "./assets/blastocystis.svg",
      "features": [
        "Forma usualmente arredondada ou oval.",
        "Grande corpo central (vacúolo) circundado por fina faixa de citoplasma.",
        "Núcleos podem aparecer na periferia celular."
      ],
      "difference": "O grande corpo central com borda citoplasmática fina caracteriza a forma vacuolar.",
      "sourceUrl": "https://www.cdc.gov/dpdx/blastocystis/",
      "sourceName": "CDC DPDx — Blastocystis",
      "note": "O nome Blastocystis hominis é tradicional; a designação Blastocystis sp. é preferida em muitos contextos porque há subtipos diversos."
    },
    {
      "id": "cryptosporidium",
      "name": "Cryptosporidium parvum / hominis",
      "verified": true,
      "stage": "Oocisto",
      "image": "./assets/cryptosporidium.svg",
      "features": [
        "Oocisto pequeno, esférico, em torno de 4–5 µm.",
        "Pode conter quatro esporozoítos visíveis conforme o preparo.",
        "Pode ser evidenciado por colorações ácido-resistentes modificadas ou imunofluorescência."
      ],
      "difference": "Oocistos minúsculos e arredondados contrastam com os oocistos grandes e elipsoidais de Cystoisospora.",
      "sourceUrl": "https://www.cdc.gov/dpdx/cryptosporidiosis/",
      "sourceName": "CDC DPDx — Criptosporidiose",
      "note": "A morfologia do oocisto não permite distinguir com segurança C. parvum de C. hominis."
    },
    {
      "id": "cystoisospora-belli",
      "name": "Cystoisospora belli",
      "verified": true,
      "stage": "Oocisto imaturo",
      "image": "./assets/cystoisospora.svg",
      "features": [
        "Oocisto grande, tipicamente elipsoidal, de cerca de 25–30 µm.",
        "Na eliminação fecal, geralmente contém um esporoblasto.",
        "Após a esporulação pode apresentar dois esporocistos."
      ],
      "difference": "O grande oocisto alongado difere dos pequenos oocistos arredondados de Cryptosporidium.",
      "sourceUrl": "https://www.cdc.gov/dpdx/cystoisosporiasis/",
      "sourceName": "CDC DPDx — Cistoisosporíase",
      "note": "Este esquema mostra o oocisto imaturo com um esporoblasto, não um trofozoíto."
    },
    {
      "id": "balantioides-coli",
      "name": "Balantioides coli",
      "verified": true,
      "stage": "Trofozoíto",
      "image": "./assets/balantioides.svg",
      "features": [
        "Trofozoíto geralmente grande, cerca de 40–200 µm.",
        "Superfície coberta por cílios e presença de citóstoma.",
        "Macronúcleo alongado/reniforme, frequentemente visível."
      ],
      "difference": "É o ciliado da lista; os cílios e o macronúcleo em formato de rim são pistas marcantes.",
      "sourceUrl": "https://www.cdc.gov/dpdx/balantidiasis/",
      "sourceName": "CDC DPDx — Balantidíase",
      "note": "Também pode aparecer sob os nomes Balantidium coli ou Neobalantidium coli."
    },
    {
      "id": "trichomonas-vaginalis",
      "name": "Trichomonas vaginalis",
      "verified": true,
      "stage": "Trofozoíto",
      "image": "./assets/trichomonas.svg",
      "features": [
        "Trofozoíto piriforme com um núcleo anterior.",
        "Quatro flagelos anteriores e um associado à membrana ondulante.",
        "Membrana ondulante e axóstilo são estruturas importantes."
      ],
      "difference": "A membrana ondulante e o núcleo único diferenciam-no do trofozoíto de Giardia.",
      "sourceUrl": "https://www.cdc.gov/dpdx/trichomoniasis/",
      "sourceName": "CDC DPDx — Tricomoníase",
      "note": "Não há estágio cístico reconhecido."
    }
  ],
  "missions": [
    {
      "id": "missao-01",
      "number": "01",
      "title": "O núcleo da investigação",
      "eyebrow": "AMEBA / TROFOZOÍTO",
      "specimen": "Amostra intestinal fictícia",
      "scenario": "Na bancada de investigação, um preparo didático apresenta uma forma ameboide. O registro descreve um único núcleo, carossomo pequeno e cromatina periférica delicada. A equipe precisa decidir qual grupo corresponde à estrutura.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/histolytica.svg",
      "alt": "Ilustração esquemática do estágio trofozoíto com detalhes didáticos de Entamoeba histolytica; não é microfotografia nem representação em escala.",
      "options": [
        "Entamoeba histolytica",
        "Entamoeba coli",
        "Endolimax nana"
      ],
      "answer": "Entamoeba histolytica",
      "stage": "Trofozoíto",
      "hints": [
        "A estrutura é um trofozoíto ameboide; observe o padrão do núcleo.",
        "O carossomo central pequeno e a cromatina periférica fina se alinham com o grupo E. histolytica/E. dispar."
      ],
      "explanation": "Este esquema representa características morfológicas do complexo E. histolytica/E. dispar. O nome E. histolytica é a alternativa pretendida neste jogo, mas uma imagem de trofozoíto isolada não distingue essas espécies com segurança; a confirmação específica exige outros métodos.",
      "sourceName": "CDC DPDx — Amebíase",
      "sourceUrl": "https://www.cdc.gov/dpdx/amebiasis/"
    },
    {
      "id": "missao-02",
      "number": "02",
      "title": "Oito sinais no interior",
      "eyebrow": "AMEBA / CISTO",
      "specimen": "Material fecal fictício",
      "scenario": "Um cisto arredondado chama atenção pela grande quantidade de estruturas nucleares. O laboratório solicitou uma hipótese baseada na morfologia do cisto maduro.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/entamoeba-coli.svg",
      "alt": "Ilustração esquemática do estágio cisto maduro com detalhes didáticos de Entamoeba coli; não é microfotografia nem representação em escala.",
      "options": [
        "Endolimax nana",
        "Entamoeba coli",
        "Iodamoeba bütschlii"
      ],
      "answer": "Entamoeba coli",
      "stage": "Cisto maduro",
      "hints": [
        "Conte as estruturas nucleares desenhadas no interior do cisto.",
        "O cisto maduro desta ameba apresenta tipicamente oito núcleos."
      ],
      "explanation": "O cisto maduro de Entamoeba coli costuma apresentar oito núcleos e cromatina periférica relativamente grosseira. É uma ameba intestinal não patogênica, diferente da bactéria Escherichia coli.",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/"
    },
    {
      "id": "missao-03",
      "number": "03",
      "title": "Quatro pontos discretos",
      "eyebrow": "AMEBA / CISTO",
      "specimen": "Material fecal fictício",
      "scenario": "Uma forma pequena e arredondada foi separada para estudo. No esquema corado aparecem quatro núcleos, cada qual com um carossomo relativamente grande.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/endolimax.svg",
      "alt": "Ilustração esquemática do estágio cisto maduro com detalhes didáticos de Endolimax nana; não é microfotografia nem representação em escala.",
      "options": [
        "Iodamoeba bütschlii",
        "Entamoeba coli",
        "Endolimax nana"
      ],
      "answer": "Endolimax nana",
      "stage": "Cisto maduro",
      "hints": [
        "Observe a combinação entre o tamanho pequeno e o número de núcleos.",
        "O cisto maduro tem quatro núcleos com grandes carossomos e não apresenta cromatina periférica."
      ],
      "explanation": "O esquema destaca características de cisto maduro de Endolimax nana: cerca de 5–10 µm, quatro núcleos e carossomos grandes, com ausência de cromatina periférica.",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/"
    },
    {
      "id": "missao-04",
      "number": "04",
      "title": "A reserva oculta",
      "eyebrow": "AMEBA / CISTO",
      "specimen": "Material fecal fictício",
      "scenario": "Uma coloração didática evidencia no interior de um cisto uma grande área de reserva. A equipe recebe a tarefa de diferenciar essa estrutura das demais amebas.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/iodamoeba.svg",
      "alt": "Ilustração esquemática do estágio cisto com detalhes didáticos de Iodamoeba bütschlii; não é microfotografia nem representação em escala.",
      "options": [
        "Iodamoeba bütschlii",
        "Endolimax nana",
        "Entamoeba coli"
      ],
      "answer": "Iodamoeba bütschlii",
      "stage": "Cisto",
      "hints": [
        "Não observe apenas o núcleo: há uma estrutura de armazenamento muito evidente.",
        "Um grande vacúolo de glicogênio, destacado em preparações com iodo, é a pista principal."
      ],
      "explanation": "O esquema representa um cisto de Iodamoeba bütschlii, com um núcleo e um grande vacúolo de glicogênio. Essa massa pode assumir coloração escura em preparações iodadas.",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/"
    },
    {
      "id": "missao-05",
      "number": "05",
      "title": "O enigma dos dois núcleos",
      "eyebrow": "PROTOZOÁRIO FLAGELADO",
      "specimen": "Material intestinal fictício",
      "scenario": "Uma estrutura de contorno piriforme foi representada para o treinamento da equipe. Duas regiões nucleares simétricas se destacam na extremidade mais larga.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/giardia.svg",
      "alt": "Ilustração esquemática do estágio trofozoíto com detalhes didáticos de Giardia duodenalis; não é microfotografia nem representação em escala.",
      "options": [
        "Trichomonas vaginalis",
        "Giardia duodenalis",
        "Balantioides coli"
      ],
      "answer": "Giardia duodenalis",
      "stage": "Trofozoíto",
      "hints": [
        "Observe a quantidade de núcleos representados na região anterior.",
        "Um disco ventral e dois núcleos são características importantes neste trofozoíto."
      ],
      "explanation": "O trofozoíto de Giardia duodenalis costuma apresentar dois núcleos, disco adesivo ventral e oito flagelos. A visualização dessas estruturas depende da preparação.",
      "sourceName": "CDC DPDx — Giardíase",
      "sourceUrl": "https://www.cdc.gov/dpdx/giardiasis/"
    },
    {
      "id": "missao-06",
      "number": "06",
      "title": "O grande centro",
      "eyebrow": "FORMA VACUOLAR",
      "specimen": "Material intestinal fictício",
      "scenario": "Na imagem esquemática, uma estrutura arredondada exibe uma região central muito maior que a faixa de citoplasma à sua volta. O investigador avalia essa organização.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/blastocystis.svg",
      "alt": "Ilustração esquemática do estágio forma vacuolar com detalhes didáticos de Blastocystis hominis; não é microfotografia nem representação em escala.",
      "options": [
        "Cryptosporidium parvum / hominis",
        "Blastocystis hominis",
        "Cystoisospora belli"
      ],
      "answer": "Blastocystis hominis",
      "stage": "Forma vacuolar",
      "hints": [
        "Olhe a proporção entre o centro da célula e sua borda.",
        "Uma grande região central e núcleos periféricos caracterizam a forma vacuolar."
      ],
      "explanation": "A forma vacuolar de Blastocystis sp. apresenta grande corpo central e uma fina faixa periférica de citoplasma, na qual podem estar presentes núcleos. O termo Blastocystis hominis é tradicional, mas a classificação moderna frequentemente usa Blastocystis sp.",
      "sourceName": "CDC DPDx — Blastocystis",
      "sourceUrl": "https://www.cdc.gov/dpdx/blastocystis/"
    },
    {
      "id": "missao-07",
      "number": "07",
      "title": "Pequenos círculos, grande desafio",
      "eyebrow": "COCCÍDIO / OOCISTO",
      "specimen": "Material intestinal fictício",
      "scenario": "O laboratório representa um pequeno oocisto arredondado em sua ficha didática. A equipe deve compará-lo a outro oocisto, muito maior e alongado.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/cryptosporidium.svg",
      "alt": "Ilustração esquemática do estágio oocisto com detalhes didáticos de Cryptosporidium parvum / hominis; não é microfotografia nem representação em escala.",
      "options": [
        "Cystoisospora belli",
        "Giardia duodenalis",
        "Cryptosporidium parvum / hominis"
      ],
      "answer": "Cryptosporidium parvum / hominis",
      "stage": "Oocisto",
      "hints": [
        "O estágio mostrado é um oocisto arredondado e muito pequeno.",
        "Oocistos de Cryptosporidium medem aproximadamente 4–5 µm, ao contrário dos oocistos elipsoidais maiores de Cystoisospora."
      ],
      "explanation": "O esquema representa oocisto de Cryptosporidium spp., tipicamente esférico, com cerca de 4–5 µm. C. parvum e C. hominis não são distinguíveis apenas pela aparência do oocisto.",
      "sourceName": "CDC DPDx — Criptosporidiose",
      "sourceUrl": "https://www.cdc.gov/dpdx/cryptosporidiosis/"
    },
    {
      "id": "missao-08",
      "number": "08",
      "title": "A cápsula alongada",
      "eyebrow": "COCCÍDIO / OOCISTO",
      "specimen": "Material intestinal fictício",
      "scenario": "Uma segunda estrutura do tipo oocisto foi desenhada. Ao contrário da anterior, apresenta formato alongado e uma massa interna que representa um esporoblasto.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/cystoisospora.svg",
      "alt": "Ilustração esquemática do estágio oocisto imaturo com detalhes didáticos de Cystoisospora belli; não é microfotografia nem representação em escala.",
      "options": [
        "Cryptosporidium parvum / hominis",
        "Cystoisospora belli",
        "Blastocystis hominis"
      ],
      "answer": "Cystoisospora belli",
      "stage": "Oocisto imaturo",
      "hints": [
        "Compare o formato do oocisto: redondo ou elipsoidal?",
        "Oocistos eliminados de Cystoisospora belli são grandes, alongados e usualmente imaturos, com um esporoblasto."
      ],
      "explanation": "O desenho mostra um oocisto imaturo de Cystoisospora belli, tipicamente elipsoidal e com cerca de 25–30 µm. Após maturação, podem existir dois esporocistos; não confunda os estágios.",
      "sourceName": "CDC DPDx — Cistoisosporíase",
      "sourceUrl": "https://www.cdc.gov/dpdx/cystoisosporiasis/"
    },
    {
      "id": "missao-09",
      "number": "09",
      "title": "A célula de cílios",
      "eyebrow": "CILIADO / TROFOZOÍTO",
      "specimen": "Material intestinal fictício",
      "scenario": "Um organismo oval e volumoso surge no visor do laboratório. A superfície está coberta por numerosas projeções curtas, e o interior mostra um núcleo maior de contorno curvado.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/balantioides.svg",
      "alt": "Ilustração esquemática do estágio trofozoíto com detalhes didáticos de Balantioides coli; não é microfotografia nem representação em escala.",
      "options": [
        "Balantioides coli",
        "Entamoeba histolytica",
        "Trichomonas vaginalis"
      ],
      "answer": "Balantioides coli",
      "stage": "Trofozoíto",
      "hints": [
        "O revestimento da estrutura é formado por muitos cílios.",
        "O macronúcleo curvado, semelhante a um rim, é característica típica deste ciliado."
      ],
      "explanation": "O trofozoíto de Balantioides coli, também conhecido como Balantidium coli, possui cílios, citóstoma e um macronúcleo frequentemente reniforme. É maior que a maioria dos protozoários intestinais da lista.",
      "sourceName": "CDC DPDx — Balantidíase",
      "sourceUrl": "https://www.cdc.gov/dpdx/balantidiasis/"
    },
    {
      "id": "missao-10",
      "number": "10",
      "title": "A membrana misteriosa",
      "eyebrow": "PROTOZOÁRIO FLAGELADO",
      "specimen": "Material urogenital fictício",
      "scenario": "Um preparo didático revela uma célula piriforme com um núcleo e projeções móveis. Uma das bordas do desenho contém uma membrana ondulante.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/trichomonas.svg",
      "alt": "Ilustração esquemática do estágio trofozoíto com detalhes didáticos de Trichomonas vaginalis; não é microfotografia nem representação em escala.",
      "options": [
        "Giardia duodenalis",
        "Balantioides coli",
        "Trichomonas vaginalis"
      ],
      "answer": "Trichomonas vaginalis",
      "stage": "Trofozoíto",
      "hints": [
        "Observe a quantidade de núcleos e os flagelos anteriores.",
        "Uma membrana ondulante em uma das laterais é uma das pistas principais."
      ],
      "explanation": "O trofozoíto de Trichomonas vaginalis possui um núcleo, quatro flagelos anteriores e um flagelo associado à membrana ondulante. Não apresenta estágio cístico reconhecido.",
      "sourceName": "CDC DPDx — Tricomoníase",
      "sourceUrl": "https://www.cdc.gov/dpdx/trichomoniasis/"
    }
  ]
};
  global.PARASITOLAB_DATA = data;
  if (typeof module !== "undefined" && module.exports) module.exports = data;
})(typeof globalThis !== "undefined" ? globalThis : this);
