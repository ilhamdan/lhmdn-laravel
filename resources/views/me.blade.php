<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>{{ $lhmdweb ?? 'Lhmd Web' }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" href="{{ asset('favicon-light.png') }}" media="(prefers-color-scheme: light)">
    <link rel="icon" href="{{ asset('favicon-dark.png') }}" media="(prefers-color-scheme: dark)">

    @vite(['resources/js/app.js'])


</head>

<body>
    <canvas id="bg-cube"></canvas>

    <div id="Content">
        <h1>Welcome to <br> My World</h1>
        <div class="typed">
            <span id="Text"></span>
            <span id="Cursor">|</span>
        </div>
        <button id="Btn">Jelajahi</button>

    </div>

    <footer>
        <p>© <span>2025</span> <strong>Ilham Dani</strong> – Created</p>
    </footer>
</body>

</html>
