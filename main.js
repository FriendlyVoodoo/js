const tabs = document.getElementById('tabs'),
    content = document.querySelectorAll('.content'),
    tabsDop = document.getElementById('tabs-dop'),
    contentDop = document.querySelectorAll('.content-dop');


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

const activeContentDop = ele => {
    for (let i = 0; i < tabsDop.children.length; i++) {
        tabsDop.children[i].classList.remove('active');
    }
    ele.classList.add('active');
}

tabsDop.addEventListener('click', elem => {
    const currTubDop = elem.target.dataset.btndop;
    activeContentDop(elem.target);
    for (let i = 0; i < contentDop.length; i++) {
        contentDop[i].classList.remove('active');
        if (contentDop[i].dataset.contentdop === currTubDop) {
            contentDop[i].classList.add('active');
        }
    }
})
