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
    var h3 = document.createElement("h3");
    h3.textContent = title;
    section.appendChild(h3);
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
   * Walk the rendered container and link the first occurrence of each cross-linked
   * label name in regular body text (skips headings, bold and existing links).
   * @param {HTMLElement} container
   * @param {Array} crossLinks - Array of {name, id} objects
   */
  addCrossLinks: function (container, crossLinks) {
    if (!crossLinks || crossLinks.length === 0) return;
    var self = this;
    crossLinks.forEach(function (link) {
      self._addSingleCrossLink(container, link.name, link.id);
    });
  },

  _addSingleCrossLink: function (container, name, id) {
    function walk(node) {
      if (
        node.nodeName === "A" ||
        node.nodeName === "STRONG" ||
        node.nodeName === "H1" ||
        node.nodeName === "H2"
      ) {
        return false;
      }
      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var idx = text.indexOf(name);
        if (idx === -1) return false;
        var parent = node.parentNode;
        var before = document.createTextNode(text.substring(0, idx));
        var a = document.createElement("a");
        a.href = "label?id=" + id;
        a.textContent = name;
        var after = document.createTextNode(text.substring(idx + name.length));
        parent.insertBefore(before, node);
        parent.insertBefore(a, node);
        parent.insertBefore(after, node);
        parent.removeChild(node);
        return true;
      }
      var children = Array.prototype.slice.call(node.childNodes);
      for (var i = 0; i < children.length; i++) {
        if (walk(children[i])) return true;
      }
      return false;
    }
    walk(container);
  },

  /**
   * Create tags HTML elements
   * @param {Array} tags - Array of tag objects
   * @returns {HTMLElement} The tags container div
   */
  createTags: function (tags) {
    var tagsDiv = document.createElement("div");
    tagsDiv.className = "tags";
    tags.forEach(function (tag) {
      var span = document.createElement("span");
      span.className = "tag tag-" + tag.id;
      span.textContent = tag.label;
      tagsDiv.appendChild(span);
    });
    return tagsDiv;
  }
};
