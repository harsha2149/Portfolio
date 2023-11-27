const socialsList = document.querySelectorAll(".S");
const resumes = document.querySelectorAll(".res");

resumes.forEach(function(resume) {
    resume.addEventListener('click' , Openresumes);
});

socialsList.forEach(function (social) {
    social.addEventListener("click", Opensocials);
});

function Opensocials(event) {
    if (event.currentTarget.getAttribute('data-value') === '1') {
        window.open('https://www.linkedin.com/in/contact-harshavardhan/', '_blank');
    }
    if (event.currentTarget.getAttribute('data-value') === '2') {
        window.open('https://github.com/harsha2149', '_blank');
    }
    else{
        window.open('https://www.instagram.com/', '_blank');
    }
}


function Openresumes(event){
    if(event.currentTarget.getAttribute('data-value') === '2'){
        window.open('', '_blank');
    }
    else{
        window.open('', '_blank');
    }
}
