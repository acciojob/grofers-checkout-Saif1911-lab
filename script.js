const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.innerText);
  });

  // remove previous answer if exists
  const oldAns = document.getElementById("ans");
  if (oldAns) {
    oldAns.remove();
  }

  // create required #ans element
  const ans = document.createElement("div");
  ans.id = "ans";
  ans.innerText = total;

  document.body.appendChild(ans);
};

getSumBtn.addEventListener("click", getSum);
