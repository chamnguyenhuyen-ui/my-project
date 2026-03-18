import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-project');
  name = 'Angular';
  // Hiển thị thông tin cá nhân ra ngoài màn html
  person = {
    name: 'Huyền Châm',
    mssv: 'PH59617',
    age: 20,
    address: 'Hà Nội'
  };
}

