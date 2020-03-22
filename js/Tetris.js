// // Events
// // 1. move to bottom
// // 2. move right
// // 3. move left
// // 4. pause
// // 5. game over
// // 6. (re)render playground



class Tetris {
  constructor() {
    this.markdown = new Markdown();
    this.playground = new Playground();

    this.markdown.linkPlayground(this.playground)
    this.playground.linkMarkdown(this.markdown);

    this.scoreEl = document.getElementsByClassName(SCORE_DOM_CLASS);
    this.linesEl = document.getElementsByClassName(LINES_DOM_CLASS);
    
    this.score = 0;
    this.lines = 0;
    this.previousWasTetris = false;

    this.gameOverEl = document.getElementById(GAME_OVER_DOM_ID);

    this.start();

    this.isPlaying = false;
    this.play();
  }

  getFigure() {
    this.fallingFigure = new FallingFigure();
    this.fallingFigure.linkPlayground(this.playground);
  }

  play() {
    this.isPlaying = true;
  }

  play_pause() {
    
    console.log('pause');
    
    this.isPlaying = !this.isPlaying;
  }

  stopGame() {
    this.gameOverEl.style.visibility = 'visible';
    clearInterval(this.gameRuntime);
  }
  start() {
    this.getFigure();

    this.gameRuntime = setInterval(() => {
      if (!this.isPlaying) return;

      if (!this.moveFigureDown()) {
        this.isGameOver() && this.stopGame();

        this.updatePlayground();

        this.getFigure();
      }
    }, 200);
  }

  moveFigureDown() {
    if (!this.isPlaying) return;
    return this.fallingFigure.moveDown();
  }

  moveFigureLeft() {
    if (!this.isPlaying) return;
    return this.fallingFigure.moveLeft();
  }

  moveFigureRight() {
    if (!this.isPlaying) return;
    return this.fallingFigure.moveRight();
  }

  rotateFigure() {
    if (!this.isPlaying) return;
    return this.fallingFigure.rotateFigure();
  }

  increaseScore(counter) {
    if (!counter) return;

    if (counter == 4) {
      this.score += (this.previousWasTetris ? 1200 : 800);
      this.previousWasTetris = true;
    } else { 
      this.score += counter * 100;
      this.previousWasTetris = false;
    }

    this.lines += counter;

    for (const node of this.scoreEl) {
      node.innerText = this.score;
    }

    for (const node of this.linesEl) {
      node.innerText = this.lines;
    }
  }
  updatePlayground() {
    const counter = this.playground.updatePlayground();
    this.increaseScore(counter);
  }

  isGameOver() {
    for (const coords of this.fallingFigure.realCoordinates) {
      if (coords[0] < 0) {
        return true;
      }
    }

    return false;
  }

}

const MyTetris = new Tetris();