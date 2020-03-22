const PLAYGROUND_HEIGHT = 20;
const PLAYGROUND_WIDTH = 10;

const PLAYGROUND_NODE_ID = 'playground';
const SCORE_DOM_CLASS = 'score';
const LINES_DOM_CLASS = 'lines';
const GAME_OVER_DOM_ID = 'game_over';

// Event keys
const DOWN  = 40;
const LEFT  = 37;
const TOP   = 38;
const RIGHT = 39;
const PAUSE = 32;

const FIGURES_TYPE = ['L', 'T', 'I', 'O', '_I', 'Z', '_Z'];
const FIGURES_ORIENTATION = ['top', 'right', 'bottom', 'left'];
const FIGURE_COLORS = ['red', 'purple', 'green', 'yellow', 'blue'];

const objectsTypes = {
  L: {
    top: {
      type: ['L', 'top'],
      coordinates: [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
      ],
    },

    right: {
      type: ['L', 'right'],
      coordinates: [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
      ],
    },

    bottom: {
      type: ['L', 'bottom'],
      coordinates: [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
      ],
    },
    left: {
      type: ['L', 'left'],
      coordinates: [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
      ],
    }
  },
  T: {
    top: {
      type: ['T', 'top'],
      coordinates: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
    },

    right: {
      type: ['T', 'right'],
      coordinates: [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
      ],
    },

    bottom: {
      type: ['T', 'bottom'],
      coordinates: [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
      ],
    },
    left: {
      type: ['T', 'left'],
      coordinates: [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
      ],
    }
  },
  I: {
    top: {
      type: ['I', 'top'],
      coordinates: [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
      ]
    },

    right: {
      type: ['I', 'right'],
      coordinates: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]
      ],
    },

    bottom: {
      type: ['I', 'bottom'],
      coordinates: [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
      ],
    },
    left: {
      type: ['I', 'left'],
      coordinates: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]
      ],
    }
  },
  O: {
    top: {
      type: ['O', 'top'],
      coordinates: [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ]
    },

    right: {
      type: ['O', 'right'],
      coordinates: [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
    },

    bottom: {
      type: ['O', 'bottom'],
      coordinates: [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
    },
    left: {
      type: ['O', 'left'],
      coordinates: [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
    }
  },
  _I: {
    top: {
      type: ['_I', 'top'],
      coordinates: [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
      ],
    },

    right: {
      type: ['_I', 'right'],
      coordinates: [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ],
    },

    bottom: {
      type: ['_I', 'bottom'],
      coordinates: [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
      ],
    },
    left: {
      type: ['_I', 'left'],
      coordinates: [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
      ],
    }
  },
  Z: {
    top: {
      type: ['Z', 'top'],
      coordinates: [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
      ],
    },

    right: {
      type: ['Z', 'right'],
      coordinates: [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
      ],
    },

    bottom: {
      type: ['Z', 'bottom'],
      coordinates: [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
      ],
    },
    left: {
      type: ['Z', 'left'],
      coordinates: [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
      ],
    }
  },
  _Z: {
    top: {
      type: ['_Z', 'top'],
      coordinates: [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
      ],
    },

    right: {
      type: ['_Z', 'right'],
      coordinates: [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
      ],
    },

    bottom: {
      type: ['_Z', 'bottom'],
      coordinates: [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
      ],
    },
    left: {
      type: ['_Z', 'left'],
      coordinates: [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
      ],
    }
  }
};