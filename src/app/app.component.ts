import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {
	title = 'BUnite';
	currentPage = 'home'

	constructor(private router: Router) {
		this.router = router;
		this.router.navigate(['/home']);
	}

	routePage(page){
		this.currentPage = page;
		console.log(page);
	};
}
