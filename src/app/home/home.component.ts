import {
  Component,
  OnInit
} from '@angular/core';

import { UserStore } from '../app.service';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    public users: UserStore
  ) {}

  public ngOnInit() {

  }

  public deleteUser(id) {
    this.users.remove(id);
  }

}
