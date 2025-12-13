<script setup>
import Card from "primevue/card";
</script>

<template>
  <section class="section" :id="$attrs.id">
    <h2 class="section-title">Проблема → Рішення</h2>
    <p class="section-subtitle">
      Коли задачі живуть у чатах/таблицях — команда втрачає час.
    </p>

    <div class="grid-2">
      <Card>
        <template #title>Проблема</template>
        <template #content>
          <ul style="margin: 0; padding-left: 18px">
            <li>Немає єдиного місця для задач</li>
            <li>Дедлайни губляться</li>
            <li>Незрозуміло, хто що робить</li>
            <li>Статус доводиться питати вручну</li>
          </ul>
        </template>
      </Card>

      <Card>
        <template #title>Рішення</template>
        <template #content>
          <ul style="margin: 0; padding-left: 18px">
            <li>Канбан + таймлайн</li>
            <li>Нагадування і SLA</li>
            <li>Ролі та доступи</li>
            <li>Аналітика прогресу</li>
          </ul>
        </template>
      </Card>
    </div>
  </section>
</template>
