import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { CalenderDayCard } from '../../components/CalenderDayCard.tsx';
import {ArrowButton} from "../../components/ArrowButton.tsx";

interface CarouselProps {
    month: number;
    year: number;
}

const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
};

const CalendarCarousel: FunctionComponent<CarouselProps> = ({year, month}) => {
    const totalDays = getDaysInMonth(year, month);

    // CalendarCarousel state initialization
    const [leftMostDate, setLeftMostDate] = useState(1);
    const [rightMostDate, setRightMostDate] = useState(7);

    // Method to "slide" to next 7 days
    // Method to "slide" to next 7 days
    const nextSevenDays = () => {
        if (rightMostDate + 7 <= totalDays) {
            setLeftMostDate(leftMostDate+7);
            setRightMostDate(rightMostDate+7);
        }
        else {
            setLeftMostDate(totalDays - 6);
            setRightMostDate(totalDays);
        }
    };

// Method to "slide" to previous 7 days
    const previousSevenDays = () => {
        if (leftMostDate - 7 >= 1) {
            setLeftMostDate(leftMostDate - 7);
            setRightMostDate(rightMostDate - 7);
        }
        else {
            setLeftMostDate(1);
            setRightMostDate(7);
        }
    };

    let visibleDays = Array.from({length: 7}, (_, i) => leftMostDate + i);

    return (
        <div style={{
            display: 'flex',
            padding: '.1rem',
            overflow: 'auto',
            scrollSnapType: 'x mandatory',
        }}>
            <ArrowButton onClick={previousSevenDays} isLeft={true}/>
            {visibleDays.map((day) => (
                <div key={day} style={{
                    scrollSnapAlign: 'center',
                    whiteSpace: 'nowrap',
                    padding: '.11rem',

                }}>
                    <CalenderDayCard day={day}/>
                </div>
            ))}
            <ArrowButton onClick={nextSevenDays} isLeft={false}/>
            <h1>{totalDays}</h1>
        </div>
    );
};

export default CalendarCarousel;