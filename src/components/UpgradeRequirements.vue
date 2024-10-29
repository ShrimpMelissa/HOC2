<template>
<div id="upgrade-requirements" class="tab-content">
    <div class="upgrade-buttons">
        <div class="button-container">
            <button @click="showUpgradeImage('herostar.png')" :style="{ backgroundImage: `url(/HOC2/Images/stars.png)` }"></button>
            <span class="button-label">Hero Star</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('potential.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-potential.png)` }"></button>
            <span class="button-label">Potential</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('transfer.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-transfer.png)` }"></button>
            <span class="button-label">Transfer</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('upanishad.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-upanishad.png)` }"></button>
            <span class="button-label">Upanishad</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('rebirth.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-rebirth.png)` }"></button>
            <span class="button-label">Rebirth</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('divinity.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-crown.png)` }"></button>
            <span class="button-label">Divinity</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('runestone.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-runestone.png)` }"></button>
            <span class="button-label">Runestone</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('talisman.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-origin.png)` }"></button>
            <span class="button-label">Talisman</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('spirits.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-spirit.png)` }"></button>
            <span class="button-label">Spirits</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('starhubgear.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-starhub.png)` }"></button>
            <span class="button-label">Star Gear</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('treasure.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-treasure.png)` }"></button>
            <span class="button-label">Treasure</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('pet.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-pet.png)` }"></button>
            <span class="button-label">Pet</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('codex.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-codex.png)` }"></button>
            <span class="button-label">Codex</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('energysource.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-source.png)` }"></button>
            <span class="button-label">Source</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('artifact.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-artifact.png)` }"></button>
            <span class="button-label">Artifact</span>
        </div>
        <div class="button-container">
            <button @click="showUpgradeImage('goddessskin.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-goddess.png)` }"></button>
            <span class="button-label">Goddess</span>
        </div>
    </div>

    <div v-if="selectedImage" class="modal-overlay" @click="closeModal">
        <img :src="selectedImage" alt="Upgrade Image" class="modal-image" @click.stop />
    </div>
</div>

</template>

<script>
export default {
  name: 'UpgradeRequirements',
  data() {
    return {
      selectedImage: null,
      imageMap: {
        'herostar.png': 'herostar.png',
        'potential.png': 'potential.png',
        'transfer.png': 'transfer.png',
        'upanishad.png': 'upanishad.png',
        'rebirth.png': 'rebirth.png',
        'divinity.png': 'divinity.png',
        'runestone.png': 'runestone.png',
        'talisman.png': 'talisman.png',
        'spirits.png': 'spirits.png',
        'starhubgear.png': 'starhubgear.png',
        'treasure.png': 'treasure.png',
        'pet.png': 'pet.png',
        'codex.png': 'codex.png',
        'energysource.png': 'energysource.png',
        'artifact.png': 'artifact.png',
        'goddessskin.png': 'goddessskin.png'
      }
    }
  },
  methods: {
    showUpgradeImage(imageName) {
      this.selectedImage = `/HOC2/Images/${imageName}`
    },
    closeModal() {
      this.selectedImage = null
    }
  }
}
</script>

<style scoped>
.tab-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85vh;
    width: 100vw;
    margin: 0;
}

h2 {
    text-align: center;
    margin-bottom: 30px;
}

.upgrade-buttons {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    gap: 25px;
    justify-content: center;
    align-items: start;
    max-width: 800px;
    width: 100%;
    text-align: center;
}

.button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.button-container button {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    border: none;
    border-radius: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 4px 15px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(255, 255, 255, 0.1) inset,
        0 0 10px rgba(255, 255, 255, 0.1);
}

.button-container button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(0, 0, 0, 0.05) 100%
    );
    border-radius: 16px;
    transition: all 0.3s ease;
}

.button-container button::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    transition: all 0.3s ease;
}

.button-container button:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 
        0 8px 25px rgba(0, 0, 0, 0.3),
        0 0 30px rgba(255, 255, 255, 0.15) inset,
        0 0 15px rgba(255, 255, 255, 0.15);
}

.button-container button:hover::before {
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(0, 0, 0, 0.1) 100%
    );
}

.button-container button:hover::after {
    border-color: rgba(255, 255, 255, 0.3);
}

.button-label {
    font-size: 14px;
    text-align: center;
    color: var(--text-color);
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
}

.modal-image {
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

@media (max-width: 480px) {
    .upgrade-buttons {
        grid-template-columns: repeat(4, 70px);
        gap: 15px;
        max-width: 300px;
        margin: 0 auto;
    }

    .button-container button {
        width: 70px;
        height: 70px;
        border-radius: 12px;
    }

    .button-label {
        font-size: 12px;
        max-width: 70px;
    }
}
</style>
