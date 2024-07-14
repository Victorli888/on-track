import { useSignal } from "@preact/signals";
import CalendarCarousel from "../islands/meal-diary-overview/CalenderCarousel.tsx";
import {UtilityBar} from "../islands/UtilityBar.tsx";
import {DiaryCard} from "../components/DiaryCard.tsx";


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
                <CalendarCarousel initialYear={2024} initialMonth={0}/>
                {/*<DiaryCard calorieGoal={2300} proteinGoal={130}/>*/}
                <DiaryCard calorieGoal={2300} proteinGoal={130} mealData={[
                    {
                        "food": "Oatmeal with Fruits",
                        "carbs": 40,
                        "protein": 10,
                        "fat": 5,
                        "calories": 300
                    },
                    {
                        "food": "Grilled Chicken Salad",
                        "carbs": 15,
                        "protein": 30,
                        "fat": 10,
                        "calories": 350
                    },
                    {
                        "food": "Grilled Salmon with Quinoa",
                        "carbs": 30,
                        "protein": 44,
                        "fat": 13,
                        "calories": 550
                    },
                    {
                        "food": "Almonds",
                        "carbs": 5,
                        "protein": 6,
                        "fat": 14,
                        "calories": 160
                    },
                    {
                        "food": "Protein Shake",
                        "carbs": 5,
                        "protein": 30,
                        "fat": 1,
                        "calories": 160
                    },
                    {
                        "food": "Beer",
                        "carbs": 45,
                        "protein": 0,
                        "fat": 0,
                        "calories": 160
                    }
                ]}/>
            </div>
        </div>
    );
}
