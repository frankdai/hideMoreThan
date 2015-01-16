# hideMoreThan jQuery Plugin

This is a very basic jQuery plugin which is used to show and hide certain member of a HTML element collection if they are simply too much of them. For example, if you have HTML

```html
<ol>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ol>
```

Then you can hide any element larger than 3th by 

```javascript
$('li').hideMoreThan({max:3})
```

And HTML will changed to 
```html
<ol>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <div class="hideout">Show More</div>
</ol>
```

Click on the Show More button will show or hide on toggle action.

Options are followed:

| options | type | explaination | default value |
| ------- | :--: |------------ | :-------------: |
| max | number | number of elements to be always visible | 7 |
| ondisplay* | function | function to be fired when all the elements are showed | empty function |
| onhide* | function | function to be fired when limited number of elements are showed | empty function |
| htmlOnDisplay | string | innerHTML of the hideout div element when all the elements are showed | 'Show Less' |
| htmlOnHide | string | innerHTML of the hideout div element when limited number of elements are showed | 'Show More' |
| toggleClass | string | class name to be toggled when hideout div element show and hide | 'show'

*Both onhide and on display will accept only one optional argument called element

```javascript
$('li').hideMoreThan({
		'max':10,
		ondisplay:function(element){console.log(element)},
		onhide:function(element){console.log(element)}
	});
```

This element is referring to the hideout element with jQuery version i.e. $('.hideout) so you can call all the jQuery method for this element. 
