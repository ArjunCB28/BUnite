import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { FreeLanceComponent } from './free-lance/free-lance.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

import { IdeasService } from './ideas.service'; 


const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'idea', component: IdeasComponent },
	{ path: 'freeLance', component: FreeLanceComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'signup', component: SignupComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		IdeasComponent,
		FreeLanceComponent,
		ProfileComponent,
		SignupComponent 
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routes)
	],
	providers: [IdeasService],
	bootstrap: [AppComponent]
})
export class AppModule { }
