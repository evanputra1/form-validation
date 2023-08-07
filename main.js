// Menyeleksi form dan input elemen
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Fungsi untuk menampilkan pesan error
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.innerText = errorText;
    field.closest(".grup-form").appendChild(errorElement);
}

// Fungsi untuk menangani pengiriman form
const handleFormData = (e) => {
    e.preventDefault();

    // Mengambil input elemen
    const namalengkapInput = document.getElementById("nama-lengkap");
    const emailInput = document.getElementById("email");
    const tanggallahirInput = document.getElementById("tanggal-lahir");
    const jeniskelaminInput = document.getElementById("jenis-kelamin");

    // Mendapatkan nilai dari input elemen
    const namalengkap = namalengkapInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const tanggallahir = tanggallahirInput.value;
    const jeniskelamin = jeniskelaminInput.value;

    // Pola untuk validasi email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Menghapus pesan error
    document.querySelectorAll(".grup-form .error").forEach(field => field.classList.remove("error"));

    // Pemeriksaan Validasi
    if (namalengkap === "") {
        showError(namalengkapInput, "");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "");
    }
    if (password === "") {
        showError(passwordInput, "");
    }
    if (tanggallahir === "") {
        showError(tanggallahirInput, "");
    }
    if (jeniskelamin === "") {
        showError(jeniskelaminInput, "");
    }

    // Memeriksa kesalahan yang tersisa sebelum pengiriman form
    const errorInputs = document.querySelectorAll(".grup-form .error");
    if (errorInputs.length > 0) return;

    // Pengiriman form
    form.submit();
}

// Beralih visibilitas password
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Penanganan pengiriman form
form.addEventListener("submit", handleFormData);