class Dictonary {
  chars = {};
  types = 0;
  tokens = 0;

  constructor(init) {
    if (init) {
      this.chars = init.chars;
      this.types = init.types;
      this.tokens = init.tokens;
    }
  }

  update(...chars) {
    chars.forEach((char) => {
      let count = this.chars[char];

      if (!count) {
        count = 0;

        this.types += 1;
      }

      this.chars[char] = count + 1;
      this.tokens += 1;
    });
  }

  randomChar(excludeKeys = []) {
    const randomInt = parseInt(Math.random() * this.tokens);
    const keys = Object.keys(this.chars).filter(
      (key) => !excludeKeys.includes(key)
    );

    let index = 0;

    for (let i = 0; i <= this.types; i++) {
      index += this.chars[keys[i]];

      if (index >= randomInt) {
        return keys[i];
      }
    }
  }
}

const model = new Map();

model.set(
  "*",
  new Dictonary({
    chars: {
      a: 463,
      b: 257,
      c: 462,
      d: 314,
      e: 248,
      f: 135,
      g: 210,
      h: 120,
      i: 73,
      j: 289,
      k: 268,
      l: 333,
      m: 471,
      n: 152,
      o: 63,
      p: 118,
      q: 8,
      r: 243,
      s: 294,
      t: 192,
      u: 15,
      v: 104,
      w: 57,
      x: 5,
      y: 21,
      z: 31,
    },
    tokens: 4946,
    types: 26,
  })
);

model.set(
  "a",
  new Dictonary({
    chars: {
      a: 5,
      r: 570,
      b: 103,
      g: 37,
      e: 33,
      i: 94,
      l: 333,
      d: 104,
      h: 62,
      n: 695,
      f: 11,
      c: 72,
      t: 152,
      j: 3,
      y: 71,
      m: 110,
      s: 80,
      "-": 7,
      p: 12,
      u: 99,
      v: 32,
      k: 5,
      w: 10,
      z: 4,
      q: 7,
      " ": 2,
      x: 5,
      o: 4,
    },
    tokens: 2722,
    types: 28,
  })
);

model.set(
  "r",
  new Dictonary({
    chars: {
      e: 293,
      i: 574,
      a: 316,
      n: 53,
      t: 73,
      g: 57,
      l: 129,
      o: 168,
      d: 51,
      y: 119,
      b: 19,
      r: 109,
      u: 42,
      m: 46,
      c: 23,
      s: 23,
      h: 14,
      k: 2,
      j: 8,
      q: 1,
      v: 1,
      z: 1,
    },
    tokens: 2122,
    types: 22,
  })
);

model.set(
  "e",
  new Dictonary({
    chars: {
      n: 396,
      l: 669,
      y: 104,
      i: 44,
      e: 185,
      a: 122,
      r: 340,
      s: 125,
      t: 291,
      d: 87,
      c: 25,
      j: 3,
      x: 14,
      g: 23,
      "-": 6,
      m: 65,
      b: 34,
      v: 57,
      k: 10,
      u: 12,
      o: 40,
      " ": 1,
      h: 3,
      f: 9,
      z: 4,
      p: 16,
      w: 3,
    },
    tokens: 2688,
    types: 27,
  })
);

model.set(
  "i",
  new Dictonary({
    chars: {
      k: 40,
      l: 278,
      e: 499,
      g: 30,
      n: 579,
      a: 358,
      d: 72,
      c: 115,
      s: 261,
      m: 36,
      x: 11,
      z: 21,
      r: 73,
      t: 143,
      i: 1,
      q: 11,
      v: 42,
      b: 30,
      o: 35,
      p: 17,
      f: 17,
      u: 6,
      j: 2,
      y: 4,
      w: 1,
    },
    tokens: 2682,
    types: 25,
  })
);

model.set(
  "k",
  new Dictonary({
    chars: {
      a: 190,
      e: 56,
      i: 66,
      y: 20,
      k: 7,
      t: 1,
      s: 1,
      l: 6,
      q: 2,
      o: 26,
      r: 21,
    },
    tokens: 396,
    types: 11,
  })
);

model.set(
  "b",
  new Dictonary({
    chars: {
      a: 53,
      b: 47,
      e: 218,
      i: 92,
      y: 31,
      r: 86,
      u: 5,
      s: 1,
      l: 23,
      o: 24,
      h: 1,
    },
    tokens: 581,
    types: 11,
  })
);

model.set(
  "g",
  new Dictonary({
    chars: {
      a: 79,
      g: 15,
      i: 77,
      y: 7,
      n: 11,
      r: 28,
      o: 12,
      e: 105,
      h: 11,
      u: 28,
      m: 1,
      l: 21,
      w: 15,
      d: 5,
    },
    tokens: 415,
    types: 14,
  })
);

model.set(
  "y",
  new Dictonary({
    chars: {
      e: 43,
      n: 177,
      c: 9,
      s: 45,
      d: 12,
      a: 58,
      t: 7,
      l: 63,
      p: 2,
      b: 13,
      m: 7,
      i: 1,
      r: 18,
      "-": 1,
      o: 9,
      y: 1,
      j: 2,
      k: 1,
      v: 2,
    },
    tokens: 471,
    types: 19,
  })
);

model.set(
  "l",
  new Dictonary({
    chars: {
      e: 494,
      i: 563,
      a: 380,
      h: 4,
      l: 399,
      s: 26,
      y: 202,
      b: 15,
      f: 8,
      x: 1,
      m: 21,
      o: 156,
      t: 2,
      v: 23,
      u: 36,
      d: 43,
      "-": 1,
      j: 1,
      k: 6,
      c: 15,
      p: 2,
      g: 4,
      n: 6,
      w: 2,
      z: 1,
      r: 5,
    },
    tokens: 2416,
    types: 26,
  })
);

model.set(
  "d",
  new Dictonary({
    chars: {
      a: 261,
      d: 28,
      i: 182,
      y: 63,
      e: 223,
      o: 104,
      r: 86,
      n: 4,
      g: 5,
      u: 13,
      w: 3,
      v: 2,
      s: 7,
      l: 2,
      h: 1,
    },
    tokens: 984,
    types: 15,
  })
);

model.set(
  "n",
  new Dictonary({
    chars: {
      e: 562,
      a: 537,
      d: 210,
      s: 28,
      n: 399,
      o: 78,
      i: 290,
      g: 32,
      j: 3,
      "-": 2,
      m: 2,
      y: 65,
      t: 68,
      c: 39,
      k: 14,
      h: 3,
      z: 6,
      r: 9,
      u: 2,
      v: 1,
    },
    tokens: 2350,
    types: 20,
  })
);

model.set(
  "h",
  new Dictonary({
    chars: {
      e: 223,
      a: 220,
      i: 84,
      l: 19,
      s: 1,
      r: 38,
      y: 21,
      n: 6,
      o: 29,
      k: 1,
      z: 1,
      u: 1,
      d: 1,
    },
    tokens: 645,
    types: 13,
  })
);

model.set(
  "c",
  new Dictonary({
    chars: {
      e: 118,
      i: 103,
      a: 198,
      h: 139,
      o: 101,
      c: 5,
      k: 30,
      t: 5,
      l: 48,
      y: 30,
      r: 19,
      d: 1,
      q: 10,
      z: 1,
    },
    tokens: 808,
    types: 14,
  })
);

model.set(
  "o",
  new Dictonary({
    chars: {
      r: 329,
      n: 212,
      l: 142,
      i: 16,
      y: 10,
      m: 30,
      o: 10,
      b: 43,
      k: 5,
      t: 38,
      e: 27,
      p: 15,
      v: 8,
      d: 44,
      s: 70,
      u: 14,
      g: 3,
      j: 2,
      " ": 1,
      "-": 2,
      a: 12,
      c: 10,
      h: 7,
      f: 6,
      z: 12,
      w: 5,
      x: 8,
    },
    tokens: 1081,
    types: 27,
  })
);

model.set(
  "f",
  new Dictonary({
    chars: {
      t: 1,
      i: 34,
      r: 38,
      y: 5,
      f: 18,
      a: 50,
      e: 30,
      l: 28,
      u: 1,
      " ": 1,
    },
    tokens: 206,
    types: 10,
  })
);

model.set(
  "t",
  new Dictonary({
    chars: {
      o: 44,
      a: 322,
      h: 183,
      i: 180,
      y: 47,
      t: 228,
      e: 209,
      r: 65,
      l: 14,
      s: 6,
      n: 10,
      c: 1,
      u: 5,
      g: 1,
      z: 3,
      k: 1,
      w: 2,
    },
    tokens: 1321,
    types: 17,
  })
);

model.set(
  "s",
  new Dictonary({
    chars: {
      e: 130,
      s: 139,
      u: 33,
      l: 14,
      a: 201,
      h: 142,
      o: 27,
      i: 136,
      t: 172,
      j: 1,
      y: 45,
      d: 2,
      b: 2,
      p: 1,
      m: 10,
      c: 11,
      k: 2,
    },
    tokens: 1068,
    types: 17,
  })
);

model.set(
  "u",
  new Dictonary({
    chars: {
      n: 30,
      r: 63,
      e: 44,
      b: 13,
      d: 44,
      g: 8,
      s: 44,
      l: 65,
      f: 4,
      i: 24,
      c: 20,
      p: 2,
      a: 2,
      k: 3,
      t: 9,
      z: 9,
      x: 4,
      m: 3,
    },
    tokens: 391,
    types: 18,
  })
);

model.set(
  "m",
  new Dictonary({
    chars: {
      e: 155,
      i: 167,
      a: 353,
      b: 13,
      m: 40,
      y: 33,
      o: 56,
      l: 3,
      u: 10,
      p: 4,
      q: 1,
      r: 1,
    },
    tokens: 836,
    types: 12,
  })
);

model.set(
  "j",
  new Dictonary({
    chars: { a: 93, e: 74, i: 13, o: 96, s: 1, u: 35, y: 2 },
    tokens: 314,
    types: 7,
  })
);

model.set(
  "x",
  new Dictonary({ chars: { a: 8, i: 20, y: 6, e: 2 }, tokens: 36, types: 4 })
);

model.set(
  "z",
  new Dictonary({
    chars: {
      a: 32,
      m: 2,
      e: 17,
      i: 16,
      k: 1,
      z: 4,
      l: 1,
      y: 3,
      b: 1,
      o: 10,
      s: 4,
      u: 2,
    },
    tokens: 93,
    types: 12,
  })
);

model.set(
  "v",
  new Dictonary({
    chars: { e: 61, i: 106, a: 67, r: 7, v: 6, y: 12, o: 13, s: 1, l: 1, k: 2 },
    tokens: 276,
    types: 10,
  })
);

model.set("q", new Dictonary({ chars: { u: 39, r: 1 }, tokens: 40, types: 2 }));

model.set(
  "-",
  new Dictonary({
    chars: { m: 4, d: 2, c: 1, a: 7, j: 2, e: 1, l: 1, k: 1 },
    tokens: 19,
    types: 8,
  })
);

model.set(
  "p",
  new Dictonary({
    chars: { p: 14, o: 6, r: 13, s: 3, a: 49, h: 55, e: 42, y: 4, i: 15 },
    tokens: 201,
    types: 9,
  })
);

model.set(
  "w",
  new Dictonary({
    chars: { n: 9, i: 36, e: 26, y: 9, s: 1, a: 10, h: 1, r: 2 },
    tokens: 94,
    types: 8,
  })
);

model.set(
  " ",
  new Dictonary({
    chars: { d: 1, a: 1, v: 1, m: 1, z: 1 },
    tokens: 5,
    types: 5,
  })
);

module.exports = model;
