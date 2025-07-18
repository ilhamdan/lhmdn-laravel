<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $ilhmdsite ?? 'ilhmdsite' }}</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap" rel="stylesheet">

</head>

<body>


    <button id="toggleSidebar" class="toggle-btn"><i class="bi bi-list"></i></button>
    <div id="sidebar">
        <ul>
            <h1><i class="bi bi-person-badge"></i> Ilham Dani</h1>
            <li><a href="#"><i class="bi bi-house"></i> Home</a></li>
            <li><a href="#"><i class="bi bi-person"></i> Who me?</a></li>
            <li><a href="#"><i class="bi bi-briefcase"></i> Work</a></li>
            <li><a href="#"><i class="bi bi-envelope"></i> Contact</a></li>
        </ul>
    </div>


    <section class="main-art">
        <canvas id="effects"></canvas>
        <img id="parallaxImage" src="{{ asset('ilhamd.jpg') }}" alt="Ilham Membaca" class="art-image" />

    </section>




</body>

</html>
