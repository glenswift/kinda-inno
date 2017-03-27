import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UserStore } from '../app.service';

@Component({
  selector: 'edit-user',
  styles: [`

  `],
  providers: [

  ],

  templateUrl: './edit-user.component.html'
})
export class EditUserComponent implements OnInit {

  public user: any;

  constructor(
    private route: ActivatedRoute,
    public users: UserStore
  ) {}

  public ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let userId = params['id'];
      this.user = this.users.getById(userId);
    });
  }

  public updateUser(user: any) {
    this.users.update(user.id, user.name, user.email);
  }

}
