import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: 'AIzaSyA9lzwPhAt0Q0bj6xHPQccNM-uWpFTfakc',
  authDomain: 'gk-vue-fire.firebaseapp.com',
  projectId: 'gk-vue-fire',
  storageBucket: 'gk-vue-fire.appspot.com',
  messagingSenderId: '123846062709',
  appId: '1:123846062709:web:f940cba2c6d10249f73e3c'
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()

const notesCollection = db.collection('notes')

export const createNote = note => {
  return notesCollection.add(note)
}

export const getNote = async id => {
  const note = await notesCollection.doc(id).get()
  return note.exists ? note.data() : null
}

export const updateNote = (id, note) => {
  return notesCollection.doc(id).update(note)
}

export const deleteNote = id => {
  return notesCollection.doc(id).delete()
}

export const useLoadNotes = () => {
  const notes = ref([])
  const close = notesCollection.onSnapshot(snapshot => {
    notes.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return notes
}
