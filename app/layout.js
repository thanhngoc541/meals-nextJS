import Header from '@/components/header/header';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'NextLevel food',
    description: 'Delicious meals, shared by a food-loving community..',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header></Header>
                {children}
            </body>
        </html>
    );
}
