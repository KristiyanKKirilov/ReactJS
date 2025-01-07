import UserList from "./user-list/UserList";
import SearchBar from "../search-bar/SearchBar";
import Pagination from "../pagination/Pagination";
import './UserSection.css';
import { baseUrl } from "../../constants";
import { useEffect, useState } from "react";
import CreateEdit from "../user/create-edit/CreateEdit";

const url = baseUrl;

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [displayed, setDisplayed] = useState(false);

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

    function addUserClickHandler() {
        setDisplayed(true);
    }

    function addUserCloseHandler() {
        setDisplayed(false);
    }

    async function addUserSaveHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.values(formData);

        const response = await fetch(`${url}/users`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const createdUser = await response.json(); 

        setUsers(oldUsers => [...oldUsers, createdUser]);

        addUserCloseHandler(false);      

    }

    return (
        <>
            <section className="card users-container">
                <SearchBar />
                <UserList users={users} />
                {displayed && <CreateEdit
                    onClose={addUserCloseHandler}
                    onSave={addUserSaveHandler} />}
                <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>
                <Pagination />
            </section>
        </>
    );
}
