<template>
  <v-container fluid grid-list-md>
    <v-flex class="d-flex text-xs-center headline my-4">
      <p class="gray-text">Hello + {{" " + localStorage.getItem("username")}}
      </p>
    </v-flex>
  </v-container>
</template>

<script>
    export default {
        name: "UserCabinet"
    }
</script>

<style scoped>

</style>
