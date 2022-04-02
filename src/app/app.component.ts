import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WizerApp';
  items: MenuItem[];
  constructor() {
    this.items = [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Open', icon: 'pi pi-fw pi-download'},
        {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
    ];
    
  }
}
