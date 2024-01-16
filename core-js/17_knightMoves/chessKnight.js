const knightMoves = function (firstPoint, secPoint) {
  const moves = [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, -1), (2, 1)];

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
};
