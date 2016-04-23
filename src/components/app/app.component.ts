import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {NamesComponent} from '../names/names.component';
import {NameListService} from '../shared/services/name-list.service';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/names', name: 'Names', component: NamesComponent }
])
export class AppComponent {}
