
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('TaskStore',{
    state: () =>({
        task: [
            {id: 1, title: 'Accessing the store', isFav:true},
            {id: 2, title: 'subscribing to the store', isFav: true},
            {id: 3, title: 'Store Mutation', isFav: false},
            {id: 4, title: 'Resetting the store', isFav: false},
            {id: 5, title: 'Getters', isFav: true},
            {id: 6, title: 'Action', isFav: false},
            

           
        ],
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
    addTask(newTask){
        this.task.push(newTask)
    },
    deleteTask(id){
        this.task = this.task.filter(t =>{
            return t.id !== id
        })
    },
    toggleFav(id){
         const tasks = this.task.find(t => t.id === id)
         tasks.isFav = ! tasks.isFav
    }
}
})