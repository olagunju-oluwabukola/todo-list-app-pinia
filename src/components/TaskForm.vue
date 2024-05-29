<template>
<form @submit.prevent = "handleSubmit">
    <div>
    <input type="text"
    placeholder="I want to..."
    v-model="newTaskInput">
    </div>
    <button>Add</button>
</form>

</template>

<script>

import {useTaskStore} from '../stores/TaskStore'
import { ref } from 'vue'


export default {
setup(){
const taskStore = useTaskStore()

  const newTaskInput = ref('')
    
const handleSubmit = () =>{
    if(newTaskInput.value.length>0){
        taskStore.addTask({
            title: newTaskInput.value,
            isFav:false,
            id: Math.floor(Math.random()*10)

        })
        
         newTaskInput.value = ''
    }
}
return{ handleSubmit, newTaskInput}

}
}
</script>

<style>
form{
  display: flex;
}
button{
    
  background-color: #2a0331;
  color: #e9b1f0;
  width: 7em;
  height: 2em;
  border-radius: 10px;
margin-left: 10px;
}

</style>