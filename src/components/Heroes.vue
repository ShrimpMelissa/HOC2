<template>
    <div class="heroes-container">
      <h2>Heroes</h2>
      <div class="search-container">
        <input v-model="searchQuery" placeholder="Search by name" />
        <select v-model="selectedTier">
          <option value="">All Tiers</option>
          <option v-for="tier in uniqueTiers" :key="tier" :value="tier">{{ tier }}</option>
        </select>
      </div>
        <ul class="heroes-list">
          <li v-for="hero in filteredHeroes" :key="hero.id" class="hero-item">
            <div class="hero-header" @click="toggleDetails(hero.id)">
              <img :src="getImagePath(hero.image)" alt="Hero Image" class="hero-image" />
              <div class="hero-info">
                <h3>{{ hero.name }}</h3>
                <p>Tier: {{ hero.tier }}</p>
              </div>
            </div>
            <div v-if="visibleHeroId === hero.id" class="hero-details">
              <p>{{ hero.description }}</p>
              <p>Stats: {{ hero.stats.ATK }}</p>
              <p>Stats: {{ hero.stats.DEF }}</p>
              <p>Stats: {{ hero.stats.HP }}</p>
              <p>Stats: {{ hero.stats.SPD }}</p>
              <p>Recommended Talisman: {{ hero.recommendedTalisman.join(', ') }}</p>
              <p>Recommended Spirit: {{ hero.recommendedSpirit.join(', ') }}</p>
              <p>Recommended Codex: {{ Array.isArray(hero.recommendedCodex) ? hero.recommendedCodex.join(', ') : hero.recommendedCodex }}</p>
              <p>Recommended Pet: {{ Array.isArray(hero.recommendedPet) ? hero.recommendedPet.map(pet => pet.name).join(', ') : hero.recommendedPet }}</p>
              <p>Recommended Rune: {{ Array.isArray(hero.recommendedRune) ? hero.recommendedRune.join(', ') : hero.recommendedRune }}</p>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
import heroesData from '../assets/heroes.json'; 

export default {
  name: 'Heroes',
  data() {
    const images = import.meta.glob('../Images/*.{png,jpg,jpeg}', { eager: true, as: 'url' });
    return {
      heroes: heroesData,
      images,
      visibleHeroId: null,
      searchQuery: '',
      selectedTier: '',
      filteredHeroes: heroesData
    };
  },
  computed: {
    uniqueTiers() {
      return [...new Set(this.heroes.map(hero => hero.tier))];
    }
  },
  watch: {
    searchQuery: 'filterHeroes',
    selectedTier: 'filterHeroes'
  },
  methods: {
    getImagePath(image) {
      const imagePath = `../Images/${image}`;
      return this.images[imagePath] || '';
    },
    toggleDetails(heroId) {
      this.visibleHeroId = this.visibleHeroId === heroId ? null : heroId;
    },
    filterHeroes() {
      const query = this.searchQuery.toLowerCase();
      this.filteredHeroes = this.heroes.filter(hero => {
        const matchesName = hero.name.toLowerCase().includes(query);
        const matchesTier = this.selectedTier ? hero.tier === this.selectedTier : true;
        return matchesName && matchesTier;
      });
    }
  }
}
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
}

.search-container input,
.search-container select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.search-container select {
  width: 150px;
}

.heroes-container h2{
  text-align: center;
}

.heroes-container {
  width: 100vw; 
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  padding-left: 20px;
  margin-right: 20px;
  margin: 0;
  width: 100%;
}

li {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  width: 100%;
}

li:last-child {
  border-bottom: none;
}

.hero-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
}

.hero-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}

.hero-image {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

.hero-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.hero-details {
  margin-top: 10px;
}
</style>
