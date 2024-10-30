<template>
<div id="talisman" class="tab-content">
    <div class="talisman-images">
        <img src="/HOC2/Images/SPC1.png" alt="SPC 1" class="talisman-image">
        <img src="/HOC2/Images/SPC2.png" alt="SPC 2" class="talisman-image">
        <img src="/HOC2/Images/SURV1.png" alt="SURV 1" class="talisman-image">
        <img src="/HOC2/Images/SURV2.png" alt="SURV 2" class="talisman-image">
    </div>
</div>
</template>

<script>
export default {
  name: 'Talisman'
}
</script>

<style scoped>
.tab-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
    width: 100vw;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
}

.talisman-images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 900px;
}

.talisman-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
}

@media (max-width: 768px) {
    .talisman-images {
        grid-template-columns: 1fr;
        gap: 15px;
        max-width: 400px;
    }

    .talisman-image {
        max-width: 100%;
    }
}
</style>
