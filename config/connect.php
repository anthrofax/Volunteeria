<?php
include('config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password_confirmation = $_POST['password_confirmation'];
    $remember_me = isset($_POST['remember_me']) ? 1 : 0; // Menggunakan 1 jika checkbox dicentang, 0 jika tidak

    // Validasi data yang diterima
    if (empty($name) || empty($email) || empty($password) || empty($password_confirmation)) {
        echo "Semua kolom harus diisi.";
    } elseif ($password !== $password_confirmation) {
        echo "Password dan konfirmasi password tidak cocok.";
    } elseif ($remember_me !== 1) { // Cek apakah checkbox "remember_me" tidak dicentang
        echo "Anda harus menerima persyaratan dan kebijakan privasi.";
    } else {
        // Hash password sebelum menyimpannya
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Masukkan data ke dalam database
        $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        $stmt = $koneksi->prepare($sql);
        if ($stmt->execute([$name, $email, $hashed_password])) {
            // echo "Registrasi berhasil!";
            header("Location: ");  // perlu redirect ke halaman html lagi
        } else {
            echo "Terjadi kesalahan dalam proses registrasi.";
        }
    }
}
?>