function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleFold1() {
    var foldContent1 = document.querySelector('.fold-content1');
    foldContent1.style.display = (foldContent1.style.display === 'none' || foldContent1.style.display === '') ? 'block' : 'none';
  }
  
  function toggleFold2() {
    var foldContent2 = document.querySelector('.fold-content2');
    foldContent2.style.display = (foldContent2.style.display === 'none' || foldContent2.style.display === '') ? 'block' : 'none';
  }  