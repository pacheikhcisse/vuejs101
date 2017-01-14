/**
 * Created by a615213 on 12/01/2017.
 */
new Vue({
    el: '#app',
    data: {
        todos: [
            {title: 'Aller au marché', done: true},
            {title: 'Faire mes exercices', done: false},
            {title: 'Laver ma voiture', done: true},
            {title: 'Ne pas oublier de dormir', done: false}
        ],
        allChecked: false,
        todo: ''
    },
    methods: {
        checkAll: function () {
            var allChecked = this.allChecked;
            this.todos.forEach(function (todo) {
                todo.done = allChecked;
            });
        },
        updateCheckAll: function () {
            if(this.allChecked){
                this.allChecked = !this.allChecked;
            }
        },
        addTodo: function () {
            if (event.key === "Enter") {
                this.todos.push({
                    title: this.todo,
                    done: false
                });
                this.todo = '';
            }
        },
        deleteTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    }
})