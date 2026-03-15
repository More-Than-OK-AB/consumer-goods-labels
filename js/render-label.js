(function () {
  var container = document.getElementById("label-content");
  if (!container || !window.LABELS_DATA) return;

  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var label = null;

  for (var i = 0; i < window.LABELS_DATA.length; i++) {
    if (window.LABELS_DATA[i].id === id) {
      label = window.LABELS_DATA[i];
      break;
    }
  }

  if (!label) {
    container.innerHTML =
      '<p style="text-align:center;margin-top:2rem;">Märkningen kunde inte hittas.</p>';
    return;
  }

  document.title = label.name + " \u2013 Svenska livsmedelsm\u00e4rkningar";

  // Back link
  var backLink = document.createElement("a");
  backLink.href = "index.html";
  backLink.className = "back-link";
  backLink.textContent = "Tillbaka till \u00f6versikten";
  container.appendChild(backLink);

  // Label header
  var header = document.createElement("div");
  header.className = "label-header";

  if (label.image) {
    var img = LabelUtils.createImage(label.image, label.name + " logotyp", "header-image");
    header.appendChild(img);
  }

  var h1 = document.createElement("h1");
  h1.textContent = label.name;
  header.appendChild(h1);

  // Add tags (only showOnCard tags)
  var headerTags = LabelUtils.createTags(label.tags, true);
  header.appendChild(headerTags);
  container.appendChild(header);

  // Beskrivning
  var descSection = LabelUtils.createSection("Beskrivning");
  label.description.forEach(function (text) {
    var p = document.createElement("p");
    p.textContent = text;
    descSection.appendChild(p);
  });
  if (label.website) {
    var readMoreP = document.createElement("p");
    readMoreP.appendChild(document.createTextNode("Läs mer om märkningen här: "));
    var websiteLink = document.createElement("a");
    websiteLink.href = label.website;
    try {
      websiteLink.textContent = new URL(label.website).hostname;
    } catch (e) {
      websiteLink.textContent = label.website;
    }
    websiteLink.target = "_blank";
    websiteLink.rel = "noopener noreferrer";
    readMoreP.appendChild(websiteLink);
    descSection.appendChild(readMoreP);
  }
  container.appendChild(descSection);

  // Taggar - show all tags
  var tagSection = LabelUtils.createSection("Taggar");
  var allTagsDiv = LabelUtils.createTags(label.tags, false);
  tagSection.appendChild(allTagsDiv);

  var tagList = document.createElement("ul");
  tagList.style.marginTop = "0.75rem";
  label.tags.forEach(function (tag) {
    var li = document.createElement("li");
    var strong = document.createElement("strong");
    strong.textContent = tag.label;
    li.appendChild(strong);
    li.appendChild(document.createTextNode(" \u2013 " + tag.explanation));
    tagList.appendChild(li);
  });
  tagSection.appendChild(tagList);
  container.appendChild(tagSection);

  // Certifieringsprocess
  container.appendChild(
    LabelUtils.createListSection("Certifieringsprocess", label.certification)
  );

  // Kontroll & uppföljning
  container.appendChild(
    LabelUtils.createListSection("Kontroll & uppf\u00f6ljning", label.oversight)
  );

  // Övrigt / Kommentarer
  if (label.notes && label.notes.items && label.notes.items.length > 0) {
    var notesSection = LabelUtils.createSection("Övrigt");
    var nList = document.createElement("ul");
    label.notes.items.forEach(function (item) {
      var li = document.createElement("li");
      var strong = document.createElement("strong");
      strong.textContent = item.label;
      li.appendChild(strong);
      li.appendChild(document.createTextNode(" \u2013 " + item.text));
      nList.appendChild(li);
    });
    notesSection.appendChild(nList);
    container.appendChild(notesSection);
  }

  // Cross-link first mentions of referenced labels in body text
  if (label.crossLinks) {
    LabelUtils.addCrossLinks(container, label.crossLinks);
  }
})();
