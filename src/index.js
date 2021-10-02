export default function orderByProps(obj, sortProp) {
  const arr = [];
  const sortArr = [];

  sortProp.forEach((elem) => {
    sortArr.push({ key: elem, value: obj[elem] });
  });

  for (const elem in obj) {
    if (!sortProp.includes(elem)) {
      arr.push({ key: elem, value: obj[elem] });
    }
  }
  arr.sort((a, b) => ((a.key > b.key) ? 1 : -1));

  return sortArr.concat(arr);
}
