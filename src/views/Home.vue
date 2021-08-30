<template>
  <NoteCreate />
  <NoteList />
</template>

<script>
import NoteCreate from '@/components/NoteCreate.vue'
import NoteList from '@/components/NoteList.vue'

export default {
  name: 'Home',
  components: { NoteCreate, NoteList }
}
</script>
