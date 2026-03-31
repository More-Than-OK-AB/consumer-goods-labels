// E-number (food additive) data for markningar.se
// All content verified against EFSA scientific opinions and Livsmedelsverket.

export interface ENumber {
  id: string
  number: string
  name: string
  category: string
  cardDescription: string
  description: string[]
  commonlyFoundIn: string[]
  euStatus: string
  adiInfo: string
  healthNotes: string[]
  relatedIds: string[]
}

export const enumbers: ENumber[] = [
  {
    id: "e621",
    number: "E621",
    name: "Mononatriumglutamat",
    category: "Smakförstärkare",
    cardDescription: "Natriumsaltet av glutaminsyra – ger den smakförstärkande grundsmaken umami. Vanligt i kryddmixer, snacks och asiatiska livsmedel.",
    description: [
      "Mononatriumglutamat (MSG) är natriumsaltet av glutaminsyra, en aminosyra som förekommer naturligt i protein. Som livsmedelstillsats framställs det industriellt via jäsning av kolhydrater med bakterien Corynebacterium glutamicum. MSG ger den femte grundsmaken umami – en köttaktig, mustig smak.",
      "E621 ingår i en grupp av glutamater (E620–E625) som alla bidrar med glutaminsyra och används som smakförstärkare. EU-regelverket sätter generellt en maxgräns på 10 g/kg livsmedel; för kryddblandningar och kondiment gäller quantum satis (den lägsta mängd som tekniskt behövs).",
      "MSG är inte tillåtet i obearbetade livsmedel eller i barnmat.",
    ],
    commonlyFoundIn: [
      "Kryddmixer och buljongtärningar",
      "Chips och snacks",
      "Färdigrätter och soppor",
      "Asiatiska livsmedel",
      "Charkuterier och såser",
    ],
    euStatus: "Godkänd i EU enligt förordning (EG) nr 1333/2008, bilaga II. Tillåten i ett antal specificerade livsmedelskategorier. Inte tillåten i obearbetade livsmedel eller barnmat.",
    adiInfo: "EFSA fastställde 2017 ett grupp-ADI (acceptabelt dagligt intag) på 30 mg/kg kroppsvikt per dag för hela gruppen E620–E625, uttryckt som glutaminsyra. EFSA:s exponeringsuppskattningar visade att konsumenter med högt intag i alla åldersgrupper kan överskrida detta ADI.",
    healthNotes: [
      "Det så kallade \"kinesisk-restaurang-syndromet\" – rapporter om huvudvärk och obehag efter MSG-rik mat – har inte bekräftats i kontrollerade dubbelblinda studier. EFSA konstaterade 2017 att bevisen för kausalitet är otillräckliga vid normala konsumtionsmängder.",
      "Vid högt intag kan gruppens ADI överskridas, vilket EFSA 2017 rekommenderade EU-kommissionen att se över. Revisionen av maxnivåer pågår fortfarande.",
    ],
    relatedIds: [],
  },
  {
    id: "e150",
    number: "E150",
    name: "Karamellfärger",
    category: "Färgämne",
    cardDescription: "Karamellfärger är komplexa blandningar som bildas vid upphettning av socker. Används i bland annat cola, öl och sojasås. Finns i fyra varianter: E150a, E150b, E150c och E150d.",
    description: [
      "Karamellfärger (E150) är en grupp av fyra godkända varianter som bildas vid upphettning av kolhydrater, med eller utan reaktionskemikalier. De fyra varianterna skiljer sig åt i tillverkningsprocess och kemisk sammansättning:",
      "E150a (Sockerkulör; enkel process) – framställs utan reaktionskemikalier. E150b (Sockerkulör; sulfitprocessen) – framställs med sulfiter. E150c (Sockerkulör; ammoniakprocessen) – framställs med ammoniak. E150d (Sockerkulör; ammoniaksulfitprocessen) – framställs med både ammoniak och sulfiter; den vanligaste varianten globalt, används i bland annat cola-drycker.",
      "Alla fyra varianter är godkända i EU och används som mörkbrun/svart färg i ett brett spektrum av livsmedel.",
    ],
    commonlyFoundIn: [
      "Cola-drycker (E150d)",
      "Öl och maltdrycker",
      "Sojasås",
      "Whisky och konjak (E150a/E150b)",
      "Bakvaror och flingor (E150c/E150d)",
    ],
    euStatus: "Alla fyra varianter (E150a–E150d) är godkända i EU enligt förordning (EG) nr 1333/2008.",
    adiInfo: "EFSA fastställde 2011 ett grupp-ADI på 300 mg/kg kroppsvikt per dag för E150a, E150b och E150d. E150c har ett lägre ADI på 100 mg/kg kroppsvikt per dag, på grund av osäkerheter kring immunsystemspåverkan från biprodukten THI (2-acetyl-4-tetrahydroxibutylimidazol) som bildas i ammoniakprocessen.",
    healthNotes: [
      "EFSA:s panel konkluderade 2011 att karamellfärgerna varken är genotoxiska eller carcinogena och att det inte finns bevis för reproduktions- eller utvecklingstoxicitet.",
      "Högt exponerade konsumenter – särskilt de som konsumerar stora mängder bakvaror med E150c eller alkoholdrycker med E150c/E150d – kan potentiellt överskrida ADI.",
      "Biprodukten 4-metylimidazol (4-MEI), som förekommer i E150c och E150d, har diskuterats i USA (Californiens Prop 65). EFSA:s bedömning är att halterna i livsmedel är adekvat kontrollerade av befintliga regleringar.",
    ],
    relatedIds: [],
  },
  {
    id: "e300",
    number: "E300",
    name: "Askorbinsyra",
    category: "Antioxidant",
    cardDescription: "Askorbinsyra är identisk med vitamin C och används som antioxidant i livsmedel. En av de mest välstuderade och säkraste livsmedelstillsatserna.",
    description: [
      "Askorbinsyra är identisk med vitamin C (L-askorbinsyra). Det är en vattenlöslig antioxidant som förekommer naturligt i frukt och grönsaker – rikligast i paprika, svarta vinbär, kiwi och citrusfrukter. Som livsmedelstillsats framställs den vanligen syntetiskt via Reichstein-processen från glukos, eller via fermentering.",
      "Som antioxidant skyddar askorbinsyra livsmedel mot oxidation och härskning. I charkuterier används den för att bevara köttrödhet och skydda mot bildning av nitrosaminer. Den används även som mjölbehandlingsmedel i bröd och bakverk.",
      "E300 är tillåten utan numerisk mängdbegränsning (quantum satis) i de flesta livsmedelskategorier, vilket innebär att den lägsta mängd som tekniskt behövs ska användas.",
    ],
    commonlyFoundIn: [
      "Fruktjuicer och läsk",
      "Konserver och konserverade frukter",
      "Charkuterier och köttprodukter",
      "Bröd och bakverk",
      "Flingor och barnmat",
      "Öl",
    ],
    euStatus: "Godkänd i EU. Tillåten utan numerisk mängdbegränsning (quantum satis) i de flesta livsmedelskategorier.",
    adiInfo: "Inget numeriskt ADI har fastställts – ämnet anses säkert vid de mängder som används i livsmedel. Askorbinsyra är ett essentiellt näringsämne för människan.",
    healthNotes: [
      "Askorbinsyra är ett av de mest välstuderade och säkraste tillsatsämnena. Det faktum att den är identisk med ett essentiellt vitamin gör att det saknas toxikologisk oro vid normala doser.",
      "Mycket höga doser (över 2 g per dag från kosttillskott) kan ge mag-tarmbesvär, men sådana mängder uppnås inte via normal tillsatsanvändning.",
    ],
    relatedIds: ["e330"],
  },
  {
    id: "e330",
    number: "E330",
    name: "Citronsyra",
    category: "Surhetsreglerare",
    cardDescription: "Citronsyra förekommer naturligt i citrusfrukter och bildas i kroppens ämnesomsättning. Används som surhetsreglerare och smakförstärkare i ett brett utbud av livsmedel.",
    description: [
      "Citronsyra är en organisk trikarbonsyra som förekommer naturligt i citrusfrukter, bär och många andra livsmedel. Den ingår även i människokroppens naturliga ämnesomsättning (citronsyracykeln/Krebs-cykeln). Som livsmedelstillsats framställs citronsyra industriellt via jäsning av kolhydrater – ofta majsstärkelse eller melass – med hjälp av mögelsvampen Aspergillus niger.",
      "Citronsyra används i första hand som surhetsreglerare och ger den karakteristiska fräscha syrligheten i läsk och godis. Den fungerar även som antioxidantförstärkare genom att binda till metaller (som järn och koppar) som annars katalyserar härskning i fettrika produkter.",
      "E330 är tillåten utan numerisk mängdbegränsning (quantum satis) i de flesta livsmedel.",
    ],
    commonlyFoundIn: [
      "Läskedrycker och energidrycker",
      "Sylt, marmelad och gelé",
      "Godis och glass",
      "Konserver och soppor",
      "Charkuterier",
      "Kex och bakverk",
      "Kryddmixer och sportdrycker",
    ],
    euStatus: "Godkänd i EU. Tillåten utan numerisk mängdbegränsning (quantum satis) i de flesta livsmedel.",
    adiInfo: "Inget numeriskt ADI har fastställts – ämnet anses säkert vid normala användningsnivåer. EFSA har verifierat att produktionen med Aspergillus niger inte lämnar några mögel­rester i slutprodukten.",
    healthNotes: [
      "Vid frekvent konsumtion av drycker med hög citronsyrahalt kan tanderosion uppstå. Detta beror på ämnets surhet, inte på toxikologiska egenskaper.",
      "Inga säkerhetsproblem har identifierats vid normal användning.",
    ],
    relatedIds: ["e300"],
  },
  {
    id: "e322",
    number: "E322",
    name: "Lecitiner",
    category: "Emulgator",
    cardDescription: "Lecitiner är naturliga fosfolipider som utvinns ur bland annat soja, solros och raps. Används som emulgator i choklad, margarin och bakverk.",
    description: [
      "Lecitiner är en grupp naturliga fosfolipider (fettliknande ämnen) som förekommer i alla levande cellers cellmembran. Kommersiellt utvinns de främst ur sojabönolja (vanligast), men också från solros, raps och äggula. Sojalecitiner utvinns som biprodukt vid raffinering av sojaolja.",
      "Som emulgator hjälper lecitiner till att blanda fett och vatten, vilket förhindrar att produkten separerar. I choklad förhindrar lecitiner s.k. blooming (vitaktig yta) och förbättrar flödesegenskaperna vid tillverkning.",
      "Sedan 2022 är även E322a (havrelecitiner) godkänt för specifik användning i kakao- och chokladprodukter (max 20 000 mg/kg). E322 är tillåten utan numerisk mängdbegränsning (quantum satis) i de flesta livsmedelskategorier.",
    ],
    commonlyFoundIn: [
      "Choklad och chokladprodukter",
      "Margarin och smörprodukter",
      "Majonnäs och dressingar",
      "Bröd och bakverk",
      "Glass",
      "Pasta",
    ],
    euStatus: "Godkänd i EU enligt förordning (EG) nr 1333/2008. Tillåten utan numerisk mängdbegränsning (quantum satis) i de flesta kategorier.",
    adiInfo: "EFSA:s ANS-panel fastslog 2017 att inget numeriskt ADI behövs och att det inte finns säkerhetsproblem för den allmänna befolkningen (>1 år). En uppföljande bedömning 2020 bekräftade säkerheten även för spädbarn (<16 veckor).",
    healthNotes: [
      "Allergiker mot soja bör vara medvetna om att sojalecitiner kan innehålla spårhalter av sojaprotein. EU-regelverket kräver märkning av soja som allergent; tillverkaren kan informera om sojalecitiner specifikt förekommer.",
      "Lecitiner bryts ned i tarmen till vanliga kostkomponenter: fettsyror, glycerol, kolin och fosfater.",
    ],
    relatedIds: ["e471"],
  },
  {
    id: "e471",
    number: "E471",
    name: "Mono- och diglycerider av fettsyror",
    category: "Emulgator",
    cardDescription: "Partiella estrar av glycerol och fettsyror som används som emulgator. Råvaran kan vara animalisk eller vegetabilisk – detta anges inte alltid på förpackningen.",
    description: [
      "Mono- och diglycerider av fettsyror är partiella estrar av glycerol med fettsyror. De bildas naturligt i liten mängd vid normal fettmetabolism i kroppen. Som livsmedelstillsats framställs de industriellt via förestringen av triglycerider (matfett och -oljor) med glycerol, eller direkt esterifiering av fettsyror med glycerol.",
      "Råvaran kan vara animalisk (till exempel fläskfett eller nötfett) eller vegetabilisk (palmolja, sojabönolja, rapsolja). Råvarukällan anges normalt inte på förpackningen, varför konsumenter med specifika kostpreferenser kan ha svårt att avgöra ursprunget utan att kontakta tillverkaren.",
      "E471 är en av de mest använda emulgatorerna inom livsmedelsindustrin. Den förbättrar textur, volym och hållbarhet i bland annat bröd och bakverk, och ger en jämnare struktur i glass.",
    ],
    commonlyFoundIn: [
      "Bröd och bakverk",
      "Margarin",
      "Glass",
      "Choklad och kakor",
      "Wienerbröd och croissanter",
      "Potatismos-pulver",
    ],
    euStatus: "Godkänd i EU. Tillåten utan numerisk mängdbegränsning (quantum satis) i de flesta livsmedelskategorier.",
    adiInfo: "EFSA:s ANS-panel fastslog 2017 att inget numeriskt ADI behövs och att E471 inte utgör ett säkerhetsproblem vid redovisade användningsnivåer. En uppföljande bedömning 2021 bekräftade säkerheten även för spädbarn. Ämnet metaboliseras som normalt kostfett.",
    healthNotes: [
      "Eftersom råvaran kan vara animalisk är E471 relevant för veganer, vegetarianer och konsumenter med halal- eller kosher-kost. Det är normalt omöjligt att avgöra från förpackningsetiketten om en specifik produkt innehåller animalisk eller vegetabilisk E471.",
      "Livsmedelsverket upplyser om detta på sin webbsida om E471.",
    ],
    relatedIds: ["e322", "e440"],
  },
  {
    id: "e440",
    number: "E440",
    name: "Pektiner",
    category: "Geleringsmedel",
    cardDescription: "Pektiner är naturliga polysackarider från cellväggarna hos växter. Utvinns ur citrusfruktsskal och äppelpomace och används som geleringsmedel i sylt och marmelad.",
    description: [
      "Pektiner är naturliga polysackarider (komplexa kolhydrater) som förekommer i cellväggarna hos alla landlevande växter. Kommersiellt utvinns pektin huvudsakligen ur citrusfruktsskal (citroner, limefrukter, apelsiner) och äppelpomace (pressrester efter äppeljuicetillverkning).",
      "Tillsatsen omfattar två varianter: E440i (pektin) och E440ii (amiderat pektin). Amiderat pektin är kemiskt modifierat – en del karboxylgrupper har omvandlats till amider – vilket ger annorlunda geleringsegenskaper, bland annat en mjukare och mer temperaturstabil gel.",
      "Pektiner är tillåtna utan numerisk mängdbegränsning (quantum satis) i de flesta livsmedel. Undantag: pektiner får inte användas i gelégodis i miniförpackningar på grund av kvävningsrisk.",
    ],
    commonlyFoundIn: [
      "Sylt, marmelad och gelé",
      "Fruktyoghurt",
      "Fruktjuicer",
      "Konfektyr och gelégodis",
      "Dressingar",
      "Glass",
      "Barnmat",
    ],
    euStatus: "Godkänd i EU. Tillåten utan numerisk mängdbegränsning i de flesta livsmedel. Får inte användas i gelégodis i miniförpackningar (kvävningsrisk).",
    adiInfo: "EFSA:s ANS-panel fastslog 2017 att inget numeriskt ADI behövs för varken E440i eller E440ii. Inga ogynnsamma effekter observerades i kronisk toxicitetsstudie på råttor vid upp till 5 000 mg/kg kroppsvikt per dag. Hos människor gav 36 g per dag i 6 veckor inga ogynnsamma effekter.",
    healthNotes: [
      "Pektiner absorberas inte intakt i tarmen utan fermenteras av tarmfloran och har prebiotiska egenskaper.",
      "Pektin är ett välkänt kostfiber och diskuteras i näringsforskning för positiva effekter på kolesterol och blodsockernivåer. Dessa hälsoeffekter gäller pektin som livsmedelskomponent – inte specifikt som tillsats.",
      "Pektiner bedöms inte ha allergipotential. En uppföljande bedömning 2021 bekräftade säkerheten även för spädbarn.",
    ],
    relatedIds: ["e330"],
  },
]

export function getENumberById(id: string): ENumber | undefined {
  return enumbers.find((e) => e.id === id)
}
