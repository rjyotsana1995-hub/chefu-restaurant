import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {
    this.showModal = false;
    this.registerForm = this.formBuilder.group({});
  }

  show() {
    this.showModal = true; // Show-Hide Modal Check
  }

  hide() {
    this.showModal = false;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    debugger;
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.login(
      this.registerForm.value.email,
      this.registerForm.value.password
    ).valueOf;
    if (this.authService.isAuthenticate == true) {
      this.router.navigate(['gallery']);
    } else if (this.authService.isAuthenticate == false) {
      // this.router.navigate(['homepage']);

      this.toastrService.error('Invalid Credentials!!', ' Error', {
        timeOut: 3000,
      });

      setTimeout(() => {
        //<<<---using ()=> syntax
        this.hide();
      }, 3000);
    }
  }
}
