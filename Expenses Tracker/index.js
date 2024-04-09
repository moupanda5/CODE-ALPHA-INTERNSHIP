const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
function addTransaction() {


  let type = document.getElementById('type').value;
  let name = document.getElementById('name').value;
  let amount = document.getElementById('amount').value;

  if (type != 'chooseOne'
    && name.length > 0
    && amount > 0) {
    const transaction = {
      type,
      name,
      amount,
      id: transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1,
    }

    transactions.push(transaction);

    localStorage.setItem('transactions', JSON.stringify(transactions));
  }

  showTransactions();
  updateBalance();
}

const showTransactions = () => {

  const transactionTable = document.getElementById('transactionTable');

  transactionTable.innerHTML = '';

  for (let i = 0; i < transactions.length; i++) {
    transactionTable.innerHTML += `
            <tr>
                <td>${transactions[i].type}</td>
                <td>${transactions[i].name}</td>
                <td>$${transactions[i].amount}</td>
                <td><a class="deleteButton" onclick="deleteTransaction(${transactions[i].id})">
                    Delete</a> &emsp; <a class="editButton" onclick="edit(${transactions[i].id})">
                    Edit</a></td>
            </tr>
        `;
  }
}
const deleteTransaction = (id) => {
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].id == id) {
      transactions.splice(i, 1);
    }
  }


  localStorage.setItem('transactions', JSON.stringify(transactions));
  showTransactions();
  updateBalance();
}

const edit = (id) => {
  document.getElementById("headingAdd").innerText = "Edit transaction: ";
  document.getElementById("btnadd").style.display = "none";
  document.getElementById("frmTrans").innerHTML += "<button type='button' class='buttonSave' id='btnedit' onclick='editTransaction(" + id + ")'>Edit transaction</button>";
}

const editTransaction = (id) => {
  let type = document.getElementById('type').value;
  let name = document.getElementById('name').value;
  let amount = document.getElementById('amount').value;

  if (type != 'chooseOne'
    && name.length > 0
    && amount > 0) {
    const transaction = {
      type,
      name,
      amount,
      id: id,
    }
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].id == id) {
        transactions[i] = transaction;
      }
    }
  }
  localStorage.setItem('transactions', JSON.stringify(transactions));
  showTransactions();
  updateBalance();
  document.getElementById("headingAdd").innerText = "Add a new transaction: ";
  document.getElementById("btnedit").remove();
  document.getElementById("btnadd").style.display = "";
}

const updateBalance = () => {
  let balance = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      balance += Number(transaction.amount);
    } else if (transaction.type === "expense") {
      balance -= transaction.amount;
    }
  });

  document.querySelector(".balance").textContent = balance;
}
