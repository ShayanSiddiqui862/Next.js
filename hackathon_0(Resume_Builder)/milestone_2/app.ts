function handleFormSubmit(event: Event): void {
  event.preventDefault();

  // Capture data from the form
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Update the resume display with captured data
  document.getElementById('display-name')!.textContent = name;
  document.getElementById('display-contact')!.textContent = `Email: ${email} | Phone: ${phone}`;
  document.getElementById('display-education')!.innerHTML = education.replace(/\n/g, '<br>');
  document.getElementById('display-experience')!.innerHTML = experience.replace(/\n/g, '<br>');
  document.getElementById('display-skills')!.innerHTML = skills.replace(/, /g, ', <br>');
}
function handleEditableChanges() {
  const education = document.getElementById('display-education')!.innerHTML;
  const experience = document.getElementById('display-experience')!.innerHTML;
  const skills = document.getElementById('display-skills')!.innerHTML;
  
  localStorage.setItem('education', education);
  localStorage.setItem('experience', experience);
  localStorage.setItem('skills', skills);
}

// Listen for changes in editable content
document.getElementById('display-education')!.addEventListener('input', handleEditableChanges);
document.getElementById('display-experience')!.addEventListener('input', handleEditableChanges);
document.getElementById('display-skills')!.addEventListener('input', handleEditableChanges);

function downloadPDF() {
  const resumeElement = document.getElementById('resume')!;
  html2pdf().from(resumeElement).save('resume.pdf');
}

