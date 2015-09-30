define(function() {
    return {
        init: function(tank) {
            var algsSpitePosition = {
                _VHOrientation: function(spritePos, spriteY, spritePosOs, secondOs, dir) {
                    this.position.sprite[spritePosOs] = spriteY;

                    if (this.position.tank.dir === dir && this.position.sprite.shot < 6) {
                        this.position.sprite[secondOs] = spritePos[this.position.sprite.shot + 1];
                        this.position.sprite.shot += 1;
                    } else {
                        if (this.position.sprite.shot > 5) {
                            this.position.sprite.shot = 0;
                        }
                        this.position.sprite[secondOs] = spritePos[this.position.sprite.shot];
                    }

                    this.position.tank.dir = dir;
                },
                _vertical: function(spriteY, dir) {
                    algsSpitePosition._VHOrientation.call(this, [529, 562, 595, 628, 661, 694, 727], spriteY, 'y', 'x', dir);
                },
                _horizontal: function(spriteX, dir) {
                    algsSpitePosition._VHOrientation.call(this, [100, 133, 166, 199, 232, 265, 298], spriteX, 'x', 'y', dir);
                },
                top: function() {
                    algsSpitePosition._vertical.call(this, 34, 'top');
                },
                right: function() {
                    algsSpitePosition._horizontal.call(this, 529, 'right');
                },
                bottom: function() {
                    algsSpitePosition._vertical.call(this, 67, 'bottom');
                },
                left: function() {
                    algsSpitePosition._horizontal.call(this, 562, 'left');
                }
            };

            tank.changeSpritePosition = function(typeEvent) {
                if (algsSpitePosition[typeEvent]) {
                    algsSpitePosition[typeEvent].call(this)
                }
            }.bind(tank);
        }
    }
});