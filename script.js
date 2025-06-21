let total = 0;

function add(betrag) {
  total += betrag;
  updateTotal();
}

function reset() {
  total = 0;
  updateTotal();
}

function updateTotal() {
  document.getElementById("total").innerText =
    total.toFixed(2).replace('.', ',') + " €";
}
