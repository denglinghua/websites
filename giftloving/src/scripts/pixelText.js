export default function usePixelText(colors) {
  const letters = {
    A: [
      [, 1],
      [1, , 1],
      [1, , 1],
      [1, 1, 1],
      [1, , 1],
    ],
    B: [
      [1, 1],
      [1, , 1],
      [1, 1, 1],
      [1, , 1],
      [1, 1],
    ],
    C: [[1, 1, 1], [1], [1], [1], [1, 1, 1]],
    D: [
      [1, 1],
      [1, , 1],
      [1, , 1],
      [1, , 1],
      [1, 1],
    ],
    E: [[1, 1, 1], [1], [1, 1, 1], [1], [1, 1, 1]],
    F: [[1, 1, 1], [1], [1, 1], [1], [1]],
    G: [[, 1, 1], [1], [1, , 1, 1], [1, , , 1], [, 1, 1]],
    H: [
      [1, , 1],
      [1, , 1],
      [1, 1, 1],
      [1, , 1],
      [1, , 1],
    ],
    I: [
      [1, 1, 1],
      [, 1],
      [, 1],
      [, 1],
      [1, 1, 1],
    ],
    J: [
      [1, 1, 1],
      [, , 1],
      [, , 1],
      [1, , 1],
      [1, 1, 1],
    ],
    K: [
      [1, , , 1],
      [1, , 1],
      [1, 1],
      [1, , 1],
      [1, , , 1],
    ],
    L: [[1], [1], [1], [1], [1, 1, 1]],
    M: [
      [1, 1, 1, 1, 1],
      [1, , 1, , 1],
      [1, , 1, , 1],
      [1, , , , 1],
      [1, , , , 1],
    ],
    N: [
      [1, , , 1],
      [1, 1, , 1],
      [1, , 1, 1],
      [1, , , 1],
      [1, , , 1],
    ],
    O: [
      [1, 1, 1],
      [1, , 1],
      [1, , 1],
      [1, , 1],
      [1, 1, 1],
    ],
    P: [[1, 1, 1], [1, , 1], [1, 1, 1], [1], [1]],
    Q: [
      [0, 1, 1],
      [1, , , 1],
      [1, , , 1],
      [1, , 1, 1],
      [1, 1, 1, 1],
    ],
    R: [
      [1, 1],
      [1, , 1],
      [1, , 1],
      [1, 1],
      [1, , 1],
    ],
    S: [[1, 1, 1], [1], [1, 1, 1], [, , 1], [1, 1, 1]],
    T: [
      [1, 1, 1],
      [, 1],
      [, 1],
      [, 1],
      [, 1],
    ],
    U: [
      [1, , 1],
      [1, , 1],
      [1, , 1],
      [1, , 1],
      [1, 1, 1],
    ],
    V: [
      [1, , , , 1],
      [1, , , , 1],
      [, 1, , 1],
      [, 1, , 1],
      [, , 1],
    ],
    W: [
      [1, , , , 1],
      [1, , , , 1],
      [1, , , , 1],
      [1, , 1, , 1],
      [1, 1, 1, 1, 1],
    ],
    X: [
      [1, , , , 1],
      [, 1, , 1],
      [, , 1],
      [, 1, , 1],
      [1, , , , 1],
    ],
    Y: [
      [1, , 1],
      [1, , 1],
      [, 1],
      [, 1],
      [, 1],
    ],
    Z: [
      [1, 1, 1, 1, 1],
      [, , , 1],
      [, , 1],
      [, 1],
      [1, 1, 1, 1, 1],
    ],
    0: [
      [1, 1, 1],
      [1, , 1],
      [1, , 1],
      [1, , 1],
      [1, 1, 1],
    ],
    1: [
      [, 1],
      [, 1],
      [, 1],
      [, 1],
      [, 1],
    ],
    2: [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
    ],
    3: [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
    ],
    4: [
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    5: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
    ],
    6: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    7: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    8: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    9: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
    ],
    ".": [
      [, ,],
      [, ,],
      [, ,],
      [, ,],
      [0, 1, 0],
    ],
    " ": [
      [, ,],
      [, ,],
      [, ,],
      [, ,],
      [, ,],
    ],
  };

  function createTextPixels(string, x, y, size, color = null) {
    const pixels = [];
    let letters = getAvailableLetters(string);

    let currX = x;
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i];
      let currY = y;
      let addX = 0;
      const pColor = color ? color : pickColor();
      for (let r = 0; r < letter.length; r++) {
        let row = letter[r];
        for (let c = 0; c < row.length; c++) {
          if (row[c]) {
            const px = currX + c * size;
            const py = currY;
            pixels.push({ x: px, y: py, color: pColor, size: size });
          }
        }
        addX = Math.max(addX, row.length * size);
        currY += size;
      }
      currX += size + addX;
    }

    return pixels;
  }

  function createTextAscii(string) {
    const lines = [];
    let letters = getAvailableLetters(string);

    for (let i = 0; i < 5; i++) {
      lines.push("");
    }

    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i];
      const lens = letter.map((row) => row.length);
      const maxW = Math.max(...lens);
      for (let r = 0; r < letter.length; r++) {
        let row = letter[r];
        for (let c = 0; c < maxW; c++) {
          if (row[c]) {
            lines[r] += "88";
          } else {
            lines[r] += "  ";
          }
        }
      }
      lines.forEach((line, i) => {
        lines[i] += "  ";
      });
    }

    return lines;
  }

  function measureText(string, size) {
    let letters = getAvailableLetters(string);
    let width = 0;
    let height = 0;
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i];
      width += letter[0].length * size + size;
      height = Math.max(height, letter.length * size);
    }
    return [width, height];
  }

  function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function getAvailableLetters(string) {
    var needed = [];
    string = string.toUpperCase();
    for (var i = 0; i < string.length; i++) {
      var letter = letters[string.charAt(i)];
      if (letter) {
        needed.push(letter);
      }
    }
    return needed;
  }

  return { createTextPixels, createTextAscii, measureText };
}
