<template>
<div class="task-list">
   <div>
    <h2>{{item.id}}. {{ item.title }}</h2>
   </div>
<div class="icon">
      <h3 
      class="pi pi-trash" 
      style ="font-size: 2rem"
      @click="taskStore.deleteTask(item.id)"></h3>
     <h3 
     class="pi pi-heart-fill" 
     style="font-size: 2rem"
    @click="taskStore.toggleFav(item.id)"></h3>
    </div>
</div>

</template>

<script>
import { useTaskStore } from '../stores/TaskStore'
export default {
props:['item'],

setup(){
  const taskStore = useTaskStore()

  return{taskStore}

}
}
</script>

<style scoped>
.task-list{
    display: flex; 
    justify-content: space-between;
    background-color: #2a0331;
  margin: 10px 0 10px 0;
  padding: 10px;
  height: 8vh;
  width: 80vw;
  color: #e9b1f0;
  text-align: center;
  font-size: 14px;
}

</style>