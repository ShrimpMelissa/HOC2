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
          <li v-for="(hero, index) in filteredHeroes" :key="hero.id" class="hero-item">
            <div class="hero-header" @click="expandedItems[index] = !expandedItems[index]">
              <img :src="getImagePath(hero.image)" alt="Hero Image" class="hero-image" />
              <div class="hero-info">
                <h3>{{ hero.name }}</h3>
                <p class="tier" :class="getTierClass(hero.tier)">Tier: {{ hero.tier }}</p>
              </div>
            </div>
            <div class="hero-details" v-show="expandedItems[index]">
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

                <div class="power-chart" v-if="hero.powerGains">
                  <h4 :style="{ color: getTierColor(hero.tier), textAlign: 'center' }">POWER GAIN (all 0 means not implemented):</h4>
                  <div class="chart-wrapper">
                    <div class="y-axis">
                      <div class="y-label">5</div>
                      <div class="y-label">4</div>
                      <div class="y-label">3</div>
                      <div class="y-label">2</div>
                      <div class="y-label">1</div>
                      <div class="y-label">0</div>
                    </div>
                    <div class="chart-container">
                      <div class="grid-lines">
                        <div class="grid-line"></div>
                        <div class="grid-line"></div>
                        <div class="grid-line"></div>
                        <div class="grid-line"></div>
                        <div class="grid-line"></div>
                        <div class="grid-line"></div>
                      </div>
                      <div class="bars">
                        <div class="bar-group" v-for="(value, key) in hero.powerGains" :key="key">
                          <div class="bar" :style="{ height: `${value * 20}%` }"></div>
                        </div>
                      </div>
                    </div>
                    <div class="x-axis">
                      <div class="x-label" v-for="(value, key) in hero.powerGains" :key="key">
                        {{formatPowerLabel(key)}}
                      </div>
                    </div>
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
      expandedItems: [],
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
  methods: {
    getImagePath(image) {
      return `/HOC2/Images/${image}`
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
    },
    formatPowerLabel(key) {
      const labels = {
        'star5': '5★',
        'star10': 'potential',
        'star11': '11★',
        'star12': '12★',
        'div1': 'Div 1',
        'div5': 'Div 5',
        'div7': 'Div 7',
        'div9': 'Div 9'
      };
      return labels[key] || key;
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
    border-radius: 8px;
    margin-top: 8px;
}

.hero-details {
    background-color: #FFFFFF;
}

[data-theme="dark"] .hero-details {
    background-color: #2B2D31;
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

.power-chart {
  margin-top: 20px;
  padding: 15px;
}

.chart-wrapper {
  position: relative;
  padding-left: 40px;
  padding-bottom: 40px;
}

.y-axis {
  position: absolute;
  left: 15px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.y-label {
  font-size: 12px;
  color: #333;
}

.chart-container {
  height: 250px;
  border: 1px solid #333;
  background: white;
  position: relative;
  margin-left: 10px;
}

.grid-lines {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.grid-line {
  width: 100%;
  height: 1px;
  background: #ccc;
}

.bars {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px;
}

.bar-group {
  flex: 0 1 auto;
  display: flex;
  align-items: flex-end;
  height: 100%;
}

.bar {
  width: 20px;
  background: #333;
}

.x-axis {
  position: absolute;
  bottom: 0;
  left: 40px;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 0;
}

.x-label {
  transform: rotate(-45deg);
  transform-origin: center top;
  font-size: 12px;
  position: relative;
  top: 0px;
  width: 40px;
  text-align: center;
}

.chart-note {
  text-align: center;
  font-size: 12px;
  color: #888;
  margin-top: 10px;
}

.power-chart h4 {
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
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
