import { h, FunctionComponent } from "https://cdn.skypack.dev/preact";
import { useState } from "https://cdn.skypack.dev/preact/hooks";

type Meal = {
    mealName: string;
    calories: number;
    protein: number;
}

type DiaryCardProps = {
    calorieGoal: number;
    proteinGoal: number;
    mealData: Meal[];
}
export const DiaryCard: FunctionComponent<DiaryCardProps> = ({calorieGoal, proteinGoal, mealData}) => {

    // Calculate total calories and protein
    const currCalorie = mealData.reduce((total, meal) => total + meal.calories, 0);
    const currProtein = mealData.reduce((total, meal) => total + meal.protein, 0);

    return (
        <div className='flex-col items-center justify-center bg-blue-50 border border-blue-200 p-4 m-2 rounded-lg shadow-md w-60 h-72'>
            <div className="flex justify-around">
                <h2 className='text-l font-semibold text-blue-900'>{currCalorie}/{calorieGoal}</h2>
                <h2 className='text-l font-semibold text-blue-900'>{currProtein}/{proteinGoal}</h2>
            </div>
            <div className='text-sm overflow-y-auto max-h-56'>
                {mealData.map((meal) => (
                    <>
                        <h4 className='font-semibold'>{meal.food}</h4>
                        <div>
                            <p>Calories: {meal.calories}</p>
                            <p>Protein: {meal.protein}</p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};