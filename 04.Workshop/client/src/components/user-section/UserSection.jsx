import UserList from "./user-list/UserList";
import styles from './UserSection.module.css';
import SearchBar from "../search-bar/SearchBar";
import Pagination from "../pagination/Pagination";
import { baseUrl } from "../../constants";
import { useEffect, useState } from "react";

const url = baseUrl;

export default function UserSection() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${url}/users`)
        .then(response => response.json())
        .then(result => {
            setUsers(Object.values(result));
            // console.log(Object.values(result));
        });
    }, []);

    return (
        <>
            <section className={styles["card users-container"]}>            
                    <SearchBar/>    
                    <UserList users={users}/>
                    <button className="btn-add btn">Add new user</button>
                    <Pagination/>                   
                </section>
        </>
    );
}
