import { createApp, ref } from 'vue';

const TodoList = {
  name: 'TodoList',
  setup() {
    const todos = ref([]);
    const newTodo = ref('');

    const addTodo = () => {
      if (newTodo.value !== '') {
        todos.value.push(newTodo.value);
        newTodo.value = '';
      }
    };

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };

    return {
      todos,
      newTodo,
      addTodo,
      deleteTodo,
    };
  },
};

createApp(TodoList).mount('#app');
