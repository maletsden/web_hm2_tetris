// document.addEventListener("keydown", event => {
//   switch (event.keyCode) {
//     case DOWN:
//       moveDown();
//       break;
//     case LEFT:
//       moveRight();
//       break;
//     case RIGHT:
//       moveLeft();
//       break;
//     case PAUSE:
//       pauseGame();
//       break;
//     default:
//       break;
//   }
// });


class EventListeners {
  constructor() {
    document.addEventListener("keydown", event => {
      if (event.keyCode === DOWN) {
        MyTetris.moveFigureDown();
      } else if (event.keyCode === LEFT) {
        MyTetris.moveFigureLeft();
      } else if (event.keyCode === RIGHT) {
        MyTetris.moveFigureRight();
      } else if (event.keyCode === TOP) {
        MyTetris.rotateFigure();
      } else if (event.keyCode === PAUSE) {
        MyTetris.play_pause();
      }
    });
  }
}


new EventListeners();