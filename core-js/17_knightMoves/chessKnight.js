const knightMoves = function (initial, final) {
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  const validateMove = function (x, y) {
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
      return true;
    }
    return false;
  };

  const getPossibleMoves = ([x, y]) => {
    const possibleMoves = [];

    moves.forEach((move) => {
      const xMove = x + move[0];
      const yMove = y + move[1];
      if (validateMove(xMove, yMove)) {
        possibleMoves.push([xMove, yMove]);
      }
    });
    return possibleMoves;
  };

  const searchShortestPath = function (initial, final) {
    const visited = new Set();
    const queue = [[initial]];

    while (queue.length > 0) {
      const path = queue.shift();
      const currentSquare = path[path.length - 1];

      if (currentSquare[0] === final[0] && currentSquare[1] === final[1]) {
        return path;
      }

      if (!visited.has(`${currentSquare[0]},${currentSquare[1]}`)) {
        visited.add(`${currentSquare[0]},${currentSquare[1]}`);
        const possibleMoves = getPossibleMoves(currentSquare);

        for (const possibleMove of possibleMoves) {
          if (!visited.has(`${possibleMove[0]},${possibleMove[1]}`)) {
            queue.push([...path, possibleMove]);
          }
        }
      }
    }

    return null;
  };
};

// knightMoves([0, 0], [7, 7]);
