## June 11th

- Strip down the html as much as possible
- Try and always start to skeleton when you can
- Find out what you need first thing
- Pay attention to it's function, eg; reset() what is it actually being used for
- For this array do this..
- What happens when it loads into the DOM vs exits the DOM
-When X fires does it re-render ?

`X ? ifXTruthy : ifXFalsey`
`this.getAttribute('amount') ?? '0';`
`this.getAttribute('amount') ?? '';

## Compartmentalization

## State
- how to store data 
- how to use getters and setters?
- If things arent private something outside can change it


## Good good

- private in order to force it through a set of functions
`set expenses(data){
    this.#expenses = data;
    this.render();
}`

## Custom Events
