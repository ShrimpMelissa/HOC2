<template>
<div id="upgrade-requirements" class="tab-content">
    <h2>Upgrade Requirements</h2>
    <div class="upgrade-buttons">
        <button @click="showUpgradeImage('herostar.png')" :style="{ backgroundImage: `url(${images.stars})` }" data-text="Hero Star"></button>
        <button @click="showUpgradeImage('potential.png')" :style="{ backgroundImage: `url(${images.potential})` }" data-text="Potential"></button>
        <button @click="showUpgradeImage('transfer.png')" :style="{ backgroundImage: `url(${images.transfer})` }" data-text="Transfer"></button>
        <button @click="showUpgradeImage('upanishad.png')" :style="{ backgroundImage: `url(${images.upanishad})` }" data-text="Upanishad"></button>
        <button @click="showUpgradeImage('rebirth.png')" :style="{ backgroundImage: `url(${images.rebirth})` }" data-text="Rebirth"></button>
        <button @click="showUpgradeImage('divinity.png')" :style="{ backgroundImage: `url(${images.crown})` }" data-text="Divinity"></button>
        <button @click="showUpgradeImage('runestone.png')" :style="{ backgroundImage: `url(${images.runestone})` }" data-text="Runestone"></button>
        <button @click="showUpgradeImage('talisman.png')" :style="{ backgroundImage: `url(${images.origin})` }" data-text="Talisman"></button>
        <button @click="showUpgradeImage('spirits.png')" :style="{ backgroundImage: `url(${images.spirit})` }" data-text="Spirits"></button>
        <button @click="showUpgradeImage('starhubgear.png')" :style="{ backgroundImage: `url(${images.starhub})` }" data-text="Star Hub Gear"></button>
        <button @click="showUpgradeImage('treasure.png')" :style="{ backgroundImage: `url(${images.treasure})` }" data-text="Treasure"></button>
        <button @click="showUpgradeImage('pet.png')" :style="{ backgroundImage: `url(${images.pet})` }" data-text="Pet"></button>
        <button @click="showUpgradeImage('codex.png')" :style="{ backgroundImage: `url(${images.codex})` }" data-text="Codex"></button>
        <button @click="showUpgradeImage('energysource.png')" :style="{ backgroundImage: `url(${images.source})` }" data-text="Energy Source"></button>
        <button @click="showUpgradeImage('artifact.png')" :style="{ backgroundImage: `url(${images.artifact})` }" data-text="Artifact"></button>
        <button @click="showUpgradeImage('goddessskin.png')" :style="{ backgroundImage: `url(${images.goddess})` }" data-text="Goddess Skin"></button>
    </div>
</div>

</template>

<script>
import stars from '/Images/Upscaled-stars.png'
import potential from '/Images/Upscaled-potential.png'
import transfer from '/Images/Upscaled-transfer.png'
import upanishad from '/Images/Upscaled-upanishad.png'
import rebirth from '/Images/Upscaled-rebirth.png'
import crown from '/Images/Upscaled-crown.png'
import runestone from '/Images/Upscaled-runestone.png'
import origin from '/Images/Upscaled-origin.png'
import spirit from '/Images/Upscaled-spirit.png'
import starhub from '/Images/Upscaled-starhub.png'
import treasure from '/Images/Upscaled-treasure.png'
import pet from '/Images/Upscaled-pet.png'
import codex from '/Images/Upscaled-codex.png'
import source from '/Images/Upscaled-source.png'
import artifact from '/Images/Upscaled-artifact.png'
import goddess from '/Images/Upscaled-goddess.png'

export default {
  name: 'UpgradeRequirements',
  data() {
    return {
      images: {
        stars,
        potential,
        transfer,
        upanishad,
        rebirth,
        crown,
        runestone,
        origin,
        spirit,
        starhub,
        treasure,
        pet,
        codex,
        source,
        artifact,
        goddess
      }
    }
  },
  methods: {
    showUpgradeImage(imageName) {
      // Add your image showing logic here
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
