import {Component, Output, Input, EventEmitter, ViewChild, ElementRef, HostListener, TemplateRef} from '@angular/core';
import {DomSanitizer, SafeStyle, SafeUrl} from '@angular/platform-browser';
import {NgSelectOption} from './selectbox';
import {NgSelectBox} from './selectbox';

@Component({
    selector: 'ng-select',
    templateUrl: 'select.component.html',
    styleUrls: ['style.scss']
})
export class NgSelectComponent {

    @Output() public change: EventEmitter<NgSelectOption<any>> = new EventEmitter<NgSelectOption<any>>();
    @Input() public box: NgSelectBox<any>;
    @Input() public itemContent: TemplateRef<any>;
    @Input() public itemSelectedContent: TemplateRef<any>;
    @Input() public fallbackContent: TemplateRef<any>;
    @Input() public selectedItem: number;

    @ViewChild('ngSelect') element: ElementRef;
    isOpen: boolean = false;
    selected: any;

    constructor(private sanitizer: DomSanitizer) {
    }

    @HostListener('document:click', ['$event'])
    public blurMenu(event): void {
        if (this.isOpen && event.target !== this.element.nativeElement) {
            this.toggleMenu(null);
        }
    }

    public toggleMenu(event: any): void {
        if (event) {
            // if event is null we should not stop the propagation
            event.stopPropagation();
        }

        this.isOpen = !this.isOpen;
    }

    public select(item: NgSelectOption<any>): void {
        if (item) {
            if (this.selected) {
                this.selected.active = false;
            }

            item.active = true;
            this.selected = item;
            this.change.emit(item);
        }
    }

    public getImagePrerequisites(): NgSelectOption<any>[] {
        return this.box.items
            .filter(item => item.image)
            .filter(item => item.image.path)
            .filter(item => item.image.valid !== false)
            .filter(item => item.image.loaded !== true);
    }

    public bypassImage(item: NgSelectOption<any>): SafeStyle {
        if (item && item.image && item.image.valid !== false) {
            return this.sanitizer.bypassSecurityTrustStyle(`url('${item.image.path}')`);
        } else {
            return null;
        }
    }

    public bypassUrl(item: NgSelectOption<any>): SafeUrl {
        if (item && item.image && item.image.valid !== false) {
            return this.sanitizer.bypassSecurityTrustUrl(item.image.path);
        } else {
            return null;
        }
    }
}
