import UserList from "./user-list/UserList";
import SearchBar from "../search-bar/SearchBar";
import Pagination from "../pagination/Pagination";
import Details from "../user/details/Details";
import './UserSection.css';
import { baseUrl } from "../../constants";
import { useEffect, useState } from "react";
import CreateEdit from "../user/create-edit/CreateEdit";
import Delete from "../user/delete/Delete";

const url = baseUrl;

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [createMenuState, setCreateMenuState] = useState(false);
    const [detailsById, setDetailsById] = useState(null);
    const [deleteUserById, setDeleteUserById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [criteria, setCriteria] = useState('Not selected');
    const [filter, setFilter] = useState();

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
                const users = Object.values(result);

                switch (criteria) {
                    case 'notSelected':
                        setUsers(users);
                        break;
                    case 'firstName':
                        setUsers(users.filter(user => user.firstName.toLowerCase().includes(filter)));
                        break;
                    case 'lastName': 
                        setUsers(users.filter(user => user.lastName.toLowerCase().includes(filter)));
                        break;
                    case 'email': 
                        setUsers(users.filter(user => user.email.toLowerCase().includes(filter)));
                        break;
                    case 'phoneNumber': 
                        setUsers(users.filter(user => user.phoneNumber.toLowerCase().includes(filter)));
                        break;
                    default:
                        setUsers(users);
                        break;
                }


            } catch (error) {
                alert(error.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [criteria, filter]);

    function addUserClickHandler() {
        setCreateMenuState(true);
    }

    function addUserCloseHandler() {
        setCreateMenuState(false);
    }

    function userDetailsCloseHandler() {
        setDetailsById(null);
    }

    function userDetailsClickHandler(userId) {
        setDetailsById(userId);
    }

    function userDeleteClickHandler(userId) {
        setDeleteUserById(userId);
    }

    async function userDeleteHandler(userId) {
        const response = await fetch(`${url}/users/${userId}`, {
            method: 'DELETE'
        });

        setUsers(oldUsers => oldUsers.filter(user => user._id !== userId));

        setDeleteUserById(null);
    }

    async function addUserSaveHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }

        console.log(userData);
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

    function searchHandler(e) {
        e.preventDefault();

        const enteredInput = e.target.elements.search.value;
        const selectedCriteria = e.target.elements.criteria.value;
        setFilter(enteredInput.toLowerCase());
        setCriteria(selectedCriteria);
    }

    return (
        <>
            <section className="card users-container">
                <SearchBar onSearch={searchHandler} />

                <UserList
                    users={users}
                    onUserDetailsClick={userDetailsClickHandler}
                    onDelete={userDeleteClickHandler}
                    isLoading={isLoading}
                />

                {createMenuState && <CreateEdit
                    onClose={addUserCloseHandler}
                    onSave={addUserSaveHandler} />}

                {detailsById && <Details
                    user={users.find(user => user._id === detailsById)}
                    onClose={userDetailsCloseHandler} />}

                {deleteUserById &&
                    <Delete
                        onClose={() => setDeleteUserById(null)}
                        onDelete={() => userDeleteHandler(deleteUserById)} />}

                <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

                <Pagination />
            </section>
        </>
    );
}
