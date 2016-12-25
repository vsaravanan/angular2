
import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-zippy',
    templateUrl: './zippy.component.html',
    styleUrls: ['./zippy.component.css'],

})
export class ZippyComponent {
    isExpanded = false;
    @Input() title: string;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}