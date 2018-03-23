# Skincare Ingredients Look up Website

This project is designed to build a website for looking up the ingredients of cosmetic products, whether it contains harmful ingredients for pregnant women to use. All the products information is gathered by [sephoraCrawler project](https://github.com/ys2843/sephoraCrawler) , which is a web spider written in Python. The database includes all female products information(7000+) on [www.sephora.com](www.sephora.com).

## Getting Started

To run the server,  

+ First install the related packages, `cd server` and type `pip install requirements.txt`
+ Then run the server by `./View.py`

To run the client,

+ First install the packages, enter `npm install`
+ Run the client on localhost `npm start`. And open http://localhost:3000/.


## Project Outline

The website is designed as a single page app using [React](https://github.com/facebook/react), [React-Router](https://github.com/ReactTraining/react-router) and [React-Redux](https://github.com/reactjs/react-redux). Client request data from the server by Ajax. Backend is implemented in Restful API using Flask.