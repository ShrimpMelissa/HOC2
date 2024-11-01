<template>
  <div class="page-container">
    <div id="welcome" class="tab-content">
        <div class="welcome-header">
            <h2>Welcome.</h2>
            <div class="discord-icon">
                <a href="https://discord.gg/GsxzAgdXjC" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/discord.png" alt="Join our Discord" title="Join our Discord">
                </a>
            </div>
        </div>
        <p>Click the button on top-left for quick access.</p>
        <img src="/Images/Chall.png" alt="Challenger" class="challenger-image">
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
        min-height: calc(100vh - 60px);
        width: 100%;
        margin: 0;
        overflow: hidden;
        box-sizing: border-box;
    }

    #welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 600px;
        width: 100%;
        text-align: center;
        padding: 40px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .challenger-image {
        width: 50%;
        height: auto;
        margin: 20px 0;
        aspect-ratio: 1 / 1;
        object-fit: contain;
    }

    #welcome .welcome-header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 10px;
    }

    #welcome .discord-icon {
        display: flex;
        align-items: center;
        width: 24px;
        height: 24px;
        margin-top: 2px;
    }

    #welcome .discord-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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
        margin-bottom: 30px;
        letter-spacing: 0.5px;
    }

    #welcome .button-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        size: 100px;
        columns: 2 100px;
        margin-top: 20px;
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
        transition: all 0.3s ease;
    }

    .welcome-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 600px) {
        .page-container {
            min-height: calc(100vh - 60px);
            padding: 10px;
            overflow: hidden;
        }

        #welcome {
            padding: 15px;
            margin: 0;
            height: auto;
            max-height: calc(100vh - 80px);
            overflow-y: auto;
        }

        .challenger-image {
            width: 70%;
            margin: 8px 0;
            aspect-ratio: 4 / 3;
        }

        #welcome .welcome-header {
            gap: 20px;
            margin-bottom: 5px;
        }

        #welcome h2 {
            font-size: 1.8em;
            margin-bottom: 15px;
        }

        #welcome .discord-icon {
            width: 24px;
            height: 24px;
        }

        #welcome .button-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            width: 100%;
            max-width: 300px;
            margin: 10px auto 0;
        }

        .welcome-button {
            width: 100%;
            font-size: 0.9em;
            padding: 8px;
        }

        p {
            font-size: 0.9em;
            margin: 10px 0;
        }
    }

    /* Add specific adjustments for very small screens */
    @media (max-width: 360px) {
        .page-container {
            padding: 5px;
        }

        #welcome {
            padding: 10px;
        }

        .challenger-image {
            width: 65%;
            margin: 5px 0;
        }

        #welcome h2 {
            font-size: 1.6em;
        }

        .welcome-button {
            width: 100%;
            font-size: 1em;
        }

        #welcome .discord-icon {
            width: 20px;
            height: 20px;
            margin-top: 1px;
        }
    }

    /* Mobile-specific adjustments */
    @media (max-width: 768px) {
        .page-container {
            align-items: flex-start;
            padding-top: 60px;
        }
    }
</style>
