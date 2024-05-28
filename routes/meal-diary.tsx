import { useSignal } from "@preact/signals";
import CalendarCarousel from "../islands/meal-diary-overview/CalenderCarousel.tsx";
import {UtilityBar} from "../islands/UtilityBar.tsx";


export default function Home() {
    const count = useSignal(3);
    return (

        <div class="px-4 py-8 mx-auto bg-[#86efac]">
            <div>
                <UtilityBar currentRoute="/meal-diary"/>
            </div>
            <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                <img
                    className="my-6"
                    src="/diary.svg"
                    width="128"
                    height="128"
                    alt="AnalyticsCPU"
                />
            </div>
            <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                {/*Weird Bug with the Date Class  suppose to be zero based but should use 1 based for month*/}
                <CalendarCarousel year={2024} month={5}/>
                <h1 class="text-4xl font-bold">Meal Diary for this Day...</h1>
                <p class="my-4">
                    Food Details Here in Boxes
                </p>
                <p>
                    Add Macro Summary Here
                </p>
            </div>
        </div>
    );
}
