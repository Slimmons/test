import { Routes, RouterModule } from "@angular/router";
import { IntroComponent } from "./intro/intro.component";
import { ProfileComponent } from "./profile/profile.component";
import { UploadMusicComponent } from "./profile/upload-music/upload-music.component";
import { CreateMusicComponent } from "./profile/create-music/create-music.component";
import { StatisticsComponent } from "./profile/statistics/statistics.component";
import { SearchResultsComponent } from "./search-results/search-results.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: IntroComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'upload-music', component: UploadMusicComponent },
    { path: 'create-music', component: CreateMusicComponent },
    { path: 'search-results', component: SearchResultsComponent },
    { path: 'statistics', component: StatisticsComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
