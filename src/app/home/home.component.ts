import { Component, OnInit } from '@angular/core';

import { IdeasService } from '../ideas.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

	constructor(private ideas:IdeasService) {
		this.ideas = ideas;
	}

	ngOnInit() {
	}

	liked(idea){
		idea.liked = !idea.liked;
		if(idea.liked){
			idea.likes++;
		} else {
			idea.likes--;
		}
	}

	favorite(idea){
		idea.favorite = !idea.favorite;
		if(idea.favorite){
			Swal.fire({
				title: "Added to favorites",
				icon: "success",
				showConfirmButton: false,
				timer: 1000,
				allowOutsideClick: false,
			});
		}
	}
}
