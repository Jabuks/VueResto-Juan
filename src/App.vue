<template>
  <div id="app">
    <!-- Header content goes here (e.g., navigation bar) -->
    <header>
      <nav class="navbar">
        <div class="logo">RestoHub</div>
        <ul class="nav-links">
          <li><router-link to="/" class="nav-link">HOME</router-link></li>
          <li><router-link to="/menu" class="nav-link">MENU</router-link></li>
          <li><router-link to="/book-a-table" class="nav-link">BOOK A TABLE</router-link></li>
        </ul>
      </nav>
      <div class="hero">
        <!-- Hero image and content goes here -->
        <!-- <img src="./assets/bgmenu.jpg"> -->
          <h1>Enjoy Our Delicious Meal</h1>
          <p>Tempora errat rei eturna et citta. Diam dolor diam ipsum sit. Aliqua diam amet et eos. Cillat repanum et lorem et sit, sed est lorem citta duo justa magno dolore erat amet</p>
          <button class="btn">BOOK A TABLE</button>
      </div>
    </header>

    <!-- The <router-view> element is where matched components will be rendered -->
    <!-- <router-view>
      <router-link to="/" class="nav-link active">HOME</router-link>
      <router-link to="/menu" class="nav-link">MENU</router-link>
      <router-link to="/book-table" class="nav-link">BOOK A TABLE</router-link>
    </router-view> -->

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  // Any additional script logic for the App component
}
</script>

<style>
/* Global styles for your app */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252525;
  margin-top: 60px;
}

/* Reset margin dan padding pada elemen html dan body */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

header {
  width: 100%;
  background-color: rgba(51, 51, 51, 0.95); /* Dark background with opacity */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  position: fixed; /* Fix the header to the top */
  top: 0; /* Align to the top */
  left: 0; /* Align to the left */
  z-index: 1000; /* Ensure it's above other content */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  max-width: 100%; /* Ensure the navbar does not exceed the page width */
}

.navbar .logo {
  font-size: 1.5rem; /* Large font size for the logo */
  color: #ffa500; /* Orange color for the logo */
  font-weight: bold; /* Make the logo font bold */
}

.nav-links {
  list-style-type: none; /* Remove default list styling */
  display: flex;
  gap: 1rem; /* Space between the links */
}

.nav-link {
  color: white; /* White color for the links */
  text-decoration: none; /* No underline for the links */
  padding: 0.5rem 1rem; /* Padding for clickable area */
  transition: background-color 0.3s; /* Transition for hover effect */
}

.nav-link:hover, .nav-link.router-link-active {
  background-color: #ffa500; /* Orange background color for hover/active */
  color: #333; /* Dark text color for contrast on hover/active */
}

.hero {
  /* Styling for the hero section */
  background-size: contain, cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh; /* Adjust based on your design */
  background: url('~@/assets/bgmenu.jpg') center/cover no-repeat;
  color: #fff;
}

.hero::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* black background with 40% opacity */
  z-index: -1; /* ensures the content is above the pseudo-element */
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

/* Mengatur paragraf di dalam hero class */
.hero p {
  max-width: 600px; /* Ensures the text is not too wide */
  margin-bottom: 2rem;
}

.btn {
  /* Styling for the button */
  padding: 0.75rem 1.5rem;
  background-color: #ffa500;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #f5c59a;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  .hero p {
    font-size: 1rem;
  }
  .nav-links {
    flex-direction: column;
    align-items: center;
  }
}

footer {
  /* Styles for footer */
}
</style>
