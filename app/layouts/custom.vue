<template>
  <header>
    <NuxtLink to="/">Home</NuxtLink>
  </header>
  <main>
    <slot/>
  </main>
</template>

<script>
    export default {
        name: "notMain"
    }
</script>

<style scoped>

</style>