import {Component, OnInit} from '@angular/core';
import {NgSelectOption, NgSelectBox} from '../../ngselect/selectbox';

@Component({
    selector: 'ng-select-demo',

    template: `
        <h2>NgSelect Demo</h2>

        <div style="width: 260px; margin: 5px auto;">
            <h4>Without images</h4>
            <ng-select [box]="selectBox" (change)="onChange($event)"></ng-select>

            <h4>With images</h4>
            <ng-select [box]="selectBoxWithImages" (change)="onChange($event)"></ng-select>
        </div>
    `
})
export class NgSelectDemoComponent implements OnInit {

    selectBox: NgSelectBox<{title: string}>;
    selectBoxWithImages: NgSelectBox<{title: string}>;

    ngOnInit(): void {
        this.selectBox = {
            defaultText: 'choose an item',
            toString: (item: NgSelectOption<{title: string}>) => {
                return item.item.title;
            },
            items: [{
                value: 1,
                item: {
                    title: 'Item 1'
                }
            },{
                value: 2,
                item: {
                    title: 'Item 2'
                }
            }]
        };

        this.selectBoxWithImages = {
            name: 'fieldName',
            toString: (item: NgSelectOption<{title: string}>) => {
                return item.item.title;
            },
            items: [{
                value: 1,
                image: {
                    path: 'demo/media/img1.jpg'
                },
                item: {
                    title: 'Image 1'
                }
            }, {
                value: 2,
                image: {
                    path: 'demo/media/img2.jpg'
                },
                item: {
                    title: 'Image 1'
                }
            }]
        };
    }

    onChange(option: NgSelectOption<{title: string}>): void {
        console.log('selected', option);
    }

}
