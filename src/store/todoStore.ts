let nextId = 0;
let todos = [{ id: nextId++, text: 'Item 1' }];
let listeners: any[] = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: 'Item ' + nextId }]
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  }
};

function emitChange() {
  for (let listener of listeners) {    
    listener();
  }
}
