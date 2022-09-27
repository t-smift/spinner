let delay = 0;
const animations = [
  "\r|     ",
  "\r/     ",
  "\r-     ",
  "\r\\     ",
  "\r|     ",
  "\r/     ",
  "\r-     ",
  "\r\\     ",
  "\r|     "
];

for (const animation of animations) {
  setTimeout(() => {
    process.stdout.write(animation);
  }, delay += 200);
}