<template>
    <div class="header">
        <header>
            <nav id="toggleButton" @click="$emit('toggle-sidebar')">☰</nav>
            <h1>Heroes of Crown: Legends</h1>
            <p></p>
        </header>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
</style>
