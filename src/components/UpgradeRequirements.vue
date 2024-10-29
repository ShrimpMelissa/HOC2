<template>
<div id="upgrade-requirements" class="tab-content">
    <h2>Upgrade Requirements</h2>
    <div class="upgrade-buttons">
        <button @click="showUpgradeImage('herostar.png')" :style="{ backgroundImage: `url(/HOC2/Images/stars.png)` }" data-text="Hero Star"></button>
        <button @click="showUpgradeImage('potential.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-potential.png)` }" data-text="Potential"></button>
        <button @click="showUpgradeImage('transfer.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-transfer.png)` }" data-text="Transfer"></button>
        <button @click="showUpgradeImage('upanishad.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-upanishad.png)` }" data-text="Upanishad"></button>
        <button @click="showUpgradeImage('rebirth.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-rebirth.png)` }" data-text="Rebirth"></button>
        <button @click="showUpgradeImage('divinity.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-crown.png)` }" data-text="Divinity"></button>
        <button @click="showUpgradeImage('runestone.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-runestone.png)` }" data-text="Runestone"></button>
        <button @click="showUpgradeImage('talisman.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-origin.png)` }" data-text="Talisman"></button>
        <button @click="showUpgradeImage('spirits.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-spirit.png)` }" data-text="Spirits"></button>
        <button @click="showUpgradeImage('starhubgear.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-starhub.png)` }" data-text="Star Hub Gear"></button>
        <button @click="showUpgradeImage('treasure.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-treasure.png)` }" data-text="Treasure"></button>
        <button @click="showUpgradeImage('pet.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-pet.png)` }" data-text="Pet"></button>
        <button @click="showUpgradeImage('codex.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-codex.png)` }" data-text="Codex"></button>
        <button @click="showUpgradeImage('energysource.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-source.png)` }" data-text="Energy Source"></button>
        <button @click="showUpgradeImage('artifact.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-artifact.png)` }" data-text="Artifact"></button>
        <button @click="showUpgradeImage('goddessskin.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-goddess.png)` }" data-text="Goddess Skin"></button>
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
    align-items: center;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

h2 {
    text-align: center;
    margin-bottom: 30px;
}

.upgrade-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 10px;
    width: 100%;
    max-width: 800px;
    justify-items: center;
}

.upgrade-buttons button {
    width: 70px;
    height: 70px;
    margin: 0;
    background-size: cover;
    background-position: center;
    border: 2px solid #ccc;
    border-radius: 8px;
    transition: transform 0.2s, border-color 0.2s;
    cursor: pointer;
}

.upgrade-buttons button:hover {
    transform: scale(1.1);
    border-color: #ccc;
}

@media (min-width: 768px) {
    .upgrade-buttons {
        grid-template-columns: repeat(4, 80px);
        gap: 20px;
    }

    .upgrade-buttons button {
        width: 80px;
        height: 80px;
    }
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-image {
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
}
</style>
