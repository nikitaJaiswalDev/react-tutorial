import { useSyncExternalStore } from "react";
import { todosStore } from "../store/todoStore";

const UseSyncExternalStoreExample = () => {
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

    return (
        <>
            <button onClick={() => todosStore.addTodo()}>Add</button>
            <hr />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
};

export default UseSyncExternalStoreExample;