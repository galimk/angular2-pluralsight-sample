import {Component, OnInit} from '@angular/core'
import {EventService} from "./shared/event.service"
import {ToastrService} from '../common/toastr.service'
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/events/event-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: any;

    constructor(private eventService: EventService,
                private toastrService: ToastrService,
                private route: ActivatedRoute) {

    }

    handleThumbnailClick(name) {
        this.toastrService.success(name);
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }
}