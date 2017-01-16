<template>
  <section id="main">
    <chat-messagebox :room="room" :userInfo="userInfo"></chat-messagebox>
    <chat-log :messages="messages"></chat-log>
  </section>
</template>

<script src="./Home.js"></script>
