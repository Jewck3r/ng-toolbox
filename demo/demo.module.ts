import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {routes} from './demo.routes';
import {DemoComponent} from './demo.component';
import {NgSelectModule} from '../ngselect/select.module';
import {NgSelectDemoComponent} from './ngselect/component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes),
        NgSelectModule,
    ],
    exports: [
        RouterModule,
    ],
    declarations: [
        DemoComponent,
        NgSelectDemoComponent,
    ],
    bootstrap: [
        DemoComponent,
    ]
})
export class BaseDemoModule {
}
