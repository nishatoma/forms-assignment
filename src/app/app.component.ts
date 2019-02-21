import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('myForm') form: NgForm;
  defaultSubscription = 'basic';
  submitted: boolean = false;

  user = {
    email: '',
    password: '',
    option: '',
  };

  submitForm() {
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.user.option = this.form.value.subscriptions;
    console.log(this.form);
    this.submitted = true;
    //this.form.reset();
  }
}
