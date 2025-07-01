function calculateAge() {
  const dobInput = document.getElementById("dob");
  const result = document.getElementById("result");

  if (!dobInput.value) {
    result.innerText = "⚠️ Please enter your birth date.";
    return;
  }

  const dob = new Date(dobInput.value);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  if (age < 0) {
    result.innerText = "❌ Future dates are not valid!";
  } else {
    result.innerText = `✅ You are ${age} years old.`;
  }
}

function resetForm() {
  document.getElementById("dob").value = "";
  document.getElementById("result").innerText = "⏳ Waiting for input...";
}
