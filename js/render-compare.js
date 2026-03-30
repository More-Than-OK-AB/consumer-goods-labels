(function () {
  var container = document.getElementById("compare-table-container");
  var selectorsDiv = document.getElementById("compare-selectors");
  var quickLinksDiv = document.getElementById("quick-links");
  if (!container || !selectorsDiv || !window.LABELS_DATA) return;

  var labels = window.LABELS_DATA;
  var MAX_SELECTIONS = 3;

  // Popular comparisons for quick links
  var popularComparisons = [
    { title: "KRAV vs EU-ekologiskt", ids: ["krav", "eu-ekologiskt"] },
    { title: "MSC vs ASC", ids: ["msc", "asc"] },
    { title: "FSC vs PEFC", ids: ["fsc", "pefc"] },
    { title: "KRAV vs Svenskt Sigill", ids: ["krav", "svenskt-sigill"] },
    { title: "Svanen vs EU Ecolabel", ids: ["svanen", "eu-ecolabel"] },
    { title: "KRAV vs Demeter", ids: ["krav", "demeter"] }
  ];

  // Tag label map for display
  var tagLabelMap = {};
  labels.forEach(function (label) {
    label.tags.forEach(function (tag) {
      if (!tagLabelMap[tag.id]) tagLabelMap[tag.id] = tag.label;
    });
  });

  // All unique tag IDs across all labels
  var allTagIds = Object.keys(tagLabelMap);

  // State: currently selected label IDs
  var selectedIds = [];

  // Read initial selections from URL
  var params = new URLSearchParams(window.location.search);
  var idsParam = params.get("ids");
  if (idsParam) {
    selectedIds = idsParam.split(",").filter(function (id) {
      return labels.some(function (l) { return l.id === id; });
    }).slice(0, MAX_SELECTIONS);
  }

  // Build selectors
  function renderSelectors() {
    selectorsDiv.innerHTML = "";
    for (var i = 0; i < MAX_SELECTIONS; i++) {
      var select = document.createElement("select");
      select.className = "compare-select";
      select.dataset.index = i;
      select.setAttribute("aria-label", i < 2 ? "Välj märkning " + (i + 1) : "Välj en tredje märkning (valfritt)");

      var defaultOpt = document.createElement("option");
      defaultOpt.value = "";
      defaultOpt.textContent = i < 2 ? "Välj märkning..." : "Välj en tredje (valfritt)...";
      select.appendChild(defaultOpt);

      labels.forEach(function (label) {
        var opt = document.createElement("option");
        opt.value = label.id;
        opt.textContent = label.name;
        if (selectedIds[i] === label.id) opt.selected = true;
        select.appendChild(opt);
      });

      select.addEventListener("change", function () {
        var idx = parseInt(this.dataset.index);
        var val = this.value;
        selectedIds[idx] = val || undefined;
        // Clean up trailing empty slots
        while (selectedIds.length > 0 && !selectedIds[selectedIds.length - 1]) {
          selectedIds.pop();
        }
        updateURL();
        renderTable();
      });

      selectorsDiv.appendChild(select);
    }
  }

  // Build quick links
  function renderQuickLinks() {
    var heading = document.createElement("p");
    heading.className = "compare-quick-heading";
    heading.textContent = "Populära jämförelser:";
    quickLinksDiv.appendChild(heading);

    var linksWrap = document.createElement("div");
    linksWrap.className = "compare-quick-buttons";

    popularComparisons.forEach(function (comp) {
      var a = document.createElement("a");
      a.href = "compare?ids=" + comp.ids.join(",");
      a.className = "compare-quick-btn";
      a.textContent = comp.title;
      a.addEventListener("click", function (e) {
        e.preventDefault();
        selectedIds = comp.ids.slice();
        updateURL();
        renderSelectors();
        renderTable();
      });
      linksWrap.appendChild(a);
    });

    quickLinksDiv.appendChild(linksWrap);
  }

  function updateURL() {
    var clean = selectedIds.filter(Boolean);
    var newUrl = clean.length > 0
      ? "compare?ids=" + clean.join(",")
      : "compare";
    window.history.replaceState(null, "", newUrl);
  }

  // Find label by ID
  function findLabel(id) {
    for (var i = 0; i < labels.length; i++) {
      if (labels[i].id === id) return labels[i];
    }
    return null;
  }

  // Build the comparison table
  function renderTable() {
    container.innerHTML = "";

    var selected = selectedIds.filter(Boolean).map(findLabel).filter(Boolean);
    if (selected.length < 2) {
      if (selected.length === 1) {
        var hint = document.createElement("p");
        hint.className = "compare-hint";
        hint.textContent = "Välj minst en märkning till för att jämföra.";
        container.appendChild(hint);
      }
      return;
    }

    var table = document.createElement("table");
    table.className = "compare-table";
    table.setAttribute("aria-label", "Jämförelsetabell för märkningar");

    // Header row with logos and names
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    var cornerTh = document.createElement("th");
    cornerTh.className = "compare-corner";
    cornerTh.setAttribute("scope", "col");
    headerRow.appendChild(cornerTh);

    selected.forEach(function (label) {
      var th = document.createElement("th");
      th.className = "compare-label-header";
      th.setAttribute("scope", "col");
      if (label.image) {
        var img = document.createElement("img");
        img.src = label.image;
        img.alt = label.name;
        img.className = "compare-header-img";
        th.appendChild(img);
      }
      var nameLink = document.createElement("a");
      nameLink.href = "label?id=" + label.id;
      nameLink.textContent = label.name;
      nameLink.className = "compare-header-name";
      th.appendChild(nameLink);
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");

    // Row: Description
    addRow(tbody, "Beskrivning", selected, function (label) {
      return label.description[0] || "";
    });

    // Row: Tags (categories)
    addRow(tbody, "Kategorier", selected, function (label) {
      return label.tags.map(function (t) { return t.label; }).join(", ");
    }, true);

    // Row: Tag comparison — one row per tag showing coverage
    allTagIds.forEach(function (tagId) {
      // Only show tags that at least one selected label has
      var anyHas = selected.some(function (label) {
        return label.tags.some(function (t) { return t.id === tagId; });
      });
      if (!anyHas) return;

      addRow(tbody, tagLabelMap[tagId], selected, function (label) {
        var tag = null;
        label.tags.forEach(function (t) {
          if (t.id === tagId) tag = t;
        });
        return tag ? tag.explanation : "\u2014";
      });
    });

    // Row: Credibility
    addRow(tbody, "Trovärdighet", selected, function (label) {
      return label.credibility ? label.credibility.summary : "\u2014";
    });

    // Row: Website
    addRowHTML(tbody, "Webbplats", selected, function (label) {
      if (!label.website) return "\u2014";
      var a = document.createElement("a");
      a.href = label.website;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = label.website.replace(/^https?:\/\//, "").replace(/\/$/, "");
      return a;
    });

    table.appendChild(tbody);
    container.appendChild(table);
  }

  function addRow(tbody, rowLabel, selected, getValue, isBold) {
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.className = "compare-row-label";
    th.setAttribute("scope", "row");
    th.textContent = rowLabel;
    tr.appendChild(th);

    selected.forEach(function (label) {
      var td = document.createElement("td");
      var text = getValue(label);
      if (isBold) {
        var strong = document.createElement("strong");
        strong.textContent = text;
        td.appendChild(strong);
      } else {
        td.textContent = text;
      }
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  }

  function addRowHTML(tbody, rowLabel, selected, getElement) {
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.className = "compare-row-label";
    th.setAttribute("scope", "row");
    th.textContent = rowLabel;
    tr.appendChild(th);

    selected.forEach(function (label) {
      var td = document.createElement("td");
      var content = getElement(label);
      if (typeof content === "string") {
        td.textContent = content;
      } else {
        td.appendChild(content);
      }
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  }

  // Initialize
  renderSelectors();
  renderQuickLinks();
  renderTable();
})();
