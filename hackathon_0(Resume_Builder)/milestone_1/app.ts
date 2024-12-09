function toggleSection(sectionId: string): void {
  const section = document.getElementById(`${sectionId}-section`);
  const content = section?.querySelector('.content');
  const arrow = section?.querySelector('.arrow');

  if (content && arrow) {
    content.classList.toggle('show');
    arrow.classList.toggle('rotate');
  }
}

