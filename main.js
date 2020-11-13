// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}


new Vue ({
    el: '#app',
    data: {
        addtext:'',
        fade: false,
        todos: [
            {done:false, text:'Vue.jsを学ぶ'},
        ]
    },
    computed: {
        count: function() {
            return this.todos.filter(function(val) {
                return val.done == true;
            }).length;
        }
    },
    methods: {
        //Enterを押したときtodoが追加される
        addToDo: function() {
            if(this.addtext) {
                this.todos.push({done:false,text:this.addtext});
                this.addText = '';
            }
        },
        //処理済みtodoを削除する
        cleanToDo: function() {
            this.todos = this.todos.filter(function(val) {
                return val.done == false;
            })
        }
    }
})