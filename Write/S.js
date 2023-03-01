//Vanilla JS

window.onload = function() {

    function CoolShadow(config) {
        this.config =  config ? config : {'depth' : 1241, 'color' : 'rgb(250, 0, 0)'};
        
        var body             = document.getElementsByTagName('body')[0],
            lanternContainer = document.createElement('div'),
            shadowText       = document.querySelector(config.el),
            self             = this;
        
        this.init = function() {
            lanternContainer.setAttribute('id', 'lantern');
            body.appendChild(lanternContainer);

            document.body.onmousemove = self.theShadow;
        };

        this.theShadow = function(e) {
            self.cursor = getCoords(e);
            lanternContainer.style.top  = (self.cursor.y - lanternContainer.offsetHeight/2) + 'px';
            lanternContainer.style.left = (self.cursor.x - lanternContainer.offsetWidth/2)  + 'px';

            shadowStyle(shadowText, self.config);
        };

        function shadowStyle(el, config) {
            var shadow   = [],
                color    = [],
                pos      = [],
                elCoords = getCoords(el),
                rgba     = getColorUnits(config.color);

            elCoords.relX =  (124 * elCoords.relX) / (window.innerWidth/2);
            elCoords.relY =  (140 * elCoords.relY) / (window.innerHeight/2);

            pos['x'] = ((elCoords.relX * 0.1) * -1);
            pos['y'] = ((elCoords.relY * 0.1) * -1);

            for(var i = 0; i < config.depth; i++) {
                color = [(rgba.r -= 5), (rgba.g -= 5 ), (rgba.b -= 5), rgba.a];
                shadow[i] = (pos['x']* (i*0.1)) + 'px '+ (pos['y'] * (i*0.1)) + 'px ' + i * 0.2+ 'px rgba(' + color + ')';
            }

            shadow.push((pos['x']* (i*0.1))+'px '+(pos['y'] * (i*0.1))+'px 35px rgba(0, 0, 0, 0.9)');

            el.style.textShadow = shadow.join(',');
        }

        //Utils
        function getCoords(e) {
            var coords;
            if(e instanceof HTMLElement) {
                coords = {
                    relX: (self.cursor.x - e.offsetLeft),
                    relY: (self.cursor.y - e.offsetTop),
                    x: e.offsetLeft,
                    y: e.offsetTop
                };

            } else {
                coords = {x: e.clientX, y: e.clientY};
            }
            return coords;
        }

        function getColorUnits(color) {
            var regExp = /\(([^)]+)\)/;
            var rgba = regExp.exec(color)[1].split(',');

            rgba = rgba.map(function(e) { return parseInt(e) });

            return {
                r: rgba[0],
                g: rgba[1],
                b: rgba[2],
                a: rgba[3] ? rgba[3] : 1
            };
        }

        //Init CoolShadow
        this.init();
    }

    new CoolShadow({
        'el'    : '#shadow',
        'depth' : 41,
        'color' : 'rgba(255, 0, 0, 0.1)'
    });
};