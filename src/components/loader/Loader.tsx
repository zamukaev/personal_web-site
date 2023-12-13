import styles from './Loader.module.scss';

export const Loader = () => {
    return (
        <section className={styles.content}>
            <div className={styles["lds-spinner"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </section>
    );
}