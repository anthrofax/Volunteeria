<?php
include('config.php');

// Memeriksa apakah ada data yang dikirimkan dari form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $nama = $_POST["nama"];
    $alamat = $_POST["alamat"];
    $institusi = $_POST["institusi"];
    $alasan = $_POST["alasan"];
    $notelp = $_POST["notelp"];
    $inputFile = $_FILES["berkas"]["name"];

    // Query SQL untuk memasukkan data ke dalam tabel pendaftars
    $sql = "INSERT INTO pendaftars (email, nama, alamat, institusi, alasan, notelp, inputFile)
            VALUES ('$email', '$nama', '$alamat', '$institusi', '$alasan', '$notelp', '$inputFile')";

    if ($conn->query($sql) === TRUE) {
        echo "Pendaftaran berhasil!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error();
    }
}
?>
