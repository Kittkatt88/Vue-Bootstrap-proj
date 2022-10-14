<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome, User Name!</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto mb-2 mb-lg-0"></div>
      <form class="d-flex">
        <nav>
          <router-link to="/logout" class="btn btn-light" type="button">Logout</router-link>
        </nav>
        <router-view/>        
      </form>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarTemp',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
