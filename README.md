# Development

### Link to Deployed Website
Click [here](https://Indra9527.github.io/Development) to go to the application.

### Goal and Value of the Application
The application is the home page of a mini store that offers many different kinds of items for users to choose from. For each item, users can choose to add it to their shopping cart and see the total price, or they can choose to add it to their favorite list for reference. In addition, it also provides filters and sorters for products so that users can easily find the products they want and like.

### Usability Principles Considered
In terms of user usability, the page provides a filter on the list of items for users to see immediately and provides checkbox, ratio, switch and slider to display the function of each filter and let users know how to filter. At the same time, the shopping cart is on the right side of the list, so users can see it directly and provide good instructions.
In terms of component availability, the parent component just defines useState and uses props to pass values to the child components to render the interface. So it can be as simple as adding and removing child components to change the layout, and basically it's a lightweight, low-coupling page application.

### Organization of Components
I use <App> As the parent component, three child components are provided, namely the `<ProductItem>`, shopping `<Cart>`, and `<FilterGroup>`. They're on the top of the home page, left and right together to form the app.

### How Data is Passed Down Through Components
I use props to pass data to the child components. I import the product data json file into the parent component and pass in the list of items, shopping cart list, likes list, and shopping cart total. <ProductItem> This allows the user to change the contents of the list with button actions. I send the shopping cart list and the total. <Cart>; Ask him to display the content. I pass in a list of items, a list of shopping carts, and a list of likes. `<FilterGroup>` Allow it to modify the product display list.

### How the User Triggers State Changes
I use useState to define these lists and values, and whenever the lists change after the user action, the interface is re-rendered based on the state for real-time interaction.
