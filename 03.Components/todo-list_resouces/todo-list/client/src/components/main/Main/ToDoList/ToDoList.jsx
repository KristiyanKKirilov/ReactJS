    import { useState, useEffect } from "react";
    import { baseURL } from "../../../../constants";
    import ToDoItem from "../ToDoItem/ToDoItem.jsx";
    import Loader from "../../../shared/Loader/Loader";

    export default function ToDoList() {
        const [items, setItems] = useState([]);
        const [isLoading, setLoading] = useState(true);

        useEffect(() => {
            // fetch(`${baseURL}/todos`)
            //     .then(response => response.json())
            //     .then(result => {
            //         const itemsRes = Object.values(result);
            //         setItems(itemsRes);
            //         console.log(itemsRes);
            //         console.log(items);
            //     });
            async function fetchTodos() {
                try {
                    const response = await fetch(`${baseURL}/todos`);
                    const result = await response.json();
                    const resultArr = Object.values(result);
                    setItems(resultArr);
                } catch (error) {
                    console.error('Error fetching todos: ', error);
                }
                finally {
                    setLoading(false);
                }

            }

            fetchTodos();
        }, []);


        return (
            <>
                {isLoading
                    ? <Loader/>
                    :
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ToDoItem items={items}/>
                        </tbody>
                    </table>
                }
            </>
        );
    }
