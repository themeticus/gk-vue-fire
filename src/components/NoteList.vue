<template>
  <div class="row">
    <div 
      class="col-sm-3"
      v-for="{ id, title, note } in notes"  
      :key="id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>

          <!--// TO DO : Iterate through all <inputs> //-->

          <input type="checkbox" :id="index" /> {{ note[0].description }}
          
          <router-link :to="`/edit/${id}`">
            <button class="btn btn-primary btn-sm me-2">
              Edit
            </button>
          </router-link>
          <button 
            id="deleteNote"
            class="btn btn-danger btn-sm" 
            @click="deleteNote(id)">
            X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { useLoadNotes, deleteNote } from '@/firebase'

export default {

  setup() {
    const notes = useLoadNotes()
    return { notes, deleteNote }
  }

}

</script>

<style>

  #deleteNote {
    opacity: 0.4;
  }
  #deleteNote:hover {
    opacity: 1.0
  }  

</style>
