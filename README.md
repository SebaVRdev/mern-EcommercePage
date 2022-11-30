#MERN Ecommerse
#rm -rf .git //Y tiramos el gitignore para afuera 

#Lessons
1.Introduction
2.Install Tools
3.Create React App
4.Create Git Repository
5.List Products
    1.create products array
    2.add product images
    3.render products
    4.style products
6.Add page routing
    1.npm i react-router-dom
    2.create route for home screen
    3.create router for product screen
7.Create Node.JS Server
    1.run npm init in root folder
    2.Update package.json set type: module
    3.Add .js to imports
    4.npm install express
    5.create server.js
    6.add start command as node backend/server.js
    7.require express
    8.create route for / return backend is ready.
    9.move products.js from frontend to backend
    10.create route for /api/products
    11.return products
    12.run npm start
8.Fetch Products From Backend
    1.set proxy in package.json
    2.npm install axios
    3.use state hook
    4.use effect hook
    5.use reducer hook
9.Manage State By Reducer Hook
    1.define reducer
    2.update fetch data
    3.get state from usReducer
10.Add bootstrap UI Framework
    1.npm install react-bootstrap bootstrap
    1.npm install react-router-bootstrap
    2.update App.js
11.Create Product and Rating Component
    1.create Rating component
    2.Create Product component
    3.Use Rating component in Product component
12.Create Product Details Screen
    1.fetch product from backend
    2.create 3 columns for image, info and action
13.Create Loading and Message Component
    1.create loading component
    2.use spinner component
craete message component
create utils.js to define getError fuction
Create React Context For Add Item To Cart
Create React Context
define reducer
create store provider
implement add to cart button click handler
Complete Add To Cart
check exist item in the cart
check count in stock in backend
Create Cart Screen
create 2 columns
display items list
create action column
Complete Cart Screen
click handler for inc/dec item
click handler for remove item
click handler for checkout
Create Signin Screen
create sign in form
add email and password
add signin button
Connect To MongoDB Database
create atlas monogodb database
install local mongodb database
npm install mongoose
connect to mongodb database
Seed Sample Products
create Product model
create seed route
use route in server.js
seed sample product
Seed Sample Users
create user model
seed sample users
Create Signin Backend API
create signin api
npm install jsonwebtoken
define generateToken
Complete Signin Screen
handle submit action
save token in store and local storage
show user name in header
Create Shipping Screen
create form inputs
handle save shipping address
add checkout wizard bar
Create Sign Up Screen
create input forms
handle submit
create backend api
Implement Select Payment Method Screen
create input forms
handle submit
Create Place Order Screen
show cart items, payment and address
calculate order summary
Implement Place Order Action
handle place order action
create order create api
Create Order Screen
create backend api for order/:id
fetch order api in frontend
show order information in 2 cloumns
Pay Order By PayPal
generate paypal client id
create api to return client id
install react-paypal-js
use PayPalScriptProvider in index.js
use usePayPalScriptReducer in Order Screen
implement loadPaypalScript function
render paypal button
implement onApprove payment function
create pay order api in backend
Display Order History
create order screen
create order history api
use api in the frontend
Create Profile Screen
get user info from context
show user information
create user update api
update user info
Publish To Heroku
create and config node project
serve build folder in frontend folder
Create heroku account
connect it to github
Create mongodb atlas database
Set database connection in heroku env variables
Commit and push
Add Sidebar and Search Box
add sidebar
add search box
Create Search Screen
show filters
create api for searching products
display results
Create Admin Menu
define protected route component
define admin route component
add menu for admin in header
Create Dashboard Screen
create dashboard ui
implement backend api
connect ui to backend
Manage Products
create products list ui
implement backend api
fetch data
Create Product
create products button
implement backend api
handle on click
Create Edit Product
create edit button
create edit product ui
dispaly product info in the input boxes
Implement Update Product
create edit product backend api
handle update click
Upload Product Image
create cloudinary account
use the api key in env file
handle upload file
implement backend api to upload
Delete Product
show delete button
implement backend api
handle on click
List Orders
create order list screen
implement backen api
fetch and display orders
Deliver Order
add deliver button
handle click action
implement backen api for deliver
Delete Order
add delete button
handle click action
implement backen api for delete
List Users
create user list screen
implement backen api
fetch and display users
Edit User
create edit button
create edit product ui
dispaly product info in the input boxes
implement backend api
handle edit click
Delete User
add delete button
handle click action
implement backen api for delete
Choose Address On Google Map
create google map credentials
update .env file with Google Api Key
create api to send google api to frontend
create map screen
fetch google api
getUserLocation
install @react-google-maps/api
use it in shipping screen
apply map to the checkout screen
Email order receipt by mailgun
create mailgun account
add and verify your domain to mailgun
install mailgun-js
set api key in env file
change pay order in orderRouter
send email order receipt
Review Products
create submit review form
handle submit
implement backend api for review
Upload multiple Images
add images to product model
get images in edit screen
show images in product screen