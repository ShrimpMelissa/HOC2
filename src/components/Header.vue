<template>
    <div class="header">
        <header>
            <nav id="toggleButton" @click="$emit('toggle-sidebar')" class="menu-button">☰</nav>
            <h1>Heroes of Crown: Legends</h1>
            <div class="header-right"></div>
        </header>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
    background-color: #2d3436;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.menu-button {
    font-size: 24px;
    color: var(--background-color-header-text);
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
}

.menu-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
}

h1 {
    font-size: 1.5em;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    background: linear-gradient(45deg, #fff, #ccc);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
}

h1::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, #fff, transparent);
    transform: scaleX(0.8);
    opacity: 0.5;
}

.header-right {
    width: 40px; /* Balance the menu button width */
}
</style>
