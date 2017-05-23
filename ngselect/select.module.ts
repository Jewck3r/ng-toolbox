import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgSelectComponent} from './select.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        NgSelectComponent,
    ],
    declarations: [
        NgSelectComponent,
    ]
})
export class NgSelectModule {
}
