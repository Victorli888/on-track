// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $dashboard from "./routes/dashboard.tsx";
import * as $index from "./routes/index.tsx";
import * as $test_ground from "./routes/test-ground.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $UtilityBar from "./islands/UtilityBar.tsx";
import * as $dashboard_overview_CaloriesOverview from "./islands/dashboard-overview/CaloriesOverview.tsx";
import * as $dashboard_overview_CarbsOverview from "./islands/dashboard-overview/CarbsOverview.tsx";
import * as $dashboard_overview_FatsOverview from "./islands/dashboard-overview/FatsOverview.tsx";
import * as $dashboard_overview_ProteinOverview from "./islands/dashboard-overview/ProteinOverview.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/dashboard.tsx": $dashboard,
    "./routes/index.tsx": $index,
    "./routes/test-ground.tsx": $test_ground,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/UtilityBar.tsx": $UtilityBar,
    "./islands/dashboard-overview/CaloriesOverview.tsx":
      $dashboard_overview_CaloriesOverview,
    "./islands/dashboard-overview/CarbsOverview.tsx":
      $dashboard_overview_CarbsOverview,
    "./islands/dashboard-overview/FatsOverview.tsx":
      $dashboard_overview_FatsOverview,
    "./islands/dashboard-overview/ProteinOverview.tsx":
      $dashboard_overview_ProteinOverview,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
