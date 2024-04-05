document.getElementById("loginButton").addEventListener("click", function() {
  alert("Anda akan beralih ke halaman Masuk/Daftar!");
});
    // Mendengarkan event ketika formulir login disubmit
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Mencegah formulir untuk disubmit secara default

      // Mengambil nilai dari input username dan password
      var username = document.querySelector("input[name='username']").value;
      var password = document.querySelector("input[name='password']").value;

      // Periksa apakah kedua input tidak kosong
      if (username.trim() === '' || password.trim() === '') {
        alert("Harap isi semua kolom.");
        return false;
      }

      this.submit();
    });