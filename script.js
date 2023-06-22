var accordionItems = document.getElementsByClassName('accordion-item');
var activeAccordion = null;

function toggleAccordion(content) {
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.previousElementSibling.classList.remove('open');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.previousElementSibling.classList.add('open');
        activeAccordion = content;
    }
}

for (var i = 0; i < accordionItems.length; i++) {
    var header = accordionItems[i].querySelector('.accordion-header');
    var content = accordionItems[i].querySelector('.accordion-content');

    header.addEventListener('click', function () {
        var currentContent = this.nextElementSibling;

        if (activeAccordion && activeAccordion !== currentContent) {
            toggleAccordion(activeAccordion);
        }

        toggleAccordion(currentContent);
    });
}

// Open the first accordion item initially
toggleAccordion(accordionItems[0].querySelector('.accordion-content'));
