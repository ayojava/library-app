import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tieredMenuItems : MenuItem[];
  constructor() { }

  ngOnInit() {
    this.tieredMenuItems=[
      { label :'Home',icon :'fa-home',routerLink:['/home']},
      { separator : true },
      { label :'BookShelve',icon :'fa-tasks',routerLink:['/bookShelve']},
      { separator : true },
      { label :'Book',icon :'fa-book',routerLink:['/book']},
      { separator : true },
      { label :'Member',icon :'fa fa-user-circle-o',routerLink:['/member']}
    ];
  }

}
