<template>
  <confirm-component redirect="/newpassword"></confirm-component>
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
