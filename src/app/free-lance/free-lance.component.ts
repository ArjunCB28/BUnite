import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdeasService } from '../ideas.service';
import Swal from 'sweetalert2';
declare var jQuery: any;

@Component({
	selector: 'app-free-lance',
	templateUrl: './free-lance.component.html',
	styleUrls: ['./free-lance.component.less']
})
export class FreeLanceComponent implements OnInit {

	private roles;
	private interests;
	private form = new FormGroup({
		'title': new FormControl('', Validators.required),
		'description': new FormControl('', Validators.required),
		'labels': new FormControl('', Validators.required),
		'cost': new FormControl('', Validators.required),
		'requirements': new FormControl('', Validators.required),
	}); 

	constructor(private ideas: IdeasService) {
		this.roles = ideas.getRoles();
		this.interests = ideas.getInterests();
	}

	ngOnInit() {
		setTimeout(() => {
			jQuery('.selectpicker').selectpicker('refresh');
		}, 0);
	}

}
