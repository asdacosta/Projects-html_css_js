const knightMoves = function (firstPoint, secPoint) {
  const moves = [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, -1), (2, 1)];

  const validateMove = function (x, y) {
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
      return true;
    }
    return false;
  };
};
