//  Section - 4 Application Modernization Services 
$(document).ready(function() {
    $('.application-para').click(function() {
      const targetId = $(this).data('target');
      $('.application-para').removeClass('active-ams');
      $(this).addClass('active-ams');
      $('.content-ams').addClass('hidden-ams');
      $('#' + targetId).removeClass('hidden-ams');
    });
  });


  //  Section - 4  Application Modernization Services (Responsive) 
  document.addEventListener("DOMContentLoaded", function() {
    let headers = document.querySelectorAll('.modernization-res-sec1');
    let openSection = document.getElementById('modernization-res-sec1');

    function toggleSection(header) {
        let icon = header.querySelector('.toggle-icon');
        let content = header.nextElementSibling;

        if (content.style.display === 'none' || content.style.display === '') {
            // Close any currently open section
            if (openSection && openSection !== header) {
                let openIcon = openSection.querySelector('.toggle-icon');
                let openContent = openSection.nextElementSibling;

                openContent.style.display = 'none';
                openIcon.classList.remove('bi-dash-lg');
                openIcon.classList.add('bi-plus');
                openSection.classList.remove('active-amsR');
            }

            // Open the clicked section
            content.style.display = 'block';
            icon.classList.remove('bi-plus');
            icon.classList.add('bi-dash-lg');
            header.classList.add('active-amsR');

            openSection = header;
        } else {
            // Close the clicked section
            content.style.display = 'none';
            icon.classList.remove('bi-dash-lg');
            icon.classList.add('bi-plus');
            header.classList.remove('active-amsR');

            openSection = null;
        }
    }

    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            toggleSection(header);
        });
    });

    // Initial state for Web App Development
    if (openSection) {
        let initialIcon = openSection.querySelector('.toggle-icon');
        let initialContent = openSection.nextElementSibling;

        initialContent.style.display = 'block';
        initialIcon.classList.remove('bi-plus');
        initialIcon.classList.add('bi-dash-lg');
        openSection.classList.add('active-amsR');
    }
});
