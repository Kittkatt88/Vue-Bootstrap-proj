<template>
  <div id="app">
    <router-view name="NavbarTemp" />
    <router-view/>
    <router-view name="DataTable" />
    <router-view name="LoginForm" />
    <router-view name="FooterTemp" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>