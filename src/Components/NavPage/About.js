import React from 'react'
import Typography from 'material-ui/Typography';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';

const About = () => (
    <div className='container' style={{paddingTop: '100px', paddingBottom: '50px'}}>
        <Typography variant='display1'>New York University - Advanced Project</Typography>
        <Typography variant='caption' gutterBottom={true}>Developer: Yang Shi, Email: ys2843@nyu.edu</Typography>
        <Typography variant='subheading'>Project Name</Typography>
        <Typography variant='body1' gutterBottom={true}>Skincare Ingredients Look up website for Pregnant
            Women</Typography>
        <Typography variant='subheading'>Project Outline</Typography>
        <Typography variant='body1' gutterBottom={true}>This project is designed to implement a database back-end single
            page application,
            which is mainly used for checking whether a skincare product is safe to use during pregnancy. By using this
            app, users can search by name or brand to look up a certain cosmetic, and the relevant information is
            displayed with a noticeable sign indicating if it is safe for pregnant or contains harmful
            ingredients.</Typography>
        <Typography variant='subheading'>Design and Implementation</Typography>
        <Typography variant='body1' gutterBottom={true}>This project is designed to implement a database back-end single
            page application,
            which is mainly used for checking whether a skincare product is safe to use during pregnancy. By using this
            app, users can search by name or brand to look up a certain cosmetic, and the relevant information is
            displayed with a noticeable sign indicating if it is safe for pregnant or contains harmful
            ingredients.</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Modules</TableCell>
                    <TableCell>Techniques</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Front-End</TableCell>
                    <TableCell>React, React-Router, Redux</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Back-End</TableCell>
                    <TableCell>Node.js, RESTful API, MongoDB</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Web crawler</TableCell>
                    <TableCell>Python, Scrapy, Selenium Web Driver</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Deployment</TableCell>
                    <TableCell>Amazon Web Service, Nginx, Pm2</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <Typography variant='body2'>Design of Web Crawler</Typography>
        <Typography variant='body1' gutterBottom={true}>
            To figure out what ingredients are in a cosmetic, the first step is to gather products data. In this
            project, web crawler technique is used to get the data of popular cosmetics from Sephora website.
            Python is a great language to implement a web crawler, for there are many mature libraries to use. The one
            used in this project is Scrapy, which is an open source and collaborative framework for extracting the data
            you need from websites. In a fast, simple, yet extensible way. Based on Scrapy, Selenium Web Driver,
            which is a suite of tools to automate web browsers across many platforms, is combined to deal with
            JavaScript lazy loading on the web page.
            The main parts of the web crawler are shown below:
        </Typography>
        <Typography variant='body2'>Item fields</Typography>
        <Typography variant='body1' gutterBottom={true}>Item fields is how a product is descripted, it contains the
            attributes of each skincare product and decides the behavior web spider crawling the web page. </Typography>
        <Typography variant='body2'>Spider</Typography>
        <Typography variant='body1' gutterBottom={true}>The function of spider is first going to each category page, and
            then scanning from 1st page to the last page of each category and extracting product URLs, and at last
            following each product URL to parse target cosmetics information. The spider is implemented by several Rule
            objects defined in Scrapy library. A Rule object mainly consists of a rule of filter which is implemented by
            Regular Expression or Xpath, and a callback function to parse the pages that satisfy the rule and generate
            items. </Typography>
        <Typography variant='body1' gutterBottom={true}>The rule in the front has priority over the next one, only when
            a rule is not applicable then the next one will become effective. The first rule
            searches for all sub-category links on the homepage and extract URLs with ‘shop’ key word. The second finds
            the page button and follow its link in order to scan from 1st page to the last and extract all product URLs
            appeared on each page. The last rule follows the links of the product page and call the callback function to
            parse the data.
        </Typography>
        <Typography variant='body2'>Pipelines</Typography>
        <Typography variant='body1' gutterBottom={true}>After the data is parsed as Scrapy items, they are passed into
            pipelines which enable data processing and storing. In this project, we want to figure out whether a product
            contains harmful ingredients for pregnant, this process is done through pipelines. For each item, string
            search is applied to the ingredients field. Harmful ingredients can be found and added to items’ unsafe
            ingredients field. At last, items are sent out and stored into MongoDB.
            According to U.S. FOOD & DRUG website and special thanks to my wife’s help, harmful ingredients are
            sorted out as follow.
        </Typography>
        <Typography variant='body2'>Middleware</Typography>
        <Typography variant='body1' gutterBottom={true}>To deal with JavaScript lazy-loading triggered on products list
            page, middleware is applied. This problem occurs when extracting product URLs, except the first group of
            products, the rest of the products only load when user scrolls down to a specific height on that page. After
            finding out the Ajax way of loading the data, a download middleware which automatically scroll 5 times on
            products list page is applied in order to extract all 5 groups of product URLs.
        </Typography>
        <Typography variant='body2'>Design of Back-End</Typography>
        <Typography variant='body1' gutterBottom={true}>Back-End is implemented in Node.js and designed as RESTful API,
            which means it sends JSON objects as response to clients instead of HTML content. Server is deployed on an
            AWS EC2 Linux instance. Its function is very simple that it searches the products in the database and return
            the target products which containing the user specified content in its name and brand field.
            The server mainly consists of three parts, model, controller and router. Details are shown below.
        </Typography>
        <Typography variant='body2'>Model</Typography>
        <Typography variant='body1' gutterBottom={true}>Model defines the data structure of a product that is consistent
            with the object in database, and used to communicate with the database. It also has the same attributes as
            the item in web crawler project.
        </Typography>
        <Typography variant='body2'>Controller</Typography>
        <Typography variant='body1' gutterBottom={true}>Controller is responsible for fetching data from the database.
            There are two functions in it, one is for fetching product information and another one is used to return the
            number of products found.
            Controller is designed to return at most 60 items a time which is the maximum number of products displayed
            on a page. To implement pagination, it receives an integer as parameter which represents the page number,
            and when query the database it skips first 60*page number items to return the corresponding products to the
            clients.
        </Typography>
        <Typography variant='body2'>Route</Typography>
        <Typography variant='body1' gutterBottom={true}>In router, it exposes two API corresponding to the tow functions
            in controller.
            Because the communication between client and server is through Ajax (Asynchronous JavaScript and XML), which
            does not allow cross origin accessing, while origin is defined as the combination of protocol, domain and
            port number. An important function implemented in router module is that it adds CORS (Cross-Origin Resource
            Sharing) header to the response to enable data accessing from other sources, since front-end is not hosted
            in the same domain.
        </Typography>
        <Typography variant='body2'>Design of Front-End</Typography>
        <Typography variant='body1' gutterBottom={true}>Front-End is designed as a SPA (Single page application) that it
            manages all the routing and data flow on client side. In this project, React which is a JavaScript library
            for building user interfaces, combined with React-Router and Redux which is a predictable state
            container for JavaScript apps, are used to implement the app.
            The app mainly contains 2 functions. One is the search of products and another one is ingredients check.
        </Typography>
        <Typography variant='body2'>Searching</Typography>
        <Typography variant='body1' gutterBottom={true}>The home page of the app is the searching page as shown in
            figure 5. The text field is focused automatically when entering the site. Users can easily see what this app
            can do by looking at the self-designed logo.
        </Typography>
        <Typography variant='body1' gutterBottom={true}>After typing a brand or name of a product (for example Clinique)
            and hit enter, users will be navigated to the display page as shown in figure 6. The products are arranged
            by 4 items on each row and 60 items on each page. And on to top below the search bar we can see the total
            number of search results. At the bottom of the right side there is a pink arrow used to scroll up to the top
            for convenient. And there is a sign floating on the left indicating that green avatar means unknown
            ingredients found and red avatar means harmful ingredients found. If no avatar appears on a product card, it
            means it is safe for pregnant.
        </Typography>
        <Typography variant='body1' gutterBottom={true}>At the bottom of display page, there is a pagination bar.
            Current page is emphasized by pink background color. On each page, at most 60 items can
            be displayed.
        </Typography>
        <Typography variant='body1' gutterBottom={true}>When clicking on a product card, a window appears to give a more
            detailed information of the product. If a product is unsafe, there is a noticeable red
            sign indicating the harmful ingredients in it. Users can check details and ingredients about the item and go
            to its website on Sephora store by clicking the picture.
        </Typography>
        <Typography variant='body2'>Ingredients Check</Typography>
        <Typography variant='body1' gutterBottom={true}>Another function in front-end is ingredients check, it allows
            users to find out harmful ingredients in a string.
        </Typography>
        <Typography variant='body1' gutterBottom={true}>If no harmful ingredients found, blue alert appears. If harmful
            ingredients found, red alert appears with specific words highlighted in yellow.
        </Typography>
    </div>
)

export default About
