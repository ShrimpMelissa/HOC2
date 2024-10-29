<template>
  <div class="page-container">
    <div id="welcome" class="tab-content">
        <div class="welcome-header">
            <h2>Welcome.</h2>
            <div class="discord-icon">
                <a href="https://discord.gg/GsxzAgdXjC" target="_blank" rel="noopener noreferrer">
                    <img src="../Images/discord.png" alt="Join our Discord" title="Join our Discord">
                </a>
            </div>
        </div>
        <p>Click the button on top-left for quick access.</p>
        <img src="../Images/Chall.png" alt="Challenger" class="challenger-image">
        <div class="button-container">
            <button @click="navigateTo('heroes')" class="welcome-button">Heroes</button>
            <button @click="navigateTo('upgrade')" class="welcome-button">Upgrade</button>
            <button @click="navigateTo('equipment')" class="welcome-button">Equipment</button>
            <button @click="navigateTo('talisman')" class="welcome-button">Talisman</button>
            <button @click="navigateTo('guides')" class="welcome-button">Guides</button>
            <button @click="navigateTo('disclaimer')" class="welcome-button">Disclaimer</button>
        </div>
    </div>
  </div>
</template>

<script>
import DisclaimerInfo from '../components/DisclaimerInfo.vue'
import Equipment from '../components/Equipment.vue'
import Guides from '../components/Guides.vue'
import Heroes from '../components/Heroes.vue'
import Talisman from '../components/Talisman.vue'
import UpgradeRequirements from '../components/UpgradeRequirements.vue'

export default {
  name: 'HomeView',
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
  components: {
    DisclaimerInfo,
    Equipment,
    Guides,
    Heroes,
    Talisman,
    UpgradeRequirements
  }
}
</script>

<style scoped>
    .page-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85vh;
        width: 100vw;
        margin: 0;
    }

    #welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 600px;
        width: 100%;
        text-align: center;
    }

    .challenger-image {
        width: 50%;
        height: auto;
    }

    #welcome .welcome-header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-bottom: 10px;
    }

    #welcome .discord-icon {
        width: 10%;
        height: auto;
    }
    .discord-icon {
        filter: brightness(0) saturate(100%);
    }

    [data-theme="dark"] .discord-icon {
        filter: brightness(100) saturate(0%);
    }

    #welcome h2 {
        font-size: 2em;
        font-weight: 700;
    }

    #welcome .button-container {
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        size: 100px;
        columns: 2 100px;
    }

    .welcome-button {
      background-color: var(--welcome-button-color);
      padding: 8px 12px;
      font-size: 0.8em;
      color: #fff;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      text-align: center;
      columns: 1 100px;
    }

    @media (max-width: 600px) {
        .challenger-image {
            width: 80%; 
        }

        #welcome .button-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }

        .welcome-button {
            width: 100%; 
            font-size: 1em; 
        }
    }
</style>
