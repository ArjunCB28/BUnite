import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { FreeLanceComponent } from './free-lance/free-lance.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'idea', component: IdeasComponent },
	{ path: 'freeLance', component: FreeLanceComponent },
	{ path: 'profile', component: ProfileComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		IdeasComponent,
		FreeLanceComponent,
		ProfileComponent 
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
