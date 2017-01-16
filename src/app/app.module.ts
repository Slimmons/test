import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { IntroComponent } from './intro/intro.component';
import { routing } from "./app.routing";
import { ProfileComponent } from './profile/profile.component';
import { UploadMusicComponent } from './profile/upload-music/upload-music.component';
import { CreateMusicComponent } from './profile/create-music/create-music.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { StatisticsComponent } from './profile/statistics/statistics.component';
import { ProfileMenuComponent } from './profile/profile-menu/profile-menu.component';
import { NewsFeedComponent } from './profile/news-feed/news-feed.component';
import { UserActivityListComponent } from './profile/news-feed/user-activity-list/user-activity-list.component';
import { ProfileStatsComponent } from './profile/profile-stats/profile-stats.component';
import { UserActivityItemComponent } from './profile/news-feed/user-activity-list/user-activity-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    ProfileComponent,
    UploadMusicComponent,
    CreateMusicComponent,
    SearchResultsComponent,
    StatisticsComponent,
    ProfileMenuComponent,
    NewsFeedComponent,
    UserActivityListComponent,
    ProfileStatsComponent,
    UserActivityItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
