<script setup>
import Toast from "primevue/toast";

import HeaderBar from "./components/sections/HeaderBar.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import ProblemSolution from "./components/sections/ProblemSolution.vue";
import BenefitsSection from "./components/sections/BenefitsSection.vue";
import HowItWorks from "./components/sections/HowItWorks.vue";
import PricingPlans from "./components/sections/PricingPlans.vue";
import ReviewsSection from "./components/sections/ReviewsSection.vue";
import FaqSection from "./components/sections/FaqSection.vue";
import ContactSection from "./components/sections/ContactSection.vue";
import FooterBar from "./components/sections/FooterBar.vue";
</script>

<template>
  <Toast />
  <HeaderBar />

  <HeroSection id="hero" />
  <ProblemSolution id="problem" />
  <BenefitsSection id="benefits" />
  <HowItWorks id="how" />
  <PricingPlans id="pricing" />
  <ReviewsSection id="reviews" />
  <FaqSection id="faq" />
  <ContactSection id="contact" />

  <FooterBar />
</template>
