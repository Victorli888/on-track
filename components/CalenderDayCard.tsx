import { h, FunctionComponent } from "https://cdn.skypack.dev/preact";
import { useState } from "https://cdn.skypack.dev/preact/hooks";

type CalendarDayCardProps = {
    day: number;
};

export const CalenderDayCard: FunctionComponent<CalendarDayCardProps> = ({ day }) => {
    return (
        <div className="flex items-center justify-center bg-blue-50 hover:bg-blue-100
      border border-blue-200 p-4 m-2 rounded-lg shadow-md w-20 h-24">
            <h2 className="text-2xl font-semibold text-blue-900">{day}</h2>
        </div>
    );
};

const Calendar: FunctionComponent = () => {
    const [daysInMonth, setDaysInMonth] = useState(30);

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const handleSliderChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setDaysInMonth(parseInt(target.value, 10));
    };

    return (
        <div>
            <label htmlFor="day-slider">Days in Month: {daysInMonth}</label>
            <input
                type="range"
                id="day-slider"
                min="28"
                max="31"
                value={daysInMonth}
                onChange={handleSliderChange}
            />

            <div className="flex flex-wrap">
                {days.map((day) => (
                    <CalenderDayCard day={day} key={day} />
                ))}
            </div>
        </div>
    );
};

export default Calendar;