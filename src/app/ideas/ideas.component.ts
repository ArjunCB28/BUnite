import { Component, OnInit } from '@angular/core';

import { IdeasService } from '../ideas.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-ideas',
	templateUrl: './ideas.component.html',
	styleUrls: ['./ideas.component.less']
})
export class IdeasComponent implements OnInit {

	private businessIdeas;
	private detailPage = false;
	private selectedIdea = {};
	private requirementList = [];
	constructor(private ideas:IdeasService) {
		this.businessIdeas = ideas.getBusinessList();
	}

	ngOnInit() {
	}

	ideaSelected(idea){
		this.detailPage = true;
		this.selectedIdea = idea;
		this.requirementList = idea.requirements.split(',');
	}

	back(){
		this.detailPage = false;
	}

	submitRequest(){
		Swal.fire({
			title: "Request submitted",
			showConfirmButton: false,
			icon: 'success',
			timer: 1000,
			allowOutsideClick: false,
			onClose:()=>{
				this.detailPage = false;
			}
		});
	}

}
