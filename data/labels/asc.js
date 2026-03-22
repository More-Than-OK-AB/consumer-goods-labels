window.LABELS_DATA.push({
  id: "asc",
  name: "ASC",
  image: "images/asc.svg",
  website: "https://www.asc-aqua.org/",
  tags: [
    {
      id: "hav-fiske",
      label: "Hav & fiske",
      explanation: "Certifierar att odlad fisk och skaldjur kommer från ansvarsfullt och hållbart vattenbruk.",
      showOnCard: true
    },
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Krav på minimal miljöpåverkan, skydd av biologisk mångfald, ansvarsfull foderanvändning och hållbar vattenhantering.",
      showOnCard: true
    },
    {
      id: "djurvalf",
      label: "Djurvälfärd",
      explanation: "Standarden inkluderar krav på djurvälfärd för odlad fisk, inklusive sjukdomshantering och begränsad antibiotikaanvändning.",
      showOnCard: false
    },
    {
      id: "socialt-ansvar",
      label: "Socialt ansvar",
      explanation: "Krav på rättvisa arbetsvillkor och respekt för mänskliga rättigheter i vattenbruksverksamheten.",
      showOnCard: false
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
        text: "MSC certifierar vildfångad sjömat medan ASC certifierar odlad sjömat. Märkningarna är systermärkningar som kompletterar varandra och delar spårbarhetsstandard (Chain of Custody), men de bedömer helt olika typer av produktion."
      },
      {
        label: "KRAV",
        text: "KRAV kan certifiera odlad fisk enligt ekologiska principer med fokus på ekologiskt foder och naturliga förhållanden. ASC ställer inte krav på ekologisk produktion men har breda krav på miljö, djurvälfärd och socialt ansvar. Certifieringarna överlappar delvis men har olika utgångspunkter."
      }
    ]
  },
  crossLinks: [
    { name: "MSC", id: "msc" },
    { name: "KRAV", id: "krav" }
  ]
});
