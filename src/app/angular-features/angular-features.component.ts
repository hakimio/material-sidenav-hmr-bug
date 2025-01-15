import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-angular-features',
    imports: [],
    templateUrl: './angular-features.component.html',
    styleUrl: './angular-features.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularFeaturesComponent {
}
