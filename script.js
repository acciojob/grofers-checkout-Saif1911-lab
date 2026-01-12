const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(p => {
    total += Number(p.innerText);
  });

  const table = document.querySelector("table");

  // Prevent duplicate total row
  const oldRow = document.getElementById("total");
  if (oldRow) oldRow.remove();

  const row = document.createElement("tr");
  row.id = "total";

  const cell = document.createElement("td");
  cell.colSpan = 2;
  cell.innerText = total;

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
