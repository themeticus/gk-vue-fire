1<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
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
        class="btn btn-success mt-3">
        New Note
      </button>
    </form>
  </div>
</template>

<script>
import { createNote } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ title: '', note: '' })

    const onSubmit = async () => {
      await createNote({ ...form })
      form.title = ''
      form.note = ''
    }

    return { form, onSubmit }
  }
}
</script>
