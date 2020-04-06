import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdeasService } from '../ideas.service';
import Swal from 'sweetalert2';
declare var jQuery: any;

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

	private form: FormGroup;
	private interests;

	constructor(private ideas: IdeasService) {
		this.interests = ideas.getInterests();
		var userDetails = JSON.parse(localStorage.getItem("user"));
		if(userDetails === null){
			return;
		}
		console.log("this.interests");
		console.log(this.interests);
		this.form = new FormGroup({
			'firstName': new FormControl(userDetails.firstName, Validators.required),
			'lastName': new FormControl(userDetails.lastName, Validators.required),
			'dob': new FormControl(userDetails.dob, Validators.required),
			'email': new FormControl(userDetails.email, [
				Validators.required,
				Validators.email
			]),
			'interests': new FormControl(userDetails.interests, Validators.required),
			'password': new FormControl(userDetails.password, [
				Validators.required,
				Validators.minLength(6)
			]),
			'confirmPassword': new FormControl(userDetails.confirmPassword, [
				Validators.required,
				Validators.minLength(6)
			])
		});
	}

	ngOnInit() {
		setTimeout(() => {
			jQuery('.selectpicker').selectpicker('refresh');
		}, 0);
	}

	onSubmit(){
		Swal.fire({
			title: "Profile updated successfully",
			showConfirmButton: false,
			icon: "success",
			timer: 1000,
			allowOutsideClick: false,
			onClose:()=>{
				localStorage.setItem("user",JSON.stringify(this.form.value));
			}
		});
	}

}
