import Link from "next/link";
import styles from "./header.module.css";
const Header = () => {

    return (

        <header className={styles.header}>

            <div className={styles.header_container}>

                 <h1 className={styles.header_logo}>
                    <Link href="/">Blog</Link>
                    </h1>

                 <nav className={styles.header_nav}>
                    <Link href="/">Home</Link>
                   </nav>

              
                    
                    
            </div>
               
        </header>


    )
}

export default Header;