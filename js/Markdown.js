class Markdown {
  constructor() {
    this.playgroundNode = document.getElementById(PLAYGROUND_NODE_ID);

    this.markdown = new Array(PLAYGROUND_HEIGHT).fill().map( (_, rowIndex) => {
      let rowEl = this.createRow(rowIndex);

      const row = new Array(PLAYGROUND_WIDTH).fill().map( (_, cellIndex) => {
        const cell = this.createCell(cellIndex);

        rowEl.appendChild(
          cell
        );
        return cell;
      });

      this.playgroundNode.appendChild(rowEl);

      return row;
    });  
  }

  linkPlayground(playground) {
    this.playground = playground;
  }

  // Creates <div class="row" id="row-1">
  createRow(rowIndex) {
    let rowNode = document.createElement('div');
    rowNode.setAttribute('id', `row-${rowIndex}`);
    rowNode.setAttribute('class', 'row');
    return rowNode;
  }

  // Creates <div class="cell cell-1">1</div>
  createCell(cellIndex) {
    let cellNode = document.createElement('div');
    cellNode.setAttribute('class', `cell cell-${cellIndex}`);
    return cellNode;
  }

  update() {
    for (let rowIndex = 0; rowIndex < this.markdown.length; rowIndex++) {
      const row = this.markdown[rowIndex];
      for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
        row[cellIndex].setAttribute(
          'class',
          `cell cell-${cellIndex} ${this.playground.getCell(rowIndex, cellIndex) || ''}`
        );
      }
    }
  }
}
