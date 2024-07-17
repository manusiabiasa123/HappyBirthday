// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "Ngaul" && password === "26072004") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang Ngaul",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Oke kita unfriend saja:)",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#468585",
    });
  }
}