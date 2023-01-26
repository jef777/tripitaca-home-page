<template>
  <nav class="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="logo image" height="50px" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"> Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> Packages </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.menu {
  background-color: #fdffffd1;
}
li.nav-item a.nav-link {
  color: black;
  font-weight: bold;
}
.navbar-toggler-icon {
  filter: brightness(1) invert(1);
}
</style>
