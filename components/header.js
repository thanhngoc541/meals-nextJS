import Link from 'next/link';
import logo from '@/assets/logo.png';
export default function Header() {
    return (
        <header>
            <Link href="/">
                <img src={logo.src} alt="A Plate with food on it">
                    {' '}
                    NextLevel Food
                </img>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                        <Link href="/community"> Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
