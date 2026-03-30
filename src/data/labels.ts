// Auto-converted from data/labels/*.js — do not edit the individual JS files after migration.

export interface LabelTag {
  id: string
  label: string
  explanation: string
}

export interface CredibilityItem {
  label: string
  text: string
}

export interface NoteItem {
  label: string
  text: string
}

export interface CrossLink {
  name: string
  id: string
}

export interface Label {
  id: string
  name: string
  image: string
  website: string
  tags: LabelTag[]
  cardDescription: string
  description: string[]
  credibility: {
    summary: string
    items?: CredibilityItem[]
  }
  notes: {
    items: NoteItem[]
  }
  crossLinks: CrossLink[]
}

export const labels: Label[] = [
{
  id: "akta-vara",
  name: "Äkta Vara",
  image: "images/aktavara.png",
  website: "https://www.aktavara.org/",
  tags: [
    {
      id: "halsa",
      label: "Hälsa",
      explanation: "Garanterar att produkten innehåller hög halt av karaktärsgivande råvaror och ett minimum av tillsatser.",
    }
  ],
  cardDescription: "Konsumentmärkning för livsmedel som innehåller det du förväntar dig – hög halt av riktiga råvaror och inga onödiga tillsatser.",
  description: [
    "Äkta Vara är en svensk konsumentmärkning som drivs av den ideella föreningen Äkta Vara Sverige, grundad 2006. Verksamheten tog fart 2008 i samband med journalisten Mats-Eric Nilssons bok \"Äkta vara\" som granskade 150 livsmedelsprodukter i jakt på genuina varor utan onödiga tillsatser.",
    "Föreningens Ä-märke hjälper konsumenter att hitta livsmedel som är det de utger sig för att vara. En Ä-märkt produkt ska ha hög halt av de karaktärsgivande råvarorna – till exempel hög kötthalt i korv eller hög bärhalt i sylt – och ett minimum av tillsatser. Föreningen driver även kampanjen Årets Matbluff som uppmärksammar vilseledande livsmedel. Idag finns cirka 600 Ä-märkta produkter."
  ],
  credibility: {
    summary: "Granskas av den ideella föreningen Äkta Vara Sverige som bedömer ingrediensförteckningar — ingen oberoende tredjepartsrevision eller laboratorietestning.",
    items: [
      {
        label: "Ingrediensgranskning",
        text: "Bedömningen bygger enbart på en granskning av produktens ingrediensförteckning. Ingen oberoende revisor eller produkttestning är inblandad."
      },
      {
        label: "Konsumentrapportering",
        text: "Konsumenter kan rapportera produkter de anser inte lever upp till märkningens krav. Föreningen driver även kampanjen Årets Matbluff som uppmärksammar vilseledande livsmedel."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "Nyckelhålet",
        text: "Nyckelhålet reglerar näringsinnehåll som fett, socker och salt. Äkta Vara reglerar råvaruhalt och tillsatser. En korv med hög kötthalt kan vara Ä-märkt men för salt för Nyckelhålet, och en Nyckelhålsmärkt produkt kan ha låg råvaruhalt om näringskraven uppfylls. Märkningarna mäter alltså helt olika saker."
      },
      {
        label: "Årets Matbluff",
        text: "Föreningens kampanj Årets Matbluff har visat sig ha konkret effekt — tre av fem finalister 2024 ändrade sina produkter efter kritiken, bland annat Arla som bytte en kritiserad logotyp och Axa som korrigerade vilseledande fruktpåståenden. Föreningen anmäler även produkter till Livsmedelsverket och Konsumentverket."
      }
    ]
  },
  crossLinks: [
    { name: "Nyckelhålet", id: "nyckelhalet" }
  ]
},
{
  id: "asc",
  name: "ASC",
  image: "images/asc.svg",
  website: "https://www.asc-aqua.org/",
  tags: [
    {
      id: "hav-fiske",
      label: "Hav & fiske",
      explanation: "Certifierar att odlad fisk och skaldjur kommer från ansvarsfullt och hållbart vattenbruk.",
    },
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Krav på minimal miljöpåverkan, skydd av biologisk mångfald, ansvarsfull foderanvändning och hållbar vattenhantering.",
    },
    {
      id: "djurvalf",
      label: "Djurvälfärd",
      explanation: "Standarden inkluderar krav på djurvälfärd för odlad fisk, inklusive sjukdomshantering och begränsad antibiotikaanvändning.",
    },
    {
      id: "socialt-ansvar",
      label: "Socialt ansvar",
      explanation: "Krav på rättvisa arbetsvillkor och respekt för mänskliga rättigheter i vattenbruksverksamheten.",
    }
  ],
  cardDescription: "Internationell certifiering för ansvarsfullt odlad fisk och skaldjur. ASC-märket garanterar att vattenbruket uppfyller krav på miljö, djurvälfärd och socialt ansvar.",
  description: [
    "ASC (Aquaculture Stewardship Council) är en oberoende internationell organisation som grundades 2010 av Världsnaturfonden (WWF) och den nederländska organisationen IDH (Dutch Sustainable Trade Initiative). ASC driver världens ledande certifieringsprogram för ansvarsfullt vattenbruk.",
    "ASC-certifieringen omfattar odlad fisk och skaldjur som lax, räkor, pangasius, tilapia, musslor, ostron och abalone. Standarden ställer krav på miljöhänsyn, djurvälfärd, ansvarsfull foderanvändning, begränsad kemikalie- och antibiotikaanvändning samt rättvisa arbetsvillkor. ASC har även en spårbarhetsstandard (Chain of Custody) som garanterar att ASC-märkta produkter kan spåras genom hela leveranskedjan."
  ],
  credibility: {
    summary: "Certifieras av oberoende organ ackrediterade av ASI (Accreditation Services International), med över 500 kontrollpunkter och treåriga certifieringscykler."
  },
  notes: {
    items: [
      {
        label: "MSC",
        text: "ASC och MSC är systermärkningar som delar spårbarhetsstandard (Chain of Custody). ASC certifierar odlad sjömat, MSC vildfångad. Produkter kan bära båda märkena om leveranskedjan hanterar båda typerna."
      },
      {
        label: "Industripåverkan",
        text: "Miljöorganisationer har kritiserat ASC:s nya odlingsstandard för att gynna industrin framför miljön. Certifierade laxodlingar i Norge och Chile har opererats utanför tillstånd och i skyddade naturområden — Salmar fick ASC-certifiering för en odling mitt i Froans naturreservat. ASC har också kritiserats för bristande åtgärder mot för höga lusnivåer på laxodlingar."
      }
    ]
  },
  crossLinks: [
    { name: "MSC", id: "msc" }
  ]
},
{
  id: "astma-allergiforbundet",
  name: "Astma- och Allergiförbundet",
  image: "images/astma.webp",
  website: "https://astmaoallergiforbundet.se/",
  tags: [
    {
      id: "halsa",
      label: "Hälsa",
      explanation: "Produkter testade och godkända för personer med astma, allergi eller annan överkänslighet.",
    }
  ],
  cardDescription: "Astma- och Allergiförbundets märkning för produkter som är skonsamma mot luftvägar och hud. Produkterna är testade och godkända av oberoende experter.",
  description: [
    "Astma- och Allergiförbundet är en svensk patientorganisation som sedan 1959 arbetar för att förbättra livsvillkoren för personer med astma, allergi och annan överkänslighet. Förbundets märkning finns på produkter som genomgått tester och bedömts vara skonsamma mot luftvägar och hud.",
    "Märkningen finns på ett brett sortiment av produkter inklusive rengöringsmedel, tvättmedel, hygienartiklar, kosmetika, textilier, byggmaterial och inredning. Produkterna testas av oberoende experter och måste uppfylla strikta krav på låg halt av irriterande ämnen, dofter och allergener. Märkningen hjälper konsumenter att hitta produkter som minskar risken för allergiska reaktioner och astmabesvär."
  ],
  credibility: {
    summary: "Produkter granskas av oberoende toxikologer och kemister. Vissa kategorier kräver även praktiska tester på frivilliga med känslig hud eller luftvägar. Licensen förnyas årligen."
  },
  notes: {
    items: [
      {
        label: "Asthma Allergy Nordic",
        text: "Sedan 2018 har den svenska Svalanmärkningen fasats ut till förmån för Asthma Allergy Nordic — en gemensam nordisk produktmärkning som drivs av astma- och allergiförbunden i Sverige, Norge och Danmark. Kraven är desamma, men logotypen och namnet är nya. Konsumenter kan stöta på båda symbolerna under övergångsperioden."
      },
      {
        label: "Ekologiskt och allergi",
        text: "Ekologiska produkter kan innehålla naturliga allergener och parfymämnen som eteriska oljor. Astma- och Allergiförbundets märkning testar specifikt för att minimera risk för allergiska reaktioner, oavsett om produkten är ekologisk eller konventionell. En produkt märkt EU-ekologiskt är alltså inte automatiskt säkrare för allergiker."
      }
    ]
  },
  crossLinks: [
    { name: "EU-ekologiskt", id: "eu-ekologiskt" }
  ]
},
{
  id: "bra-miljoval",
  name: "Bra Miljöval",
  image: "images/bra-miljoval.png",
  website: "https://www.bramiljoval.se/",
  tags: [
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Strikta krav på att naturresurser sparas, biologisk mångfald skyddas och att giftiga kemikalier fasas ut.",
    },
    {
      id: "halsa",
      label: "Hälsa",
      explanation: "Krav på att eliminera hälsoskadliga ämnen som cancerframkallande, hormonstörande och allergiframkallande kemikalier.",
    }
  ],
  cardDescription: "Naturskyddsföreningens egen miljömärkning. Bra Miljöval ställer hårda krav på produkter och tjänster inom bland annat energi, kemikalier, transporter och försäkringar.",
  description: [
    "Bra Miljöval är Naturskyddsföreningens miljömärkning och grundades 1990. Det är den enda miljömärkningen i Sverige som drivs av en miljöorganisation. Märkningen är en oberoende tredjepartscertifiering enligt ISO 14024 och granskas av Global Ecolabelling Network (GEN) genom deras GENICES-förfarande.",
    "Märkningen omfattar över 700 certifierade produkter och tjänster inom tolv olika områden: elenergi, fjärrvärme, fjärrkyla, biobränsle, fordonsbränsle, persontransporter, godstransporter, budtjänster, kemiska produkter, kosmetika, försäkringar och livsmedelsbutiker. Kriterierna är strikta och skärps löpande för att driva miljöutvecklingen framåt."
  ],
  credibility: {
    summary: "Ägs och granskas av Naturskyddsföreningen — den enda svenska miljömärkningen som drivs av en miljöorganisation. Oberoende tredjepartscertifiering enligt ISO 14024."
  },
  notes: {
    items: [
      {
        label: "Svanen",
        text: "Båda är typ 1-märkningar (ISO 14024) för icke-livsmedel, men Bra Miljöval drivs av Naturskyddsföreningen medan Svanen är en nordisk statlig märkning. Bra Miljöval anses ofta ha strängare kemikaliekrav och täcker unika områden som energi, transporter och försäkringar."
      },
      {
        label: "Kärnkraft och energi",
        text: "Bra Miljöval kräver förnybar energi och godkänner inte kärnkraft. SJ lämnade märkningen 2024 efter 30 år för att istället använda fossilfri el inklusive kärnkraft. Flera elbolag har också lämnat och ifrågasatt om systemet med ursprungsgarantier faktiskt levererar klimatnytta."
      }
    ]
  },
  crossLinks: [
    { name: "Svanen", id: "svanen" }
  ]
},
{
  id: "demeter",
  name: "Demeter",
  image: "images/demeter.png",
  website: "https://www.demeter.se/",
  tags: [
    {
      id: "ekologiskt",
      label: "Ekologiskt",
      explanation: "Biodynamisk odling uppfyller alla krav för ekologisk produktion och går betydligt längre med kretsloppsprinciper och preparatanvändning.",
    },
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Kretsloppsjordbruk med fokus på jordhälsa, biologisk mångfald och slutna näringscykler utan kemiska insatsmedel.",
    },
    {
      id: "djurvalf",
      label: "Djurvälfärd",
      explanation: "Strikta krav på naturligt beteende, utevistelse, dagsljus och att foder ska komma från den egna gården eller ekologiska källor.",
    }
  ],
  cardDescription: "Internationell certifiering för biodynamiskt jordbruk – den strängaste formen av ekologisk produktion. Demeter kräver kretsloppsjordbruk och går långt utöver EU:s och KRAV:s ekologiska regler.",
  description: [
    "Demeter är en internationell certifiering för biodynamiskt jordbruk och drivs av ett nätverk av kontrollorganisationer i över 19 länder. I Sverige representeras Demeter av Svenska Demeterförbundet. Biodynamisk odling bygger på principer som formulerades av Rudolf Steiner på 1920-talet och betraktar gården som ett levande kretslopp.",
    "Demeterreglerna är de strängaste inom ekologisk odling. En Demetercertifierad gård måste uppfylla alla krav för ekologisk produktion enligt EU:s regler eller KRAV, och dessutom följa Demeterförbundets egna regler för kretsloppsjordbruk. Certifieringen omfattar livsmedel som grönsaker, frukt, spannmål, mejeriprodukter, kött, ägg och honung, men även textilier och naturkosmetika."
  ],
  credibility: {
    summary: "Dubbel kontroll: den ekologiska grundcertifieringen granskas av ackrediterade organ (Kiwa, SMAK, HS Certifiering), medan de biodynamiska kraven kontrolleras av Demeterförbundets egna inspektörer.",
    items: [
      {
        label: "Tre års omställning",
        text: "Omställningsperioden är normalt tre år — den längsta bland ekologiska märkningar. Det gör certifieringen till en stor investering och utesluter snabba byten."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "EU-ekologiskt",
        text: "Demeter uppfyller alla EU-krav för ekologisk produktion och en Demetercertifierad produkt bär alltid även EU-lövet. Premiumet man betalar för Demeter handlar om de biodynamiska tilläggen, inte om en annan ekologisk grundnivå."
      },
      {
        label: "Biodynamiska metoder",
        text: "Demeter bygger på Rudolf Steiners biodynamiska principer från 1920-talet, som inkluderar speciella preparat och hänsyn till måncykler vid sådd och skörd. Dessa metoder saknar vetenskapligt stöd — forskning har inte kunnat påvisa skillnader i resultat jämfört med annan ekologisk odling."
      },
      {
        label: "Koppar",
        text: "Demeter har strängare kopparregler än EU-ekologiskt: max 3 kg per hektar och år (mot EU:s 4 kg) och enbart på fleråriga grödor som vindruvor — inte på ettåriga som potatis eller tomater."
      }
    ]
  },
  crossLinks: [
    { name: "EU-ekologiskt", id: "eu-ekologiskt" }
  ]
},
{
  id: "eu-ecolabel",
  name: "EU Ecolabel",
  image: "images/eu-ecolabel.webp",
  website: "https://environment.ec.europa.eu/topics/circular-economy/eu-ecolabel-home_en",
  tags: [
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Livscykelbaserade krav på minskad miljöpåverkan, energieffektivitet, begränsade farliga kemikalier och cirkulär ekonomi.",
    },
    {
      id: "halsa",
      label: "Hälsa",
      explanation: "Strikta begränsningar av hälsoskadliga ämnen i produkter som rengöringsmedel, kosmetika och textilier.",
    }
  ],
  cardDescription: "EU:s officiella miljömärkning för varor och tjänster. EU Ecolabel granskar produkters miljöpåverkan genom hela livscykeln och finns på över 100 000 varor och tjänster i hela EU.",
  description: [
    "EU Ecolabel är Europeiska unionens officiella miljömärkning och lanserades 1992. Märkningen är frivillig och tilldelas produkter och tjänster som uppfyller strikta miljökrav genom hela sin livscykel, från råvara till avfall. EU Ecolabel regleras av EU-förordning 66/2010 och erkänns i alla EU:s medlemsländer. Över 100 000 varor och tjänster bär märkningen.",
    "I Sverige administreras EU Ecolabel av Miljömärkning Sverige AB – samma organisation som förvaltar Svanen. Märkningen är en typ 1-certifiering enligt ISO 14024 och omfattar elva produktområden, bland annat rengöringsmedel, textilier, papper, möbler, färg och lack, elektronik, trädgårdsprodukter och turistboenden. EU Ecolabel gäller inte livsmedel."
  ],
  credibility: {
    summary: "EU-reglerad märkning administrerad i Sverige av Miljömärkning Sverige AB, med tredjepartstestning av produkter mot kriterier utvecklade av EU-kommissionens forskningscentrum (JRC)."
  },
  notes: {
    items: [
      {
        label: "Svanen",
        text: "Båda är typ 1-märkningar (ISO 14024) och administreras i Sverige av samma organisation, Miljömärkning Sverige AB. Svanen ställer ofta strängare krav — bland annat på emballage och fabrik — medan EU Ecolabel har gemensamma minimikrav som gäller i hela EU."
      }
    ]
  },
  crossLinks: [
    { name: "Svanen", id: "svanen" }
  ]
},
{
  id: "eu-ekologiskt",
  name: "EU-ekologiskt",
  image: "images/eu-organic.png",
  website: "https://agriculture.ec.europa.eu/farming/organic-farming/organic-logo_en",
  tags: [
    {
      id: "ekologiskt",
      label: "Ekologiskt",
      explanation: "Grundkravet är ekologisk produktion utan kemiska bekämpningsmedel, konstgödsel eller GMO.",
    },
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Reglerna främjar kretslopp, biologisk mångfald och hållbar markanvändning.",
    },
    {
      id: "djurvalf",
      label: "Djurvälfärd",
      explanation: "Djuren ska ha tillgång till utevistelse, bete och ekologiskt foder samt möjlighet till naturligt beteende.",
    }
  ],
  cardDescription: "EU:s officiella märkning för ekologiska livsmedel. EU-lövet garanterar att minst 95 % av ingredienserna är ekologiskt producerade enligt EU:s gemensamma regelverk.",
  description: [
    "EU-ekologiskt, även kallat EU-lövet, är den officiella EU-märkningen för ekologiska produkter. Logotypen föreställer ett stiliserat löv format av EU:s stjärnor och är obligatorisk på alla färdigförpackade ekologiska livsmedel som produceras inom EU. Märkningen regleras av EU-förordning 2018/848 som trädde i kraft 2022 och ersatte det tidigare regelverket.",
    "För att en produkt ska få bära EU-lövet måste minst 95 % av jordbruksingredienserna vara ekologiskt producerade. Regelverket förbjuder kemiska bekämpningsmedel, konstgödsel och genetiskt modifierade organismer. Det omfattar växtodling, djurhållning, biodling, vattenbruk, förädling, import och distribution av ekologiska produkter."
  ],
  credibility: {
    summary: "EU-förordning kontrollerad av ackrediterade organ under Jordbruksverket och Swedac. Minst 10 % av kontrollerna ska vara oanmälda."
  },
  notes: {
    items: [
      {
        label: "KRAV",
        text: "KRAV:s regler är strängare än EU:s minimikrav på flera områden, bland annat djurvälfärd och socialt ansvar. Alla KRAV-certifierade produkter uppfyller automatiskt EU-ekologiskt, men inte tvärtom."
      },
      {
        label: "Kontrollmodell i Sverige",
        text: "Till skillnad från Danmark, där myndigheterna tolkar EU:s ekologiregelverk, lämnas tolkningsarbetet i Sverige till branschen själv. En riksdagsmotion (2024/25:889) har föreslagit att Sverige bör övergå till en statlig modell för att ge svenska producenter samma förutsättningar som i övriga EU."
      },
      {
        label: "Koppar som bekämpningsmedel",
        text: "EU-ekologiskt tillåter kopparbaserade bekämpningsmedel med en gräns på 4 kg per hektar och år. Koppar används främst vid odling av vindruvor, potatis, äpplen och tomater. Europeiska kemikaliemyndigheten klassar koppar som cancerframkallande, och EFSA har flaggat risker för jordbrukare, bin och markorganismer. I Sverige är koppar inte godkänt som bekämpningsmedel, men importerade EU-ekologiska produkter kan ha odlats med koppar."
      }
    ]
  },
  crossLinks: [
    { name: "KRAV", id: "krav" }
  ]
},
{
  id: "fairtrade",
  name: "Fairtrade",
  image: "images/fairtrade.webp",
  website: "https://www.fairtrade.se/",
  tags: [
    {
      id: "socialt-ansvar",
      label: "Socialt ansvar",
      explanation: "Kärnfokus på rättvisa handelsvillkor, demokratiskt inflytande, förbud mot diskriminering och rätt att organisera sig.",
    },
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Miljökraven inkluderar förbud mot skadliga bekämpningsmedel, skydd av biologisk mångfald och främjande av hållbart jordbruk.",
    }
  ],
  cardDescription: "Världens mest kända certifiering för rättvis handel. Fairtrade garanterar minimipris och premie till odlare i utvecklingsländer samt ställer krav på arbetsvillkor och miljöhänsyn.",
  description: [
    "Fairtrade är en internationell certifiering för råvaror som odlas i utvecklingsländer. Märkningen är världens mest kända hållbarhetscertifiering för rättvis handel och finns på över 37 000 produkter globalt. Fairtrade drivs av ett globalt nätverk med över 25 organisationer och tre producentnätverk som tillsammans arbetar för en mer hållbar och rättvis handel.",
    "Certifieringen bygger på tre pelare: ekonomiska, sociala och miljömässiga kriterier. Odlare garanteras ett minimipris som täcker produktionskostnaderna, samt en Fairtrade-premie som investeras i lokalsamhället. Vanliga Fairtrade-märkta produkter är kaffe, kakao, bananer, te, socker, bomull, blommor och vin."
  ],
  credibility: {
    summary: "Certifieras av FLOCERT, ett oberoende internationellt organ ackrediterat enligt ISO 17065. Oanmälda inspektioner kan ske när som helst.",
    items: [
      {
        label: "Konfidentiella intervjuer",
        text: "Vid revisioner genomförs konfidentiella intervjuer direkt med anställda och medlemmar — inte bara med ledningen. Det ger en mer tillförlitlig bild av arbetsvillkoren."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "Minimipris och levnadsinkomst",
        text: "Fairtrades minimipris garanterar ett golv som täcker produktionskostnaderna, men räcker ofta inte till en levnadsinkomst. Fairtrade har själva erkänt detta gap och infört så kallade Living Income Reference Prices för att adressera det — men dessa är ännu inte bindande för alla produkter."
      },
      {
        label: "Fairtrade-ingrediensmärket",
        text: "Förutom det vanliga svarta Fairtrade-märket finns ett vitt ingrediensmärke. Det betyder att bara den namngivna ingrediensen (t.ex. kakao) är Fairtrade-certifierad — inte hela produkten. Miniminivån för Fairtrade-innehåll i en produkt med det svarta märket är 20 procent."
      }
    ]
  },
  crossLinks: []
},
{
  id: "fran-sverige",
  name: "Från Sverige",
  image: "images/fran-sverige.png",
  website: "https://fransverige.se/",
  tags: [
    {
      id: "ursprung",
      label: "Ursprung",
      explanation: "Garanterar att produkten är odlad, född och uppfödd, förädlad, förpackad och kontrollerad i Sverige.",
    }
  ],
  cardDescription: "Frivillig ursprungsmärkning som garanterar att råvaror och livsmedel är odlade, uppfödda, förädlade, förpackade och kontrollerade i Sverige.",
  description: [
    "Från Sverige är en frivillig ursprungsmärkning som lanserades i april 2016. Märkningen ägs och förvaltas av Svenskmärkning AB, som i sin tur ägs gemensamt av LRF (Lantbrukarnas Riksförbund), Livsmedelsföretagen och Svensk Dagligvaruhandel. Idag använder cirka 220 företag märkningen på ungefär 12 000 godkända produkter.",
    "Märkningen finns i tre varianter: Från Sverige, Kött från Sverige och Mjölk från Sverige – alla med samma regelverk. Varianten Kött från Sverige ersatte 2016–2017 den tidigare märkningen \"Svenskt Kött\" som drevs av branschorganisationen med samma namn. Produkter med flera ingredienser ska innehålla minst 75 % svenskt innehåll. Om produkten innehåller kött, mjölk, ägg, fågel, fisk eller skaldjur måste dessa alltid vara 100 % svenska utan undantag. Märkningen omfattar bland annat grönsaker, frukt, spannmål, mejeri, kött, bageriprodukter, honung, blommor och färdiglagad mat."
  ],
  credibility: {
    summary: "Ägs av Svenskmärkning AB. Alla led i kedjan måste vara tredjepartscertifierade för livsmedelssäkerhet (minst IP Livsmedel). Avgiftsfritt att använda.",
    items: [
      {
        label: "Intern årsrevision",
        text: "Den årliga revisionen genomförs av licensinnehavaren själv. Oberoende revisorer gör stickprovskontroller, men den löpande kontrollen vilar på företaget."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "Svenskt Sigill",
        text: "Båda garanterar svenskt ursprung, men Svenskt Sigill kräver dessutom att producenten följer IP-standarden med krav på miljöansvar, djurvälfärd och livsmedelssäkerhet. Från Sverige har inga sådana produktionskrav — det räcker att företaget har en grundläggande livsmedelscertifiering. Konsumenter som vill ha mer än bara ursprungsgaranti får alltså mer av Svenskt Sigill."
      },
      {
        label: "75 %-regeln",
        text: "I produkter med flera ingredienser behöver bara 75 % av innehållet vara svenskt. Resten kan vara importerat utan att det framgår på förpackningen. Undantaget gäller kött, mjölk, ägg, fågel, fisk och skaldjur som alltid måste vara 100 % svenska."
      },
      {
        label: "Kontrollmodell",
        text: "Den årliga revisionen är en egenkontroll som företaget själv utför med hjälp av en checklista från Svenskmärkning. Oberoende revisorer gör enbart stickprovskontroller. Modellen vilar alltså i hög grad på företagens egen uppföljning."
      }
    ]
  },
  crossLinks: [
    { name: "Svenskt Sigill", id: "svenskt-sigill" }
  ]
},
{
  id: "fsc",
  name: "FSC",
  image: "images/fsc.png",
  website: "https://se.fsc.org/",
  tags: [
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Krav på att skogsbruket bevarar biologisk mångfald, skyddar ekologiskt värdefulla miljöer och upprätthåller skogens ekosystemtjänster.",
    },
    {
      id: "socialt-ansvar",
      label: "Socialt ansvar",
      explanation: "Krav på säkra arbetsvillkor, respekt för lokalsamhällen och urfolks rättigheter, inklusive samernas rättigheter i Sverige.",
    }
  ],
  cardDescription: "Internationell certifiering för ansvarsfullt skogsbruk. FSC-märket garanterar att träprodukter kommer från skog som brukas med hänsyn till miljö, människor och ekonomisk hållbarhet.",
  description: [
    "FSC (Forest Stewardship Council) är en oberoende internationell medlemsorganisation som grundades 1993 i Toronto. FSC verkar för ett miljöanpassat, socialt ansvarstagande och ekonomiskt livskraftigt bruk av världens skogar genom sitt certifieringssystem. I Sverige känner 66 % av konsumenterna igen FSC-märket.",
    "FSC-märket finns i tre varianter: FSC 100 % (allt material från FSC-certifierad skog), FSC Mix (en blandning av FSC-certifierat, återvunnet och kontrollerat material) och FSC Recycled (100 % återvunnet material). Märkningen finns på produkter av trä, papper, kartong, kork och andra skogsbaserade material – allt från möbler och byggmaterial till förpackningar och hygienprodukter."
  ],
  credibility: {
    summary: "Certifieras av oberoende organ ackrediterade av ASI (Assurance Services International), som i sin tur granskar certifierarnas kompetens årligen.",
    items: [
      {
        label: "Offentlig databas",
        text: "Alla giltiga certifikat och licenskoder lagras i en offentlig FSC-databas där vem som helst kan verifiera ett certifikats giltighet."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "PEFC",
        text: "FSC och PEFC är de två dominerande skogscertifieringarna globalt. FSC är en internationell medlemsorganisation medan PEFC bygger på nationella standarder som ömsesidigt erkänns. I Sverige har PEFC betydligt mer certifierad areal, men FSC har högre konsumentkännedom (66 %). Miljöorganisationer som WWF och Naturskyddsföreningen föredrar FSC, medan PEFC har starkare förankring bland privata skogsägare."
      },
      {
        label: "Tillsynskritik",
        text: "Naturskyddsföreningen lämnade svenska FSC 2010 i protest mot bristande efterlevnad. Kritiker menar att inget skogsbolag har förlorat sin certifiering i Sverige på 30 år trots upprepade anmärkningar. Skogsbolaget SCA lämnade FSC efter år av kritik för avverkning av skyddsvärd skog och konflikter med samiska rättigheter."
      },
      {
        label: "Bra Miljöval",
        text: "Bra Miljöval kan kräva att papper och skogsprodukter kommer från hållbart skogsbruk och refererar ibland till FSC-certifiering som en del av sina kriterier. FSC garanterar råvarans ursprung medan Bra Miljöval bedömer hela produktens miljöpåverkan."
      }
    ]
  },
  crossLinks: [
    { name: "PEFC", id: "pefc" },
    { name: "Bra Miljöval", id: "bra-miljoval" }
  ]
},
{
  id: "krav",
  name: "KRAV",
  image: "images/krav.png",
  website: "https://www.krav.se/",
  tags: [
    {
      id: "ekologiskt",
      label: "Ekologiskt",
      explanation: "Grundkravet är ekologisk produktion utan kemiska bekämpningsmedel eller konstgödsel.",
    },
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Krav på biologisk mångfald, kretslopp och begränsad klimatpåverkan. Specifika klimatregler kräver förnybar el och beräkning av klimatavtryck.",
    },
    {
      id: "djurvalf",
      label: "Djurvälfärd",
      explanation: "Djuren ska ha möjlighet till naturligt beteende, utevistelse och god hälsa. Snabbväxande kycklingraser är förbjudna sedan 2026.",
    },
    {
      id: "socialt-ansvar",
      label: "Socialt ansvar",
      explanation: "Regler om arbetsvillkor, förbud mot tvångsarbete och diskriminering samt rätt till facklig organisering – gäller både i Sverige och internationellt.",
    },
    {
      id: "ursprung",
      label: "Ursprung",
      explanation: "Spårbarhet genom hela produktionskedjan.",
    }
  ],
  cardDescription: "Sveriges mest kända miljömärkning för livsmedel. KRAV-märket står för ekologisk produktion med höga krav på djurvälfärd, hälsa och socialt ansvar.",
  description: [
    "KRAV är Sveriges mest kända miljömärkning för livsmedel och grundades 1985. Märkningen bygger på ekologiska principer och ställer krav som går utöver EU:s regler för ekologisk produktion. KRAV-märket omfattar hela kedjan från jord till bord och inkluderar krav på miljöhänsyn, djurvälfärd, hälsa och socialt ansvar.",
    "KRAV-märkta produkter finns inom en rad kategorier: frukt och grönt, mejeri, kött, fisk, ägg, spannmål, drycker och förädlade livsmedel. Även restauranger och storkök kan KRAV-certifieras."
  ],
  credibility: {
    summary: "Certifieras av oberoende organ (Kiwa, SMAK, HS Certifiering) ackrediterade av Swedac, med årliga revisioner på plats.",
    items: [
      {
        label: "Val av certifieringsorgan",
        text: "Certifierade företag väljer själva vilket certifieringsorgan som kontrollerar dem, vilket har debatterats offentligt. Swedac har bemött kritiken och pekat på att alla ackrediterade organ följer samma regelverk."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "EU-ekologiskt",
        text: "Alla KRAV-certifierade produkter uppfyller automatiskt EU:s ekologiska krav, men inte tvärtom. KRAV går längre på flera specifika områden: djurvälfärd (t.ex. krav på utomhusbete för grisar, inte bara en betongyta), klimat (krav på förnybar el och beräkning av klimatavtryck), socialt ansvar (regler om arbetsvillkor som helt saknas i EU-regelverket) samt dubbel karenstid vid medicinering jämfört med konventionell produktion."
      },
      {
        label: "Svenskt Sigill",
        text: "Svenskt Sigill tillåter konventionell odling med kontrollerad användning av bekämpningsmedel, medan KRAV kräver ekologisk produktion. Å andra sidan kräver Svenskt Sigill svenskt ursprung genom hela kedjan, vilket KRAV inte gör. Märkningarna kan kombineras och organisationerna har samarbetat kring klimatcertifiering."
      },
      {
        label: "Regelskärpning 2026",
        text: "KRAV har skärpt regelverket på flera områden: snabbväxande kycklingraser är förbjudna, fiskmjöl i foder fasas ut för grisar och höns, och möjligheten till distansrevisioner har tagits bort – alla kontroller måste nu ske fysiskt på plats."
      },
      {
        label: "Koppar vid import",
        text: "KRAV förbjuder kopparbaserade bekämpningsmedel i svensk odling men har inga strängare regler än EU för importerade produkter. Importerad KRAV-märkt frukt och vin kan därför ha odlats med koppar, som EU tillåter upp till 4 kg per hektar och år."
      }
    ]
  },
  crossLinks: [
    { name: "EU-ekologiskt", id: "eu-ekologiskt" },
    { name: "Svenskt Sigill", id: "svenskt-sigill" }
  ]
},
{
  id: "msc",
  name: "MSC",
  image: "images/msc.webp",
  website: "https://www.msc.org/sv",
  tags: [
    {
      id: "hav-fiske",
      label: "Hav & fiske",
      explanation: "Certifierar att vildfångad sjömat kommer från hållbart förvaltade fisken som inte hotar fiskbestånden.",
    },
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Krav på att fisket minimerar påverkan på marina ekosystem, biologisk mångfald och havsmiljön.",
    }
  ],
  cardDescription: "Internationell certifiering för hållbart vildfångad sjömat. Det blå MSC-märket garanterar att fisken kommer från ett hållbart förvaltat fiske med minimal miljöpåverkan.",
  description: [
    "MSC (Marine Stewardship Council) är en internationell organisation som grundades 1997 och arbetar med certifiering och miljömärkning av hållbart fiske. Det blå MSC-märket innebär att sjömaten är vildfångad från ett fiske som bedömts som hållbart av oberoende experter. MSC är den mest erkända märkningen för hållbar sjömat globalt.",
    "MSC:s fiskestandard bedömer fisken utifrån tre kärnprinciper: hållbara fiskbestånd, minimal miljöpåverkan och effektiv förvaltning. Totalt utvärderas 28 kriterier. Utöver fiskecertifieringen har MSC en spårbarhetsstandard (Chain of Custody) som garanterar att MSC-märkt sjömat kan spåras genom hela leveranskedjan tillbaka till det certifierade fisket."
  ],
  credibility: {
    summary: "Certifieras av oberoende, ackrediterade organ – inte av MSC själva. Varje fiske poängsätts mot 28 kriterier där 60 är godkänt och 80 motsvarar bästa praxis.",
    items: [
      {
        label: "DNA-testning",
        text: "MSC använder DNA-testning för att verifiera att märkta produkter verkligen kommer från certifierade fisken. Mindre än 1 % felmärkning har påvisats."
      },
      {
        label: "Certifieringskostnad",
        text: "En fullständig bedömning kostar 100 000–1 000 000 kronor beroende på fiskets komplexitet, vilket kan vara ett hinder för mindre fisken."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "Intressekonflikt",
        text: "Certifieringsorganen anlitas och betalas av det fiske som söker certifiering, inte av MSC. WWF har visat att detta kan påverka opartiskheten — vid certifieringen av atlantisk blåfenad tonfisk hade bedömaren i förväg försäkrat fisket om godkännande. Dessutom kommer nästan 89 % av MSC:s egna intäkter från licensavgifter på märkta produkter, vilket skapar en ekonomisk drivkraft att behålla fisken i programmet."
      },
      {
        label: "Kritik mot certifierade fisken",
        text: "Forskare har visat att 83 % av MSC-certifierade fisken använder storskaliga metoder som bottentrålning och snörpvad, vilket kan skada marina ekosystem och ge hög bifångst. MSC har också lättat på vissa krav över tid — till exempel fördubblades tiden för att uppfylla villkor kring fiskestrategi från 5 till 10 år, och vissa fisken har varit certifierade i närmare 20 år utan fungerande förvaltningsplan."
      }
    ]
  },
  crossLinks: [
    { name: "ASC", id: "asc" }
  ]
},
{
  id: "nyckelhalet",
  name: "Nyckelhålet",
  image: "images/nyckelhalet.png",
  website: "https://www.livsmedelsverket.se/matvanor-halsa--miljo/nyckelhalet/",
  tags: [
    {
      id: "halsa",
      label: "Hälsa",
      explanation: "Fokuserar uteslutande på näringsinnehåll och att göra det enklare för konsumenter att välja nyttigare alternativ.",
    }
  ],
  cardDescription: "Livsmedelsverkets symbol för nyttigare val. Nyckelhålet hjälper konsumenter att hitta livsmedel med mindre socker, salt och fett samt mer fibrer och fullkorn.",
  description: [
    "Nyckelhålet är en symbol som hjälper konsumenter att hitta nyttigare livsmedel. Märkningen infördes 1989 av Livsmedelsverket och är idag en av de mest kända hälsomärkningarna i Norden. Nyckelhålet finns även i Norge och Danmark.",
    "Livsmedel som bär Nyckelhålet innehåller mindre socker, salt och fett och mer fibrer och fullkorn jämfört med andra livsmedel i samma produktgrupp. Märkningen gäller inom specifika livsmedelskategorier och jämför alltså inte mellan olika typer av livsmedel."
  ],
  credibility: {
    summary: "Självdeklaration — producenten ansvarar själv för att kriterierna uppfylls. Ingen ansökan, avgift eller extern certifiering krävs.",
    items: [
      {
        label: "Ingen extern granskning",
        text: "Till skillnad från de flesta andra märkningar granskas inte produkten av någon oberoende part innan symbolen används. Kontrollen sker i efterhand genom kommunernas livsmedelsinspektörer via stickprov."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "Jämförelse inom kategori",
        text: "Nyckelhålet jämför bara inom samma produktgrupp. En Nyckelhålsmärkt ketchup har till exempel mindre socker och salt än annan ketchup — men det betyder inte att den är nyttig i absolut mening. Märkningen hjälper dig att välja det bättre alternativet inom en viss typ av livsmedel, inte att bedöma om livsmedlet i sig är hälsosamt."
      }
    ]
  },
  crossLinks: [
    { name: "KRAV", id: "krav" },
    { name: "Svenskt Sigill", id: "svenskt-sigill" },
    { name: "EU-ekologiskt", id: "eu-ekologiskt" }
  ]
},
{
  id: "overkorsade-axet",
  name: "Överkorsade Axet",
  image: "images/axet.jpg",
  website: "https://www.celiaki.se/det-overkorsade-axet/",
  tags: [
    {
      id: "halsa",
      label: "Hälsa",
      explanation: "Tredjepartsverifierad garanti för att produkten innehåller högst 20 mg/kg gluten, säker för personer med celiaki.",
    }
  ],
  cardDescription: "Europeisk märkning för glutenfria livsmedel. Överkorsade Axet garanterar att produkten innehåller högst 20 mg/kg gluten, verifierat genom oberoende laboratorietester och revisioner.",
  description: [
    "Överkorsade Axet är ett europeiskt varumärke för glutenfria livsmedel som ägs av AOECS (Association of European Coeliac Societies). I Sverige administreras licenseringen av Svenska Celiakiförbundet. Symbolen föreställer ett spannmålsax med ett kors igenom och är den mest erkända glutenfrimärkningen bland celiakipatienter i Europa.",
    "Märkningen garanterar att produkten innehåller högst 20 mg/kg (20 ppm) gluten, vilket är den internationellt fastställda gränsen för glutenfritt enligt EU-förordningen. Till skillnad från den vanliga textmärkningen \"glutenfri\", som tillverkaren själv deklarerar, innebär Överkorsade Axet att en oberoende tredje part har verifierat glutenhalten genom laboratorietester och revision av produktionsanläggningen. Märkningen kan enbart licensieras för förädlade livsmedel eller produkter med flera ingredienser."
  ],
  credibility: {
    summary: "Tredjepartsverifiering genom laboratorietester och revision av produktionsanläggningen av ControlCert.",
    items: [
      {
        label: "Årlig laboratorietestning",
        text: "Alla produkter testas minst en gång per år vid ISO 17025-ackrediterade laboratorier med ELISA-metoden, samt vid varje receptförändring. Det är en av de mest konkreta och mätbara kontrollerna bland alla märkningar."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "Skillnad mot \"glutenfri\"-text",
        text: "En förpackning märkt \"glutenfri\" i text följer samma EU-gräns på 20 mg/kg, men det är tillverkaren själv som deklarerar det. Överkorsade Axet innebär att en oberoende tredje part — ControlCert — har verifierat glutenhalten genom laboratorietester och revision av produktionsanläggningen. För konsumenter med celiaki ger symbolen alltså en starkare garanti."
      },
      {
        label: "Nyckelhålet",
        text: "Nyckelhålet reglerar näringsinnehåll som fett, socker, salt och fiber men tar inte ställning till gluten. Överkorsade Axet garanterar låg glutenhalt men ställer inga näringskrav. En glutenfri produkt kan ha högt sockervärde, och en Nyckelhålsmärkt produkt kan innehålla gluten."
      }
    ]
  },
  crossLinks: [
    { name: "Nyckelhålet", id: "nyckelhalet" }
  ]
},
{
  id: "pefc",
  name: "PEFC",
  image: "images/pefc.png",
  website: "https://pefc.se/",
  tags: [
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Krav på hållbart skogsbruk som bevarar biologisk mångfald, skyddar vatten och mark samt upprätthåller skogens ekologiska funktioner.",
    }
  ],
  cardDescription: "Internationell certifiering för hållbart skogsbruk. PEFC-märket garanterar att trä- och pappersprodukter kommer från ansvarsfullt brukade skogar.",
  description: [
    "PEFC (Programme for the Endorsement of Forest Certification) är ett internationellt certifieringssystem för hållbart skogsbruk som grundades 1999. Sverige var ett av grundarländerna och idag är cirka 16,4 miljoner hektar svensk skog PEFC-certifierad, vilket gör det till det mest utbredda skogscertifieringssystemet i landet.",
    "PEFC-märket finns på produkter av trä, papper, kartong och andra skogsbaserade material. Konsumenter möter det ofta på hushållspapper, toalettpapper, servetter, mjölkförpackningar och andra pappersbaserade produkter i dagligvaruhandeln. Certifieringen säkerställer att skogsbruket tar hänsyn till ekologiska, sociala och ekonomiska värden."
  ],
  credibility: {
    summary: "Certifieras av oberoende organ ackrediterade av Swedac. Alla giltiga certifikat registreras i PEFC:s offentliga internationella databas."
  },
  notes: {
    items: [
      {
        label: "FSC",
        text: "FSC och PEFC är de två dominerande skogscertifieringarna globalt. I Sverige har PEFC betydligt mer certifierad areal (16,4 miljoner hektar), medan FSC har högre konsumentkännedom. Miljöorganisationer som WWF och Naturskyddsföreningen föredrar FSC och anser inte att PEFC:s krav räcker. PEFC har å andra sidan starkare förankring bland privata skogsägare genom sin nationella standardmodell."
      },
      {
        label: "Miljökritik",
        text: "Greenpeace och flera miljöorganisationer har rapporterat att PEFC-certifierad skog i Sverige tillåter avverkning av nyckelbiotoper och hotade ekosystem. PEFC medger att skogsägare i undantagsfall kan avverka nyckelbiotoper om de har mer än fem procent skyddsvärd skog, men kritiker menar att detta undergräver certifieringens trovärdighet."
      }
    ]
  },
  crossLinks: [
    { name: "FSC", id: "fsc" }
  ]
},
{
  id: "rainforest-alliance",
  name: "Rainforest Alliance",
  image: "images/rainforest.jpg",
  website: "https://www.rainforest-alliance.org/",
  tags: [
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Krav på skydd av regnskog, biologisk mångfald, ansvarsfull vatten- och markanvändning samt minskad kemikalieanvändning.",
    },
    {
      id: "socialt-ansvar",
      label: "Socialt ansvar",
      explanation: "Krav på rättvisa arbetsvillkor, mänskliga rättigheter och förbättrad levnadsstandard för jordbrukare i odlarländer.",
    }
  ],
  cardDescription: "Internationell certifiering för hållbart jordbruk i tropiska regioner. Den gröna grodan garanterar att odlingen tar hänsyn till miljö, mänskliga rättigheter och jordbrukares levnadsvillkor.",
  description: [
    "Rainforest Alliance är en internationell organisation som certifierar hållbart jordbruk, främst i tropiska regioner. Organisationen grundades 1987 i New York och har idag sitt huvudkontor där. År 2018 gick Rainforest Alliance samman med UTZ och 2020 lanserades en gemensam standard. Idag arbetar organisationen med jordbrukare, skogssamhällen och företag i över 70 länder.",
    "Certifieringen omfattar framför allt kaffe, te, kakao, bananer och andra tropiska grödor. Den gröna grodan – en rödögd trädgroda – är märkningens symbol och valdes för att den fungerar som en bioindikator: friska grodpopulationer signalerar friska ekosystem. Standarden ställer krav på miljöskydd, hållbara jordbruksmetoder, rättvisa arbetsvillkor och ekonomisk motståndskraft."
  ],
  credibility: {
    summary: "Certifieras av oberoende, auktoriserade certifieringsorgan. Geolokalisering av gårdar krävs för att motverka avskogning.",
    items: [
      {
        label: "Revisionsfrekvens",
        text: "Gårdar som bedöms som medel- eller högrisk får fysiska revisioner, men dessa kan ske så sällan som vart tredje år. Under 2021–2022 tilläts samtliga revisioner genomföras på distans utan inspektör på plats."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "Jämförelse med Fairtrade",
        text: "Båda märkningarna finns på kaffe, kakao och te, men Fairtrade garanterar ett minimipris som golv för odlaren. Rainforest Alliance har ingen motsvarande prisgaranti — den så kallade Sustainability Differential motsvarade 2024 under en procent av världsmarknadspriset för kakao."
      },
      {
        label: "UTZ-sammanslagning",
        text: "Rainforest Alliance och UTZ gick samman i januari 2018. Det gamla UTZ-märket fasas ut men kan fortfarande förekomma på äldre förpackningar. Sedan 2020 gäller en gemensam standard."
      }
    ]
  },
  crossLinks: [
    { name: "Fairtrade", id: "fairtrade" }
  ]
},
{
  id: "svanen",
  name: "Svanen",
  image: "images/svanen.webp",
  website: "https://www.svanen.se/",
  tags: [
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Livscykelbaserade krav på klimat, kemikalier, biologisk mångfald och cirkulär ekonomi.",
    },
    {
      id: "halsa",
      label: "Hälsa",
      explanation: "Strikta kemikaliekrav som begränsar hälsoskadliga ämnen i produkter och tjänster.",
    }
  ],
  cardDescription: "Nordens officiella miljömärkning för varor och tjänster. Svanen granskar produkters miljöpåverkan genom hela livscykeln – från råvara till avfall.",
  description: [
    "Svanen är Nordens officiella miljömärkning och instiftades 1989 av Nordiska ministerrådet. Märkningen är gemensam för Sverige, Danmark, Norge, Finland och Island. I Sverige förvaltas Svanen av det statliga bolaget Miljömärkning Sverige AB. Svanen är en typ 1-märkning enligt ISO 14024, vilket innebär oberoende tredjepartscertifiering baserad på livscykelanalys.",
    "Svanen omfattar över 60 produktgrupper inom bland annat rengöringsmedel, hygienartiklar, textilier, papper, kosmetika, möbler, byggnader, hotell och andra tjänster. Märkningen gäller inte livsmedel. Kriterierna ställer krav på miljö, klimat, kemikalier, kvalitet och funktion genom produktens hela livscykel."
  ],
  credibility: {
    summary: "Nordisk miljömärkning förvaltad av statliga Miljömärkning Sverige AB, med tredjepartsverifiering och inspektion oavsett var i världen produktionen sker."
  },
  notes: {
    items: [
      {
        label: "EU Ecolabel",
        text: "Båda är typ 1-märkningar enligt ISO 14024 och administreras i Sverige av samma organisation (Miljömärkning Sverige AB). Svanen ställer ofta strängare krav — bland annat på emballage, fabrik och kvalitetsledningssystem — medan EU Ecolabel har gemensamma minimikrav för hela EU."
      }
    ]
  },
  crossLinks: [
    { name: "EU Ecolabel", id: "eu-ecolabel" }
  ]
},
{
  id: "svensk-fagel",
  name: "Svensk Fågel",
  image: "images/svensk-fagel.png",
  website: "https://www.svenskfagel.se/",
  tags: [
    {
      id: "ursprung",
      label: "Ursprung",
      explanation: "Garanterar att fågeln är kläckt, uppfödd, slaktad, förädlad och kontrollerad i Sverige.",
    },
    {
      id: "djurvalf",
      label: "Djurvälfärd",
      explanation: "Djuromsorgsprogram med 31 kontrollpunkter som omfattar daglig omsorg, stallmiljö, foder, vatten och ströbädd.",
    },
    {
      id: "halsa",
      label: "Hälsa",
      explanation: "Salmonellafri kyckling och kalkon tack vare omfattande smittskyddsprogram. Antibiotika får enbart användas för behandling av sjukdom, aldrig i tillväxtfrämjande syfte.",
    }
  ],
  cardDescription: "Branschorganisationens märkning för svensk kyckling och kalkon. Den Gula Pippin garanterar svenskt ursprung, salmonellafrihet och djuromsorg genom hela produktionskedjan.",
  description: [
    "Svensk Fågel är branschorganisationen för svensk matfågelproduktion och representerar 98 procent av matfågelproduktionen i Sverige. Organisationens märkning, den Gula Pippin, finns på kyckling och kalkon från medlemsföretag som Kronfågel, Guldfågeln, Bjärefågel och Ingelsta kalkon.",
    "Märkningen garanterar att fågeln är kläckt, uppfödd, slaktad, förädlad och kontrollerad i Sverige. Svensk Fågel har sedan slutet av 1980-talet utvecklat omfattande kvalitets- och kontrollprogram som täcker djurhälsa, djurvälfärd, smittskydd och livsmedelssäkerhet. Programmen togs fram efter att antibiotika i djurfoder fasades ut och ny djurskyddslagstiftning infördes."
  ],
  credibility: {
    summary: "Branschprogram under myndighetsöversyn — kontroller utförs av oberoende ackrediterade organ och Livsmedelsverkets veterinärer.",
    items: [
      {
        label: "Salmonellaprogram",
        text: "Alla kycklingflockar kontrolleras vid slakt och provtas genom hela kedjan. Kycklingfötter bedöms under överinseende av Livsmedelsverkets veterinär — ett konkret och mätbart kvalitetsmått."
      },
      {
        label: "31 kontrollpunkter",
        text: "Djuromsorgsprogrammet omfattar 31 specifika kontrollpunkter som berör daglig omsorg, stallmiljö, foder, vatten och ströbädd."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "WWF:s köttguide",
        text: "Konventionell svensk kyckling – det som Svensk Fågels märkning omfattar – fick rött ljus i WWF:s köttguide. Skälet är att WWF kräver långsamväxande raser för godkänd djurvälfärd. Svensk Fågel tillåter snabbväxande raser som kan växa så fort att skelettet inte hänger med, vilket forskare pekar ut som ett av de största djurvälfärdsproblemen inom animalieproduktion. Endast KRAV-märkt och Svenskt Sigill klimatcertifierad kyckling får grönt ljus."
      },
      {
        label: "KRAV",
        text: "KRAV-kyckling kräver utevistelse, ekologiskt foder och långsamväxande raser. Svensk Fågel tillåter konventionell uppfödning inomhus med upp till 36 kg per kvadratmeter — ungefär 18 kycklingar på en yta där forskning rekommenderar fem. KRAV-märkt kyckling är det enda alternativet som får grönt ljus i WWF:s köttguide."
      },
      {
        label: "Bristande tillsyn",
        text: "SVT:s granskning visade att länsstyrelserna bara genomförde 26 djurskyddsinspektioner hos slaktkycklingbesättningar under 2024. Avslöjanden om missförhållanden på avelsanläggningar ledde inte till uppföljande besök, trots att myndigheterna bedömde att djurskyddslagen överträtts."
      }
    ]
  },
  crossLinks: [
    { name: "KRAV", id: "krav" }
  ]
},
{
  id: "svenska-agg",
  name: "Svenska Ägg",
  image: "images/svenska-agg.jpg",
  website: "https://www.svenskaagg.se/",
  tags: [
    {
      id: "ursprung",
      label: "Ursprung",
      explanation: "Garanterar svenskt ursprung från höna till ägg – hela produktionskedjan finns i Sverige.",
    },
    {
      id: "djurvalf",
      label: "Djurvälfärd",
      explanation: "Omsorgsprogram med krav på god djurvälfärd, inklusive förbud mot näbbtrimning och policy för utplockning av hönor.",
    },
    {
      id: "halsa",
      label: "Hälsa",
      explanation: "Salmonellafria ägg tack vare omfattande smittskyddsprogram, ingen antibiotika som tillväxtstimulantia och strikt hälsokontroll.",
    }
  ],
  cardDescription: "Branschorganisationens certifiering för svenska ägg. Den rosa checken på äggskalet garanterar spårbarhet, svenskt ursprung och kvalitetssäkrad produktion med höga krav på djurvälfärd och livsmedelssäkerhet.",
  description: [
    "Svenska Ägg är branschorganisationen för svensk äggnäring och representerar företag inom hela produktionskedjan – från foderföretag och kläckerier till äggproducenter och äggpackerier. Organisationen förvaltar certifieringen Certifierad Svensk Äggkvalitet som visas med en rosa check på äggskalet.",
    "Ett certifierat ägg med den rosa checken kan spåras genom hela kedjan från ägget i butik till gården där det är värpt. Certifieringen garanterar att hanteringen uppfyller Sveriges hårda krav inom djurvälfärd, livsmedelssäkerhet, smittskydd och produktkvalitet. Hela produktionskedjan skapar dessutom jobb i Sverige."
  ],
  credibility: {
    summary: "Branschprogram med myndighetsöversyn av Livsmedelsverket. Certifierade företag listas offentligt på Svenska Äggs webbplats.",
    items: [
      {
        label: "SE-nummer för spårbarhet",
        text: "Varje anläggning har ett unikt SE-nummer som anges på förpackningen — konsumenten kan spåra ägget tillbaka till gården."
      },
      {
        label: "Salmonellagaranti",
        text: "Alla certifierade ägg är garanterat salmonellafria genom ett omfattande smittskyddsprogram med provtagning i hela kedjan."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "KRAV",
        text: "KRAV-märkta ägg kräver utevistelse och ekologiskt foder, medan Svenska Ägg-certifierade hönor kan hållas frigående inomhus eller i inredda burar. Utevistelsen i KRAV har dock en baksida: ekologiska ägg har visats innehålla högre halter av PFAS, troligen från fiskmjöl i fodret. Branschen arbetar sedan 2025 med att ersätta fiskmjöl med alternativ som musselmjöl."
      },
      {
        label: "Djurvälfärd i praktiken",
        text: "Certifieringen förbjuder näbbtrimning och har policy för utplockning, men WWF påpekar att det finns mycket kvar att önska kring djurvälfärd för svenska värphöns. De flesta konventionella hönor får aldrig gå utomhus, och beläggningen inomhus kan vara hög även i frigående system."
      }
    ]
  },
  crossLinks: [
    { name: "KRAV", id: "krav" }
  ]
},
{
  id: "svenskt-sigill",
  name: "Svenskt Sigill",
  image: "images/svenskt-sigill.webp",
  website: "https://www.sigill.se/",
  tags: [
    {
      id: "ursprung",
      label: "Ursprung",
      explanation: "Alla råvaror ska vara odlade, uppfödda, producerade, slaktade, förädlade och förpackade i Sverige.",
    },
    {
      id: "miljo",
      label: "Miljö",
      explanation: "IP-standarden ställer krav på minskad klimatpåverkan, begränsad användning av bekämpningsmedel och stärkt biologisk mångfald.",
    },
    {
      id: "djurvalf",
      label: "Djurvälfärd",
      explanation: "Certifieringen omfattar krav på god djurhållning som går utöver svensk lagstiftning.",
    },
    {
      id: "socialt-ansvar",
      label: "Socialt ansvar",
      explanation: "IP-standarden inkluderar krav på rättvisa arbetsvillkor i produktionsledet.",
    }
  ],
  cardDescription: "Märkning för svensk mat och blommor som garanterar svenskt ursprung samt krav på miljöansvar, djurvälfärd och livsmedelssäkerhet.",
  description: [
    "Svenskt Sigill är en kvalitetsmärkning för svenska livsmedel och blommor som ägs av Sigill Kvalitetssystem AB, ett dotterbolag till LRF (Lantbrukarnas Riksförbund). Grunden lades 1995 när Lantmännen lanserade en odlingsstandard för spannmål med syfte att minska näringsläckage, begränsa bekämpningsmedel och stärka biologisk mångfald.",
    "Märkningen bygger på IP-standarden (Integrerad Produktion) och garanterar att råvaran är odlad, uppfödd, producerad, slaktad, förädlad och förpackad i Sverige. IP-standarden finns i två kravnivåer: IP Grundcertifiering, som fokuserar på livsmedelssäkerhet, spårbarhet och hygien, samt IP Sigill, som ställer högre krav inom miljö, djurvälfärd och klimat. Certifiering på Sigillnivån krävs för att få använda Svenskt Sigill-märket. Utöver basnivåerna finns tilläggsmoduler som Klimatcertifiering, Naturbeteskött och IP Arbetsvillkor. Märkningen omfattar produktkategorier som frukt och grönt, spannmål, kött, mejeri, ägg, kyckling, honung, fisk och skaldjur samt blommor. Idag finns cirka 4 000 utfärdade certifikat."
  ],
  credibility: {
    summary: "Certifieras enligt IP Sigill-standarden av oberoende organ (Kiwa, SMAK, HS Certifiering) ackrediterade av Swedac."
  },
  notes: {
    items: [
      {
        label: "Jämförelse med Från Sverige",
        text: "Båda märkningarna garanterar svenskt ursprung, men Från Sverige ställer inga krav på produktionsmetod. Svenskt Sigill går längre med krav på miljöansvar, djurvälfärd och livsmedelssäkerhet genom IP-standarden."
      }
    ]
  },
  crossLinks: [
    { name: "Från Sverige", id: "fran-sverige" }
  ]
},
{
  id: "sverigekannan",
  name: "Sverigekannan",
  image: "images/sverigekannan.webp",
  website: "https://www.arla.se/produkter/naturligare-produkter/ursprungsmarkning/",
  tags: [
    {
      id: "ursprung",
      label: "Ursprung",
      explanation: "Garanterar att produkten är gjord på 100 % svensk mjölk från svenska Arlagårdar och tillverkad vid ett svenskt Arla-mejeri.",
    }
  ],
  cardDescription: "Arlas egna ursprungsmärkning för mejeriprodukter. Sverigekannan garanterar att produkten är gjord på 100 % svensk mjölk från svenska Arlagårdar och tillverkad i Sverige.",
  description: [
    "Sverigekannan är Arlas egna ursprungsmärkning och lanserades 2015. Symbolen – en blå-gul mjölkkanna – finns i två textvarianter: \"Svensk mjölk\" och \"Svensk grädde\" beroende på vilken typ av mejeriprodukt det rör sig om. Märkningen ägs och kontrolleras helt av Arla Foods AB och används uteslutande på Arlas egna produkter.",
    "Sverigekannan garanterar att produkten är tillverkad av 100 % svensk mjölk från svenska Arlamedlemsgårdar, samt att tillverkningen skett vid ett svenskt Arlamejeri. Märkningen är en ren ursprungsmärkning – den ger inga löften om ekologisk produktion, djurvälfärd eller miljöprestanda utöver det geografiska ursprunget. Dessa aspekter regleras i stället av Arlas separata kvalitetsprogram Arlagården®. Ungefär 90 % av Arlas produktvolymer som säljs i Sverige uppfyller kraven för Sverigekannan."
  ],
  credibility: {
    summary: "Arlas eget varumärke — ingen oberoende granskning av märkningen. Kvalificeringen avgörs internt av Arla.",
    items: [
      {
        label: "Ingen extern revision av märket",
        text: "Det finns ingen oberoende part som kontrollerar att Sverigekannan används korrekt på förpackningar. Konsumenten är beroende av att Arla tillämpar märket korrekt."
      },
      {
        label: "Arlagården®",
        text: "De underliggande gårdarna granskas av SGS genom Arlas kvalitetsprogram Arlagården®, men den granskningen avser gårdarnas produktionsstandarder — inte märket i sig."
      }
    ]
  },
  notes: {
    items: [
      {
        label: "Från Sverige",
        text: "Den viktigaste skillnaden är ägarskapet och oberoendet: Från Sverige ägs av Svenskmärkning AB och används av cirka 220 företag, medan Sverigekannan är Arlas eget märke och inte kan användas av någon annan. Från Sverige-märkta produkter granskas av oberoende revisorer anlitade av Svenskmärkning; Sverigekannan saknar extern granskning av märket i sig. Arla lanserade Sverigekannan 2015 – ett år innan Från Sverige ens existerade. När Från Sverige lanserades 2016 valde Arla att inte ansluta sig, med motiveringen att man inte kunde rättfärdiga licensavgiften när man redan hade en egen ursprungsmärkning. År 2025 meddelade dock Arla att de testar Från Sverige-märkningen på ett urval av sina produkter, vilket tyder på att det egna märket inte alltid uppfattas som tillräckligt tydligt av konsumenter."
      }
    ]
  },
  crossLinks: [
    { name: "Från Sverige", id: "fran-sverige" },
    { name: "Svenskt Sigill", id: "svenskt-sigill" }
  ]
}
];

export function getLabelById(id: string): Label | undefined {
  return labels.find(l => l.id === id);
}
