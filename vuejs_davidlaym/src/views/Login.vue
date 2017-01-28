<template>
  <section id="main">
    <form class="login" @submit.prevent="login()">
      <h3>Login</h3>
      <input type="email" required min-lenght="5" placeholder="Email" v-model="email">
      <input type="text" required min-lenght="3" placeholder="Nombre" v-model="name">
      <button id="btn-login" >Login</button>
    </form>
  </section>
</template>

<script src="./Login.js"></script>
