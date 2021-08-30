<template>
  <div class="card card-body mt-4">
    <h3>Edit Notes</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Title</label>
        <input 
          v-model="form.title" 
          class="form-control" 
          required />
      </div>

      <div class="form-group mt-3">
        <label>Note</label>
        <textarea
          v-model="form.note"
          class="form-control"
          type="textarea"
          required
        />
      </div>

      <button 
          type="submit" 
          class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getNote, updateNote } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const noteId = computed(() => route.params.id)

    const form = reactive({ title: '', note: '' })
    onMounted(async () => {
      const note = await getNote(noteId.value)
      console.log(note, noteId.value)
      form.title = note.title
      form.note = note.note
    })

    const update = async () => {
      await updateNote(noteId.value, { ...form })
      router.push('/')
      form.title = ''
      form.note = ''
    }

    return { form, update }
  }
}
</script>
