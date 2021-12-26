const tabs = document.getElementById('tabs'),
    content = document.querySelectorAll('.content');

const activeContent = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTub = e.target.dataset.btn;
    activeContent(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTub) {
            content[i].classList.add('active');
        }
    }
})