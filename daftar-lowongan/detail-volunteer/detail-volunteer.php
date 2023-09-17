<!DOCTYPE html>
<html lang="en" class="scroll-smooth ">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@400;700&family=Inter:wght@100;200;400;600;700&family=Poppins:ital,wght@0,100;0,200;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
    <script src="../../node_modules/preline/dist/preline.js"></script>

    <link rel="stylesheet" href="../../src/style/output.css" />
    <script defer type="module" src="../../src/js/daftar-lowongan/detail-volunteer/detailVolunteerController.js"></script>
    <title>Volunteeria</title>
  </head>

  <body class="bg-white2 dark:bg-black2 font-poppins">
    <!-- Overlay Background -->
    <div class="overlay-bg bg-black opacity-50 fixed left-0 right-0 bottom-0 top-0 z-30 hidden"></div>
    <!-- Navbar -->
    <nav class="bg-white dark:bg-black1 sm:py-8 sm:pr-20 sm:pl-16 max-sm:px-5 flex items-center justify-between drop-shadow-[0_ 5px_15px_white] text-black1 dark:text-palewhite relative hover:opacity-100 duration-1000 z-20 backdrop-blur-md">
      <div class="flex items-center gap-x-5 max-sm:gap-x-2">
        <img src="../../src/img/logo.svg" alt="Volunteeria Logo" width="60px" class="max-sm:w-10 max-sm:h-20" />
        <a href="../volunteeria.html" class="text-2xl uppercase tracking-widest font-semibold max-sm:text-sm mt-2 nav-links">
          <h1>Volunteeria</h1>
        </a>
      </div>

      <!-- Dark Mode (Mobile) -->
      <div class="flex items-center gap-[5vw]">
        <div class="hs-dropdown xl:hidden" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
          <a class="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="javascript:;">
            <svg class="hs-dark-mode-active:hidden block w-[7vw] max-w-[2rem]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
              />
            </svg>
            <svg class="hs-dark-mode-active:block hidden w-[7vw] max-w-[2rem]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              />
            </svg>
          </a>

          <div
            id="selectThemeDropdown"
            class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
          >
            <a
              class="hs-auto-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="javascript:;"
              data-hs-theme-click-value="auto"
            >
              Auto (system default)
            </a>
            <a
              class="hs-default-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="javascript:;"
              data-hs-theme-click-value="default"
            >
              Default (light mode)
            </a>
            <a
              class="hs-dark-mode-active:bg-gray-700 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="javascript:;"
              data-hs-theme-click-value="dark"
            >
              Dark
            </a>
          </div>
        </div>

        <button class="hamburger relative lg:hidden elative flex overflow-hidden items-center justify-center rounded-full w-[10vw] h-[10vw] max-w-[40px] max-h-[40px] transform transition-all bg-purple1 ring-white ring-opacity-30 duration-200 shadow-md burger-ring">
          <div class="flex flex-col gap-[1.5vw] sm:gap-2 justify-center items-center w-[5vw] h-[5vw] transform transition-all duration-300 origin-center max-w-sm">
            <div class="bg-white h-[2px] w-[90%] max-w-[20px] transform transition-all duration-300 origin-left three-line"></div>
            <div class="bg-white h-[2px] w-[90%] max-w-[20px] rounded transform transition-all duration-300 delay-75 three-line"></div>
            <div class="bg-white h-[2px] w-[90%] max-w-[20px] transform transition-all duration-300 origin-left delay-150 three-line"></div>

            <div class="absolute items-center justify-center transform transition-all duration-500 top-1/2 -left-10 flex w-0 -translate-x-1/2 close-hamburger">
              <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 close-line"></div>
              <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 close-line"></div>
            </div>
          </div>
        </button>
      </div>

      <ul class="hidden xl:flex gap-x-5 text-sm items-center">
        <li>
          <a href="../daftar-lowongan.php" class="nav-links relative active-link text-purple1 after:scale-100">Lowongan Volunteer</a>
        </li>
        <li>
          <a href="../../tips-volunteer/tips-volunteer.html" class="nav-links hoverable-link">Tips Volunteer</a>
        </li>
        <li><a href="" class="nav-links border border-purple1 px-4 py-5 rounded-full hover:border-black1 dark:hover:border-palewhite">FOR EMPLOYERS</a></li>
        <li>
          <div class="hs-dropdown" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
            <a class="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="javascript:;">
              <svg class="hs-dark-mode-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
                />
              </svg>
              <svg class="hs-dark-mode-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                />
              </svg>
            </a>

            <div
              id="selectThemeDropdown"
              class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
            >
              <a
                class="hs-auto-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="javascript:;"
                data-hs-theme-click-value="auto"
              >
                Auto (system default)
              </a>
              <a
                class="hs-default-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="javascript:;"
                data-hs-theme-click-value="default"
              >
                Default (light mode)
              </a>
              <a
                class="hs-dark-mode-active:bg-gray-700 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="javascript:;"
                data-hs-theme-click-value="dark"
              >
                Dark
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <!-- Mobile Sidebar -->
    <aside id="default-sidebar" class="xl:hidden side-navbar fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full" aria-label="Sidebar">
      <div class="h-full px-3 py-10 overflow-y-auto bg-gray-50 dark:bg-black1">
        <ul class="space-y-2 font-medium">
          <li>
            <a href="../daftar-lowongan.php" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-palewhite group">
              <img src="../../src/img/volunteer.svg" alt="" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span class="flex-1 ml-3 whitespace-nowrap text-purple1">Lowongan Volunteer</span>
            </a>
          </li>
          <li>
            <a href="../../tips-volunteer/tips-volunteer.html" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-palewhite group">
              <img src="../../src/img/tips.svg" alt="" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span class="flex-1 ml-3 whitespace-nowrap">Tips Volunteer</span>
            </a>
          </li>
          <li>
            <a href="" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-palewhite group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">FOR EMPLOYERS</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <main class="dark:bg-black2">
      <section class="px-8 text-center lg:text-left py-20 bg-white dark:bg-black1 dark:text-palewhite flex flex-col lg:flex-row lg:items-center justify-start gap-5 lg:justify-between relative">
        <a href="../daftar-lowongan.php" class="left-3 top-5 absolute w-10 h-10 bg-purple1 hover:bg-palewhite duration-500 rounded-full flex items-center justify-center backdrop-blur-xl bg-opacity-80">
          <img src="../../src/img/backwhite2.svg" alt="Back Logo" class="w-5 h-5" />
        </a>
        <div >
          <h1 class="font-bold text-lg lg:text-xl mt-3">Admin Penjualan</h1>
          <h2 class="font-semibold text-base lg:text-lg">PT Utama Sejuk Abadi</h2>
          <p class="text-sm lg:text-base">Jakarta Raya</p>
        </div>

        <button class="rounded-md bg-purple1 w-full lg:w-[10vw] h-12 text-white hover:bg-purple1/90 duration-100">Apply Now</button>
      </section>

      <section class="mt-5 px-5 py-12 bg-white dark:bg-black1 dark:text-palewhite text-sm lg:text-base">
        <p>
          Kuota penerimaan : 16 <br> <br>
        </p>

        <p>
          Job Desk <br />
          ・Bekerja Full Time di dalam kantor <br />
          ・Menjawab telepon, Email, Whatsapp dari customer <br />
          ・Handle order dan membuat invoice <br />
          ・Mengurusi Administrasi kantor <br />
          ・Mempelajari jobdesc untuk backup team lain <br />
          ・Hari Kerja Senin – Jumat, 08.00 – 17.00. Sabtu 09.00 – 14.00 <br />
          <br />
        </p>

          <p>
             Yang didapatkan <br />
          ・Pengalaman bekerja sama dalam tim <br />
          ・Relasi yang dapat membangun <br />
          ・Kesempatan belajar hal baru <br />
          ・Sertifikat sebagai bukti telah mengikuti kegiatan volunteer <br /> <br>
          </p>

          <p>
             Kontak <br />
             Telepon : +62 8301830 <br>
            Email : jayaabadi@gmail.com <br>
            Instagram : @jayaabadi_
          </p>

      </section>
    </main>

    <footer class="mt-5 drop-shadow-[0_-3px_10px_rgba(95,122,219,0.8)] py-5 px-5 bg-white dark:bg-black1 dark:text-palewhite flex flex-col gap-8 text-black1 lg:pr-32">
      <div class="flex flex-col items-center gap-2 sm:gap-4 sm:flex-row">
        <img src="../../src/img/logo.svg" alt="Volunteeria Logo" class="w-16" />
        <h1 class="text-sm sm:text-lg lg:text-2xl uppercase tracking-widest font-semibold">Volunteeria</h1>
      </div>

      <div class="flex justify-between text-sm">
        <div class="flex flex-col gap-10">
          <div>
            <h4 class="footer-links-title">Company</h4>
            <ul>
              <li>
                <a href="" class="mt-3 hover-text">About</a>
              </li>
              <li>
                <a href="" class="hover-text"> FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="footer-links-title">Career</h4>
            <a href="" class="mt-3 hover-text">Professional</a>
          </div>
        </div>
        <div>
          <h4 class="footer-links-title">Contact us</h4>
          <a href="" class="mt-3 hover-text">+62 90120024</a>
        </div>
      </div>
    </footer>
  </body>
</html>
