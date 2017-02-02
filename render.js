'use strict';

var sig = new sigma({
    renderers: [
        {
            container: document.getElementById('graph'),
            type: 'canvas'
        }
    ],
    settings: {
        defaultNodeColor: '#ec5148',
        defaultArrowSizeMultiplier: 10
    }
});

function renderClean() {
    render('dat/troyes-bouchon-gauche.json');
}

function renderDirected() {
    render('dat/troyes-bouchon-gauche-arrow.json');
}

function renderFull() {
    render('dat/troyes-bouchon-gauche-label-arrow.json');
}

function render(filename) {
    sigma.parsers.json(filename, sig, function() {sig.refresh()});
}
