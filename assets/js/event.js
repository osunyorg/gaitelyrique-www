var eventContent = document.querySelector('.events__page .document-content'),
    heroFigure,
    sidebar,
    heroImage;

function setEventSingleMinHeight() {
    if (!eventContent) {
        return;
    }

    // heroFigure = eventContent.querySelector('.hero figure');
    sidebar = eventContent.querySelector('.section-sidebar > div');
    // heroImage = heroFigure.querySelector('img');

    function updateEventContentMinHeight() {
        var height = sidebar.offsetHeight;

        if (window.innerWidth >= 992) {
            eventContent.style.minHeight = 'calc(' + height + 'px + 8rem)';
        } else {
            eventContent.style.minHeight = '0';
        }
    }

    // heroImage.addEventListener('load', updateEventContentMinHeight);
    window.addEventListener('resize', updateEventContentMinHeight);

    updateEventContentMinHeight();
}


setEventSingleMinHeight();