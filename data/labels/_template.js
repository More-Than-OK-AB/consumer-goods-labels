/**
 * Label data template — reference file for adding or reviewing labels.
 *
 * DO NOT add this file to the page; it exists only as a structural guide.
 * Copy the object below, fill in every field, and save as <label-id>.js.
 *
 * Rules:
 *  - Every notes item MUST have both `label` (short bold heading) and `text`.
 *    For comparisons the label is the other label's name.
 *    For standalone notes use a short descriptive heading.
 *  - Tags must use one of the predefined tag ids (see label-spec.md).
 *  - All user-facing text must be in Swedish.
 *  - crossLinks should match the labels referenced in notes where applicable.
 */

/*
window.LABELS_DATA.push({
  id: "",
  name: "",
  image: "images/<filename>",
  website: "",
  tags: [
    {
      id: "",          // e.g. "ekologiskt", "miljo", "halsa", "djurvalf",
                       //      "ursprung", "socialt-ansvar", "hav-fiske"
      label: "",       // Swedish display name matching label-spec.md
      explanation: "", // How this tag relates to this specific label
      showOnCard: true // true for primary tags shown on index card
    }
  ],
  cardDescription: "", // 1-2 sentences for the index page card
  description: [
    "", // Paragraph 1: what the label is, history, scope
    ""  // Paragraph 2: product categories, additional details
  ],
  credibility: {
    summary: "", // REQUIRED — one sentence: who certifies and how it's verified
    items: [
      // OPTIONAL — only include items that reveal something about trustworthiness.
      // Omit the array or leave empty for labels with standard third-party certification.
      {
        label: "",  // Short heading (e.g. "DNA-testning", "Självdeklaration")
        text: ""    // The consumer-relevant detail
      }
    ]
  },
  notes: {
    items: [
      {
        label: "",  // REQUIRED — other label name or short descriptive heading
        text: ""    // REQUIRED — the note content
      }
    ]
  },
  crossLinks: [
    { name: "", id: "" } // Labels referenced in notes / closely related
  ]
});
*/
