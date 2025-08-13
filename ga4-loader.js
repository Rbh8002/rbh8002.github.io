<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Redirecting...</title>

  <!-- Load GA4 tracking script -->
  <script src="ga4-loader.js"></script>

  <!-- Optional: Styling for a brief message -->
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding-top: 50px;
    }
  </style>
</head>
<body>
  <h1>Redirecting to download page...</h1>
  <p>Please wait a moment.</p>

  <script>
    // Wait briefly to ensure GA4 fires
    setTimeout(() => {
      window.location.href = "https://payhip.com/b/XYZ123"; // Replace with your actual Payhip link
    }, 1500); // 1.5 seconds delay
  </script>
</body>
</html>
