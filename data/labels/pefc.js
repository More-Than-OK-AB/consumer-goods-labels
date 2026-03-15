window.LABELS_DATA.push({
  id: "pefc",
  name: "PEFC",
  image: "images/pefc.png",
  website: "https://pefc.se/",
  tags: [
    {
      id: "miljo",
      label: "Miljö",
      explanation: "Krav på hållbart skogsbruk som bevarar biologisk mångfald, skyddar vatten och mark samt upprätthåller skogens ekologiska funktioner.",
      showOnCard: true
    }
  ],
  cardDescription: "Internationell certifiering för hållbart skogsbruk. PEFC-märket garanterar att trä- och pappersprodukter kommer från ansvarsfullt brukade skogar.",
  description: [
    "PEFC (Programme for the Endorsement of Forest Certification) är ett internationellt certifieringssystem för hållbart skogsbruk som grundades 1999. Sverige var ett av grundarländerna och idag är cirka 16,4 miljoner hektar svensk skog PEFC-certifierad, vilket gör det till det mest utbredda skogscertifieringssystemet i landet.",
    "PEFC-märket finns på produkter av trä, papper, kartong och andra skogsbaserade material. Konsumenter möter det ofta på hushållspapper, toalettpapper, servetter, mjölkförpackningar och andra pappersbaserade produkter i dagligvaruhandeln. Certifieringen säkerställer att skogsbruket tar hänsyn till ekologiska, sociala och ekonomiska värden."
  ],
  certification: {
    intro: "PEFC-certifiering omfattar hela kedjan från skog till färdig produkt. Det finns två huvudtyper av certifikat:",
    items: [
      "Skogsbrukscertifiering – verifierar att skogsbruket uppfyller PEFC:s standard för hållbart skogsbruk. I Sverige certifieras de flesta skogsägare genom gruppcertifiering via skogsägarföreningar eller skogsbolag.",
      "Spårbarhetscertifiering (Chain of Custody, CoC) – säkerställer att PEFC-certifierat material kan spåras genom hela leveranskedjan, från skog till färdig produkt.",
      "Certifieringen utförs av oberoende, ackrediterade certifieringsorgan som granskar att verksamheten uppfyller PEFC:s krav.",
      "Svenska PEFC-standarden utvecklas i samverkan mellan skogsbrukets intressenter och uppdateras vart femte år.",
      "Certifieringskostnaden varierar beroende på verksamhetens storlek. Gruppcertifiering gör det möjligt för mindre skogsägare att dela på kostnaderna."
    ]
  },
  oversight: {
    intro: "PEFC-certifierade verksamheter kontrolleras löpande av oberoende certifieringsorgan:",
    items: [
      "Årliga revisioner genomförs hos certifikatsinnehavare för att kontrollera att PEFC:s standarder efterlevs.",
      "Certifieringsorganen är ackrediterade av nationella ackrediteringsorgan, i Sverige av Swedac.",
      "PEFC International genomför regelbundna utvärderingar av de nationella certifieringssystemen.",
      "Alla giltiga certifikat registreras i PEFC:s internationella databas.",
      "Vid avvikelser ska bristerna åtgärdas inom angiven tidsram. Allvarliga överträdelser kan leda till att certifikatet suspenderas eller dras in."
    ]
  },
  notes: {
    items: [
      {
        label: "FSC",
        text: "FSC och PEFC är de två dominerande skogscertifieringarna globalt. Båda kräver hållbart skogsbruk men har olika organisationsstruktur: FSC är en internationell medlemsorganisation medan PEFC bygger på nationella standarder som ömsesidigt erkänns. I Sverige är PEFC mer utbrett sett till certifierad areal, medan FSC har högre konsumentkännedom."
      },
      {
        label: "Svanen",
        text: "Svanen ställer miljökrav på färdiga produkter genom hela livscykeln, medan PEFC certifierar råvarukällan – skogen. En Svanenmärkt pappersprodukt kan innehålla PEFC-certifierad råvara. Märkningarna kompletterar varandra."
      },
      {
        label: "EU Ecolabel",
        text: "EU Ecolabel granskar produkters totala miljöpåverkan medan PEFC specifikt garanterar hållbart skogsbruk. Båda kan förekomma på samma produkt, exempelvis papper eller hygienartiklar."
      }
    ]
  },
  crossLinks: [
    { name: "FSC", id: "fsc" },
    { name: "Svanen", id: "svanen" },
    { name: "EU Ecolabel", id: "eu-ecolabel" }
  ]
});
