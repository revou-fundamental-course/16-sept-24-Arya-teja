// Input Nama
replaceName();

function replaceName() {
  let name = prompt("Halo, siapakah nama anda?");
  console.log(name);
  document.getElementById("name").innerHTML = name;
}

// Ganti Nama
document.getElementById("tombol").addEventListener("click", function () {
  replaceName();
});

function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  } else {
    document.getElementById("result-form").innerHTML = name;
    document.getElementById("result-form").innerHTML = birthDate;
    document.getElementById("result-form").innerHTML = gender;
    document.getElementById("result-form").innerHTML = messages;
    alert("Sukses Submit Form");
  }
}
