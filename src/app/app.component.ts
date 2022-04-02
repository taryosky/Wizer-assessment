import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { NotifierModel } from './core/models/notifier-model';
import { AppObservables } from './core/services/observables/app-observables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WizerApp';
  items: MenuItem[];
  constructor(private appObservables: AppObservables, private messageService: MessageService) {
    appObservables.notifier.subscribe(
      (model: NotifierModel) => {
        this.messageService.add({severity: model.severity, detail: model.detail})
      }
    )

    this.items = [
      {
          label: 'Books',
          icon: 'pi pi-pw pi-file',
          expanded: true,
          items: [
              {label: 'All Books', icon: 'pi pi-fw pi-list', routerLink: ['/books']},
              {label: 'New Book', icon: 'pi pi-fw pi-plus', routerLink: ['/books', 'new']}
          ]
      },
      {
          label: 'Categories',
          icon: 'pi pi-fw pi-list',
          expanded: true,
          items: [
              {label: 'All Categories', icon: 'pi pi-fw pi-list', routerLink: ['/categories']}
          ]
      }
  ];
    
  }
}
