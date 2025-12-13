<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { articles } from "@/data/articles";
import ModalAd from "@/components/ModalAd.vue";

const route = useRoute();
const router = useRouter();
const showAdModal = ref(false);

const article = computed(() => {
  const id = Number(route.params.id);
  return articles.find((a) => a.id === id);
});

function goBack() {
  router.push("/");
}

const accentColor = "#3b82f6"; // для v-bind у CSS
</script>

<template>
  <section v-if="article">
    <button class="back-btn" type="button" @click="goBack">
      ← До списку новин
    </button>

    <p class="article-date">
      {{ new Date(article.date).toLocaleDateString() }}
    </p>
    <h1 class="article-title">{{ article.title }}</h1>

    <div class="article-image-wrapper">
      <img :src="article.image" alt="" class="article-image" />
    </div>

    <div class="article-content">
      <p
        v-for="(paragraph, idx) in article.content.trim().split('\n')"
        :key="idx"
      >
        {{ paragraph.trim() }}
      </p>
    </div>

    <div class="ad-banner" @click="showAdModal = true">
      <span class="ad-badge">Реклама</span>
      <div class="ad-text">
        Натисніть, щоб переглянути спеціальну пропозицію для читачів цієї
        статті.
      </div>
    </div>

    <ModalAd v-model="showAdModal" title="Спеціальна пропозиція">
      <p>
        Спеціальна знижка для читачів цієї статті: розміщення вашого банеру у
        нашому новинному блоці зі знижкою 30%.
      </p>
    </ModalAd>
  </section>

  <section v-else>
    <h1>Статтю не знайдено</h1>
    <button type="button" class="back-btn" @click="goBack">
      ← До списку новин
    </button>
  </section>
</template>

<style scoped>
.back-btn {
  border: none;
  background: transparent;
  padding: 0;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 13px;
  color: v-bind(accentColor);
}

.article-date {
  font-size: 13px;
  opacity: 0.8;
  margin-bottom: 4px;
}

.article-title {
  margin: 0 0 10px;
}

.article-image-wrapper {
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 14px;
}

.article-image {
  width: 100%;
  height: auto;
  display: block;
}

.article-content {
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.ad-banner {
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px 12px;
  border: 1px dashed var(--accent);
  background: var(--accent-soft);
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
}

.ad-badge {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.8;
}

.ad-text {
  font-size: 13px;
}
</style>
