<template>
  <header>
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <h1>KIN LONG</h1>
        </NuxtLink>

      </div>

<!--      <nav class="nav">-->
<!--          <div class="nav-list">-->
<!--            <NuxtLink to="/">Home</NuxtLink>-->
<!--&lt;!&ndash;            <NuxtLink to="/about">About</NuxtLink>&ndash;&gt;-->
<!--            <NuxtLink to="/contacts">Contacts</NuxtLink>-->
<!--          </div>-->
<!--      </nav>-->

    </div>
  </header>
  <main class="container">
    <slot/>
  </main>
</template>

<script>
    export default {
        name: "default"
    }
</script>

<style scoped>

</style>