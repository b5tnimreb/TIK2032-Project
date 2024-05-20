<?php
include 'config.php';

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio</title>
</head>

<link rel="stylesheet" type="text/css " href="styless.css">

<body>

    <header>
        <h1>PORTOFOLIO</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section id="home">
        <h2>Home</h2>
        <p>Welcome to my portofolio.</p>
    </section>

    <section id="gallery">
        <h1>Galeri Gambar</h1>
        <img src="img\foto1.jpg"alt="Gambar 1" width="150" height="150">
        <img src="img\foto2.jpeg"alt="Gambar 1" width="150" height="150">
        <img src="img\foto3.jpeg"alt="Gambar 1" width="150" height="150">
    </section>


    <section id="blog">
        <h2>Blog</h2>
        <?php
    $query = "SELECT * FROM blog";
    $result = mysqli_query($conn, $query);

    $no = 1;

    if ($result) {
        while ($row = mysqli_fetch_assoc($result)) {
            if ($no >=0) {
            ?>
        <article>
            
            <h3><?= $row["judul"] ?></h3>
            <p> <?= $row["deskripsi"] ?></p>
        </article>
        <?php } 
            $no++;
        }
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    } ?>

   
    </section>


    <section id="contact">
        <h2>Contact</h2>
        <p>email: joyman@gmail.com </p>
    </section>

    <body>
        <marquee behavior="scroll" direction="left">JOYY MANTIK_220211060363</marquee>
    </body>
    <script src="script.js"></script>
</body>
</html>