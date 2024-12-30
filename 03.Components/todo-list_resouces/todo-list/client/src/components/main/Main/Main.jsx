import Loader from "../../shared/Loader/Loader";
import ToDoList from "./ToDoList/ToDoList";

export default function Main() {
    return (
        <>
            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn">+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">
                        {/* <Loader/> */}
                        <ToDoList />
                    </div>
                </section>
            </main>
        </>
    );
}
