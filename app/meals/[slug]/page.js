import Image from 'next/image';
import classes from './page.module.css';
import { notFound } from 'next/navigation';
import { getMeal } from '@/lib/meals';
export default function MealsDetailPage({ params }) {
    const meal = getMeal(params.slug);
    if (!meal) {
        notFound();
    }
    meal.instructions = meal.instructions.replace(/(?<!^)\r?\n/g, '<br/>');
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image fill src={meal.image} alt={meal.title}></Image>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}> {meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary} </p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
            </main>
        </>
    );
}
