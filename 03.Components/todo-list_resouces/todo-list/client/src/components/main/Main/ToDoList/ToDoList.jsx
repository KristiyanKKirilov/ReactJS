import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDoList() {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th class="table-header-task">Task</th>
                        <th class="table-header-status">Status</th>
                        <th class="table-header-action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <ToDoItem/>                    
                </tbody>
            </table>
        </>
    );
}
