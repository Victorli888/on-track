import { StatusMeter } from '../../components/StatusMeter.tsx';
import type { Signal } from "@preact/signals";
import { Button } from "../../components/Button.tsx";
import CircularMeter from "../../components/CircularMeter.tsx";

interface IntakeProps {
    max_total: number
    curr_total: number
    unit: string
}


export default function FatsOverview(props: IntakeProps) {
    const remaining = props.max_total - props.curr_total
    return (
        <div className="flex flex-col overflow-hidden rounded shadow-md bg-white p-4">
            <div className="flex flex-col space-y-4">
                <CircularMeter curr_total={props.curr_total} max_total={props.max_total} unit={props.unit}></CircularMeter>
                {/*<p className="text-2xl flex justify-center tabular-nums"> Protein</p>*/}
            </div>
            <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                <img
                    className="my-6"
                    src="/olive-oil.svg"
                    width="64"
                    height="64"
                    alt="MEAT"
                />
            </div>
        </div>
    );
}