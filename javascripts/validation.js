function emailValidation() {
  const form = document.getElementById("form");
  const emailConfirmInput = document.getElementById("email_confirm");
  const emailInput = document.getElementById("email");
  const emailErrorDiv = document.getElementById("email_error");

  // リアルタイムバリデーション
  function validateEmails() {
    if (emailInput.value !== emailConfirmInput.value) {
      emailErrorDiv.textContent = "Eメールが一致しません";
      emailErrorDiv.style.display = "block";
      emailConfirmInput.style.backgroundColor = "rgba(230, 169, 171, .5)";
    } else {
      emailErrorDiv.style.display = "none";
      emailConfirmInput.style.backgroundColor = "";
    }
  }

  // inputイベントリスナーを追加
  emailInput.addEventListener("input", validateEmails);
  emailConfirmInput.addEventListener("input", validateEmails);

  form.addEventListener("submit", e => {
    // フォームのデフォルトの送信を防ぐ
    if (emailInput.value !== emailConfirmInput.value) {
      e.preventDefault(); // フォーム送信を防ぐ
      emailErrorDiv.style.display = "block"; // メッセージを表示
    }
  })
}

window.onload = emailValidation;
