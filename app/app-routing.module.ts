import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent }  from './components/messageboard/message.component';
import { SearchComponent }  from './components/spotify/search/search.component';
import { ArtistComponent }  from './components/spotify/artist/artist.component';
import { HomepageComponent }  from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'artist', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',   component: HomepageComponent },
  { path: 'spotify',   component: SearchComponent },
  { path: 'artist/:id',   component: ArtistComponent },
  { path: 'messages',   component: MessageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}