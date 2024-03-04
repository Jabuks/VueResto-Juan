<template>
    <div id="app">
      <!-- Header content goes here (e.g., navigation bar) -->
      <header>
        <nav class="navbar">
          <div class="logo">Restoran</div>
          <ul class="nav-links">
            <li><router-link to="/" class="nav-link">HOME</router-link></li>
            <li><router-link to="/menu" class="nav-link">MENU</router-link></li>
            <li><router-link to="/book-a-table" class="nav-link">BOOK A TABLE</router-link></li>
          </ul>
        </nav>
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
    color: #2c3e50;
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
  
  footer {
    /* Styles for footer */
  }
  </style>
  