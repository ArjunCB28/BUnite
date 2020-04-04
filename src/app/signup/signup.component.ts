import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from "@angular/router";
import { IdeasService } from '../ideas.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
	private interests;

	form = new FormGroup({
		'firstName': new FormControl('', Validators.required),
		'lastName': new FormControl('', Validators.required),
		'dob': new FormControl('', Validators.required),
		'email': new FormControl('', [
			Validators.required,
			Validators.email
		]),
		'interests': new FormControl('', Validators.required),
		'password': new FormControl('', [
			Validators.required,
			Validators.minLength(6)
		]),
		'confirmPassword': new FormControl('', [
			Validators.required,
			Validators.minLength(6)
		])
	});

	constructor(private router: Router, private ideas: IdeasService) {
		this.router = router;
		this.interests = this.ideas.interests;
	}

	ngOnInit() {
	}

	onSubmit(){
		Swal.fire({
			title: "Creating new account",
			showConfirmButton: false,
			timerProgressBar: true,
			timer: 1000,
			allowOutsideClick: false,
			onBeforeOpen: ()=>{
				Swal.showLoading();
			},
			onClose:()=>{
				localStorage.setItem("user",JSON.stringify(this.form.value));
				this.router.navigate(['/home']);
			}
		});
	}

}
