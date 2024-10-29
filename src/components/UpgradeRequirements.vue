<template>
<div id="upgrade-requirements" class="tab-content">
    <h2>Upgrade Requirements</h2>
    <div class="upgrade-buttons">
        <button onclick="showUpgradeImage('../Images/herostar.png')" style="background-image: url('../Images/Upscaled-stars.png');" data-text="Hero Star"></button>
        <button onclick="showUpgradeImage('../Images/potential.png')" style="background-image: url('../Images/Upscaled-potential.png');" data-text="Potential"></button>
        <button onclick="showUpgradeImage('../Images/transfer.png')" style="background-image: url('../Images/Upscaled-transfer.png');" data-text="Transfer"></button>
        <button onclick="showUpgradeImage('../Images/upanishad.png')" style="background-image: url('../Images/Upscaled-upanishad.png');" data-text="Upanishad"></button>
        <button onclick="showUpgradeImage('../Images/rebirth.png')" style="background-image: url('../Images/Upscaled-rebirth.png');" data-text="Rebirth"></button>
        <button onclick="showUpgradeImage('../Images/divinity.png')" style="background-image: url('../Images/Upscaled-crown.png');" data-text="Divinity"></button>
        <button onclick="showUpgradeImage('../Images/runestone.png')" style="background-image: url('../Images/Upscaled-runestone.png');" data-text="Runestone"></button>
        <button onclick="showUpgradeImage('../Images/talisman.png')" style="background-image: url('../Images/Upscaled-origin.png');" data-text="Talisman"></button>
        <button onclick="showUpgradeImage('../Images/spirits.png')" style="background-image: url('../Images/Upscaled-spirit.png');" data-text="Spirits"></button>
        <button onclick="showUpgradeImage('../Images/starhubgear.png')" style="background-image: url('../Images/Upscaled-starhub.png');" data-text="Star Hub Gear"></button>
        <button onclick="showUpgradeImage('../Images/treasure.png')" style="background-image: url('../Images/Upscaled-treasure.png');" data-text="Treasure"></button>
        <button onclick="showUpgradeImage('../Images/pet.png')" style="background-image: url('../Images/Upscaled-pet.png');" data-text="Pet"></button>
        <button onclick="showUpgradeImage('../Images/codex.png')" style="background-image: url('../Images/Upscaled-codex.png');" data-text="Codex"></button>
        <button onclick="showUpgradeImage('../Images/energysource.png')" style="background-image: url('../Images/Upscaled-source.png');" data-text="Energy Source"></button>
        <button onclick="showUpgradeImage('../Images/artifact.png')" style="background-image: url('../Images/Upscaled-artifact.png');" data-text="Artifact"></button>
        <button onclick="showUpgradeImage('../Images/goddessskin.png')" style="background-image: url('../Images/Upscaled-goddess.png');" data-text="Goddess Skin"></button>
    </div>
</div>

</template>

<script>
export default {
  name: 'UpgradeRequirements',
}
</script>

<style scoped>
            .upgrade-buttons button {
                width: 80px;
                height: 80px;
                margin: 5px;
            }
</style>
