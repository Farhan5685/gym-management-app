<template>
    <footer class="footer-glass  py-4 text-center mt-4 text-white">
      <div class="container">
        <h5 class="mb-3 logo">FitPro Gym App</h5>
        <p class="footer-description mx-auto mb-4">
          Empowering your fitness journey with seamless attendance tracking, personalized packages, and real-time progress insights — all in one powerful app.
        </p>
        <div class="social-icons mb-3">
          <a href="#" aria-label="Facebook" class="social-link">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter" class="social-link">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" class="social-link">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn" class="social-link">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        <small>© 2025 FitPro Gym. All rights reserved.</small>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer-glass {
    background: rgba(10, 25, 41, 0.65);
    backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0 0 30px rgba(0, 140, 255, 0.4);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Animated gradient glow */
  .footer-glass::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(270deg,
      #0d6efd,
      #6610f2,
      #0d6efd,
      #20c997,
      #6610f2);
    background-size: 1000% 1000%;
    animation: gradientShift 30s ease infinite;
    filter: blur(45px);
    opacity: 0.3;
    z-index: -1;
    border-radius: 50%;
  }
  
  /* Gradient animation */
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  .logo {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.12rem;
    color: #ffffffcc;
    text-transform: uppercase;
    text-shadow: 0 0 12px rgba(13, 110, 253, 0.8);
    user-select: none;
  }
  
  .footer-description {
    max-width: 480px;
    font-size: 1rem;
    line-height: 1.6;
    color: #d1d7e0cc;
    user-select: text;
    margin-left: auto;
    margin-right: auto;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
  
  .social-link {
    color: #66b2ffcc;
    font-size: 1.4rem;
    transition: color 0.3s ease, transform 0.3s ease;
    user-select: none;
  }
  
  .social-link:hover {
    color: #0d6efd;
    transform: scale(1.25) rotate(10deg);
    text-shadow: 0 0 8px #0d6efd;
  }
  
  small {
    color: #a2a9b9cc;
    user-select: none;
    display: block;
    margin-top: 16px;
  }
  </style>
  