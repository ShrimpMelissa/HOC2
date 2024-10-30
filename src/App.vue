<template>
  <div id="app">
    <Header @toggle-sidebar="toggleSidebar" @toggle-theme="toggleTheme" :isDarkMode="isDarkMode" />
    <Sidebar :class="{ visible: isSidebarVisible }" :toggleSidebar="toggleSidebar" />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    HomeView
  },
  data() {
    return {
      isSidebarVisible: false,
      isDarkMode: false
    };
  },
  created() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      this.isDarkMode = false;
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      const theme = this.isDarkMode ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }
}
</script>
<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.content {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

