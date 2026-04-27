import { Routes } from "@angular/router";
import { appRoutesGuards } from "./components/app-router-guards/app.routes";

export const routes: Routes = [...appRoutesGuards];
