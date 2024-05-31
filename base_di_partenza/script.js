const mList = document.querySelectorAll("#mRefer-g > g");
console.log(mList);

const mListOperable = [];

mList.forEach((element) => {
  let style = getComputedStyle(element);
  if (
    style.opacity === "1" &&
    element.parentElement &&
    element.parentElement.id
  ) {
    mListOperable.push(element);
  }
});

console.log(mListOperable);

if (mListOperable.length > 0) {
  const opacityInterval = setInterval(function () {
    let cont = Math.floor(Math.random() * mListOperable.length);
    let element = mListOperable[cont];
    if (element) {
      let styleOp = getComputedStyle(element);
      if (styleOp.opacity === "0") {
        element.style.opacity = 1;
      } else if (styleOp.opacity === "1") {
        element.style.opacity = 0;
      }
    }
  }, 100);
}
