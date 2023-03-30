const navTab = document.querySelector('.nav-tab');
const navContent = document.querySelector('.tab-content');

navTab.addEventListener('click', toggleContent);

let showContent = false

function toggleContent() {
    if(!showContent) {
        navContent.classList.add('is-open');

        showContent = true;
    }

        else {
            navContent.classList.remove('is-open');

            showContent = false;
        }
    }