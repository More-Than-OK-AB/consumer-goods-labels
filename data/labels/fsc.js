window.LABELS_DATA.push({
  id: "fsc",
  name: "FSC",
  image: "images/fsc.png",
  website: "https://se.fsc.org/",
  tags: [
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Krav på att skogsbruket bevarar biologisk mångfald, skyddar ekologiskt värdefulla miljöer och upprätthåller skogens ekosystemtjänster.",
      showOnCard: true
    },
    {
      id: "socialt-ansvar",
      label: "Socialt ansvar",
      explanation: "Krav på säkra arbetsvillkor, respekt för lokalsamhällen och urfolks rättigheter, inklusive samernas rättigheter i Sverige.",
      showOnCard: true
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
        label: "Svanen",
        text: "Svanen ställer miljökrav på färdiga produkter genom hela livscykeln, medan FSC certifierar själva råvarukällan – skogen. En Svanenmärkt pappersprodukt kan innehålla FSC-certifierad råvara. Märkningarna kompletterar varandra men bedömer olika saker."
      },
      {
        label: "EU Ecolabel",
        text: "EU Ecolabel granskar produkters totala miljöpåverkan medan FSC specifikt garanterar ansvarsfullt skogsbruk. Båda kan förekomma på samma produkt, exempelvis papper eller hygienartiklar, men med olika fokus."
      },
      {
        label: "Bra Miljöval",
        text: "Bra Miljöval kan ställa krav på att papper och skogsprodukter kommer från hållbart skogsbruk. FSC är det specifika certifieringssystemet för själva skogsbruket. Bra Miljöval kan referera till FSC-certifiering som en del av sina kriterier."
      }
    ]
  },
  crossLinks: [
    { name: "Svanen", id: "svanen" },
    { name: "EU Ecolabel", id: "eu-ecolabel" },
    { name: "Bra Miljöval", id: "bra-miljoval" }
  ]
});
