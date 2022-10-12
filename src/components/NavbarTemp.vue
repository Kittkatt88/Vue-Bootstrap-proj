<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome, User Name!</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto mb-2 mb-lg-0"></div>
      <form class="d-flex">
        <button class="btn btn-light" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropLogout">Logout</button>
      </form>
    </div>
  </div>
  </nav>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdropLogout" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Logout Screen</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Confirm</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBarTemp',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
