/* eslint-disable no-console */
const NS = 'http://www.w3.org/2000/svg';

function Run() {
    this.svg_area = "#svg_list";//svg画布放哪儿
    this.anime_area = "#where_should_it_be_shown";
    this.stage = [];
    this.now_stage = 0;//现在轮到谁上场了？
    this.DisplayWidth = null;
    this.DisplayHeight = null;
    this.RealWidth = 800;
    this.RealHeight = 800;
    this.init();
    return this
}

Run.prototype.getRoom = function () {
    let RoomSize;
    if (window.innerHeight > window.innerWidth) {
        RoomSize = parseInt(window.innerWidth * 0.8);
    } else {
        RoomSize = parseInt(window.innerHeight * 0.8);
    }
    this.DisplayWidth = this.DisplayHeight = RoomSize;
};

Run.prototype.help = function () {
    console.log('使用文档：');
    console.log('【1】画布内元素，双击删除，右键复制，修改元素请用Dev Tool');
    console.log('【2】动画。你可以让画布中的svg元素产生动画，动画基于JS代码。将你想要实现的动画的JS代码粘贴进黑色文本框，并点击黄色按钮就可以捆绑动画程序到当前画布上');
    console.log('【2.1】但是直接在文本框里写代码是不现实的，所以你得在 console 里写好，并实验后再粘贴进去');
    console.log('【2.2】使用 let anime = quickStart(); 这行代码便可以使用预先准备好的动画函数库。注意，这行代码只能在 console 里测试使用，不要把这行代码一起粘贴到那个黑色文本框里。');
};

Run.prototype.init = function () {
    this.help();
    this.getRoom();
    document.oncontextmenu = function () {
        return false;    //屏蔽右键菜单
    };
};

Run.prototype.createStage = function (n) {
    //给我也整一个.JPG
    this.stage.push(new Stage(this));
    if (n === 1) {
        this.stage[this.stage.length - 1].element.innerHTML = this.NowStage().element.innerHTML;
    }
    this.ChangeStage(this.stage.length - 1);
};

Run.prototype.ChangeStage = function (n) {
    document.querySelectorAll('svg').forEach(function (i) {
        i.classList.remove("now_edit")
    });
    this.stage[n].element.classList.add("now_edit");
    this.now_stage = n;
};

Run.prototype.NowStage = function () {
    return this.stage[this.now_stage];
};

Run.prototype.exportMe = function () {
    let exArr = {
        'arr1':[],
        'arr2':[]
    };

    this.stage.forEach(function (i) {
        exArr['arr1'].push(i.element.innerHTML);
        exArr['arr2'].push(i.script);
    });
    console.log("导出结果出来啦");
    console.log(JSON.stringify(exArr));
    return JSON.stringify(exArr);
};

Run.prototype.importMe = function (n) {
    let data = JSON.parse(n);
    for (let i in this.stage) {
        document.querySelector(this.svg_area).removeChild(this.stage[i].element);
    }
    this.stage = [];
    for (let j in data['arr1']) {
        this.stage[j] = new Stage(this);
        this.stage[j].element.innerHTML = data['arr1'][j];
        this.stage[j].script = data['arr2'][j];
    }
    this.ChangeStage(0);
};

Run.prototype.deletePage = function (z) {
    if (this.stage.length > 1) {
        let which = z || this.now_stage;
        document.querySelector(this.svg_area).removeChild(this.stage[which].element);
        this.stage.splice(this.now_stage, 1);
        if (which !== 0) {
            this.ChangeStage(which - 1);
        } else {
            this.ChangeStage(which + 1);
        }
    }
};

// Run 在上，Stage 在下

function Stage(parent) {
    this.parent = parent;
    this.element = null;
    this.frame = null;
    this.script = "";
    this.flag = 0;//元素旗帜,每创建一个元素自增，用于标记&区分元素
    this.defaultColor_1 = '#000';
    this.defaultColor_2 = '#555';
    this.init();
    return this
}

Stage.prototype.init = function () {
    this.element = document.createElementNS(NS, 'svg');
    this.element.setAttribute('width', this.parent.DisplayWidth);
    this.element.setAttribute('height', this.parent.DisplayHeight);
    this.element.setAttribute('viewBox', '0 0 ' + this.parent.RealWidth + ' ' + this.parent.RealHeight);
    document.querySelector(this.parent.svg_area).appendChild(this.element);
    new Selector(this);
};

Stage.prototype.addElement2SVG = function (n, x, y, z) {
    let element;
    if (n === 'c') {//circle?
        element = document.createElementNS(NS, 'circle');
        element.setAttribute('cx', parseInt((Math.random() * this.parent.DisplayWidth)).toString());
        element.setAttribute('cy', parseInt((Math.random() * this.parent.DisplayHeight)).toString());
        element.setAttribute('r', x || '90');
        element.style.fill = z || this.defaultColor_1;
    } else if (n === 'r') {//rect?
        element = document.createElementNS(NS, 'rect');
        element.setAttribute('x', parseInt((Math.random() * this.parent.DisplayWidth)).toString());
        element.setAttribute('y', parseInt((Math.random() * this.parent.DisplayHeight)).toString());
        element.setAttribute('width', x || '90');
        element.setAttribute('height', y || '90');
        element.style.fill = z || this.defaultColor_1;
    } else if (n === 't') {//text?
        element = document.createElementNS(NS, 'text');
        element.setAttribute('x', parseInt((Math.random() * this.parent.DisplayWidth)).toString());
        element.setAttribute('y', parseInt((Math.random() * this.parent.DisplayHeight)).toString());
        element.setAttribute('font-size', x || '60');
        element.style.fill = z || this.defaultColor_2;
        element.textContent = y || 'Hello World';
    }
    element.classList.add('svg_child');
    element.setAttribute('id', 'b' + this.flag);
    this.flag++;
    this.element.append(element);

};

Stage.prototype.anime_start = function () {
    let htmlCode = [
        '<svg width="calc(100vw - 16px)" height="calc(100vw - 16px)" ',
        'viewBox="0 0 ' + this.parent.RealWidth + ' ' + this.parent.RealHeight + '">\n',
        this.element.innerHTML,
        '</svg><script>',
        'let stage = document.querySelector("svg");',
        'function play(){let anime = new window.parent.Anime(1,stage);',
        this.script,
        '}</script>',
        '<style>.svg_child{-webkit-transition: all 0.5s ease-in-out;}</style>'
    ].join('');
    this.frame = document.createElement('iframe');
    this.frame.setAttribute('id', 'happy_frame');
    this.frame.setAttribute('frameborder', '0');
    this.frame.setAttribute('width', this.parent.DisplayWidth + 20);
    this.frame.setAttribute('height', this.parent.DisplayHeight + 20);
    let blob = new Blob([htmlCode], {
        'type': 'text/html'
    });
    document.querySelector(this.parent.anime_area).appendChild(this.frame);
    this.frame.src = URL.createObjectURL(blob);
};

Stage.prototype.play = function () {
    this.frame.contentWindow.play(); //这里钦定了动画播放函数是play()
};

Stage.prototype.anime_over = function () {
    document.querySelector(this.parent.anime_area).removeChild(this.frame);
    this.frame = null;
};

// Stage 在上，Selector 在下

class Selector {
    constructor(parent) {
        let stage = parent.element;
        let selection = document.createElement('span');
        selection.style.position = 'absolute';
        selection.style.display = 'block';
        selection.style.outline = 'solid 2px #99f';
        selection.style.pointerEvents = 'none';
        selection.setAttribute('z-index', '1');
        document.body.appendChild(selection);
        let selected = null;
        const offset = {x: 0, y: 0};


        function updateSelection(element) {
            if (element.isSameNode(stage)) {
                selection.style.display = 'none';
                return;
            }
            const rect = element.getBoundingClientRect();
            const view_rect = document.querySelector(parent.parent.svg_area).getBoundingClientRect();
            selection.style.left = rect.left + 'px';
            selection.style.top = rect.top + 'px';
            selection.style.width = rect.width + 'px';
            selection.style.height = rect.height + 'px';
            selection.style.display = 'block';
            let data_area = document.querySelector("#selector_data_area");
            data_area.querySelector(".selector_data:nth-child(1)").innerHTML = parseInt(rect.left - view_rect.left);
            data_area.querySelector(".selector_data:nth-child(2)").innerHTML = parseInt(rect.top - view_rect.top);
            data_area.querySelector(".selector_data:nth-child(3)").innerHTML = element.id;
        }

        function get_selected(event) {
            const target = event.target;
            if (target.isSameNode(stage) === false) {
                if (target.tagName === 'circle') {
                    offset.x = parseFloat(target.getAttribute('cx')) - event.clientX;
                    offset.y = parseFloat(target.getAttribute('cy')) - event.clientY;
                } else {
                    offset.x = parseFloat(target.getAttribute('x')) - event.clientX;
                    offset.y = parseFloat(target.getAttribute('y')) - event.clientY;
                }
                selected = target;
                return 1;
            } else {
                return 0;
            }
        }

        stage.addEventListener('mouseover', function (event) {
            const target = event.target;
            updateSelection(target);
        });
        stage.addEventListener('mousedown', function (event) {
            if (event.button === 2) {
                if (get_selected(event)) {
                    let n, x, y;
                    if (event.target.tagName === 'circle') {
                        n = 'c';
                        x = event.target.getAttribute('r');
                    } else if (event.target.tagName === 'text') {
                        n = 't';
                        x = event.target.getAttribute('font_size');
                        y = event.target.textContent;
                    } else {
                        n = 'r';
                        x = event.target.getAttribute('width');
                        y = event.target.getAttribute('height');
                    }
                    parent.addElement2SVG(n, x, y);
                }
            } else {
                get_selected(event);
            }
        });
        stage.addEventListener('mouseup', function () {
            selected = null;
        });
        stage.addEventListener('dblclick', function (event) {
            get_selected(event);
            stage.removeChild(selected);
            selected = null;
        });

        window.addEventListener('mousemove', function (event) {
            if (selected) {
                if (selected.tagName === 'circle') {
                    selected.setAttribute('cx', event.clientX + offset.x);
                    selected.setAttribute('cy', event.clientY + offset.y);
                } else {
                    selected.setAttribute('x', event.clientX + offset.x);
                    selected.setAttribute('y', event.clientY + offset.y);
                }
                updateSelection(selected);
            }
        });
    }
}

export default Run
