import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>to do</h1>
            <p className={styles.subTitle}>Remember Everything</p>
        </div>
    );
}

export default Header;