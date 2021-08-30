<template>
  <div class="row">
    <div class="col-md-4" v-for="{ id, title, note } in users" :key="id">
      <!-- this can obviously be styled better -->
      {{ title }}
      {{ note }}
      <router-link :to="`/edit/${id}`">
        <button class="btn btn-primary btn-sm me-2">
          Edit
        </button>
      </router-link>
      <button class="btn btn-danger btn-sm" @click="deleteNote(id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { useLoadNotes, deleteNote } from '@/firebase'

export default {
  setup() {
    const users = useLoadNotes()
    return { users, deleteNote }
  }
}
</script>
