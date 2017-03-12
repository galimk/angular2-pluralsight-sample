import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event.component';
import {appRoutes} from './routes';
import {RouterModule} from "@angular/router";
import {Error404Component} from './events/errors/404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventListResolver} from './events/event-list-resolver.service'
import {AuthService} from './user/AuthService'

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent, EventDetailsComponent,
        CreateEventComponent, Error404Component],
    providers: [EventService, ToastrService, EventRouteActivator, EventListResolver, AuthService],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}