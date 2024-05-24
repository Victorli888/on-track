// Import the Fresh library.
import { h, JSX } from 'https://deno.land/x/fresh@0.1.0/mod.ts';

interface Item {
    date: string;
    month: string;
}

// List of dates for the carousel
const data: Item[] = [
    { date: '1', month: 'Jan' },
    { date: '2', month: 'Feb' },
    { date: '3', month: 'Mar' },
    { date: '4', month: 'Apr' },
    // ... add more dates as necessary
];

const Carousel = (): JSX.Element => {
    return (
        <div style={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            overflow: 'auto',
            scrollSnapType: 'x mandatory',
        }}>
            {data.map((item: Item) => (
                <div key={item.date} style={{
                    scrollSnapAlign: 'center',
                    whiteSpace: 'nowrap',
                    padding: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                }}>
                    <h2>{item.date}</h2>
                    <p>{item.month}</p>
                </div>
            ))}
        </div>
    );
};