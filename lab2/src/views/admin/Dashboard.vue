<script setup>
import { ref, computed } from "vue";
import OverviewTab from "@/views/admin/dashboard/OverviewTab.vue";
import ActivityTab from "@/views/admin/dashboard/ActivityTab.vue";

const currentTab = ref("overview");

const currentTabComponent = computed(() =>
  currentTab.value === "overview" ? OverviewTab : ActivityTab,
);
</script>

<template>
  <div>
    <h1>Dashboard</h1>

    <div style="margin-bottom: 12px">
      <button @click="currentTab = 'overview'">Overview</button>
      <button @click="currentTab = 'activity'" style="margin-left: 8px">
        Activity
      </button>
    </div>

    <!-- KeepAlive: include / exclude / max -->
    <KeepAlive :include="['OverviewTab']" :exclude="['ActivityTab']" :max="1">
      <component :is="currentTabComponent" />
    </KeepAlive>
  </div>
</template>
