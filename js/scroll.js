$(document).ready(function(){

    $('.nav-link').click(function(e){

        var linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        });

        e.preventDefault();
    })
})

// Add class active to nav links
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const current =
    sections.length -
    [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 86) -
    1;
  if (current === sections.length) return;

  navItems.forEach((navItem) => {
    navItem.classList.remove('active');
  });
  navItems[current].classList.add('active');
});


// Responsive navbar
const toggleCollapse = document.querySelector('.toggle-collapse');
const navbarCollapse = document.querySelector('.navbar-collapse');
const collapse = document.querySelector('.collapse');

toggleCollapse.addEventListener('click', (e) => {
  navbarCollapse.classList.toggle('collapse');
});