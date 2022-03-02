var todoList= {
    template: `
        <ul>
            <todo-item v-for="(item,i) in tasks" :key="i" :item="item" :i="i">{{item}}</todo-item>
        </ul>
    `,
    data(){
        return{
        }
    },
    props:["tasks"],
    components:{
        todoItem
    }
}