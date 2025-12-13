<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { articles } from "@/data/articles";
import AdSlot from "@/components/AdSlot.vue";
import ModalAd from "@/components/ModalAd.vue";
import styles from "@/components/ArticleCard.module.css";

const router = useRouter();
const showHomeAdModal = ref(false);

const sortedArticles = computed(() =>
  [...articles].sort((a, b) => (a.date < b.date ? 1 : -1)),
);

function openArticle(id) {
  router.push(`/article/${id}`);
}
</script>

<template>
  <section>
    <h1>Останні новини</h1>
    <p style="margin-bottom: 16px; font-size: 14px">
      Міні-сайт новин з використанням стилізації компонентів у Vue 3.
    </p>

    <AdSlot title="Реклама на головній" @click="showHomeAdModal = true">
      Натисніть, щоб дізнатися про розміщення реклами на головній сторінці.
    </AdSlot>

    <div
      style="display: flex; flex-direction: column; gap: 14px; margin-top: 10px"
    >
      <article
        v-for="article in sortedArticles"
        :key="article.id"
        :class="styles.card"
      >
        <div :class="styles.imageWrapper">
          <img :src="article.image" alt="" :class="styles.image" />
        </div>

        <div>
          <div :class="styles.meta">
            {{ new Date(article.date).toLocaleDateString() }}
          </div>
          <h2 :class="styles.title">{{ article.title }}</h2>
          <p :class="styles.summary">
            {{ article.summary }}
          </p>
          <div :class="styles.actions">
            <button
              type="button"
              :class="styles.readMoreBtn"
              @click="openArticle(article.id)"
            >
              Читати далі
            </button>
          </div>
        </div>
      </article>
    </div>

    <ModalAd v-model="showHomeAdModal" title="Реклама на головній">
      <p>
        Рекламний блок на головній сторінці сайту новин. Тут можна розмістити
        банер партнерів або власні промо-акції.
      </p>
    </ModalAd>
  </section>
</template>

<style scoped>
h1 {
  margin-bottom: 6px;
}
</style>
