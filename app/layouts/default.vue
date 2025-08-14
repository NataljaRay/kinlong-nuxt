<template>
  <header>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contacts">Contacts</NuxtLink>
  </header>
  <main>
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