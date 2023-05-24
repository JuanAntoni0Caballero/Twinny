import { Component } from '@angular/core'
import { AuthService } from '../../services/authService/auth.service'
import { FormsModule } from '@angular/forms'


@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  email: string;
  password: string;

  constructor(private authService: AuthService) {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      res => {
        this.authService.saveToken(res.access_token)
      },
      Error => {
        console.log('Error ==>', Error);
      }
    )
  }


}
