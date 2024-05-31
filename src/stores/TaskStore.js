
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('TaskStore',{
    state: () =>({
        task: [],
        isLoading : false,
        name: 'State Management: Pinia'
    }),
    getters:{
        completed(){
           return this.task.filter(t=> t.isFav)
        },
        done(){
            return this.task.reduce((previous, complete)=>{
                return complete.isFav ? previous + 1 : previous
            }, 0)
           
        },

    totalTask: (state) =>{
        return state.task.length
    }
},
actions :{
    async getTask(){
        this.isLoading = true
        const response = await fetch('http://localhost:3000/task')
        const data = await response.json()
        this.task = data
        this.isLoading = false 
    },

     async addTask(newTask){
        this.task.push(newTask)

        const response = await fetch ('http://localhost:3000/task',{
            method: "post",
            body: JSON.stringify(newTask),
            headers: {'Content-Type' : 'application/json'}

        })
        if (response.error){
            console.log(response.error)
        }


    },
   async  deleteTask(id){
        this.task = this.task.filter(t =>{
            return t.id !== id
             })
             const response = await fetch ('http://localhost:3000/task/' + id,{
                method: "DELETE",
    
            })
            if (response.error){
                console.log(response.error)
            }
    },
    async toggleFav(id){
         const tasks = this.task.find(t => t.id === id)
         tasks.isFav = ! tasks.isFav

         const response = await fetch ('http://localhost:3000/task',{
            method: "PATCH",
            body: JSON.stringify({isFav: tasks.isFav}),
            headers: {'Content-Type' : 'application/json'}

        })
        if (response.error){
            console.log(response.error)
        }
    }
}
})