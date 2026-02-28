(function () {
  var grid = document.querySelector(".label-grid");
  var filterBar = document.getElementById("filter-bar");
  var searchInput = document.getElementById("search-input");
  if (!grid || !filterBar || !window.LABELS_DATA) return;

  // Extract unique tags from all labels
  var tagMap = {};
  window.LABELS_DATA.forEach(function (label) {
    label.tags.forEach(function (tag) {
      if (!tagMap[tag.id]) {
        tagMap[tag.id] = tag.label;
      }
    });
  });

  var tagIds = Object.keys(tagMap);
  var activeFilter = null;

  // Render filter buttons
  var allaBtn = document.createElement("button");
  allaBtn.type = "button";
  allaBtn.className = "filter-btn filter-btn-alla active";
  allaBtn.textContent = "Alla";
  allaBtn.addEventListener("click", function () {
    activeFilter = null;
    updateFilters();
  });
  filterBar.appendChild(allaBtn);

  tagIds.forEach(function (tagId) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-btn filter-btn-" + tagId;
    btn.textContent = tagMap[tagId];
    btn.dataset.tag = tagId;
    btn.addEventListener("click", function () {
      activeFilter = activeFilter === tagId ? null : tagId;
      updateFilters();
    });
    filterBar.appendChild(btn);
  });

  // Render label cards
  var cards = [];
  window.LABELS_DATA.forEach(function (label) {
    var card = document.createElement("a");
    card.href = "label?id=" + encodeURIComponent(label.id);
    card.className = "label-card";
    card.dataset.tags = label.tags.map(function (t) { return t.id; }).join(",");
    card.dataset.name = label.name.toLowerCase();

    if (label.image) {
      var img = LabelUtils.createImage(label.image, label.name + " logotyp", "card-image");
      card.appendChild(img);
    }

    var h2 = document.createElement("h2");
    h2.textContent = label.name;
    card.appendChild(h2);

    var p = document.createElement("p");
    p.textContent = label.cardDescription;
    card.appendChild(p);

    var tagsDiv = LabelUtils.createTags(label.tags, true);
    card.appendChild(tagsDiv);

    var link = document.createElement("span");
    link.className = "card-link";
    link.textContent = "Läs mer \u2192";
    card.appendChild(link);

    grid.appendChild(card);
    cards.push(card);
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      updateFilters();
    });
  }

  function updateFilters() {
    var query = searchInput ? searchInput.value.toLowerCase().trim() : "";

    // Update button states
    allaBtn.classList.toggle("active", activeFilter === null);
    filterBar.querySelectorAll("[data-tag]").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.tag === activeFilter);
    });

    // Filter cards
    cards.forEach(function (card) {
      var matchesTag = activeFilter === null || card.dataset.tags.split(",").indexOf(activeFilter) !== -1;
      var matchesSearch = !query || card.dataset.name.indexOf(query) !== -1;
      card.classList.toggle("hidden", !(matchesTag && matchesSearch));
    });
  }
})();
