<template>
    <footer class="site-footer">
      <div class="footer-content">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <ul class="footer-links">
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Footer 컴포넌트 로직 (필요한 경우)
  };
  </script>
  
  <style scoped>
  .site-footer {
    background-color: #333;
    color: #fff;
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0px;

  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-links {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  .footer-links li {
    margin: 0 10px;
  }
  
  .footer-links li a {
    color: #fff;
    text-decoration: none;
  }
  </style>
  