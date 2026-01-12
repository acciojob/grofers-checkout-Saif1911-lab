const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  const table = document.querySelector("table");

  // Remove existing total row if already added
  const existingRow = document.getElementById("total-row");
  if (existingRow) {
    existingRow.remove();
  }

  // Create total row
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
