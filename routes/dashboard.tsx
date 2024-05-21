import MacrosOverview from "../islands/MacrosOverview.tsx";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import ProteinOverview from "../islands/dashboard-overview/ProteinOverview.tsx";
import CarbsOverview from "../islands/dashboard-overview/CarbsOverview.tsx";
import FatsOverview from "../islands/dashboard-overview/FatsOverview.tsx";
import CaloriesOverview from "../islands/dashboard-overview/CaloriesOverview.tsx";

export default function Home() {
    const count = useSignal(0);
    return (
        <div className="px-4 py-8 mx-auto bg-[#86efac]">
            <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                <img
                    class="my-6"
                    src="/analytics.svg"
                    width="128"
                    height="128"
                    alt="the Fresh logo: a sliced lemon dripping with juice"
                />
            </div>
            <div className="max-w-screen-md mx-auto flex flex-row items-center justify-center space-x-3">
                <CaloriesOverview curr_total={500} max_total={2100} unit={"Kcal"}/>
                <ProteinOverview curr_total={69} max_total={125} unit={"g"}/>
                <CarbsOverview curr_total={78} max_total={180} unit={"g"}/>
                <FatsOverview curr_total={39} max_total={60} unit={"g"}/>

            </div>
        </div>
    );
}
