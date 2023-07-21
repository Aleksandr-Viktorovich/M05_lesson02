export const getStorage = (key) => {
  const newGoods = localStorage.getItem('key');
  if (newGoods !== null) {
    return JSON.parse(newGoods);
  }
  return [];
};

export const setStorage = (key, goodsData) => {
  const newArr = getStorage('key');
  newArr.push(goodsData);
  localStorage.setItem('key', JSON.stringify(newArr));
};

export const removeStorage = (goodsId) => {
  const arrObj = getStorage('key');
  localStorage.removeItem('key');
  arrObj.forEach(goodsData => {
    if (goodsData.id !== goodsId) return;
      setStorage('key', goodsData);
  });
};
