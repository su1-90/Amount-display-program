const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

// 商品データを管理するオブジェクトの作成
const products = {
  1: {name: "オリジナルブレンド200g", price: 500},
  2: {name: "オリジナルブレンド500g", price: 900},
  3: {name: "スペシャルブレンド200g", price: 700},
  4: {name: "スペシャルブレンド500g", price: 1200}
};

// add()関数を改修。商品IDをもとにproductsオブジェクトから商品名と
// 価格を取得して、purchasesに追加
function add() {
  const productId = priceElement.value;
  const number = parseInt(numberElement.value);

  if (!productId || !number) return;

  const selectedProduct = products[productId];
  
  let purchase = {
    id: productId,
    name: selectedProduct.name,
    price: selectedProduct.price,
    number: number
  };

  let existingPurchase = purchases.find(item => item.id === productId);

  if (existingPurchase) {
    existingPurchase.number += purchase.number;
  } else {
    purchases.push(purchase);
  }

  window.alert(`${display()}\n小計${subtotal()}円`);
  priceElement.value = "";
  numberElement.value = "";
}

// display()関数の改修。
// 商品名を含めた文字列を返すように変更
function display() {
  return purchases.map(purchase => {
    return `${purchase.name} ${purchase.price}円：${purchase.number}点`;
  }).join("\n");
}

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price * purchase.number
  }, 0);
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
  purchases = [];
  priceElement.value = "";
  numberElement.value ="";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}