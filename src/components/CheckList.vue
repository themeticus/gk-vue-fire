<template>
 	<div>

 		<!-- // proof of component at https://codepen.io/jwm/pen/qBjagjV // -->
		
		<input placeholder="type/enter" ref="newTask" @keyup.enter="addTask" />
		<ul>
			<li v-for="(task,index) in tasks">
				<input type="checkbox" :id="index">
				<label :for="index">{{ task.description }}</label>
				<button @click="deleteTask(index)">x</button>
		   </li>
	   </ul>
  </div>
</template>

<script>

export default {
	name: 'Checklist',
	data() {
		return {
			tasks: [ ]
		}		
	},
	methods:{
		addTask(){
			this.tasks.push({
				description: this.$refs.newTask.value , 
				completed: false
			});			
			this.$refs.newTask.value = '';		
		},

		deleteTask(index){
			this.tasks.splice(index,1)
		}
	}
}
	
</script>