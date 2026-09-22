/**
 * Reanty Real Estate - Main Vanilla JavaScript
 * Tự động nạp components (Header, Footer) & quản lý toàn bộ tương tác giao diện.
 */
'use strict';

/* ==========================================================================
   FALLBACK TEMPLATES (Bảo đảm hiển thị 100% khi mở trực tiếp file://)
   ========================================================================== */
const FALLBACK_HEADER = `<!-- 1. TOP CONTACT BAR -->
<aside class="top-bar">
  <div class="container top-bar__inner">
    <div class="top-bar__contact">
      <a href="mailto:info@webmail.com" class="top-bar__link">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span>info@webmail.com</span>
      </a>
      <span class="top-bar__location">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>547 no tower St. anglo City, USA</span>
      </span>
    </div>

    <div class="top-bar__socials">
      <a href="#" class="top-bar__social-link" aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </a>
      <a href="#" class="top-bar__social-link" aria-label="Twitter">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      </a>
      <a href="#" class="top-bar__social-link" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
      <a href="#" class="top-bar__social-link" aria-label="YouTube">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon fill="#171B2A" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      </a>
      <a href="#" class="top-bar__social-link" aria-label="Pinterest">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.057.24-.19.291-.439.175-1.644-.766-2.671-3.171-2.671-5.102 0-4.155 3.018-7.971 8.706-7.971 4.57 0 8.12 3.257 8.12 7.607 0 4.541-2.863 8.196-6.837 8.196-1.335 0-2.59-.694-3.019-1.512l-.823 3.136c-.298 1.144-1.104 2.578-1.644 3.454C9.692 23.776 10.824 24 12 24c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
  </div>
</aside>

<!-- 2. MAIN NAVIGATION (HEADER) -->
<header class="navbar">
  <div class="container navbar__inner">
    <!-- Brand Logo -->
    <a href="./index.html" class="navbar__brand" aria-label="Reanty Home">
      <svg viewBox="210 60 160 56" width="160" height="56" fill="none">
        <path
          d="M255.192 108.999C250.964 112.53 245.766 114.699 240.283 115.223C234.799 115.746 229.285 114.598 224.465 111.931C219.646 109.263 215.746 105.2 213.277 100.275C210.809 95.3505 209.888 89.7944 210.635 84.3366C211.382 78.8789 213.763 73.7747 217.464 69.6945C221.165 65.6143 226.013 62.7488 231.372 61.4745C236.731 60.2002 242.351 60.5767 247.492 62.5543C252.634 64.532 257.057 68.0185 260.18 72.5559L254.56 76.4254C252.217 73.022 248.899 70.4067 245.042 68.9233C241.186 67.4398 236.971 67.1575 232.951 68.1133C228.931 69.0692 225.294 71.2185 222.518 74.2791C219.742 77.3396 217.956 81.1683 217.396 85.2621C216.836 89.356 217.526 93.5236 219.378 97.2176C221.229 100.912 224.155 103.959 227.77 105.96C231.385 107.961 235.521 108.822 239.634 108.43C243.748 108.037 247.646 106.41 250.818 103.761L255.192 108.999Z"
          fill="#FF5A3C" />
        <path
          d="M246.837 84.1401C246.837 86.4081 245.577 87.8841 242.769 87.8841H238.557V80.5041H242.769C245.577 80.5041 246.837 81.9081 246.837 84.1401ZM233.517 76.3281V101.456H238.557V91.6641H240.933L246.477 101.456H252.309L246.297 91.2681C250.329 90.1881 252.021 87.0921 252.021 84.0321C252.021 79.8201 248.997 76.3281 242.949 76.3281H233.517ZM265.148 85.3281C267.74 85.3281 269.828 86.9841 269.9 89.6121H260.432C260.828 86.8761 262.736 85.3281 265.148 85.3281ZM274.616 95.1921H269.18C268.532 96.5241 267.344 97.6041 265.184 97.6041C262.664 97.6041 260.648 95.9481 260.396 92.9961H274.976C275.084 92.3481 275.12 91.7001 275.12 91.0521C275.12 85.1121 271.052 81.1881 265.292 81.1881C259.388 81.1881 255.284 85.1841 255.284 91.4841C255.284 97.7481 259.496 101.78 265.292 101.78C270.224 101.78 273.536 98.8641 274.616 95.1921ZM277.502 91.4121C277.502 97.6401 281.534 101.78 286.574 101.78C289.742 101.78 292.01 100.268 293.198 98.5401V101.456H298.274V81.5121H293.198V84.3561C292.01 82.7001 289.814 81.1881 286.61 81.1881C281.534 81.1881 277.502 85.1841 277.502 91.4121ZM293.198 91.4841C293.198 95.2641 290.678 97.3521 287.906 97.3521C285.206 97.3521 282.65 95.1921 282.65 91.4121C282.65 87.6321 285.206 85.6161 287.906 85.6161C290.678 85.6161 293.198 87.7041 293.198 91.4841ZM317.165 101.456H322.205V89.7561C322.205 84.2481 318.893 81.2241 314.249 81.2241C311.693 81.2241 309.533 82.3041 308.237 83.9961V81.5121H303.197V101.456H308.237V90.4401C308.237 87.2361 310.001 85.5081 312.737 85.5081C315.401 85.5081 317.165 87.2361 317.165 90.4401V101.456ZM327.79 95.2641C327.79 99.8361 330.346 101.456 334.162 101.456H337.33V97.2081H334.99C333.406 97.2081 332.866 96.6321 332.866 95.3001V85.6521H337.33V81.5121H332.866V76.5801H327.79V81.5121H325.414V85.6521H327.79V95.2641ZM349.451 95.4441L344.303 81.5121H338.651L346.643 100.952L342.323 110.888H347.687L360.035 81.5121H354.671L349.451 95.4441Z"
          fill="#071C1F" />
        <path
          d="M368.044 98.7561C368.044 97.1001 366.748 95.8041 364.984 95.8041C363.148 95.8041 361.852 97.1001 361.852 98.7561C361.852 100.412 363.148 101.708 364.984 101.708C366.748 101.708 368.044 100.412 368.044 98.7561Z"
          fill="#FF5A3C" />
      </svg>
    </a>

    <!-- Mobile Menu Toggle Button -->
    <button class="navbar__toggle" id="menuToggle" aria-label="Toggle Navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="navbar__nav" id="navbarNav">
      <ul class="navbar__menu">
        <li class="navbar__item"><a href="./index.html" class="navbar__link navbar__link--active" data-nav-home>Home</a></li>
        <li class="navbar__item"><a href="./index.html#about" class="navbar__link" data-nav-about>About</a></li>
        <li class="navbar__item"><a href="./index.html#feature" class="navbar__link" data-nav-feature>Feature</a></li>
        <li class="navbar__item"><a href="./index.html#market" class="navbar__link" data-nav-market>Market</a></li>
        <li class="navbar__item"><a href="./index.html#services" class="navbar__link" data-nav-services>Services</a></li>
        <li class="navbar__item"><a href="./index.html#contact" class="navbar__link" data-nav-contact>Contact</a></li>
      </ul>

      <div class="navbar__actions">
        <a href="./pages/login.html" class="navbar__login" data-login-link>Log In</a>
        <a href="./pages/register.html" class="btn btn--primary navbar__btn" data-signup-link>Sign Up</a>
      </div>
    </nav>
  </div>
</header>`;

const FALLBACK_FOOTER = `<footer class="footer">
  <div class="container footer__grid">
    <!-- Footer Col 1: Brand & Socials -->
    <div class="footer__col footer__col--brand">
      <a href="./index.html" class="footer__logo" data-home-link>
        <span class="footer__logo-icon">
          <svg width="38" height="31" viewBox="373 9413 39 32" fill="none">
            <path
              d="M410.499 9427.1L393.65 9413.93C392.911 9413.35 391.796 9413.35 391.056 9413.93L374.208 9427.1C373.616 9427.56 373.42 9428.27 373.71 9428.91C373.999 9429.56 374.704 9429.97 375.505 9429.97H378.196V9443.16C378.196 9443.69 378.691 9444.11 379.301 9444.11H388.535C389.145 9444.11 389.64 9443.69 389.64 9443.16V9435.15H395.067V9443.16C395.067 9443.69 395.562 9444.11 396.172 9444.11H405.406C406.016 9444.11 406.51 9443.69 406.51 9443.16V9429.97H409.202C410.003 9429.97 410.708 9429.56 410.998 9428.91C411.287 9428.27 411.091 9427.56 410.499 9427.1Z"
              fill="#FF5A3C" />
            <path d="M406.22 9415.39H398.804L407.324 9422.03V9416.33C407.324 9415.81 406.83 9415.39 406.22 9415.39Z"
              fill="#FF5A3C" />
          </svg>
        </span>
        <span class="footer__logo-text">Reanty<span class="footer__logo-dot">.</span></span>
      </a>
      <p class="footer__desc">
        With over 1 million homes<br>for sale available on the<br>website.
      </p>
      <div class="footer__socials">
        <a href="#" class="footer__social-btn" aria-label="LinkedIn">
          <svg width="35" height="35" viewBox="375.5 9594.5 35 35" fill="none">
            <rect x="375.5" y="9594.5" width="35" height="35" rx="3.5" stroke="#FF5A3C" />
            <path
              d="M388.484 9608.97C389.303 9608.97 389.967 9608.3 389.967 9607.48C389.967 9606.66 389.303 9606 388.484 9606C387.664 9606 387 9606.66 387 9607.48C387 9608.3 387.664 9608.97 388.484 9608.97Z"
              fill="#FF5A3C" />
            <path
              d="M389.72 9609.96H387.247C387.111 9609.96 387 9610.07 387 9610.21V9617.62C387 9617.76 387.111 9617.87 387.247 9617.87H389.72C389.856 9617.87 389.967 9617.76 389.967 9617.62V9610.21C389.967 9610.07 389.856 9609.96 389.72 9609.96Z"
              fill="#FF5A3C" />
            <path
              d="M397.088 9609.55C396.031 9609.18 394.709 9609.5 393.917 9610.07C393.89 9609.97 393.793 9609.89 393.677 9609.89H391.205C391.068 9609.89 390.958 9610 390.958 9610.13V9617.55C390.958 9617.69 391.068 9617.8 391.205 9617.8H393.677C393.814 9617.8 393.925 9617.69 393.925 9617.55V9612.22C394.324 9611.88 394.839 9611.77 395.26 9611.95C395.669 9612.12 395.903 9612.54 395.903 9613.1V9617.55C395.903 9617.69 396.013 9617.8 396.15 9617.8H398.623C398.759 9617.8 398.87 9617.69 398.87 9617.55V9612.6C398.842 9610.57 397.886 9609.82 397.088 9609.55Z"
              fill="#FF5A3C" />
          </svg>
        </a>
        <a href="#" class="footer__social-btn" aria-label="Facebook">
          <svg width="35" height="35" viewBox="425.5 9594.5 35 35" fill="none">
            <rect x="425.5" y="9594.5" width="35" height="35" rx="3.5" stroke="#FF5A3C" />
            <path
              d="M445.093 9608.02H446.702C446.85 9608.02 446.97 9607.91 446.97 9607.77V9606.25C446.97 9606.11 446.85 9606 446.702 9606H445.093C443.468 9606 442.145 9607.25 442.145 9608.78V9610.55H440.268C440.12 9610.55 440 9610.66 440 9610.8V9612.31C440 9612.45 440.12 9612.57 440.268 9612.57H442.145V9617.87C442.145 9618.01 442.265 9618.12 442.413 9618.12H444.021C444.169 9618.12 444.289 9618.01 444.289 9617.87V9612.57H446.165C446.281 9612.57 446.383 9612.5 446.42 9612.39L446.956 9610.88C446.984 9610.8 446.97 9610.72 446.919 9610.65C446.868 9610.59 446.788 9610.55 446.702 9610.55H444.289V9608.78C444.289 9608.36 444.65 9608.02 445.093 9608.02Z"
              fill="#FF5A3C" />
          </svg>
        </a>
        <a href="#" class="footer__social-btn" aria-label="Twitter">
          <svg width="35" height="35" viewBox="475.5 9594.5 35 35" fill="none">
            <rect x="475.5" y="9594.5" width="35" height="35" rx="3.5" stroke="#FF5A3C" />
            <path
              d="M499.22 9608.26C499.139 9608.17 499.008 9608.15 498.901 9608.21C498.834 9608.24 498.708 9608.29 498.559 9608.33C498.747 9608.08 498.899 9607.79 498.965 9607.53C498.994 9607.42 498.952 9607.3 498.86 9607.23C498.768 9607.17 498.646 9607.17 498.554 9607.23C498.409 9607.34 497.71 9607.65 497.268 9607.75C496.27 9606.85 495.107 9606.76 493.899 9607.48C492.917 9608.07 492.703 9609.27 492.745 9610C490.497 9609.78 489.1 9608.56 488.313 9607.55C488.258 9607.48 488.169 9607.44 488.086 9607.45C487.999 9607.45 487.919 9607.5 487.875 9607.58C487.503 9608.23 487.4 9608.94 487.577 9609.64C487.675 9610.03 487.845 9610.37 488.042 9610.64C487.947 9610.6 487.856 9610.54 487.77 9610.46C487.691 9610.4 487.58 9610.38 487.487 9610.43C487.394 9610.47 487.334 9610.57 487.334 9610.68C487.334 9611.89 488.071 9612.7 488.758 9613.12C488.647 9613.1 488.531 9613.08 488.414 9613.04C488.314 9613.01 488.205 9613.04 488.135 9613.12C488.066 9613.2 488.049 9613.32 488.093 9613.42C488.479 9614.3 489.211 9614.9 490.117 9615.12C489.326 9615.6 488.267 9615.83 487.298 9615.72C487.172 9615.7 487.053 9615.78 487.013 9615.91C486.974 9616.03 487.025 9616.17 487.136 9616.23C488.607 9617.08 489.936 9617.38 491.085 9617.38C492.757 9617.38 494.047 9616.74 494.833 9616.2C496.95 9614.76 498.27 9612.16 498.086 9609.84C498.426 9609.58 498.933 9609.11 499.248 9608.6C499.313 9608.49 499.301 9608.36 499.22 9608.26Z"
              fill="#FF5A3C" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Footer Col 2: Company -->
    <div class="footer__col">
      <h4 class="footer__heading">Company</h4>
      <ul class="footer__links">
        <li><a href="./index.html#about" class="footer__link" data-nav-about>About</a></li>
        <li><a href="#careers" class="footer__link">Careers</a></li>
        <li><a href="#mobile" class="footer__link">Mobile</a></li>
        <li><a href="./index.html#blog" class="footer__link" data-nav-blog>Blog</a></li>
        <li><a href="#how-we-work" class="footer__link">How we work?</a></li>
      </ul>
    </div>

    <!-- Footer Col 3: Contact -->
    <div class="footer__col">
      <h4 class="footer__heading">Contact</h4>
      <ul class="footer__links">
        <li><a href="#faq" class="footer__link">Help/FAQ</a></li>
        <li><a href="#press" class="footer__link">Press</a></li>
        <li><a href="#affiliates" class="footer__link">Affiliates</a></li>
        <li><a href="#owners" class="footer__link">Propert owners</a></li>
        <li><a href="#partners" class="footer__link">Partners</a></li>
      </ul>
    </div>

    <!-- Footer Col 4: More -->
    <div class="footer__col">
      <h4 class="footer__heading">More</h4>
      <ul class="footer__links">
        <li><a href="#fees" class="footer__link">Land fees</a></li>
        <li><a href="#property" class="footer__link">Property</a></li>
        <li><a href="#law" class="footer__link">Law tips</a></li>
        <li><a href="#nadges" class="footer__link">Nadges</a></li>
        <li><a href="#privacy" class="footer__link">Privacy</a></li>
      </ul>
    </div>

    <!-- Footer Col 5: Head Office & Newsletter -->
    <div class="footer__col footer__col--office">
      <h4 class="footer__heading">Head Office</h4>
      <p class="footer__address">
        Xilliams Corner Wine &copy; 2017. 1112 A Market St<br>
        # Ste B22, Charlottesville, CA 45565
      </p>

      <h4 class="footer__heading footer__heading--newsletter">News letter</h4>
      <form class="footer__newsletter" action="#" method="POST" onsubmit="event.preventDefault();">
        <input type="email" class="footer__newsletter-input" placeholder="Enter your email address" required>
        <button type="submit" class="footer__newsletter-btn" aria-label="Submit Newsletter">
          <svg width="24" height="18" viewBox="1463 9632 25 18" fill="none">
            <path
              d="M1485.1 9633H1466.1C1465 9633 1464.1 9633.9 1464.1 9635V9647C1464.1 9648.1 1465 9649 1466.1 9649H1485.1C1486.21 9649 1487.1 9648.1 1487.1 9647V9635C1487.1 9633.9 1486.21 9633 1485.1 9633Z"
              stroke="#FF5A3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1486.51 9633.58L1475.6 9642.5L1464.69 9633.58" stroke="#FF5A3C" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </form>
    </div>
  </div>

  <!-- Sub Footer Bar -->
  <div class="footer__bottom">
    <div class="container footer__bottom-inner">
      <div class="footer__bottom-item footer__bottom-item--email">
        <a href="mailto:email@gmail.com" class="footer__bottom-link">email@gmail.com</a>
      </div>
      <div class="footer__bottom-item footer__bottom-item--phone">
        <a href="tel:1234567890" class="footer__bottom-link">(123) 456-7890</a>
      </div>
      <div class="footer__bottom-item footer__bottom-item--copy">
        &copy; 2021 Aeyman Megha All rights reserved.
      </div>
    </div>
  </div>

  <!-- Bottom Solid Orange Bar (Figma Exact: height 20px, fill #FF5A3C) -->
  <div class="footer__orange-bar"></div>
</footer>`;

/* ==========================================================================
   APP INITIALIZATION
   ========================================================================== */
function initApp() {
  loadComponents();
  initPasswordToggles();
  initLoginForm();
  initRegisterForm();
  initOtherForms();
  initHeroInteractions();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/**
 * Tải các component ngoại vi (header.html, footer.html) và chèn vào DOM
 */
async function loadComponents() {
  const isSubpage =
    window.location.pathname.includes('/pages/') ||
    window.location.pathname.includes('\\pages\\');
  const includes = document.querySelectorAll('[data-include]');

  if (includes.length === 0) {
    initNavigation();
    return;
  }

  for (const el of includes) {
    const filePath = el.getAttribute('data-include');
    if (!filePath) continue;

    let html = '';
    const isHeader = filePath.includes('header');
    const isFooter = filePath.includes('footer');

    // 1. Nếu không phải file://, thử tải qua fetch()
    if (window.location.protocol !== 'file:') {
      try {
        const response = await fetch(filePath);
        if (response.ok) {
          html = await response.text();
        }
      } catch (err) {
        // Fallback to embedded template below
      }
    }

    // 2. Dùng Fallback Template nếu fetch không khả dụng hoặc bị chặn bởi CORS (file://)
    if (!html) {
      if (isHeader) html = FALLBACK_HEADER;
      else if (isFooter) html = FALLBACK_FOOTER;
    }

    if (!html) continue;

    // Chuẩn hóa đường dẫn tương đối tùy theo vị trí trang hiện tại
    if (isSubpage) {
      // ./pages/abc.html -> ./abc.html
      html = html.replace(/href=["']\.\/pages\/([^"']+)["']/g, 'href="./$1"');
      // ./index.html -> ../index.html
      html = html.replace(/href=["']\.\/index\.html([^"']*)["']/g, 'href="../index.html$1"');
    } else {
      // Đang ở thư mục root (index.html)
      html = html.replace(/href=["']\.\.\/index\.html([^"']*)["']/g, 'href="./index.html$1"');
      html = html.replace(/href=["']\.\/login\.html["']/g, 'href="./pages/login.html"');
      html = html.replace(/href=["']\.\/register\.html["']/g, 'href="./pages/register.html"');
    }

    // Tạo phần tử tạm để chứa HTML và xử lý active states
    const temp = document.createElement('div');
    temp.innerHTML = html;

    // Đánh dấu trạng thái active cho trang đăng nhập / đăng ký
    if (isSubpage) {
      const currentPage = window.location.pathname.split('/').pop().toLowerCase();
      if (currentPage.includes('login')) {
        const loginLink = temp.querySelector('[data-login-link], .navbar__login');
        if (loginLink) {
          loginLink.style.color = 'var(--color-primary, #FF5A3C)';
          loginLink.style.fontWeight = '700';
        }
        const homeNav = temp.querySelector('.navbar__link--active');
        if (homeNav) homeNav.classList.remove('navbar__link--active');
      } else if (currentPage.includes('register')) {
        const signupLink = temp.querySelector('[data-signup-link], .navbar__btn');
        if (signupLink) {
          signupLink.style.backgroundColor = 'var(--color-primary-hover, #E84D30)';
        }
        const homeNav = temp.querySelector('.navbar__link--active');
        if (homeNav) homeNav.classList.remove('navbar__link--active');
      }
    }

    // Thay thế placeholder bằng nội dung component
    el.outerHTML = temp.innerHTML;
  }

  // Khởi tạo lại menu navigation và các form sau khi nạp xong header & footer
  initNavigation();
  initOtherForms();
}

/**
 * Quản lý Navigation Menu trên Mobile
 */
function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navbarNav = document.getElementById('navbarNav');

  if (!menuToggle || !navbarNav) return;

  // Tránh gán đè nhiều lần
  if (menuToggle.dataset.listenerBound === 'true') return;
  menuToggle.dataset.listenerBound = 'true';

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navbarNav.classList.toggle('navbar__nav--open');
    menuToggle.classList.toggle('navbar__toggle--active');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', (e) => {
    if (navbarNav.classList.contains('navbar__nav--open')) {
      if (!navbarNav.contains(e.target) && !menuToggle.contains(e.target)) {
        navbarNav.classList.remove('navbar__nav--open');
        menuToggle.classList.remove('navbar__toggle--active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  const navLinks = navbarNav.querySelectorAll('.navbar__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navbarNav.classList.remove('navbar__nav--open');
      menuToggle.classList.remove('navbar__toggle--active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Ẩn / Hiện Mật Khẩu
 */
function initPasswordToggles() {
  const toggleButtons = document.querySelectorAll('.password-toggle');
  toggleButtons.forEach((btn) => {
    if (btn.dataset.listenerBound === 'true') return;
    btn.dataset.listenerBound = 'true';

    btn.addEventListener('click', () => {
      const wrapper = btn.closest('.form-input-wrapper');
      if (!wrapper) return;
      const input = wrapper.querySelector('input');
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      btn.innerHTML = isPassword
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>`;
    });
  });
}

/**
 * Xử lý Submit Form Đăng Nhập
 */
function initLoginForm() {
  const loginForm = document.getElementById('loginForm');
  const loginSuccessAlert = document.getElementById('loginSuccessAlert');

  if (!loginForm || loginForm.dataset.listenerBound === 'true') return;
  loginForm.dataset.listenerBound = 'true';

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');

    if (!emailInput || !passwordInput) return;

    const targetEndpoint =
      loginForm.dataset.dataServerUrl ||
      loginForm.dataset.testServerUrl ||
      'https://api.reanty.com/api/v1/auth/login';

    console.log('--- [AUTH LOGIN SUBMISSION] ---');
    console.log('Target Server Endpoint:', targetEndpoint);
    console.log('Email:', emailInput.value.trim());

    if (loginSuccessAlert) {
      loginSuccessAlert.style.display = 'flex';
      const submitBtn = loginForm.querySelector('.auth-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.innerHTML = `<span>Signing in...</span>`;
      }
      setTimeout(() => {
        const isSubpage =
          window.location.pathname.includes('/pages/') ||
          window.location.pathname.includes('\\pages\\');
        window.location.href = isSubpage ? '../index.html' : './index.html';
      }, 1200);
    }
  });
}

/**
 * Xử lý Submit Form Đăng Ký
 */
function initRegisterForm() {
  const registerForm = document.getElementById('registerForm');
  const registerSuccessAlert = document.getElementById('registerSuccessAlert');
  const registerErrorAlert = document.getElementById('registerErrorAlert');
  const registerErrorMessage = document.getElementById('registerErrorMessage');

  if (!registerForm || registerForm.dataset.listenerBound === 'true') return;
  registerForm.dataset.listenerBound = 'true';

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('regName');
    const emailInput = document.getElementById('regEmail');
    const passInput = document.getElementById('regPassword');
    const confirmPassInput = document.getElementById('regConfirmPassword');

    if (!nameInput || !emailInput || !passInput || !confirmPassInput) return;

    if (registerErrorAlert) registerErrorAlert.style.display = 'none';
    if (registerSuccessAlert) registerSuccessAlert.style.display = 'none';

    if (passInput.value.length < 8) {
      if (registerErrorAlert && registerErrorMessage) {
        registerErrorMessage.textContent = 'Mật khẩu phải có tối thiểu 8 ký tự.';
        registerErrorAlert.style.display = 'flex';
        passInput.focus();
      }
      return;
    }

    if (passInput.value !== confirmPassInput.value) {
      if (registerErrorAlert && registerErrorMessage) {
        registerErrorMessage.textContent = 'Mật khẩu xác nhận không trùng khớp. Vui lòng thử lại!';
        registerErrorAlert.style.display = 'flex';
        confirmPassInput.focus();
      }
      return;
    }

    const targetEndpoint =
      registerForm.dataset.dataServerUrl ||
      registerForm.dataset.testServerUrl ||
      'https://api.reanty.com/api/v1/auth/register';

    console.log('--- [AUTH REGISTER SUBMISSION] ---');
    console.log('Target Server Endpoint:', targetEndpoint);
    console.log('Name:', nameInput.value.trim());
    console.log('Email:', emailInput.value.trim());

    if (registerSuccessAlert) {
      registerSuccessAlert.style.display = 'flex';
      const submitBtn = registerForm.querySelector('.auth-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.innerHTML = `<span>Creating account...</span>`;
      }
      setTimeout(() => {
        window.location.href = './login.html';
      }, 1200);
    }
  });
}

/**
 * Xử lý các Form Liên hệ & Newsletter
 */
function initOtherForms() {
  const otherForms = document.querySelectorAll(
    '.contact-form, .newsletter-bar__form, .footer__newsletter'
  );
  otherForms.forEach((form) => {
    if (form.dataset.listenerBound === 'true') return;
    form.dataset.listenerBound = 'true';

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>Done!</span>';
        btn.style.backgroundColor = '#0E8048';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.backgroundColor = '';
          form.reset();
        }, 2000);
      }
    });
  });
}

/**
 * Xử lý tương tác Stepped Tabs & Pagination (HOUSE 1, HOUSE 2, HOUSE 3) trong Hero Section
 */
function initHeroInteractions() {
  const tabs = document.querySelectorAll('#heroHouseTabs .hero__tab-step');
  const nums = document.querySelectorAll('#heroProgressNums span');
  const fill = document.getElementById('heroProgressFill');

  if (!tabs.length || !nums.length || !fill) return;

  function setActiveStep(index) {
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('hero__tab-step--active');
      } else {
        tab.classList.remove('hero__tab-step--active');
      }
    });

    nums.forEach((num, i) => {
      if (i === index) {
        num.classList.add('active');
      } else {
        num.classList.remove('active');
      }
    });

    // Track width is 63px, fill width is 23px. Max translation is 40px (at index 2).
    const shift = index * 20;
    fill.style.transform = `translateX(${shift}px)`;
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      setActiveStep(index);
    });
  });

  nums.forEach((num, index) => {
    num.addEventListener('click', () => {
      setActiveStep(index);
    });
  });
}
