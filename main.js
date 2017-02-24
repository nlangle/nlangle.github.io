//Vue Basic Example
var app = new Vue({
  el: '#app',
  data: {
    message: 'Working with Vue!'
  }
});

//Vue ToDo Example
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var componentApp = new Vue({
  el: '#component-app',
  data: {
    nicksList: [
      { text: 'Learn Vue' },
      { text: 'Style Site' },
      { text: 'Expand Site with Vue' }
    ]
  }
});
