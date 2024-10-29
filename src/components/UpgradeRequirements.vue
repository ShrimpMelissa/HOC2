<template>
<div id="upgrade-requirements" class="tab-content">
    <h2>Upgrade Requirements</h2>
    <div class="upgrade-buttons">
        <button @click="showUpgradeImage('herostar.png')" :style="{ backgroundImage: `url(/Images/Upscaled-stars.png)` }" data-text="Hero Star"></button>
        <button @click="showUpgradeImage('potential.png')" :style="{ backgroundImage: `url(/Images/Upscaled-potential.png)` }" data-text="Potential"></button>
        <button @click="showUpgradeImage('transfer.png')" :style="{ backgroundImage: `url(/Images/Upscaled-transfer.png)` }" data-text="Transfer"></button>
        <button @click="showUpgradeImage('upanishad.png')" :style="{ backgroundImage: `url(/Images/Upscaled-upanishad.png)` }" data-text="Upanishad"></button>
        <button @click="showUpgradeImage('rebirth.png')" :style="{ backgroundImage: `url(/Images/Upscaled-rebirth.png)` }" data-text="Rebirth"></button>
        <button @click="showUpgradeImage('divinity.png')" :style="{ backgroundImage: `url(/Images/Upscaled-crown.png)` }" data-text="Divinity"></button>
        <button @click="showUpgradeImage('runestone.png')" :style="{ backgroundImage: `url(/Images/Upscaled-runestone.png)` }" data-text="Runestone"></button>
        <button @click="showUpgradeImage('talisman.png')" :style="{ backgroundImage: `url(/Images/Upscaled-origin.png)` }" data-text="Talisman"></button>
        <button @click="showUpgradeImage('spirits.png')" :style="{ backgroundImage: `url(/Images/Upscaled-spirit.png)` }" data-text="Spirits"></button>
        <button @click="showUpgradeImage('starhubgear.png')" :style="{ backgroundImage: `url(/Images/Upscaled-starhub.png)` }" data-text="Star Hub Gear"></button>
        <button @click="showUpgradeImage('treasure.png')" :style="{ backgroundImage: `url(/Images/Upscaled-treasure.png)` }" data-text="Treasure"></button>
        <button @click="showUpgradeImage('pet.png')" :style="{ backgroundImage: `url(/Images/Upscaled-pet.png)` }" data-text="Pet"></button>
        <button @click="showUpgradeImage('codex.png')" :style="{ backgroundImage: `url(/Images/Upscaled-codex.png)` }" data-text="Codex"></button>
        <button @click="showUpgradeImage('energysource.png')" :style="{ backgroundImage: `url(/Images/Upscaled-source.png)` }" data-text="Energy Source"></button>
        <button @click="showUpgradeImage('artifact.png')" :style="{ backgroundImage: `url(/Images/Upscaled-artifact.png)` }" data-text="Artifact"></button>
        <button @click="showUpgradeImage('goddessskin.png')" :style="{ backgroundImage: `url(/Images/Upscaled-goddess.png)` }" data-text="Goddess Skin"></button>
    </div>
</div>

</template>

<script>
export default {
  name: 'UpgradeRequirements',
  methods: {
    showUpgradeImage(imageName) {
      console.log(`Showing image: ${imageName}`)
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
</style>
