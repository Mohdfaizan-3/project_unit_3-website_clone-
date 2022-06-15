var items = JSON.parse(localStorage.getItem("cart"));
console.log(items);
var subtotal = items.reduce(function (sum, el, i, ar) {
  var price = el.price;
  console.log(price);
  // price=price.slice(1);
  return sum + Number(price);
}, 0);
console.log(subtotal);
document.querySelector(".subtotal").append(subtotal);
document.querySelector("#subtotals").append(subtotal);

items.map(function (el, index) {
  var div1 = document.createElement("div");
  div1.setAttribute("class", "item_details");

  var div2 = document.createElement("div");
  var img = document.createElement("img");
  img.src = el.img;
  img.setAttribute("class", "img");
  div2.append(img);
  // console.log(div2)

  var a = document.createElement("div");
  a.setAttribute("class", "div_a");
  var div3 = document.createElement("div");
  div3.setAttribute("class", "name");
  div3.innerText = el.title;

  var div4 = document.createElement("div");
  div4.setAttribute("class", "price");
  div4.innerText = el.price;

  let div5 = document.createElement("button");
  div5.innerText = "x";

  div5.addEventListener("click", function () {
    removeItem(el, index);
  });

  div5.setAttribute("id", "remove");

  var count_item = el.name;
  var count = 0;
  var amount;
  for (var i = 0; i < items.length; i++) {
    if (items[i].name == count_item) {
      count++;
      amount = items[i].price;
      // amount=amount.slice(1)
    }
  }
  var total = count;
  var total_count = document.createElement("div");
  total_count.setAttribute("class", "total_count");
  total_count.innerText = "1";

  var total_amount = document.createElement("div");
  var final_amount = Number(count) * Number(amount);

  final_amount = "$" + final_amount;
  total_amount.setAttribute("class", "total_amount");
  total_amount.innerText = el.price;

  a.append(div3);
  div1.append(
    div2,
    a,
    div4,
    total_count,
    total_amount,
    div5
  );
  document.querySelector("#cartbox").append(div1);
});

function removeItem(el, index) {
  items.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(items));

  window.location.reload();
}
