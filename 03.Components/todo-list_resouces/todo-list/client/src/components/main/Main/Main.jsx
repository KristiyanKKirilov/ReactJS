import Loader from "../../shared/Loader/Loader";
import ToDoList from "./ToDoList/ToDoList";

export default function Main() {
    return (
        <>
            <main class="main">
                <section class="todo-list-container">
                    <h1>Todo List</h1>

                    <div class="add-btn-container">
                        <button class="btn">+ Add new Todo</button>
                    </div>

                    <div class="table-wrapper">
                        {/* <Loader/> */}
                        <ToDoList />
                    </div>
                </section>
            </main>
        </>
    );
}
