import Link from 'next/link';
import logo from '@/assets/logo.png';
import styles from './header.module.css';
import Image from 'next/image';
import HeaderBackground from './header-background';
import NavLink from './nav-link';
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
                            <NavLink href={'/meals'}>Browse Meals</NavLink>
                            <NavLink href={'/community'}>Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
