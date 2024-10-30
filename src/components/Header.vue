<template>
    <div class="header">
        <header>
            <nav id="toggleButton" @click="$emit('toggle-sidebar')" class="menu-button">☰</nav>
            <h1>Heroes of Crown: Legends</h1>
            <div class="header-right">
                <button @click="$emit('toggle-theme')" class="theme-toggle">
                    {{ isDarkMode ? '☀️' : '🌙' }}
                </button>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        isDarkMode: Boolean
    }
}
</script>

<style scoped>
header {
    background-color: #2d3436;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 60px;
}

.menu-button {
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
}

@media (max-width: 360px) {
    h1 {
        font-size: 1.2em;
    }
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

.theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    margin-right: 10px;
    margin-top: 2px;
}

.header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    min-width: 40px;
}
</style>
