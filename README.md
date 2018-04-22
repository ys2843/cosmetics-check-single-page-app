# Skincare Ingredients Look up Website

This project is designed to build a website for looking up the ingredients of cosmetic products, whether it contains harmful ingredients for pregnant women to use. All the products information is gathered by [sephoraCrawler project](https://github.com/ys2843/sephoraCrawler) , which is a web spider written in Python. The database includes all female products information(7000+) on [www.sephora.com](www.sephora.com).

## Getting Started

To run the client,

+ First install the packages, enter `npm install`
+ Run the client on localhost `npm start`. And open http://localhost:3000/.


## Project Outline

This project is designed to implement a database back-end single page application, which is mainly used for checking whether a skincare product is safe to use during pregnancy. By using this app, users can search by name or brand to look up a certain cosmetic, and the relevant information is displayed with a noticeable sign indicating if it is safe for pregnant or contains harmful ingredients.

### Design of Front-End

Front-End is designed as a SPA (Single page application) that it manages all the routing and data flow on client side. In this project, React which is *a JavaScript library forbuilding user interfaces,* combined with React-Router and Redux which is *a predictable state container forJavaScript apps,* are used to implement the app. 

The app mainly contains 2 functions. One is the search of products and another one is ingredients check.

#### Searching

The home page of the app is the searching page. The text field is focused automatically when entering the site. Users can easily see what this app can do by looking at the self-designed logo. 

After typing a brand or name of a product (for example Clinique) and hit enter, users will be navigated to the display page. The products are arranged by 4 items on each row and 60 items on each page. And on to top below the search bar we can see the total number of search results. At the bottom of the right side there is a pink arrow used to scroll up to the top for convenient. And there is a sign floating on the left indicating that green avatar means unknown ingredients found and red avatar means harmful ingredients found. If no avatar appears on a product card, it means it is safe for pregnant.

At the bottom of display page, there is a pagination bar. Current page is emphasized by pink background color. On each page, at most 60 items can be displayed. 

When clicking on a product card, a window appears to give amore detailed information of the product. If a product is unsafe, there is a noticeable red sign indicating the harmful ingredients in it. Users can check details and ingredients about the item and go to its website on Sephora store by clicking the picture.

#### Ingredients Check

Another function in front-end is ingredients check, it allows users to find out harmful ingredients in a string.

If no harmful ingredients found, blue alert appears. If harmful ingredients found, red alert appears with specific words highlighted in yellow.
