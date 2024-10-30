<template>
  <div class="page-wrapper">
    <div class="disclaimer-container">
      <h2>Disclaimer</h2>
      <p>The "Heroes of Crown:Legends Guide" site is an unofficial 
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
    max-width: 100%;
    width: 100%;
    text-align: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
  }

  .disclaimer-text {
    width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .page-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    width: 100vw;
    margin: 0;
  }

  h2 {
    margin-bottom: 30px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    .disclaimer-container {
      padding: 15px;
    }
  }

  @media (max-width: 360px) {
    .disclaimer-container {
      padding: 10px;
    }
  }
</style>
