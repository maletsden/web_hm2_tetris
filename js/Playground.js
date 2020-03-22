class Playground {
    constructor() {
        this.playground = new Array(PLAYGROUND_HEIGHT)
            .fill()
            .map( () => new Array(PLAYGROUND_WIDTH).fill());
        

    }

    linkMarkdown(markdown) {
        this.markdown = markdown;
    }

    isEmptyCell(row, col) {
        if (col < 0 || col >= PLAYGROUND_WIDTH) return false;
        if (row < 0) return true;        
        if (row >= PLAYGROUND_HEIGHT) return false;
        return !this.playground[row][col];
    }

    isExistCell(row, col) {
        if (row < 0 || row >= PLAYGROUND_HEIGHT) return false;
        if (col < 0 || col >= PLAYGROUND_WIDTH) return false;
        return true;
    }

    getCell(row, col) {
        if (!this.isExistCell(row, col)) return;
        return this.playground[row][col];
    }

    update(oldCoord, newCoords, color) {
        for (const [row, col] of oldCoord) {
            if (this.isExistCell(row, col)) {
                this.playground[row][col] = undefined;
            }
        }

        for (const [row, col] of newCoords) {
            if (this.isExistCell(row, col)) {
                this.playground[row][col] = color;
            }
        }        


        this.markdown.update();
    }

    updatePlayground() {
        let counter = 0;
        let indexesToDelete = [];
        this.playground.forEach( (row, index) => {
            if (!row.includes(undefined)) {
                ++counter;
                indexesToDelete.push(index);
            }
        });

        // for(let i = this.playground.length - 1; i >= 0; --i) {
        //     if (!this.playground[i].includes(undefined)) {
        //         ++counter;
        //         indexesToDelete.push(i);
        //         // this.deleteRow(i);
        //         // --i;
        //     }
        // }

        indexesToDelete.forEach(index => this.deleteRow(index));

        this.markdown.update();

        return counter;
    }

    deleteRow(rowIndex) {
        console.log("rowIndex: " + rowIndex);
        
        for(let i = rowIndex - 1; i >= 0; --i) {
            for (let j = 0; j < this.playground[i].length; j++) {
                this.playground[i + 1][j] = this.playground[i][j];
            }
        }

        for (let j = 0; j < this.playground[0].length; j++) {
            this.playground[0][j] = undefined;
        }
    }
}