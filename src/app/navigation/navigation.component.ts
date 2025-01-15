import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

    protected readonly animals = ['Dog', 'Cat', 'Lion', 'Cow', 'Bird', 'Rabbit', 'Leopard', 'Camel', 'Bear', 'Deer',
        'Fox', 'Pig', 'Goat', 'Horse', 'Zebra', 'Giraffe', 'Donkey'] as const;

}
