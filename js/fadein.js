function checkScroll() {
    var issueAboutMe = document.querySelector('.issue_aboutme');
    var contentPosition = issueAboutMe.getBoundingClientRect().top;
    var sectionHeight = issueAboutMe.offsetHeight;
    var screenPosition = window.innerHeight;

    if (contentPosition - screenPosition < 0 && contentPosition - screenPosition > -sectionHeight) {
        issueAboutMe.classList.add('fadein');
    } else {
        issueAboutMe.classList.remove('fadein');
    }
}

window.addEventListener('scroll', checkScroll);


function fadeInInterestSkillSection() {
    const section = document.querySelector('.intersting_skill.fade-in');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    if (rect.top < screenHeight && rect.bottom > 0) {
    section.classList.add('active');
} else {
    section.classList.remove('active');
}
}

    window.addEventListener('scroll', fadeInInterestSkillSection);
    window.addEventListener('load', fadeInInterestSkillSection);

function fadeInErrorSections() {
    const errorSections = document.querySelectorAll('.error_aboutme, .error_reason, .error_solve, .error_solve_improve');
    const screenHeight = window.innerHeight;

    errorSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < screenHeight && rect.bottom > 0) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', fadeInErrorSections);
window.addEventListener('load', fadeInErrorSections);
