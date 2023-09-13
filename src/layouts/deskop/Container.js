import styles from '../../../styles/desktop/Container.module.css';

function Container({ children }) {
  return <main className="d-flex flex-column min-vh-100"><div className={`${styles.container}`}>{children}</div></main>;
}

export default Container;
