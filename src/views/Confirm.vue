<template>
  <confirm-component redirect="/usercabinet"></confirm-component>
</template>

<script>
  import ConfirmComponent from '../components/ConfirmComponent.vue'
  export default {
    name: "SignIn",
    components:{
      ConfirmComponent
    }
  }
</script>

<style scoped>

</style>
