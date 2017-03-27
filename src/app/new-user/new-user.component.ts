import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserStore } from '../app.service';

@Component({
  selector: 'new',
  styles: [`

  `],
  providers: [

  ],

  templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit {

  public user = { name: '', email: '' };

  constructor(
    public route: ActivatedRoute,
    public users: UserStore
  ) {}

  public ngOnInit() {
    console.log('hello `NewUser` component');
  }

  public createUser(user: any) {
    this.users.add(user.name, user.email);
    this.user = { name: "", email: ""};
  }

}
