import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequestSender} from './request.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        RequestSender,
    ],
    providers: [
        RequestSender,
    ]
})
export class NgHttpModule {
}
