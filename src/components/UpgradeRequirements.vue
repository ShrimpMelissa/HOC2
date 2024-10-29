<template>
<div id="upgrade-requirements" class="tab-content">
    <h2>Upgrade Requirements</h2>
    <div class="upgrade-buttons">
        <button @click="showUpgradeImage('herostar.png')" :style="{ backgroundImage: `url(/HOC2/Images/Upscaled-stars.png)` }" data-text="Hero Star"></button>
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
        <div class="modal-content" @click.stop>
            <img :src="selectedImage" alt="Upgrade Image" />
            <button class="close-button" @click="closeModal">&times;</button>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'UpgradeRequirements',
  data() {
    return {
      selectedImage: null
    }
  },
  methods: {
    showUpgradeImage(imageName) {
      this.selectedImage = `/HOC2/Images/upgrade/${imageName}`
    },
    closeModal() {
      this.selectedImage = null
    }
  }
}
</script>

<style scoped>
.upgrade-buttons button {
    width: 80px;
    height: 80px;
    margin: 5px;
    background-size: cover;
    background-position: center;
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
}

.modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
}
</style>
