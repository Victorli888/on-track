import { FunctionalComponent, h } from 'preact';
import { IProgressBarProps } from "../types/ProgressBarProps.ts";

export const CircularMeter: FunctionalComponent<IProgressBarProps> = ({ curr_total, max_total, unit }: IProgressBarProps) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const progress = curr_total / max_total;
    const remaining = max_total - curr_total
    const strokeDashoffset = circumference * (1 - progress);

    return (
        <svg class="w-40 h-40 text-green-500" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(-90 50 50)">
                <circle class="w-full h-full stroke-current text-gray-200"
                        stroke-width="8"
                        fill="transparent"
                        r={radius}
                        cx="50"
                        cy="50"
                />
                <circle
                    class="w-full h-full stroke-current text-green-500"
                    stroke-width="8"
                    fill="transparent"
                    r={radius}
                    cx="50"
                    cy="50"
                    stroke-dasharray={circumference}
                    stroke-dashoffset={strokeDashoffset}
                />
            </g>
            <text x="50" y="50" fill="#000" text-anchor="middle" dy=".3em" style={{fontSize: '13px', opacity: '1', fontWeight: 'bold'}}>{curr_total}{unit}</text>
            <text x="50" y="65" fill="#000" text-anchor="middle" dy=".3em" style={{fontSize: '11px', opacity: '0.5'}}>{max_total}{unit}</text>
        </svg>
    );
};

export default CircularMeter;