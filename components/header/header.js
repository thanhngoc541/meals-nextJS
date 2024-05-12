import Link from 'next/link';
import logo from '@/assets/logo.png';
import styles from './header.module.css';
import Image from 'next/image';
import HeaderBackground from './header-background';
export default function Header() {
    return (
        <>
            <HeaderBackground></HeaderBackground>
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image priority src={logo} alt="A Plate with food on it"></Image>
                    NextLevel Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                            <Link href="/community"> Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
