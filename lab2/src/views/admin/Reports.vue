<script setup>
import ReportsTable from "@/components/ReportsTable.vue";

const reports = [
  { id: 1, type: "Login", date: "2025-01-01" },
  { id: 2, type: "View users", date: "2025-01-02" },
  { id: 3, type: "Export report", date: "2025-01-03" },
];
</script>

<template>
  <div>
    <h1>Reports</h1>

    <ReportsTable :items="reports">
      <template #row="{ item }">
        <td>#{{ item.id }}</td>
        <td>
          <strong>{{ item.type }}</strong>
        </td>
        <td>{{ item.date }}</td>
      </template>
    </ReportsTable>

    <p style="font-size: 12px; margin-top: 8px">
      (scoped-slot: #row="{ item }")
    </p>
  </div>
</template>
