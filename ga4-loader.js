<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Redirecting...</title>

  <!-- GA4 Tracking Script -->
  <script>
    // Load GA4 synchronously for guaranteed execution
    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=false; // Force synchronous load
      j.src='https://www.googletagmanager.com/gtag/js?id='+i;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','G-ZC93LJZLLF');

    // Initialize GA4
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZC93LJZLLF');
  </script>

  <!-- Styling -->
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding-top: 50px;
      background-color: #f9f9f9;
    }
    h1 {
      color: #333;
    }
    p {
      font-size: 1.1em;
      color: #555;
    }
    img {
      max-width: 300px;
      margin-top: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
  </style>
</head>
<body>
  <h1>Redirecting to download page...</h1>
  <p>GA4 Measurement ID: <strong>G-ZC93LJZLLF</strong></p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/God_the_Father_16th_century.jpg" alt="Spiritual Image" />

  <!-- Redirect Script -->
  <script>
    // Ensure GA4 has time to fire before redirect
    setTimeout(() => {
      window.location.href = "https://roberthalls-manuscripts.com/";
    }, 3000); // 3 seconds
  </script>

  <!-- Fallback for No JavaScript -->
  <noscript>
    <p><a href="https://roberthalls-manuscripts.com/">Click here if you're not redirected.</a></p>
  </noscript>
</body>
</html>
