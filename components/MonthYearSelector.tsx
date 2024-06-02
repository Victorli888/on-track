import { h, FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

interface MonthYearProps {
    month: number;
    year: number;
    onMonthChange: (month: number) => void;
    onYearChange: (year: number) => void;
}

const MonthYearSelector: FunctionComponent<MonthYearProps> = ({ year, month, onMonthChange, onYearChange }) => {
    // Month names array
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [yearList, setYearList] = useState(() => {
        const startYear = 2022;
        const endYear = new Date().getFullYear();
        return Array(endYear - startYear + 1).fill(undefined).map((_, idx) => idx + startYear);
    });

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        if (currentYear > yearList[yearList.length - 1]) {
            setYearList(oldList => [...oldList, currentYear])
        }
    }, [yearList]);

    return (
        <div className="flex gap-4">
            <div className="inline-flex flex-col">
                <label htmlFor="month" className="text-lg mb-1">Month</label>
                <select id="month" className="bg-white rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500" value={month} onChange={(e) => onMonthChange(Number(e.target.value))}>
                    {monthNames.map((monthName, idx) => (
                        <option key={idx} value={idx}>
                            {monthName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="inline-flex flex-col">
                <label htmlFor="year" className="text-lg mb-1">Year</label>
                <select id="year" className="bg-white rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500" value={year} onChange={(e) => onYearChange(Number(e.target.value))}>
                    {yearList.map(yearValue => (
                        <option key={yearValue} value={yearValue}>
                            {yearValue}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default MonthYearSelector;