import UserList from "./user-list/UserList";
import SearchBar from "../search-bar/SearchBar";
import Pagination from "../pagination/Pagination";
import Details from "../user/details/Details";
import './UserSection.css';
import { baseUrl } from "../../constants";
import { useEffect, useState } from "react";
import CreateEdit from "../user/create-edit/CreateEdit";

const url = baseUrl;

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [createMenuState, setCreateMenuState] = useState(false);
    const [detailsById, setDetailsById] = useState(null);

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
        setCreateMenuState(true);
    }

    function addUserCloseHandler() {
        setCreateMenuState(false);
    }

    function userDetailsCloseHandler(){
        setDetailsById(false);
    }

    function userDetailsClickHandler(userId){
        console.log(userId);
        setDetailsById(userId);
    }

    async function addUserSaveHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = {
            ...Object.values(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

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
                
                <UserList 
                users={users} 
                onUserDetailsClick={userDetailsClickHandler}
                />

                {createMenuState && <CreateEdit
                    onClose={addUserCloseHandler}
                    onSave={addUserSaveHandler} />}

                {detailsById && <Details
                    user={users.find(user => user._id === detailsById)}
                    onClose={userDetailsCloseHandler}/>}

                <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>
                
                <Pagination />
            </section>
        </>
    );
}
