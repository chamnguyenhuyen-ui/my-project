import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  constructor(private route: ActivatedRoute) {}
    ngOnInit() {
    console.log(this.route.snapshot.params['id']);

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
    });
  }
}
