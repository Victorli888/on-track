import { h, FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import { CalenderDayCard } from '../../components/CalenderDayCard.tsx';
import {ArrowButton} from "../../components/ArrowButton.tsx";
import MonthYearSelector from "../../components/MonthYearSelector.tsx";

interface CarouselProps {
    initialMonth: number;
    initialYear: number;
}

const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
};

const CalendarCarousel: FunctionComponent<CarouselProps> = ({initialYear, initialMonth}) => {

    // CalendarCarousel state initialization
    const [leftMostDate, setLeftMostDate] = useState(1);
    const [rightMostDate, setRightMostDate] = useState(7);
    const [totalDays, setTotalDays] = useState(28);
    const [year, setYear] = useState(initialYear)
    const[month, setMonth] = useState(initialMonth)

    useEffect(() => {
        const getDaysInMonth = (year: number, month: number): number => {
            return new Date(year, month+1, 0).getDate();
        };
        setTotalDays(getDaysInMonth(year, month));

        // Reset carousel to beginning of the month
        setLeftMostDate(1);
        setRightMostDate(7);
    }, [year, month]);

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

    const onYearChange = (selectedYear: number) => {
        setYear(selectedYear)
    };

    const onMonthChange = (selectedMonth: number) => {
        setMonth(selectedMonth)
    };

    let visibleDays = Array.from({length: 7}, (_, i) => leftMostDate + i);

    return (
        <div>
            <MonthYearSelector year={year} month={month} onYearChange={onYearChange} onMonthChange={onMonthChange}/>
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
        </div>
    );
};

export default CalendarCarousel;