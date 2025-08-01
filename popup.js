document.addEventListener('DOMContentLoaded', function() {
  // Toggle category visibility
  const categories = document.querySelectorAll('.category-title');
  categories.forEach(category => {
    category.addEventListener('click', function() {
      const checklist = this.nextElementSibling;
      checklist.style.display = checklist.style.display === 'none' ? 'block' : 'none';
    });
  });

  // Analyze current page button
  document.getElementById('analyzeBtn').addEventListener('click', analyzePage);
});

function analyzePage() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: analyzeSEO
    }, (results) => {
      if (results && results[0]) {
        updateChecklist(results[0].result);
      }
    });
  });
}

function analyzeSEO() {
  const result = {
    titleTag: document.title ? true : false,
    metaDesc: document.querySelector('meta[name="description"]') ? true : false,
    headings: {
      h1: document.querySelectorAll('h1').length,
      h2: document.querySelectorAll('h2').length,
      h3: document.querySelectorAll('h3').length
    },
    altText: Array.from(document.querySelectorAll('img')).filter(img => img.alt).length,
    totalImages: document.querySelectorAll('img').length
  };
  return result;
}

function updateChecklist(analysis) {
  // Update title tag checkbox
  document.getElementById('titleTag').checked = analysis.titleTag;
  
  // Update meta description checkbox
  document.getElementById('metaDesc').checked = analysis.metaDesc;
  
  // Update heading structure checkbox
  const headingCheckbox = document.getElementById('headings');
  headingCheckbox.checked = analysis.headings.h1 === 1 && 
                           analysis.headings.h2 > 0 && 
                           analysis.headings.h3 > 0;
  
  // Update alt text checkbox
  const altTextCheckbox = document.getElementById('altText');
  const altTextPercentage = (analysis.altText / analysis.totalImages) * 100;
  altTextCheckbox.checked = altTextPercentage > 80;
  
  // Show/hide local SEO based on domain (basic check)
  const currentUrl = window.location.href;
  const localSeoSection = document.getElementById('localSeo');
  if (currentUrl.includes('.com') || currentUrl.includes('.net') || currentUrl.includes('.org')) {
    localSeoSection.classList.add('hidden');
  } else {
    localSeoSection.classList.remove('hidden');
  }
}
