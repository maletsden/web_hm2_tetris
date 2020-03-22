class FallingFigure {
    constructor() {        
        this.generateFigure();
        this.position = {
            top: -this.coordinates.length,
            left: Math.floor(Math.random() * (PLAYGROUND_WIDTH - this.coordinates[0].length + 1))
        };
        this.realCoordinates = [];
        this.emplaceFigure();
    }

    linkPlayground(playground) {
        this.playground = playground;
    }
    
    generateFigure() {
        const figureType = FIGURES_TYPE[
            Math.floor(Math.random() * FIGURES_TYPE.length)
        ];
    
        const figureOrientation = FIGURES_ORIENTATION[
            Math.floor(Math.random() * FIGURES_ORIENTATION.length)
        ];

        const figureColor = FIGURE_COLORS[
            Math.floor(Math.random() * FIGURE_COLORS.length)
        ]
        
        const figure = objectsTypes[figureType][figureOrientation];

        this.type = figure.type;
        this.coordinates = figure.coordinates;
        this.color = figureColor;
    }

    emplaceFigure(from = this.coordinates, to = this.realCoordinates) {
        from.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                cell && to.push([this.position.top + rowIndex, this.position.left + cellIndex]);
            });
        });
    }

    move(positionChange, newCoords = undefined) {
        let nextStep;
        if (newCoords === undefined) {
            nextStep = JSON.parse(JSON.stringify(this.realCoordinates));
            nextStep.forEach(coords => {
                coords[0] += positionChange.top;
                coords[1] += positionChange.left
            });
        } else {
            nextStep = newCoords;
        }
        
        if (!this.checkNextStep(nextStep)) return false;

        const oldCoordinates = JSON.parse(JSON.stringify(this.realCoordinates));
        
        if (newCoords === undefined) {
            this.realCoordinates.forEach(coords => {
                coords[0] += positionChange.top;
                coords[1] += positionChange.left
            });

            this.position.top  += positionChange.top;
            this.position.left += positionChange.left;
        } else {
            this.realCoordinates = nextStep;
        }

        
        this.playground.update(oldCoordinates, this.realCoordinates, this.color);

        return true;
    }

    moveDown() {
        // console.log("moveDown");
        
        if (this.move({
            top: 1,
            left: 0
        })) {
            // console.log("moved");
            return true
        }
        // console.log("can't move");
        
        return false
    }

    moveRight() {
        return this.move({
            top: 0,
            left: 1
        });
    }

    moveLeft() {
        return this.move({
            top: 0,
            left: -1
        });
    }

    rotateFigure() {
        // console.log('rotateFigure');
        
        
        let currentOrientation = FIGURES_ORIENTATION.indexOf(this.type[1]);
        const nextOrientation = FIGURES_ORIENTATION[++currentOrientation % FIGURES_ORIENTATION.length];
        const rotatesFigure = objectsTypes[this.type[0]][nextOrientation]
        let newCoords = [];

        
        
        this.emplaceFigure(rotatesFigure.coordinates, newCoords);


        if (this.move(undefined, newCoords)) {
            this.type[1] = nextOrientation;

            return true;
        }

        return false;
    }

    checkNextStep(newCoords) {
        for (const coords of newCoords) {
            if (this.isMe(...coords)) continue;
            if (!this.playground.isEmptyCell(...coords)) return false;
        }

        return true;
    }

    isMe(row, col) {
        for (const [myRow, myCol] of this.realCoordinates) {
            if (myRow == row && myCol == col) {
                return true;
            }
        }

        return false;
    }
}