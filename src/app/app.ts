import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { LifeCycle } from "./life-cycle/life-cycle";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LifeCycle, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isShow = false;
  lessonName = "Angular";
  toggleShow() {
    this.isShow = !this.isShow;
  }
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

