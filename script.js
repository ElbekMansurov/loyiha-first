// LocalStorage dan ovozlarni olish, agar bo'lmasa - noldan boshlash
let votes = JSON.parse(localStorage.getItem("votes")) || {
  HTML: 0,
  CSS: 0,
  JavaScript: 0,
  Python: 0
};

// Ovoz berish funksiyasi
function submitVote() {
  let selected = document.querySelector('input[name="vote"]:checked');

  if (!selected) {
    alert("Iltimos, variantni tanlang!");
    return;
  }

  // Ovoz qo'shish
  votes[selected.value]++;

  // LocalStorage ga saqlash
  localStorage.setItem("votes", JSON.stringify(votes));

  // Natijalarni yangilash
  showResults();

  alert("Ovozingiz qabul qilindi ✅");
}

// Natijalarni ekranda ko'rsatish
function showResults() {
  let resultText = `
    HTML: ${votes.HTML} ta ovoz<br>
    CSS: ${votes.CSS} ta ovoz<br>
    JavaScript: ${votes.JavaScript} ta ovoz<br>
    Python: ${votes.Python} ta ovoz
  `;
  document.getElementById("results").innerHTML = resultText;
}

// Sahifa ochilganda natijalarni ko'rsatish
showResults();
