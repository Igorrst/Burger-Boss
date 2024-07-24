import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>
                  &copy; Desenvolvido por: 
                  <a href="https://github.com/KaykyDion" target="_blank" rel="noopener noreferrer">KaykyDion</a> & 
                  <a href="https://github.com/SkyNot" target="_blank" rel="noopener noreferrer">SkyNot</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;