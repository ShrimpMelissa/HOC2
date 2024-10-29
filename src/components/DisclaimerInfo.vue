<template>
  <div class="page-wrapper">
    <div class="disclaimer-container">
      <h2>Disclaimer</h2>
      <p>The "Heroes of Crown Guide" site is an unofficial 
          resource made by dedicated community members of 
          the game 'Heroes of Crown: Legends', for free public viewing.
      </p>
      <p>
          All contributors of this site do not gain any monetary profit from the
          "Heroes of Crown Guide" site, nor any other compensation. All Hero
          images and information is property of Ujoy, and their respective
          copyright holders. No copyright infringement is meant by us.
      </p>
      <p>
          If you intend to use any information from this spreadsheet
          for your own content, you must directly ask permission
          from one of the main contributors of the spreadsheet
          through Discord. @Shrimpblue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisclaimerInfo',
}
</script>

<style scoped>
  .disclaimer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75vh;
    max-width: 600px; /* Limit the size */
    width: 100%;
    margin: 0 auto; /* Center horizontally */
    text-align: center; /* Center text */
    padding: 0 20px; /* Add padding for better spacing */
  }

  .page-wrapper {
    display: flex;
    justify-content: center; /* Center the container horizontally */
    align-items: center; /* Center the container vertically */
    width: 100vw; /* Full viewport width */
    height: 100vh; /* Full viewport height */
  }
</style>
