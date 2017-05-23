# NgSelect



```html
<ng-select [box]="selectBoxObject" 
           (change?)="onChange($event)"
           [selectedItem]="indexOfSelectedItem"
           [itemContent?]="itemContentTemplateRef"
           [itemSelectedContent?]="itemSelectedContentTemplateRef"></ng-select>
           [fallbackContent?]="fallbackTemplateRef"></ng-select>
```

`?` = optional

**Select box example:**

```
name?: 'formFieldName',
toString?: (item: NgSelectOption<any>) => {
    return item.item.title;
},
items: [{
    value: 1,
    image?: {
        path: 'demo/media/img1.jpg',
        loaded: true
    },
    item: {
        title: 'Image 1'
    }
}, {
    value: 2,
    image?: {
        path: 'demo/media/img2.jpg',
        valid: false
    },
    item: {
        title: 'Image 2'
    }
}]
```

`?` = optional

[See more](selectbox.ts)
