import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'login',
  styleUrls: ['./login.container.css'],
  templateUrl: './login.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainer {

}
