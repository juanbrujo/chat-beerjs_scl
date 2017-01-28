<template>
  <div class="output">
    <p v-for="message in messages">
      <img :src="message.author.user_image_url" :alt="message.author.name" :title="message.author.name">
      <span>{{message.text}}</span>
    </p>
  </div>
</template>
<script src="./chatLog.js"></script>
<style src="./chatLog.css"></style>
