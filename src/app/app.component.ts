import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {AngularFeaturesComponent} from './angular-features/angular-features.component';

@Component({
    selector: 'app-root',
    imports: [
        NavigationComponent,
        AngularFeaturesComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
