// Input Nama
replaceName();

function replaceName() {
  let name = prompt("Halo, siapakah nama anda?");
  console.log(name);
  document.getElementById("name").innerHTML = name;
}

// Ganti Nama
// document.getElementById("tombol").addEventListener("click", function () {
//   replaceName();
// });

// Result Form
// let nameInput = document.getElementById("name-input");

// document.getElementById("kirim").addEventListener("click", function () {
//   const nama = nameInput.value;
// });

// Validation Form
function validateForm() {
  let inputName = document.getElementById("name-input").value;
  if (inputName == "") {
    alert("Data tidak boleh kosong");
  } else {
    document.getElementById("result-form").innerHTML = inputName;
    alert("Sukses Submit Form");
  }
}

function validateForm() {
  let inputName = document.getElementById("date-input").value;
  if (inputName == "") {
    alert("Data tidak boleh kosong");
  } else {
    document.getElementById("result-form").innerHTML = inputName;
    alert("Sukses Submit Form");
  }
}

// // photo banner
// function showSlide() {
//   let listImage = document.getElementsByClassName("photo-banner");

//   // hide all image
//   let i = 0;
//   while (i < listImage.length) {
//     listImage[i].style.display = "none";
//     i++;
//   }

//   listImage[0].style.display = "block";

//   console.log(listImage);
// }
