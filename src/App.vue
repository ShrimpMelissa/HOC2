<template>
  <div id="app">
    <Header @toggle-sidebar="toggleSidebar" />
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
      isSidebarVisible: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  }
}
</script>
<style>
#app {
  display: flex;
}
</style>

