import styles from './Header.module.css'

import CCLogo from '../img/CC-logo.png';


export function Header() {
    return (
        <header className={styles.header}>
            <img src = {CCLogo} alt="Logo Cuida&Conecta" />

        </header>

    );
}