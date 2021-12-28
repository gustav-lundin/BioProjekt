document.querySelector('body').addEventListener('click', function (event) {
    let aTag = event.target.closest('a');

    if (!aTag) { return; }

    let href = aTag.getAttribute('href');
    console.log(href);

    if (href.indexOf('http') === 0) {
        aTag.setAttribute('target', '_blank');
        return;
    }

    event.preventDefault();

    history.pushState(null, null, href);

    router();
});

function router() {
    let route = location.pathname;

    route = route.slice(1) || 'start';


}

router();

window.addEventListener('popstate', router);
