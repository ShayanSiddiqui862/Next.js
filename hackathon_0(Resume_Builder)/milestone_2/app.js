function handleFormSubmit(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-contact').textContent = "Email: ".concat(email, " | Phone: ").concat(phone);
    document.getElementById('display-education').innerHTML = education.replace(/\n/g, '<br>');
    document.getElementById('display-experience').innerHTML = experience.replace(/\n/g, '<br>');
    document.getElementById('display-skills').innerHTML = skills.replace(/, /g, ', <br>');
}
function handleEditableChanges() {
    var education = document.getElementById('display-education').innerHTML;
    var experience = document.getElementById('display-experience').innerHTML;
    var skills = document.getElementById('display-skills').innerHTML;
    localStorage.setItem('education', education);
    localStorage.setItem('experience', experience);
    localStorage.setItem('skills', skills);
}

document.getElementById('display-education').addEventListener('input', handleEditableChanges);
document.getElementById('display-experience').addEventListener('input', handleEditableChanges);
document.getElementById('display-skills').addEventListener('input', handleEditableChanges);
function downloadPDF() {
    var resumeElement = document.getElementById('resume');
    html2pdf().from(resumeElement).save('resume.pdf');
}
