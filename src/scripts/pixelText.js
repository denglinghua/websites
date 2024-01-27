export default function () {
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

  function drawPixelText(string, canvas, x, y, size, transform = null) {
    let letters = getAvailableLetters(string);
    const [width, height] = stringSize(string, size);
    let context = canvas.getContext("2d");
    //context.clearRect(x, y, width, height);
    let time = transform ? transform.time() : 0;

    let currX = x;
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i];
      let currY = y;
      let addX = 0;
      let color = pickColor();
      for (let r = 0; r < letter.length; r++) {
        let row = letter[r];
        for (let c = 0; c < row.length; c++) {
          if (row[c]) {
            const px = currX + c * size;
            const py = currY;
            context.fillStyle = color; //, 50%, 50%)`;
            let [tx, ty] = [px, py];
            if (transform) {
              const t = transform;
              [tx, ty] = t.trans(t.width, t.height, px, py, time);
            }
            context.fillRect(tx, ty, size, size);
          }
        }
        addX = Math.max(addX, row.length * size);
        currY += size;
      }
      currX += size + addX;
    }
  }

  function stringSize(string, size) {
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

  const colors = ["red", "orange", "green", "blue", "purple"];
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

  return { drawPixelText, stringSize };
}
