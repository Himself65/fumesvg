function quickStart(){
    let stage = document.querySelector('iframe').contentWindow.document.querySelector('svg');
    return new Anime(1,stage);
}

function Anime(proportion, stage) {
    this.stage = stage;
    this.proportion = proportion;
    return this;
}

Anime.prototype.getlist = function (arr) {
    let rarr = [];
    let self = this;
    arr.forEach(function (i) {
        let ele = self.stage.querySelector('#'+i);
        rarr.push(ele);
        //todo
    });
    return rarr;
};

Anime.prototype.change = function (n, el_1, el_2) {
    let arr = [el_1, el_2];
    let arr2 = [{x: null, y: null, w: null, h: null}, {x: null, y: null, w: null, h: null}];
    let coordinate = [{x: null, y: null}, {x: null, y: null}];
    arr.forEach(function (i, j) {
        if (i.tagName === 'circle') {
            let r = i.getAttribute('r');
            let cx = i.getAttribute('cx');
            let cy = i.getAttribute('cy');
            arr2[j].x = parseInt(cx - r);
            arr2[j].y = parseInt(cy - r);
            arr2[j].w = arr2[j].h = 2 * parseInt(r);
        } else if (i.tagName === 'rect') {
            arr2[j].x = parseInt(i.getAttribute('x'));
            arr2[j].y = parseInt(i.getAttribute('y'));
            arr2[j].w = parseInt(i.getAttribute('width'));
            arr2[j].h = parseInt(i.getAttribute('height'));
        } else if (i.tagName === 'text') {
            let h = i.getBoundingClientRect().height * this.proportion;
            let w = i.getBoundingClientRect().width * this.proportion;
            arr2[j].x = parseInt(i.getAttribute('x'));
            arr2[j].y = parseInt(i.getAttribute('y'));
            arr2[j].w = w;
            arr2[j].h = h;
        }
    });
    switch (n) {
        case 0:
            coordinate[1].x = arr2[0].x;
            coordinate[1].y = arr2[0].y;
            coordinate[0].x = arr2[1].x;
            coordinate[0].y = arr2[1].y;
            break;
        case 1:
            coordinate[1].x = arr2[0].x + arr2[0].w / 2 - arr2[1].w / 2;
            coordinate[1].y = arr2[0].y + arr2[0].h / 2 - arr2[1].h / 2;
            coordinate[0].x = arr2[1].x + arr2[1].w / 2 - arr2[0].w / 2;
            coordinate[0].y = arr2[1].y + arr2[1].h / 2 - arr2[0].h / 2;
            break;
        case 2:
            coordinate[1].x = arr2[0].x + arr2[0].w - arr2[1].w;
            coordinate[1].y = arr2[0].y + arr2[0].h - arr2[1].h;
            coordinate[0].x = arr2[1].x + arr2[1].w - arr2[0].w;
            coordinate[0].y = arr2[1].y + arr2[1].h - arr2[0].h;
            break;
    }
    arr.forEach(function (i, j) {
        if (i.tagName === 'circle') {
            let r = i.getAttribute('r');
            i.setAttribute('cx', coordinate[j].x + parseInt(r));
            i.setAttribute('cy', coordinate[j].y + parseInt(r));
        } else {
            i.setAttribute('x', coordinate[j].x);
            i.setAttribute('y', coordinate[j].y);
        }
    })
};
