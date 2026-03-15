window.LABELS_DATA.push({
  id: "eu-ekologiskt",
  name: "EU-ekologiskt",
  image: "images/eu-organic.png",
  website: "https://ec.europa.eu/info/food-farming-organics_food-processing-and-marketing/eu-organic-logo_sv",
  tags: [
    {
      id: "ekologiskt",
      label: "Ekologiskt",
      explanation: "Grundkravet är ekologisk produktion utan kemiska bekämpningsmedel, konstgödsel eller GMO.",
      showOnCard: true
    },
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Reglerna främjar kretslopp, biologisk mångfald och hållbar markanvändning.",
      showOnCard: true
    },
    {
      id: "djurvalf",
      label: "Djurvälfärd",
      explanation: "Djuren ska ha tillgång till utevistelse, bete och ekologiskt foder samt möjlighet till naturligt beteende.",
      showOnCard: false
    }
  ],
  cardDescription: "EU:s officiella märkning för ekologiska livsmedel. EU-lövet garanterar att minst 95 % av ingredienserna är ekologiskt producerade enligt EU:s gemensamma regelverk.",
  description: [
    "EU-ekologiskt, även kallat EU-lövet, är den officiella EU-märkningen för ekologiska produkter. Logotypen föreställer ett stiliserat löv format av EU:s stjärnor och är obligatorisk på alla färdigförpackade ekologiska livsmedel som produceras inom EU. Märkningen regleras av EU-förordning 2018/848 som trädde i kraft 2022 och ersatte det tidigare regelverket.",
    "För att en produkt ska få bära EU-lövet måste minst 95 % av jordbruksingredienserna vara ekologiskt producerade. Regelverket förbjuder kemiska bekämpningsmedel, konstgödsel och genetiskt modifierade organismer. Det omfattar växtodling, djurhållning, biodling, vattenbruk, förädling, import och distribution av ekologiska produkter."
  ],
  certification: {
    intro: "Alla företag som vill producera, förädla eller marknadsföra ekologiska produkter måste certifieras av ett godkänt kontrollorgan. Processen i Sverige ser ut så här:",
    items: [
      "Producenten anmäler sin verksamhet till Jordbruksverket innan ekologiska produkter får släppas ut på marknaden.",
      "Producenten kontaktar och tecknar avtal med ett godkänt kontrollorgan – i Sverige finns bland annat HS Certifiering, Kiwa, SMAK, Intertek och Controlcert Scandinavia.",
      "En omställningsperiod krävs – vanligtvis två år för växtodling. Under omställningen måste ekologiska regler följas men produkterna får inte säljas som ekologiska.",
      "Kontrollorganet genomför en första inspektion på plats och granskar att verksamheten uppfyller EU:s regelverk.",
      "Vid godkänd granskning utfärdas ett certifikat och producenten får använda EU-lövet på sina produkter."
    ]
  },
  oversight: {
    intro: "Kontrollen av EU-ekologisk produktion i Sverige är delegerad från Jordbruksverket och Livsmedelsverket till ackrediterade kontrollorgan:",
    items: [
      "Kontroller genomförs minst en gång per år hos varje certifierad verksamhet.",
      "Minst 10 % av kontrollerna ska vara oanmälda.",
      "Kontrollorganen är ackrediterade av Swedac och godkända av Jordbruksverket.",
      "Vid avvikelser rapporteras brister skriftligt. Mindre avvikelser ger möjlighet till rättelse, medan allvarliga överträdelser kan leda till att certifikatet dras in.",
      "Överträdelser av märkningsreglerna kan leda till sanktionsavgifter."
    ]
  },
  notes: {
    items: [
      {
        label: "KRAV",
        text: "KRAV:s regler är strängare än EU:s minimikrav på flera områden, bland annat djurvälfärd och socialt ansvar. Alla KRAV-certifierade produkter uppfyller automatiskt EU-ekologiskt, men inte tvärtom."
      },
      {
        label: "Nyckelhålet",
        text: "EU-ekologiskt handlar om produktionsmetod, inte näringsinnehåll. En ekologisk produkt kan ha högt socker- eller fettinnehåll och en Nyckelhålsmärkt produkt kan vara konventionellt producerad."
      },
      {
        label: "Svenskt Sigill",
        text: "Svenskt Sigill fokuserar på svenskt ursprung och tillåter konventionell produktion. EU-ekologiskt ställer inga krav på ursprungsland men kräver ekologisk produktion. Märkningarna har helt olika fokus."
      }
    ]
  },
  crossLinks: [
    { name: "KRAV", id: "krav" },
    { name: "Nyckelhålet", id: "nyckelhalet" },
    { name: "Svenskt Sigill", id: "svenskt-sigill" }
  ]
});
