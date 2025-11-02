<?php
// header.inc
if (!isset($pageTitle)) {
    $pageTitle = "Hope On Wheel - Emergency Ambulance Service";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?></title>
    <link rel="stylesheet" href="styles.css">
    <style>
        :root {
            --primary-color: #dc3545;
            --secondary-color: #0056b3;
            --dark-text: #333;
            --border-color: #ddd;
            --light-bg: #f8f9fa;
        }

        body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: var(--light-bg);
        }

        /* Shared Nav (optional for all pages) */
        nav {
            background: white;
            padding: 15px 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        nav .logo {
            font-size: 24px;
            font-weight: bold;
            color: var(--primary-color);
        }

        nav .menu a {
            text-decoration: none;
            color: var(--dark-text);
            margin: 0 15px;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        nav .menu a:hover {
            color: var(--primary-color);
        }
    </style>
</head>
<body>
    <nav>
        <div class="logo">🚑 Hope On Wheel</div>
        <div class="menu">
            <a href="index.php">Home</a>
            <a href="login.php">Login</a>
            <a href="register.php">Register</a>
            <a href="contact.php">Contact</a>
        </div>
    </nav>