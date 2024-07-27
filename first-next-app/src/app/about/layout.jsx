import styles from '../page.module.css'


export const PageLayout = ({ children }) => {

 return (
        <main className=
            {styles.main}>
            {children}
        </main>
    );
};

export default PageLayout;