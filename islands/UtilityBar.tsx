import {h} from 'preact';
import {UtilityBox} from "../components/UtilityBox.tsx";

export const UtilityBar = ({currentRoute}) => {


    return (
        <nav class="flex bg-blue-500 p-3 max-w-screen-md mx-auto">
            <ul class="flex justify-between w-full">
                <img
                    className="my-1"
                    src="/ontrack-logo-white.svg"
                    width="128"
                    height="128"
                    alt="AnalyticsCPU"
                />
                <UtilityBox href="/dashboard" active={currentRoute === "/dashboard"}>Dashboard</UtilityBox>
                <UtilityBox href="/meal-diary" active={currentRoute === "/meal-diary"}>Meal Diary</UtilityBox>
                <UtilityBox href="/nutrition" active={currentRoute === "/nutrition"}>Nutrition</UtilityBox>
                <UtilityBox href="/stats" active={currentRoute === "/stats"}>My Stats</UtilityBox>
                <UtilityBox href="/history" active={currentRoute === "/history"}>History</UtilityBox>
            </ul>
        </nav>
    );
};