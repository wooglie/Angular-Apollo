import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Client, Query } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular-Apollo';

  clients: Observable<Client[]>;
  constructor(private apollo: Apollo) { }
  ngOnInit() {
    this.apollo.watchQuery<Query>({
      query: gql`
        query {
          getClients {
            id
            firmName
            status
            oib
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.getClients)
      ).subscribe(console.log)
  }
}
