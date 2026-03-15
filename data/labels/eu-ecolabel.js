window.LABELS_DATA.push({
  id: "eu-ecolabel",
  name: "EU Ecolabel",
  image: "images/eu-ecolabel.webp",
  website: "https://ec.europa.eu/ecat/",
  tags: [
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Livscykelbaserade krav på minskad miljöpåverkan, energieffektivitet, begränsade farliga kemikalier och cirkulär ekonomi.",
      showOnCard: true
    },
    {
      id: "halsa",
      label: "Hälsa",
      explanation: "Strikta begränsningar av hälsoskadliga ämnen i produkter som rengöringsmedel, kosmetika och textilier.",
      showOnCard: false
    }
  ],
  cardDescription: "EU:s officiella miljömärkning för varor och tjänster. EU Ecolabel granskar produkters miljöpåverkan genom hela livscykeln och finns på över 100 000 varor och tjänster i hela EU.",
  description: [
    "EU Ecolabel är Europeiska unionens officiella miljömärkning och lanserades 1992. Märkningen är frivillig och tilldelas produkter och tjänster som uppfyller strikta miljökrav genom hela sin livscykel, från råvara till avfall. EU Ecolabel regleras av EU-förordning 66/2010 och erkänns i alla EU:s medlemsländer. Över 100 000 varor och tjänster bär märkningen.",
    "I Sverige administreras EU Ecolabel av Miljömärkning Sverige AB – samma organisation som förvaltar Svanen. Märkningen är en typ 1-certifiering enligt ISO 14024 och omfattar elva produktområden, bland annat rengöringsmedel, textilier, papper, möbler, färg och lack, elektronik, trädgårdsprodukter och turistboenden. EU Ecolabel gäller inte livsmedel."
  ],
  certification: {
    intro: "Företag ansöker om EU Ecolabel hos det nationella behöriga organet – i Sverige är det Miljömärkning Sverige AB. Processen består av fem steg:",
    items: [
      "Företaget kontaktar Miljömärkning Sverige AB och väljer relevant produktgrupp med tillhörande kriterier.",
      "Produkten förregistreras i EU:s produktkatalog ECAT.",
      "En fullständig ansökan sammanställs med dokumentation, testresultat, datablad och deklarationer som visar att produkten uppfyller kriterierna för sin produktgrupp.",
      "Ansökan skickas in tillsammans med ansökningsavgiften. Miljömärkning Sverige granskar dokumentationen inom två månader och kan kräva kompletteringar.",
      "Vid godkännande får företaget använda EU Ecolabel-logotypen på produkten. En årlig avgift tillkommer, baserad på försäljningsvolym. Rabatter ges till små och medelstora företag samt EMAS- eller ISO 14001-certifierade verksamheter."
    ]
  },
  oversight: {
    intro: "Kontrollen av EU Ecolabel-märkta produkter sker genom det nationella behöriga organet och oberoende tredjepartstestning:",
    items: [
      "Miljömärkning Sverige AB kan begära kompletterande dokumentation och utföra oberoende verifieringar eller platsbesök för att kontrollera att kriterierna uppfylls.",
      "Tredjepartslaboratorier och certifieringsorgan utför testning av produkter mot de fastställda kriterierna.",
      "Inspektionsavgifter betalas direkt till de testande laboratorierna och varierar beroende på produktgrupp och testningens komplexitet.",
      "EU-kommissionens gemensamma forskningscentrum (JRC) i Sevilla utvecklar och uppdaterar kriterierna regelbundet.",
      "Vid bristande efterlevnad kan rätten att använda EU Ecolabel-märkningen återkallas."
    ]
  },
  notes: {
    items: [
      {
        label: "Svanen",
        text: "Både EU Ecolabel och Svanen är typ 1-miljömärkningar för icke-livsmedel med livscykelbaserade kriterier. Svanen är en nordisk märkning som ofta anses ha strängare krav inom vissa områden, medan EU Ecolabel gäller i hela EU. Båda administreras i Sverige av Miljömärkning Sverige AB."
      },
      {
        label: "Bra Miljöval",
        text: "Bra Miljöval drivs av Naturskyddsföreningen och täcker delvis andra produktområden som energi, transporter och försäkringar. EU Ecolabel har ett bredare produktsortiment inom konsumentvaror men saknar Bra Miljövals fokus på tjänstesektorn."
      }
    ]
  },
  crossLinks: [
    { name: "Svanen", id: "svanen" },
    { name: "Bra Miljöval", id: "bra-miljoval" }
  ]
});
