# Skincare Ingredients Look up Website

This project is designed to build a website for looking up the ingredients of cosmetic products, whether it contains harmful ingredients for pregnant women to use. All the products information is gathered by [sephoraCrawler project](https://github.com/ys2843/sephoraCrawler) , which is a web spider written in Python. The database includes all female products information(7000+) on [www.sephora.com](www.sephora.com).

## Getting Started

To run the client,

+ First install the packages, enter `npm install`
+ Run the client on localhost `npm start`. And open http://localhost:3000/.


## Project Outline

This project is designed to implement a database back-end single page application, which is mainly used for checking whether a skincare product is safe to use during pregnancy. By using this app, users can search by name or brand to look up a certain cosmetic, and the relevant information is displayed with a noticeable sign indicating if it is safe for pregnant or contains harmful ingredients.

###Design of Front-End

Project URL: <https://github.com/ys2843/SkincareWebProject>

Front-End is designed as a SPA (Single page application) thatit manages all the routing and data flow on client side. In this project, Reactwhich is *a JavaScript library forbuilding user interfaces [4],* combined with React-Router and Redux which is *a predictable state container forJavaScript apps [5],* are used to implement the app. 

The app mainly contains 2 functions. One is the search ofproducts and another one is ingredients check.

##### **Searching**

The home page of the app is the searching page as shown in figure 1. The text field is focused automatically when entering the site. Users caneasily see what this app can do by looking at the self-designed logo. 

 

​						![Screen%20Shot%202018-04-21%20at%2010.09.31%20PM.png](file://localhost/Users/shiyang/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image002.png)

​									Figure 1 Home page

After typing a brand or name of a product (for exampleClinique) and hit enter, users will be navigated to the display page as shownin figure 2. The products are arranged by 4 items on each row and 60 items oneach page. And on to top below the search bar we can see the total number ofsearch results. At the bottom of the right side there is a pink arrow used toscroll up to the top for convenient. And there is a sign floating on the left indicatingthat green avatar means unknown ingredients found and red avatar means harmfulingredients found. If no avatar appears on a product card, it means it is safefor pregnant.

![Screen%20Shot%202018-04-21%20at%2010.14.23%20PM.png](file://localhost/Users/shiyang/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image004.png)

​									Figure 2 Product display

As we can see in figure 3 at the bottom of display page,there is a pagination bar. Current page is emphasized by pink background color.On each page, at most 60 items can be displayed. 

![Screen%20Shot%202018-04-21%20at%2010.23.42%20PM.png](file://localhost/Users/shiyang/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image006.png)

​								Figure 3 Product display bottom

When clicking on a product card, a window appears to give amore detailed information of the product as shown in figure 4. If a product isunsafe, there is a noticeable red sign indicating the harmful ingredients in it.Users can check details and ingredients about the item and go to its website onSephora store by clicking the picture.

![Screen%20Shot%202018-04-21%20at%2010.35.34%20PM.png](file://localhost/Users/shiyang/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image008.png)

​									Figure 4 Product information

##### **Ingredients Check**

Another function in front-end is ingredients check, it allowsusers to find out harmful ingredients in a string.

![Screen%20Shot%202018-04-21%20at%2010.38.10%20PM.png](file://localhost/Users/shiyang/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image010.png)

​									Figure 5 Ingredients check

If no harmful ingredients found, blue alert appears. Ifharmful ingredients found, red alert appears with specific words highlighted inyellow.

![Screen%20Shot%202018-04-21%20at%2010.38.33%20PM.png](file://localhost/Users/shiyang/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image012.png)

​										Figure 6 Safe result

![Screen%20Shot%202018-04-21%20at%2010.39.04%20PM.png](file://localhost/Users/shiyang/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image014.png)

​								Figure 7 Harmful ingredients found