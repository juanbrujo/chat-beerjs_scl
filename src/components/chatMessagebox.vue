<template>
  <div class="chat">
    <h3>#{{room}} <a href="/rooms">Cambiar Canal</a> </h3>
    <img class="avatar" :src="userInfo.user_image_url" :alt="userInfo.name" :title="userInfo.name"/>
    <input v-model="typedMessage" type="text" placeholder="Mensaje...">
    <button id="btn-enviar" @click="sendMessage(typedMessage)">Enviar</button>
  </div>
</template>

<script src="./chatMessagebox.js"></script>
<style type="text/css" src="./chatMessagebox.css" scoped/>
