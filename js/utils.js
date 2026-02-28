/**
 * Shared utilities for rendering label pages
 */

var LabelUtils = {
  /**
   * Create a section with a title
   * @param {string} title - The section title
   * @returns {HTMLElement} The section div
   */
  createSection: function (title) {
    var section = document.createElement("div");
    section.className = "section";
    var h2 = document.createElement("h2");
    h2.textContent = title;
    section.appendChild(h2);
    return section;
  },

  /**
   * Create a list section with intro text and list items
   * @param {string} title - The section title
   * @param {object} data - Object with intro and items properties
   * @returns {HTMLElement} The section div
   */
  createListSection: function (title, data) {
    var section = this.createSection(title);
    var p = document.createElement("p");
    p.textContent = data.intro;
    section.appendChild(p);
    var ul = document.createElement("ul");
    data.items.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    section.appendChild(ul);
    return section;
  },

  /**
   * Create an image element with proper attributes
   * @param {string} src - Image source URL
   * @param {string} alt - Alt text
   * @param {string} className - CSS class name
   * @returns {HTMLElement} The image element
   */
  createImage: function (src, alt, className) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    if (className) {
      img.className = className;
    }
    return img;
  },

  /**
   * Create tags HTML elements
   * @param {Array} tags - Array of tag objects
   * @param {boolean} showOnlyOnCard - If true, only show tags where showOnCard is true
   * @returns {HTMLElement} The tags container div
   */
  createTags: function (tags, showOnlyOnCard) {
    var tagsDiv = document.createElement("div");
    tagsDiv.className = "tags";
    tags.forEach(function (tag) {
      if (showOnlyOnCard && !tag.showOnCard) return;
      var span = document.createElement("span");
      span.className = "tag tag-" + tag.id;
      span.textContent = tag.label;
      tagsDiv.appendChild(span);
    });
    return tagsDiv;
  }
};
