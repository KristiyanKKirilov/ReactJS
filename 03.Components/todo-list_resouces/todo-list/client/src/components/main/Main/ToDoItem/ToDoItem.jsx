import { useEffect, useState } from "react";



export default function ToDoItem(props) {

    useEffect(() =>{
        console.log(props.items);
    }, [props.items]);

    return (
        <>
           {props.items.map(item => {
            return (
                    <tr key={item._id} className={item.isCompleted ? "todo is-completed" : "todo" }>
                        <td>{item.text}</td>
                        <td>{item.isCompleted ? "Complete" : "Incomplete"}</td>
                        <td className="todo-action">
                            <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr>
                    );
            })}
            
            {/* <tr class="todo is-completed">
                <td>Give dog a bath</td>
                <td>Complete</td>
                <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                </td>
            </tr>

            <tr class="todo is-completed">
                <td>Do laundry</td>
                <td>Complete</td>
                <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                </td>
            </tr>

            <tr class="todo">
                <td>Vacuum floor</td>
                <td>Incomplete</td>
                <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                </td>
            </tr>

            <tr class="todo is-completed">
                <td>Feed cat</td>
                <td>Complete</td>
                <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                </td>
            </tr>

            <tr class="todo">
                <td>Change light bulbs</td>
                <td>Incomplete</td>
                <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                </td>
            </tr>

            <tr class="todo is-completed">
                <td>Feed cat</td>
                <td>Complete</td>
                <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                </td>
            </tr>

            <tr class="todo">
                <td>Change light bulbs</td>
                <td>Incomplete</td>
                <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                </td>
            </tr>

            <tr class="todo is-completed">
                <td>Go to Store</td>
                <td>Completed</td>
                <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                </td>
            </tr>

            <tr class="todo">
                <td>Fill gas tank</td>
                <td>Incomplete</td>
                <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                </td>
            </tr> */}
        </>
    );
}
