import UserList from "./user-list/UserList";
import SearchBar from "../search-bar/SearchBar";
import Pagination from "../pagination/Pagination";
import  './UserSection.css';
import { baseUrl } from "../../constants";
import { useEffect, useState } from "react";
import CreateEdit from "../user/create-edit/CreateEdit";

const url = baseUrl;

export default function UserSection() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // fetch(`${url}/users`)
        // .then(response => response.json())
        // .then(result => {
        //     setUsers(Object.values(result));
        //     // console.log(Object.values(result));
        // });
        (async function getUsers() {
            try {
                const response = await fetch(`${url}/users`);
                const result = await response.json();
                setUsers(Object.values(result));


            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    function addUserClickHandler(){

    }

    return (
        <>
            <section className="card users-container">
                <SearchBar />
                <UserList users={users} />
                <CreateEdit/>
                <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>
                <Pagination />
            </section>
        </>
    );
}
