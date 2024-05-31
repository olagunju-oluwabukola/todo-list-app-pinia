<!-- eslint-disable vue/no-parsing-error -->

<template>
 <h1 class="title">{{ TaskStore.name }}</h1>
 <div class="task-input-form">
  <task-form/>
 </div>
  <nav class="filter">
    <button @click="filter ='all'">All Task</button>
    <button @click="filter ='completed'">Completed</button>
  </nav>

  <div class="loading" v-if="isLoading">Loading</div>


   <div v-if="filter === 'all'">
    
    <h2>All   Lessons</h2>
    <i>you have {{ totalTask }} tasks to do.</i>
  <div class="store" v-for="item in task" :key="item.id">
    <task-detail :item = 'item' /> 
    
   </div>

 
  </div>
 
<div v-if="filter === 'completed'">
  <h2>Completed Lessons</h2>
  <h2>You have completed {{ done}} of {{ totalTask }} tasks.</h2>
   <div class="store" v-for="item in completed" :key="item.id">
    <task-detail :item = 'item'/>
  </div>
</div>
  
<button @click="TaskStore.$reset">Reset</button>
  
</template>
<style>
body{
  background: #fff;
  color: black;
}

.icon{
padding-top: 8.5px;
margin-right: 10px;
display: block;
gap: 10px;
}
.icon .pi .active{
  color: red;
}
 .icon h3{
  margin-left: 10px;
}

.title{
  font-size: 2em;
  font-weight: bold;
  text-align: center;
}

.filter button{
  margin: 1em;
  background-color: #2a0331;
  color: #e9b1f0;
  width: 7em;
  height: 3em;
  border-radius: 10px;
}

.task-input-form, nav{
  display: flex;
  justify-content: center;
}

.task-input-form input{
  outline: 1px solid #2a0331;
  width: 50vw;
  height: 30px;
  border-radius: 10px;
  font-size: 16px

  
}

</style>

<script lang="js">
import { storeToRefs } from 'pinia';
import TaskDetail from './components/TaskDetail.vue'
import TaskForm from './components/TaskForm.vue'
import {useTaskStore} from './stores/TaskStore'
import { ref } from 'vue';

export default{
components: { TaskDetail, TaskForm}, 
  setup(){

    const TaskStore = useTaskStore()

    const {task, isLoading, completed, totalTask, done} = storeToRefs(TaskStore)

    TaskStore.getTask()

    const filter = ref('all')

    return{ TaskStore, filter,task, isLoading, completed, totalTask, done }
      

  }
}

</script>
