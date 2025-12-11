<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'

const tasks = ref([])

const newTask = reactive({
  title: '',
  description: '',
  priority: 'medium',
})

const filters = reactive({
  text: '',
  status: 'all',
  priority: 'all',
  dateFrom: '',
  dateTo: '',
})

const currentPage = ref(1)
const pageSize = 5

const editingTaskId = ref(null)
const editingTask = reactive({
  title: '',
  description: '',
  priority: 'medium',
})

const STORAGE_KEY = 'vue3_lab1_tasks'

onMounted(() => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) {
    try {
      const parsed = JSON.parse(raw)
      tasks.value = Array.isArray(parsed) ? parsed : []
    } catch (e) {
      console.error('Помилка парсингу LocalStorage', e)
    }
  }
})

watch(
  tasks,
  (newValue) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue))
  },
  { deep: true },
)

function addTask() {
  if (!newTask.title.trim()) {
    alert('Назва завдання не може бути порожньою')
    return
  }

  const now = new Date()

  tasks.value.push({
    id: Date.now(),
    title: newTask.title.trim(),
    description: newTask.description.trim(),
    status: 'active',
    createdAt: now.toISOString(),
    priority: newTask.priority,
  })

  newTask.title = ''
  newTask.description = ''
  newTask.priority = 'medium'
}

function toggleStatus(task) {
  task.status = task.status === 'active' ? 'done' : 'active'
}

function deleteTask(id) {
  if (!confirm('Точно видалити завдання?')) return
  tasks.value = tasks.value.filter((t) => t.id !== id)
}

function startEdit(task) {
  editingTaskId.value = task.id
  editingTask.title = task.title
  editingTask.description = task.description
  editingTask.priority = task.priority
}

function cancelEdit() {
  editingTaskId.value = null
}

function saveEdit(task) {
  if (!editingTask.title.trim()) {
    alert('Назва не може бути порожньою')
    return
  }
  task.title = editingTask.title.trim()
  task.description = editingTask.description.trim()
  task.priority = editingTask.priority
  editingTaskId.value = null
}

function clearFilters() {
  filters.text = ''
  filters.status = 'all'
  filters.priority = 'all'
  filters.dateFrom = ''
  filters.dateTo = ''
  currentPage.value = 1
}

function changePage(page) {
  currentPage.value = page
}

const filteredTasks = computed(() => {
  return tasks.value.filter((task) => {
    const text = filters.text.toLowerCase()
    if (text) {
      const inTitle = task.title.toLowerCase().includes(text)
      const inDesc = task.description.toLowerCase().includes(text)
      if (!inTitle && !inDesc) return false
    }

    if (filters.status !== 'all' && task.status !== filters.status) return false

    if (filters.priority !== 'all' && task.priority !== filters.priority) return false

    if (filters.dateFrom) {
      const taskDate = new Date(task.createdAt).setHours(0, 0, 0, 0)
      const from = new Date(filters.dateFrom).setHours(0, 0, 0, 0)
      if (taskDate < from) return false
    }

    if (filters.dateTo) {
      const taskDate = new Date(task.createdAt).setHours(0, 0, 0, 0)
      const to = new Date(filters.dateTo).setHours(23, 59, 59, 999)
      if (taskDate > to) return false
    }

    return true
  })
})

const totalCount = computed(() => tasks.value.length)
const activeCount = computed(() => tasks.value.filter((t) => t.status === 'active').length)
const completedCount = computed(() => tasks.value.filter((t) => t.status === 'done').length)

const totalPages = computed(() =>
  filteredTasks.value.length === 0 ? 1 : Math.ceil(filteredTasks.value.length / pageSize),
)

const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredTasks.value.slice(start, start + pageSize)
})

watch(
  () => ({ ...filters }),
  () => {
    currentPage.value = 1
  },
  { deep: true },
)

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleString()
}
</script>

<template>
  <div class="app">
    <h1>ЛР1 – To-Do на Vue 3 (Composition API)</h1>

    <section class="stats">
      <div>
        Всього: <strong>{{ totalCount }}</strong>
      </div>
      <div>
        Активних: <strong>{{ activeCount }}</strong>
      </div>
      <div>
        Виконаних: <strong>{{ completedCount }}</strong>
      </div>
    </section>

    <section class="card">
      <h2>Нове завдання</h2>
      <form @submit.prevent="addTask" class="form-grid">
        <label>
          Назва
          <input v-model="newTask.title" type="text" placeholder="Наприклад: Зробити ЛР1" />
        </label>

        <label>
          Опис
          <textarea v-model="newTask.description" rows="2" placeholder="Деталі завдання"></textarea>
        </label>

        <label>
          Пріоритет
          <select v-model="newTask.priority">
            <option value="low">Низький</option>
            <option value="medium">Середній</option>
            <option value="high">Високий</option>
          </select>
        </label>

        <button type="submit" class="btn primary">Додати</button>
      </form>
    </section>

    <section class="card">
      <h2>Фільтри</h2>
      <div class="filters-grid">
        <label>
          Пошук (назва/опис)
          <input v-model="filters.text" type="text" placeholder="текст пошуку" />
        </label>

        <label>
          Статус
          <select v-model="filters.status">
            <option value="all">Всі</option>
            <option value="active">Активні</option>
            <option value="done">Виконані</option>
          </select>
        </label>

        <label>
          Пріоритет
          <select v-model="filters.priority">
            <option value="all">Всі</option>
            <option value="low">Низький</option>
            <option value="medium">Середній</option>
            <option value="high">Високий</option>
          </select>
        </label>

        <label>
          Дата від
          <input v-model="filters.dateFrom" type="date" />
        </label>

        <label>
          Дата до
          <input v-model="filters.dateTo" type="date" />
        </label>

        <button type="button" class="btn" @click="clearFilters">Очистити фільтри</button>
      </div>
    </section>

    <section class="card">
      <h2>Список завдань</h2>

      <table class="tasks-table" v-if="paginatedTasks.length">
        <thead>
          <tr>
            <th>Статус</th>
            <th>Назва</th>
            <th>Опис</th>
            <th>Пріоритет</th>
            <th>Створено</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in paginatedTasks" :key="task.id">
            <td>
              <input
                type="checkbox"
                :checked="task.status === 'done'"
                @change="toggleStatus(task)"
              />
            </td>

            <td>
              <div v-if="editingTaskId !== task.id">
                <span :class="{ done: task.status === 'done' }">{{ task.title }}</span>
              </div>
              <div v-else>
                <input v-model="editingTask.title" type="text" />
              </div>
            </td>

            <td>
              <div v-if="editingTaskId !== task.id">
                <span :class="{ done: task.status === 'done' }">{{ task.description }}</span>
              </div>
              <div v-else>
                <textarea v-model="editingTask.description" rows="2"></textarea>
              </div>
            </td>

            <td>
              <div v-if="editingTaskId !== task.id">
                <span class="badge" :data-priority="task.priority">
                  {{ task.priority }}
                </span>
              </div>
              <div v-else>
                <select v-model="editingTask.priority">
                  <option value="low">Низький</option>
                  <option value="medium">Середній</option>
                  <option value="high">Високий</option>
                </select>
              </div>
            </td>

            <td>{{ formatDate(task.createdAt) }}</td>

            <td class="actions">
              <template v-if="editingTaskId === task.id">
                <button class="btn small primary" @click="saveEdit(task)">Зберегти</button>
                <button class="btn small" @click="cancelEdit">Скасувати</button>
              </template>
              <template v-else>
                <button class="btn small" @click="startEdit(task)">Редагувати</button>
                <button class="btn small danger" @click="deleteTask(task.id)">Видалити</button>
              </template>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-else>Немає завдань для відображення</p>

      <div class="pagination" v-if="totalPages > 1">
        <button
          class="btn small"
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        >
          ‹
        </button>

        <button
          v-for="page in totalPages"
          :key="page"
          class="btn small"
          :class="{ primary: page === currentPage }"
          @click="changePage(page)"
        >
          {{ page }}
        </button>

        <button
          class="btn small"
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
        >
          ›
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.app {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
}

.stats {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.stats div {
  background: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
}

.form-grid {
  display: grid;
  gap: 1rem;
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  align-items: end;
}

label {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  gap: 0.4rem;
}

input,
textarea,
select {
  border-radius: 8px;
  border: 1px solid #d0d7de;
  padding: 0.5rem 0.65rem;
  font-size: 0.95rem;
  outline: none;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #42b883;
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

.btn {
  border: none;
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  font-size: 0.9rem;
  cursor: pointer;
  background: #e4e7eb;
}

.btn.primary {
  background: #42b883;
  color: #fff;
}

.btn.danger {
  background: #ff5c5c;
  color: #fff;
}

.btn.small {
  padding: 0.25rem 0.6rem;
  font-size: 0.8rem;
}

.btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.tasks-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.tasks-table thead {
  background: #f6f8fa;
}

.tasks-table th,
.tasks-table td {
  padding: 0.5rem 0.6rem;
  border-bottom: 1px solid #e1e4e8;
  vertical-align: top;
}

.tasks-table tbody tr:hover {
  background: #f9fafb;
}

.done {
  text-decoration: line-through;
  color: #999;
}

.badge {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.badge[data-priority='low'] {
  background: #e2f5ff;
}

.badge[data-priority='medium'] {
  background: #fff0c2;
}

.badge[data-priority='high'] {
  background: #ffe2e2;
}

.actions {
  display: flex;
  gap: 0.3rem;
}

.pagination {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
