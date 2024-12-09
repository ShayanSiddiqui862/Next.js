function toggleSection(sectionId) {
    var section = document.getElementById("".concat(sectionId, "-section"));
    var content = section === null || section === void 0 ? void 0 : section.querySelector('.content');
    var arrow = section === null || section === void 0 ? void 0 : section.querySelector('.arrow');
    if (content && arrow) {
        content.classList.toggle('show');
        arrow.classList.toggle('rotate');
    }
}
