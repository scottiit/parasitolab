(function (global) {
  "use strict";
  const data = {
  "title": "PARASITOLAB",
  "subtitle": "O mistério das estruturas",
  "version": "3.0.0",
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
      "image": "./assets/microfotografias/entamoeba-histolytica-trofozoito.jpg",
      "features": [
        "Trofozoíto ameboide com um núcleo e cromatina periférica fina.",
        "Carossomo geralmente pequeno e central.",
        "Pode apresentar pseudópodes e, às vezes, hemácias ingeridas."
      ],
      "difference": "Difere do trofozoíto de E. coli pelo padrão nuclear mais delicado e pela motilidade progressiva, quando observável.",
      "sourceUrl": "https://www.cdc.gov/dpdx/amebiasis/",
      "sourceName": "CDC DPDx — Amebíase",
      "note": "A morfologia isolada não confirma E. histolytica: E. dispar e outras espécies podem ser indistinguíveis; métodos específicos podem ser necessários.",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageCaption": "Trofozoíto de Entamoeba histolytica, conforme o material fornecido pela equipe.",
      "stages": [
        {
          "stage": "Trofozoíto",
          "image": "./assets/microfotografias/entamoeba-histolytica-trofozoito.jpg",
          "caption": "Trofozoíto de Entamoeba histolytica, conforme o material fornecido pela equipe.",
          "features": [
            "Trofozoíto ameboide com um núcleo e cromatina periférica fina.",
            "Carossomo geralmente pequeno e central.",
            "Pode apresentar pseudópodes e, às vezes, hemácias ingeridas."
          ]
        },
        {
          "stage": "Cisto",
          "image": "./assets/microfotografias/entamoeba-histolytica-cisto.jpg",
          "caption": "Cisto atribuído ao complexo E. histolytica/E. dispar; preparado com iodo.",
          "features": [
            "Forma cística com parede delimitada.",
            "Cistos maduros podem apresentar até quatro núcleos.",
            "A morfologia não distingue E. histolytica de E. dispar."
          ]
        },
        {
          "stage": "Trofozoíto em tecido",
          "image": "./assets/microfotografias/entamoeba-histolytica-biopsia-retal.jpg",
          "caption": "Trofozoítos de E. histolytica em biópsia retal corada por H&E. Setas indicam exemplos com núcleos visíveis.",
          "features": [
            "Trofozoítos presentes em corte de tecido.",
            "A localização descrita no material é uma biópsia retal.",
            "O tecido é o contexto da amostra, não uma nova fase do ciclo."
          ]
        }
      ]
    },
    {
      "id": "entamoeba-coli",
      "name": "Entamoeba coli",
      "verified": true,
      "stage": "Cisto maduro",
      "image": "./assets/microfotografias/entamoeba-coli-cisto.jpg",
      "features": [
        "Cisto geralmente arredondado, de aproximadamente 10–35 µm.",
        "Quando maduro, apresenta tipicamente oito núcleos (ocasionalmente mais).",
        "Carossomos frequentemente excêntricos e cromatina periférica grosseira."
      ],
      "difference": "Os oito núcleos do cisto maduro ajudam a distingui-lo do cisto de E. histolytica/E. dispar, com até quatro.",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "note": "Não confundir esta ameba intestinal não patogênica com a bactéria Escherichia coli.",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageCaption": "Cisto maduro de Entamoeba coli, conforme o material fornecido pela equipe.",
      "stages": [
        {
          "stage": "Cisto maduro",
          "image": "./assets/microfotografias/entamoeba-coli-cisto.jpg",
          "caption": "Cisto maduro de Entamoeba coli, conforme o material fornecido pela equipe.",
          "features": [
            "Cisto geralmente arredondado, de aproximadamente 10–35 µm.",
            "Quando maduro, apresenta tipicamente oito núcleos (ocasionalmente mais).",
            "Carossomos frequentemente excêntricos e cromatina periférica grosseira."
          ]
        },
        {
          "stage": "Trofozoíto",
          "image": "./assets/microfotografias/entamoeba-coli-trofozoito.jpg",
          "caption": "Trofozoíto de Entamoeba coli, conforme legenda do material fornecido.",
          "features": [
            "Um núcleo com carossomo geralmente excêntrico.",
            "Cromatina periférica geralmente grosseira.",
            "Citoplasma granular, frequentemente vacuolado."
          ]
        }
      ]
    },
    {
      "id": "endolimax-nana",
      "name": "Endolimax nana",
      "verified": true,
      "stage": "Cisto maduro",
      "image": "./assets/microfotografias/endolimax-nana-cisto.jpg",
      "features": [
        "Cisto geralmente pequeno, de cerca de 5–10 µm.",
        "Forma madura tipicamente com quatro núcleos.",
        "Carossomos grandes e irregulares, sem cromatina periférica."
      ],
      "difference": "O padrão de quatro núcleos com carossomos grandes contrasta com o cisto de Iodamoeba, que possui um núcleo e grande vacúolo de glicogênio.",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "note": "",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageCaption": "Cisto maduro de Endolimax nana, conforme o material fornecido pela equipe.",
      "stages": [
        {
          "stage": "Cisto maduro",
          "image": "./assets/microfotografias/endolimax-nana-cisto.jpg",
          "caption": "Cisto maduro de Endolimax nana, conforme o material fornecido pela equipe.",
          "features": [
            "Cisto geralmente pequeno, de cerca de 5–10 µm.",
            "Forma madura tipicamente com quatro núcleos.",
            "Carossomos grandes e irregulares, sem cromatina periférica."
          ]
        },
        {
          "stage": "Trofozoíto",
          "image": "./assets/microfotografias/endolimax-nana-trofozoito.jpg",
          "caption": "Trofozoíto de Endolimax nana, conforme legenda do material fornecido.",
          "features": [
            "Um núcleo com carossomo grande e irregular.",
            "Ausência de cromatina periférica.",
            "Citoplasma granular e frequentemente vacuolado."
          ]
        }
      ]
    },
    {
      "id": "iodamoeba-butschlii",
      "name": "Iodamoeba bütschlii",
      "verified": true,
      "stage": "Trofozoíto",
      "image": "./assets/microfotografias/iodamoeba-butschlii-trofozoito.jpg",
      "features": [
        "Um núcleo com carossomo grande, geralmente central.",
        "Podem ocorrer grânulos acromáticos em torno do carossomo.",
        "Citoplasma granular e vacuolado."
      ],
      "difference": "A comparação do núcleo e dos grânulos ao redor do carossomo auxilia o estudo; a diferenciação de Endolimax nana pode ser difícil.",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "note": "O cisto, não fotografado neste documento, apresenta uma grande massa de glicogênio. A grafia Iodamoeba buetschlii também é usada nas fontes.",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageCaption": "Trofozoíto de Iodamoeba bütschlii, conforme o material fornecido pela equipe.",
      "stages": [
        {
          "stage": "Trofozoíto",
          "image": "./assets/microfotografias/iodamoeba-butschlii-trofozoito.jpg",
          "caption": "Trofozoíto de Iodamoeba bütschlii, conforme o material fornecido pela equipe.",
          "features": [
            "Um núcleo com carossomo grande, geralmente central.",
            "Podem ocorrer grânulos acromáticos em torno do carossomo.",
            "Citoplasma granular e vacuolado."
          ]
        }
      ]
    },
    {
      "id": "giardia-duodenalis",
      "name": "Giardia duodenalis",
      "verified": true,
      "stage": "Trofozoíto",
      "image": "./assets/microfotografias/giardia-duodenalis-trofozoito.jpg",
      "features": [
        "Formato piriforme com simetria bilateral.",
        "Dois núcleos normalmente reconhecíveis em preparados corados.",
        "Disco adesivo ventral, corpos medianos e oito flagelos."
      ],
      "difference": "Dois núcleos e disco ventral são pistas relevantes na comparação com outros flagelados.",
      "sourceUrl": "https://www.cdc.gov/dpdx/giardiasis/",
      "sourceName": "CDC DPDx — Giardíase",
      "note": "",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageCaption": "Trofozoíto de Giardia duodenalis, conforme o material fornecido pela equipe.",
      "stages": [
        {
          "stage": "Trofozoíto",
          "image": "./assets/microfotografias/giardia-duodenalis-trofozoito.jpg",
          "caption": "Trofozoíto de Giardia duodenalis, conforme o material fornecido pela equipe.",
          "features": [
            "Formato piriforme com simetria bilateral.",
            "Dois núcleos normalmente reconhecíveis em preparados corados.",
            "Disco adesivo ventral, corpos medianos e oito flagelos."
          ]
        }
      ]
    },
    {
      "id": "blastocystis-hominis",
      "name": "Blastocystis hominis",
      "verified": true,
      "stage": "Forma vacuolar",
      "image": "./assets/microfotografias/blastocystis-forma-vacuolar.jpg",
      "features": [
        "Forma usualmente arredondada ou oval.",
        "Grande corpo central (vacúolo) circundado por fina faixa de citoplasma.",
        "Núcleos podem aparecer na periferia celular."
      ],
      "difference": "O grande corpo central com borda citoplasmática fina caracteriza a forma vacuolar.",
      "sourceUrl": "https://www.cdc.gov/dpdx/blastocystis/",
      "sourceName": "CDC DPDx — Blastocystis",
      "note": "O nome Blastocystis hominis é tradicional; a designação Blastocystis sp. é preferida em muitos contextos porque há subtipos diversos.",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageCaption": "Forma vacuolar de Blastocystis sp., tradicionalmente denominado B. hominis.",
      "stages": [
        {
          "stage": "Forma vacuolar",
          "image": "./assets/microfotografias/blastocystis-forma-vacuolar.jpg",
          "caption": "Forma vacuolar de Blastocystis sp., tradicionalmente denominado B. hominis.",
          "features": [
            "Forma usualmente arredondada ou oval.",
            "Grande corpo central (vacúolo) circundado por fina faixa de citoplasma.",
            "Núcleos podem aparecer na periferia celular."
          ]
        }
      ]
    },
    {
      "id": "cryptosporidium",
      "name": "Cryptosporidium parvum / hominis",
      "verified": true,
      "stage": "Oocisto",
      "image": "./assets/microfotografias/cryptosporidium-oocistos.jpg",
      "features": [
        "Oocisto pequeno, esférico, em torno de 4–5 µm.",
        "Pode conter quatro esporozoítos visíveis conforme o preparo.",
        "Pode ser evidenciado por colorações ácido-resistentes modificadas ou imunofluorescência."
      ],
      "difference": "Oocistos minúsculos e arredondados contrastam com os oocistos grandes e elipsoidais de Cystoisospora.",
      "sourceUrl": "https://www.cdc.gov/dpdx/cryptosporidiosis/",
      "sourceName": "CDC DPDx — Criptosporidiose",
      "note": "A morfologia do oocisto não permite distinguir com segurança C. parvum de C. hominis.",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageCaption": "Oocistos de Cryptosporidium spp.; a fotografia não diferencia C. parvum de C. hominis.",
      "stages": [
        {
          "stage": "Oocisto",
          "image": "./assets/microfotografias/cryptosporidium-oocistos.jpg",
          "caption": "Oocistos de Cryptosporidium spp.; a fotografia não diferencia C. parvum de C. hominis.",
          "features": [
            "Oocisto pequeno, esférico, em torno de 4–5 µm.",
            "Pode conter quatro esporozoítos visíveis conforme o preparo.",
            "Pode ser evidenciado por colorações ácido-resistentes modificadas ou imunofluorescência."
          ]
        }
      ]
    },
    {
      "id": "cystoisospora-belli",
      "name": "Cystoisospora belli",
      "verified": true,
      "stage": "Oocisto imaturo",
      "image": "./assets/microfotografias/cystoisospora-belli-oocisto.jpg",
      "features": [
        "Oocisto grande, tipicamente elipsoidal, de cerca de 25–30 µm.",
        "Na eliminação fecal, geralmente contém um esporoblasto.",
        "Após a esporulação pode apresentar dois esporocistos."
      ],
      "difference": "O grande oocisto alongado difere dos pequenos oocistos arredondados de Cryptosporidium.",
      "sourceUrl": "https://www.cdc.gov/dpdx/cystoisosporiasis/",
      "sourceName": "CDC DPDx — Cistoisosporíase",
      "note": "A imagem representa um oocisto, não um trofozoíto.",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageCaption": "Oocisto de Cystoisospora belli; oocistos não são trofozoítos.",
      "stages": [
        {
          "stage": "Oocisto imaturo",
          "image": "./assets/microfotografias/cystoisospora-belli-oocisto.jpg",
          "caption": "Oocisto de Cystoisospora belli; oocistos não são trofozoítos.",
          "features": [
            "Oocisto grande, tipicamente elipsoidal, de cerca de 25–30 µm.",
            "Na eliminação fecal, geralmente contém um esporoblasto.",
            "Após a esporulação pode apresentar dois esporocistos."
          ]
        }
      ]
    },
    {
      "id": "balantioides-coli",
      "name": "Balantioides coli",
      "verified": true,
      "stage": "Trofozoíto",
      "image": "./assets/microfotografias/balantioides-coli-trofozoito.jpg",
      "features": [
        "Trofozoíto geralmente grande, cerca de 40–200 µm.",
        "Superfície coberta por cílios e presença de citóstoma.",
        "Macronúcleo alongado/reniforme, frequentemente visível."
      ],
      "difference": "É o ciliado da lista; os cílios e o macronúcleo em formato de rim são pistas marcantes.",
      "sourceUrl": "https://www.cdc.gov/dpdx/balantidiasis/",
      "sourceName": "CDC DPDx — Balantidíase",
      "note": "Também pode aparecer sob os nomes Balantidium coli ou Neobalantidium coli.",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageCaption": "Trofozoíto de Balantioides coli, conforme o material fornecido pela equipe.",
      "stages": [
        {
          "stage": "Trofozoíto",
          "image": "./assets/microfotografias/balantioides-coli-trofozoito.jpg",
          "caption": "Trofozoíto de Balantioides coli, conforme o material fornecido pela equipe.",
          "features": [
            "Trofozoíto geralmente grande, cerca de 40–200 µm.",
            "Superfície coberta por cílios e presença de citóstoma.",
            "Macronúcleo alongado/reniforme, frequentemente visível."
          ]
        }
      ]
    },
    {
      "id": "trichomonas-vaginalis",
      "name": "Trichomonas vaginalis",
      "verified": true,
      "stage": "Trofozoíto",
      "image": "./assets/microfotografias/trichomonas-vaginalis-trofozoito.jpg",
      "features": [
        "Trofozoíto piriforme com um núcleo anterior.",
        "Quatro flagelos anteriores e um associado à membrana ondulante.",
        "Membrana ondulante e axóstilo são estruturas importantes."
      ],
      "difference": "A membrana ondulante e o núcleo único diferenciam-no do trofozoíto de Giardia.",
      "sourceUrl": "https://www.cdc.gov/dpdx/trichomoniasis/",
      "sourceName": "CDC DPDx — Tricomoníase",
      "note": "Não há estágio cístico reconhecido.",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageCaption": "Trofozoíto de Trichomonas vaginalis, conforme o material fornecido pela equipe.",
      "stages": [
        {
          "stage": "Trofozoíto",
          "image": "./assets/microfotografias/trichomonas-vaginalis-trofozoito.jpg",
          "caption": "Trofozoíto de Trichomonas vaginalis, conforme o material fornecido pela equipe.",
          "features": [
            "Trofozoíto piriforme com um núcleo anterior.",
            "Quatro flagelos anteriores e um associado à membrana ondulante.",
            "Membrana ondulante e axóstilo são estruturas importantes."
          ]
        },
        {
          "stage": "Trofozoíto em citologia",
          "image": "./assets/microfotografias/trichomonas-vaginalis-colpocitologia.png",
          "caption": "Colpocitologia com estruturas atribuídas a Trichomonas vaginalis, indicadas por setas no material fornecido.",
          "features": [
            "Forma trofozoítica em material de citologia.",
            "O sítio habitual é o trato urogenital.",
            "Não há estágio cístico reconhecido."
          ]
        }
      ]
    }
  ],
  "missions": [
    {
      "id": "missao-01",
      "number": "01",
      "title": "O núcleo da investigação",
      "eyebrow": "AMEBA / TROFOZOÍTO",
      "specimen": "Caso didático com microfotografia",
      "scenario": "Na bancada de investigação, um preparo didático apresenta uma forma ameboide. O registro descreve um único núcleo, carossomo pequeno e cromatina periférica delicada. A equipe precisa decidir qual grupo corresponde à estrutura.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/microfotografias/entamoeba-histolytica-trofozoito.jpg",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
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
      "sourceUrl": "https://www.cdc.gov/dpdx/amebiasis/",
      "organismId": "entamoeba-histolytica",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4"
    },
    {
      "id": "missao-02",
      "number": "02",
      "title": "Oito sinais no interior",
      "eyebrow": "AMEBA / CISTO",
      "specimen": "Caso didático com microfotografia",
      "scenario": "Um cisto arredondado chama atenção pela grande quantidade de estruturas nucleares. O laboratório solicitou uma hipótese baseada na morfologia do cisto maduro.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/microfotografias/entamoeba-coli-cisto.jpg",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
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
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/",
      "organismId": "entamoeba-coli",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageClipBottom": 10
    },
    {
      "id": "missao-03",
      "number": "03",
      "title": "Quatro pontos discretos",
      "eyebrow": "AMEBA / CISTO",
      "specimen": "Caso didático com microfotografia",
      "scenario": "Uma forma pequena e arredondada foi separada para estudo. No registro microscópico corado aparecem quatro núcleos, cada qual com um carossomo relativamente grande.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/microfotografias/endolimax-nana-cisto.jpg",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
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
      "explanation": "O caso aborda características de cisto maduro de Endolimax nana: cerca de 5–10 µm, quatro núcleos e carossomos grandes, com ausência de cromatina periférica.",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/",
      "organismId": "endolimax-nana",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "imageClipBottom": 11
    },
    {
      "id": "missao-04",
      "number": "04",
      "title": "O núcleo e seus grânulos",
      "eyebrow": "AMEBA / TROFOZOÍTO",
      "specimen": "Caso didático com microfotografia",
      "scenario": "O material de estudo apresenta uma ameba com um núcleo. Para este caso, considere o carossomo grande e a possibilidade de grânulos acromáticos ao redor dele, em citoplasma granular e vacuolado.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/microfotografias/iodamoeba-butschlii-trofozoito.jpg",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
      "options": [
        "Iodamoeba bütschlii",
        "Endolimax nana",
        "Entamoeba coli"
      ],
      "answer": "Iodamoeba bütschlii",
      "stage": "Trofozoíto",
      "hints": [
        "Observe o núcleo e considere a disposição dos grânulos ao redor do carossomo.",
        "A diferenciação em relação a Endolimax nana pode ser difícil; grânulos acromáticos ao redor do carossomo são uma característica de referência."
      ],
      "explanation": "O caso usa o trofozoíto de Iodamoeba bütschlii, com um núcleo e carossomo grande. Grânulos acromáticos podem circundar o carossomo. O grande vacúolo de glicogênio é uma característica do cisto, não a pista usada nesta fotografia.",
      "sourceName": "CDC DPDx — Amebas intestinais",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/",
      "organismId": "iodamoeba-butschlii",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4"
    },
    {
      "id": "missao-05",
      "number": "05",
      "title": "O enigma dos dois núcleos",
      "eyebrow": "PROTOZOÁRIO FLAGELADO",
      "specimen": "Caso didático com microfotografia",
      "scenario": "Uma estrutura de contorno piriforme foi fotografada para o treinamento da equipe. Duas regiões nucleares simétricas se destacam na extremidade mais larga.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/microfotografias/giardia-duodenalis-trofozoito.jpg",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
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
      "sourceUrl": "https://www.cdc.gov/dpdx/giardiasis/",
      "organismId": "giardia-duodenalis",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4"
    },
    {
      "id": "missao-06",
      "number": "06",
      "title": "O grande centro",
      "eyebrow": "FORMA VACUOLAR",
      "specimen": "Caso didático com microfotografia",
      "scenario": "Na imagem microscópica, uma estrutura arredondada exibe uma região central muito maior que a faixa de citoplasma à sua volta. O investigador avalia essa organização.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/microfotografias/blastocystis-forma-vacuolar.jpg",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
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
      "sourceUrl": "https://www.cdc.gov/dpdx/blastocystis/",
      "organismId": "blastocystis-hominis",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4"
    },
    {
      "id": "missao-07",
      "number": "07",
      "title": "Pequenos círculos, grande desafio",
      "eyebrow": "COCCÍDIO / OOCISTO",
      "specimen": "Caso didático com microfotografia",
      "scenario": "O laboratório representa um pequeno oocisto arredondado em sua ficha didática. A equipe deve compará-lo a outro oocisto, muito maior e alongado.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/microfotografias/cryptosporidium-oocistos.jpg",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
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
      "explanation": "O caso apresenta oocisto de Cryptosporidium spp., tipicamente esférico, com cerca de 4–5 µm. C. parvum e C. hominis não são distinguíveis apenas pela aparência do oocisto.",
      "sourceName": "CDC DPDx — Criptosporidiose",
      "sourceUrl": "https://www.cdc.gov/dpdx/cryptosporidiosis/",
      "organismId": "cryptosporidium",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4"
    },
    {
      "id": "missao-08",
      "number": "08",
      "title": "A cápsula alongada",
      "eyebrow": "COCCÍDIO / OOCISTO",
      "specimen": "Caso didático com microfotografia",
      "scenario": "Uma segunda estrutura do tipo oocisto foi desenhada. Ao contrário da anterior, apresenta formato alongado e uma massa interna que representa um esporoblasto.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/microfotografias/cystoisospora-belli-oocisto.jpg",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
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
      "sourceUrl": "https://www.cdc.gov/dpdx/cystoisosporiasis/",
      "organismId": "cystoisospora-belli",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4"
    },
    {
      "id": "missao-09",
      "number": "09",
      "title": "A célula de cílios",
      "eyebrow": "CILIADO / TROFOZOÍTO",
      "specimen": "Caso didático com microfotografia",
      "scenario": "Um organismo oval e volumoso surge no visor do laboratório. A superfície está coberta por numerosas projeções curtas, e o interior mostra um núcleo maior de contorno curvado.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/microfotografias/balantioides-coli-trofozoito.jpg",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
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
      "sourceUrl": "https://www.cdc.gov/dpdx/balantidiasis/",
      "organismId": "balantioides-coli",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4"
    },
    {
      "id": "missao-10",
      "number": "10",
      "title": "A membrana misteriosa",
      "eyebrow": "PROTOZOÁRIO FLAGELADO",
      "specimen": "Caso didático com microfotografia",
      "scenario": "Um preparo didático revela uma célula piriforme com um núcleo e projeções móveis. Uma das bordas do desenho contém uma membrana ondulante.",
      "question": "Qual organismo corresponde à estrutura representada?",
      "image": "./assets/microfotografias/trichomonas-vaginalis-trofozoito.jpg",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
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
      "sourceUrl": "https://www.cdc.gov/dpdx/trichomoniasis/",
      "organismId": "trichomonas-vaginalis",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4"
    },
    {
      "title": "A forma protegida",
      "question": "Qual estágio do complexo E. histolytica/E. dispar é apresentado?",
      "options": [
        "Cisto",
        "Trofozoíto",
        "Oocisto"
      ],
      "answer": "Cisto",
      "scenario": "A fotografia do material de estudo mostra uma estrutura delimitada por parede, atribuída ao complexo E. histolytica/E. dispar. Compare a forma com o estágio ameboide estudado em outro caso.",
      "hints": [
        "A parede delimita uma forma de resistência.",
        "O ciclo apresenta cistos e trofozoítos; a forma cística resiste melhor no ambiente."
      ],
      "explanation": "A imagem fornecida foi identificada como cisto. No complexo E. histolytica/E. dispar, os cistos maduros podem ter até quatro núcleos, nem sempre visíveis no mesmo plano. A morfologia isolada não confirma E. histolytica.",
      "id": "missao-11",
      "number": "11",
      "organismId": "entamoeba-histolytica",
      "eyebrow": "ESTÁGIOS BIOLÓGICOS",
      "specimen": "Caso didático com microfotografia",
      "image": "./assets/microfotografias/entamoeba-histolytica-cisto.jpg",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
      "stage": "Cisto",
      "hideStage": true,
      "sourceName": "CDC DPDx — Amebíase",
      "sourceUrl": "https://www.cdc.gov/dpdx/amebiasis/",
      "imageClipBottom": 12
    },
    {
      "title": "Uma ameba fora do cisto",
      "question": "Qual combinação de organismo e estágio corresponde ao caso?",
      "options": [
        "Entamoeba coli — trofozoíto",
        "Entamoeba coli — cisto",
        "Endolimax nana — cisto"
      ],
      "answer": "Entamoeba coli — trofozoíto",
      "scenario": "Considere uma ameba intestinal com um único núcleo, carossomo geralmente excêntrico e cromatina periférica grosseira. O material da equipe registra a forma celular ativa para esta investigação.",
      "hints": [
        "A questão compara uma forma celular ativa com formas císticas.",
        "Considere a combinação de carossomo excêntrico e cromatina periférica grosseira."
      ],
      "explanation": "O caso aborda o trofozoíto de Entamoeba coli. Ele tem um núcleo e cromatina periférica geralmente grosseira. O cisto maduro da mesma espécie, estudado em outra questão, pode apresentar oito núcleos ou mais.",
      "id": "missao-12",
      "number": "12",
      "organismId": "entamoeba-coli",
      "eyebrow": "ESTÁGIOS BIOLÓGICOS",
      "specimen": "Caso didático com microfotografia",
      "image": "./assets/microfotografias/entamoeba-coli-trofozoito.jpg",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
      "stage": "Trofozoíto",
      "hideStage": true,
      "sourceName": "CDC DPDx — Amebas intestinais",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/"
    },
    {
      "title": "O carossomo irregular",
      "question": "Qual combinação de organismo e estágio corresponde ao caso?",
      "options": [
        "Endolimax nana — trofozoíto",
        "Endolimax nana — cisto",
        "Entamoeba histolytica — cisto"
      ],
      "answer": "Endolimax nana — trofozoíto",
      "scenario": "O registro da equipe apresenta uma pequena ameba. Considere um único núcleo, carossomo grande e irregular e ausência de cromatina periférica, em vez da organização nuclear de um cisto maduro.",
      "hints": [
        "Observe a descrição de um único núcleo com carossomo grande.",
        "A ausência de cromatina periférica e o carossomo irregular são características de referência de Endolimax nana."
      ],
      "explanation": "A forma estudada é o trofozoíto de Endolimax nana. O carossomo pode ser grande e irregular e o núcleo não apresenta cromatina periférica. O cisto maduro tem quatro núcleos, embora nem todos apareçam no mesmo plano.",
      "id": "missao-13",
      "number": "13",
      "organismId": "endolimax-nana",
      "eyebrow": "ESTÁGIOS BIOLÓGICOS",
      "specimen": "Caso didático com microfotografia",
      "image": "./assets/microfotografias/endolimax-nana-trofozoito.jpg",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
      "stage": "Trofozoíto",
      "hideStage": true,
      "sourceName": "CDC DPDx — Amebas intestinais",
      "sourceUrl": "https://www.cdc.gov/dpdx/intestinalamebae/"
    },
    {
      "title": "A ameba no tecido",
      "question": "De qual local foi obtida a amostra descrita no material?",
      "options": [
        "Biópsia retal",
        "Esfregaço vaginal",
        "Amostra urinária"
      ],
      "answer": "Biópsia retal",
      "scenario": "Esta imagem foi apresentada pela equipe como corte histológico corado por hematoxilina e eosina, com trofozoítos de E. histolytica indicados por setas em tecido intestinal. Identifique o contexto da coleta.",
      "hints": [
        "O caso trata de tecido intestinal, não de um estágio novo.",
        "A legenda original identifica uma biópsia da porção final do intestino grosso."
      ],
      "explanation": "A legenda descreve trofozoítos de E. histolytica em biópsia retal corada por H&E, como na galeria CDC DPDx. O reto é o local da amostra; a fase biológica continua sendo o trofozoíto.",
      "id": "missao-14",
      "number": "14",
      "organismId": "entamoeba-histolytica",
      "eyebrow": "CONTEXTO DA AMOSTRA",
      "specimen": "Caso didático com microfotografia",
      "image": "./assets/microfotografias/entamoeba-histolytica-biopsia-retal.jpg",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
      "stage": "Trofozoíto em tecido",
      "hideStage": false,
      "sourceName": "CDC DPDx — Amebíase",
      "sourceUrl": "https://www.cdc.gov/dpdx/amebiasis/"
    },
    {
      "title": "O contexto da citologia",
      "question": "Qual é o sítio habitual do organismo apresentado neste caso?",
      "options": [
        "Trato urogenital",
        "Intestino grosso",
        "Fígado"
      ],
      "answer": "Trato urogenital",
      "scenario": "O documento apresenta uma colpocitologia com estruturas atribuídas a Trichomonas vaginalis indicadas por setas. Relacione o contexto da amostra ao local habitual desse organismo no hospedeiro.",
      "hints": [
        "Colpocitologia é um contexto diferente de exame de fezes.",
        "Trichomonas vaginalis é estudado no trato urogenital e não possui estágio cístico reconhecido."
      ],
      "explanation": "Trichomonas vaginalis ocorre no trato urogenital e apresenta trofozoítos, sem estágio cístico reconhecido. A localização anatômica não é uma nova fase do ciclo. A citologia isolada não substitui métodos confirmatórios.",
      "id": "missao-15",
      "number": "15",
      "organismId": "trichomonas-vaginalis",
      "eyebrow": "CONTEXTO DA AMOSTRA",
      "specimen": "Caso didático com microfotografia",
      "image": "./assets/microfotografias/trichomonas-vaginalis-colpocitologia.png",
      "imageType": "microphotograph",
      "imageCredit": "Material de imagens fornecido pela Equipe 4",
      "alt": "Microfotografia da estrutura em investigação, fornecida pela Equipe 4.",
      "stage": "Trofozoíto em citologia",
      "hideStage": false,
      "sourceName": "CDC DPDx — Tricomoníase",
      "sourceUrl": "https://www.cdc.gov/dpdx/trichomoniasis/"
    }
  ]
};
  global.PARASITOLAB_DATA = data;
  if (typeof module !== "undefined" && module.exports) module.exports = data;
})(typeof globalThis !== "undefined" ? globalThis : this);
