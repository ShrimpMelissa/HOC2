<template>
  <div class="sidebar" :class="{ visible: isVisible }">
    <ul>
      <li @click="handleItemClick('home')">Home</li>
      <li @click="handleItemClick('disclaimer')">Disclaimer Info</li>
      <li @click="handleItemClick('equipment')">Equipment</li>
      <li @click="handleItemClick('guides')">Guides</li>
      <li @click="handleItemClick('heroes')">Heroes</li>
      <li @click="handleItemClick('talisman')">Talisman</li>
      <li @click="handleItemClick('upgrade')">Upgrade Requirements</li>
    </ul>
    <button @click="toggleTheme">Toggle Light/Dark Mode</button>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    toggleSidebar: Function
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    handleItemClick(routeName) {
      this.navigateTo(routeName);
      this.toggleSidebar(); // Hide sidebar after clicking an item
    },
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
    toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  }
}
</script>

<style scoped>

.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: var(--background-color-sidebar);
  z-index: 500;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  border-right: 1px solid var(--background-color-header);
}

.sidebar.visible {
  transform: translateX(0);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
    padding: 10px;
    cursor: pointer;
    color: var(--text-color);
    text-decoration: none;
    font-size: 16px;
    font-weight: 300px;
}

li:hover {
    background-color: var(--background-color-sidebar-hover);
}

</style>
