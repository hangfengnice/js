// const Either = Right || Left

const Right = (x) => ({
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
});

const Left = (x) => ({
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
});

// const findColor = (name) =>
//   ({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);

// const resultColor = findColor('red').slice(1).toUpperCase()

const fromNullable = (x) => (x == null ? Left(null) : Right(x));
const findColor = (name) => {
  // const found = { red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name];
  // return found ? Right(found) : Left(found)
  return fromNullable(
    { red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]
  );
};

const resultColor = findColor("green")
  .map((c) => c.slice(1))
  .fold(
    () => "nocolor",
    (x) => x.toUpperCase()
  );

console.log(resultColor);

const result = Left(3)
  .map((x) => x + 1)
  .map((x) => x / 2)
  .fold(
    (x) => "error",
    (x) => x
  );
console.log(result);