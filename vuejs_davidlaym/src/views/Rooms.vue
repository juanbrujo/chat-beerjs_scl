<template>
    <div id="rooms">
      <h1>Canales disponibles</h1>
      <ul>
        <li v-for="room in rooms">
          <button v-on:click="changeRoom(room)">{{room}}</button>
        </li>
      </ul>
    </div>
</template>

<style>
#rooms ul {
  list-style: none;
  display: inline-block;
  width:100%;
  text-align: center;
}

#rooms li {
  display: inline;
  margin-right: 5px;
  margin-left: 5px;
}
</style>

<script src="./Rooms.js"></script>
