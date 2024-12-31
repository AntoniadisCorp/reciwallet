import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from '@angular/fire/auth';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  protected email: FormControl<string>
  protected password: FormControl<string>
  constructor(private auth: Auth) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.email = new FormControl('', { nonNullable: true, validators: [Validators.required] })

    this.password = new FormControl('', { nonNullable: true, validators: [Validators.required] });
  }
  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(this.auth, provider)
      console.log('User logged in:', result.user);
    } catch (error) {
      console.error('Google login error:', error);
    }
  }

  async login() {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email.value, this.password.value);
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      console.log('User logged out');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}
