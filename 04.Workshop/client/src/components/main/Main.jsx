import Section from "../user-section/UserSection";
import CreateEdit from "../user/create-edit/CreateEdit";
import Details from "../user/details/Details";
import styles from './Main.module.css';

export default function Main() {
    return (
        <>
            <main className={styles["main"]}>
            <SearchBar/>

                {/* <!-- Section component  --> */}
                <Section/>

                {/* <!-- User details component  --> */}
                {/**/}
                {/* <Details/> */}


                {/* <!-- Create/Edit Form component  -->
                <!-- */}
                    {/* <CreateEdit/> */}

                {/* <!-- Delete user component  --> */}
                
            </main>
        </>
    );
}
