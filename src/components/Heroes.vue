<template>
    <div class="heroes-container">
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
                <p class="tier" :class="getTierClass(hero.tier)">Tier: {{ hero.tier }}</p>
              </div>
            </div>
            <div v-if="visibleHeroId === hero.id" class="hero-details">
                <div class="description">
                    <h4 :style="{ color: getTierColor(hero.tier) }">Description</h4>
                    <p>{{ formatDescription(hero.description) }}</p>
                </div>
                
                <div class="stats-table">
                    <div class="stat-cell">ATK {{ hero.stats.ATK }}</div>
                    <div class="stat-cell">DEF {{ hero.stats.DEF }}</div>
                    <div class="stat-cell">HP {{ hero.stats.HP }}</div>
                    <div class="stat-cell">SPD {{ hero.stats.SPD }}</div>
                </div>

                <div class="rec-section">
                    <h4 :style="{ color: getTierColor(hero.tier) }">Recommended Talisman:</h4>
                    <div class="rec-grid">
                        <div v-for="(item, index) in hero.recommendedTalisman" 
                             :key="'talisman-'+index" 
                             class="rec-cell">{{ item }}</div>
                    </div>
                </div>

                <div class="rec-section">
                    <h4 :style="{ color: getTierColor(hero.tier) }">Recommended Spirit:</h4>
                    <div class="rec-grid">
                        <div v-for="(item, index) in hero.recommendedSpirit" 
                             :key="'spirit-'+index" 
                             class="rec-cell">{{ item }}</div>
                    </div>
                </div>

                <div class="rec-section">
                    <h4 :style="{ color: getTierColor(hero.tier) }">Recommended Codex:</h4>
                    <div class="rec-grid">
                        <div v-for="(item, index) in hero.recommendedCodex" 
                             :key="'codex-'+index" 
                             class="rec-cell">{{ item }}</div>
                    </div>
                </div>

                <div class="rec-section">
                    <h4 :style="{ color: getTierColor(hero.tier) }">Recommended Pet:</h4>
                    <div class="rec-grid">
                        <div v-for="(pet, index) in hero.recommendedPet" 
                             :key="'pet-'+index" 
                             class="rec-cell">
                            {{ pet.name }}
                        </div>
                    </div>
                </div>

                <div class="rec-section">
                    <h4 :style="{ color: getTierColor(hero.tier) }">Recommended Rune:</h4>
                    <div class="rec-grid">
                        <div v-for="(item, index) in hero.recommendedRune" 
                             :key="'rune-'+index" 
                             class="rec-cell">{{ item }}</div>
                    </div>
                </div>
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
    return {
      heroes: heroesData,
      visibleHeroId: null,
      searchQuery: '',
      selectedTier: '',
    };
  },
  computed: {
    uniqueTiers() {
      return [...new Set(this.heroes.map(hero => hero.tier))];
    },
    filteredHeroes() {
      const query = this.searchQuery.toLowerCase();
      const filtered = this.heroes.filter(hero => {
        const matchesName = hero.name.toLowerCase().includes(query);
        const matchesTier = this.selectedTier ? hero.tier === this.selectedTier : true;
        return matchesName && matchesTier;
      });

      return filtered.sort((a, b) => {
        const tierOrder = {
          'Meta': 0,
          'SS': 1,
          'S+': 2,
          'S': 3,
          'A+': 4,
          'A': 5,
          'B': 6,
          'C': 7,
          'Food': 8
        };
        
        return (tierOrder[a.tier] ?? 999) - (tierOrder[b.tier] ?? 999);
      });
    }
  },
  watch: {
    searchQuery() {},
    selectedTier() {}
  },
  methods: {
    getImagePath(image) {
      return `/HOC2/Images/${image}`
    },
    toggleDetails(heroId) {
      this.visibleHeroId = this.visibleHeroId === heroId ? null : heroId;
    },
    formatDescription(description) {
      return description.replace(/<br>/g, '\n');
    },
    getTierClass(tier) {
      return {
        'tier-meta': tier === 'Meta',
        'tier-ss': tier === 'SS',
        'tier-s-plus': tier === 'S+',
        'tier-s': tier === 'S',
        'tier-a-plus': tier === 'A+',
        'tier-a': tier === 'A',
        'tier-b': tier === 'B',
        'tier-c': tier === 'C',
        'tier-food': tier === 'Food'
      }
    },
    getTierColor(tier) {
      const tierColors = {
        'Meta': '#FF9234',
        'SS': '#FF4081',
        'S+': '#9C27B0',
        'S': '#7C4DFF',
        'A+': '#2196F3',
        'A': '#00BCD4',
        'B': '#4CAF50',
        'C': '#FF9800',
        'Food': '#795548'
      };
      return tierColors[tier] || '#FFFFFF';
    }
  }
}
</script>

<style scoped>
:root[data-theme="dark"] {
    --details-bg: #2a2a2a;
    --stats-bg: #333;
    --cell-bg: #424242;
    --text-color: #ffffff;
}

:root[data-theme="light"] {
    --details-bg: #ffffff;
    --stats-bg: #f5f5f5;
    --cell-bg: #ffffff;
    --text-color: #333333;
}

.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 10px;
  position: relative;
  width: 100%;
}

.search-container input,
.search-container select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 200px;
  max-width: 100%;
}

.search-container select {
  width: 150px;
}

.heroes-container h2{
  text-align: center;
}

.heroes-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
}

ul {
    list-style-type: none;
    padding: 0;
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
    padding: 0 10px;
    box-sizing: border-box;
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
    min-width: 0;
}

.hero-info h3, 
.hero-info p {
    overflow-wrap: break-word;
    word-wrap: break-word;
    margin: 0;
}

.hero-details {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: var(--details-bg);
    border-radius: 8px;
    margin-top: 8px;
}

.description {
    line-height: 1.4;
}

.description h4 {
    color: inherit;
    margin-bottom: 8px;
    text-align: center;
}

.stats-table {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    background: var(--stats-bg);
    border-radius: 8px;
    padding: 8px;
}

.stat-cell {
    padding: 8px;
    text-align: center;
    background: var(--cell-bg);
    border-radius: 6px;
    color: var(--text-color);
}

.rec-section h4 {
    color: inherit;
    margin-bottom: 8px;
    text-align: center;
}

.rec-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
}

.rec-cell {
    padding: 8px;
    background: var(--cell-bg);
    border-radius: 6px;
    text-align: center;
    color: var(--text-color);
    border: 1px solid #eaeaea;
}

.heroes-list {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
}

.tier {
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-block;
  width: fit-content;
}

.tier-meta {
  color: #FF9234;
}

.tier-ss {
  color: #FF4081;
}

.tier-s-plus {
  color: #9C27B0;
}

.tier-s {
  color: #7C4DFF;
}

.tier-a-plus {
  color: #2196F3;
}

.tier-a {
  color: #00BCD4;
}

.tier-b {
  color: #4CAF50;
}

.tier-c {
  color: #FF9800;
}

.tier-food {
  color: #795548;
}

.stats-section {
    margin: 20px 0;
}

.stat-line {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;
}

.stat-label {
    color: #888;
    width: 40px;
}

.stat-value {
    font-weight: bold;
}

.stat-value.atk {
    color: #FFD700;
}

.stat-value.def {
    color: #9845FF;
}
.stat-value.hp {
    color: #1E90FF;
}

.stat-value.spd {
    color: #FF4500;
}

.recommendations {
    margin-top: 20px;
}

.rec-line {
    margin-bottom: 10px;
}

.rec-label {
    color: #888;
    margin-right: 8px;
}

.rec-value {
    color: #FFD700;
}

@media (max-width: 768px) {
    .heroes-container {
        padding: 10px;
        width: 100%;
        max-width: 100%;
    }

    .hero-image {
        width: 80px;
        margin-right: 10px;
    }

    .search-container {
        flex-direction: column;
        align-items: center;
        padding: 0 10px;
    }

    .search-container input,
    .search-container select {
        width: 90%;
        max-width: 300px;
    }

    .hero-details {
        padding: 8px;
    }

    .hero-header {
        padding: 0 5px;
    }

    .stats-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
