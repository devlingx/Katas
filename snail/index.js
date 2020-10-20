// Paste question here

function isWithinBorders({ x, y }, {
  top, left, right, bottom,
}) {
  return x >= left && x < right && y >= top && y < bottom;
}

function changeDirection(direction) {
  if (direction.x === 1) {
    direction.x = 0;
    direction.y = 1;
    return;
  }

  if (direction.y === 1) {
    direction.x = -1;
    direction.y = 0;
    return;
  }

  if (direction.x === -1) {
    direction.x = 0;
    direction.y = -1;
    return;
  }

  if (direction.y) {
    direction.x = 1;
    direction.y = 0;
  }
}

function updatePosition({ x, y }, direction) {
  return {
    x: x + direction.x,
    y: y + direction.y,
  };
}

const snail = function (array) {
  if (!array || !array[0]) return [];
  const moves = array.length * array[0].length || 0;
  const snailSequence = [];
  const cache = {};
  const borders = {
    top: 0,
    left: 0,
    right: array.length,
    bottom: array.length,
  };

  let currentPosition = { x: 0, y: 0 };
  const direction = { x: 1, y: 0 };

  const hasWalkedThereBefore = ({ x, y }) => {
    const key = `${x},${y}`;
    return cache[key];
  };

  const leaveSlimeBehind = ({ x, y }) => {
    const key = `${x},${y}`;
    cache[key] = true;
  };
  while (moves !== snailSequence.length) {
    snailSequence.push(array[currentPosition.y][currentPosition.x]);
    let nextPosition = updatePosition(currentPosition, direction);

    if (!isWithinBorders(nextPosition, borders) || hasWalkedThereBefore(nextPosition)) {
      changeDirection(direction);
      nextPosition = updatePosition(currentPosition, direction);
    }
    currentPosition = nextPosition;
  }

  return snailSequence;
};

exports.solution = snailz;
