
# Newsletter Web Application.


A newsletter web application is a platform designed to signup newsletters online. It allows to users send newsletters to a subscriber list.
This newsletter web application is integrated with Mailchimp which is a tool for managing and sending newsletters to your subscribers.
It's a single page simple frontend website with functionality at backend which allows you to sign people up to your mailing list. 



## Demo
Try it in your own browser after the Installation of npm and its packages.: http://localhost:3000/





## Screenshots

![App Screenshot](https://scontent.fpat3-1.fna.fbcdn.net/v/t39.30808-6/350778857_1249138182638246_5468853691035591519_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=QioORlYx-Z8AX_hRiWt&_nc_oc=AQlLk3xNRccGyfHROyP89ZWuuYnXd5S2lkWznalhZdMyq8MkQPck4DZ-qAlGTVfETXE&_nc_ht=scontent.fpat3-1.fna&oh=00_AfBfmNQFE21KzchBr2dDpOrvDBnoBecfUtpFeDkMr92P_Q&oe=64B1F8CC)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Anjali17aj/Newsletter-Web_App
```

Go to the project directory

```bash
  cd Newsletter
```

Install dependencies

```bash
  npm init
```
Keep standard option just by hitting ENTER and then finally, hit ENTER to create Package.JSON

Modules to be installed : body-parser, express and request.
```bash
  npm install body-parser express request
```
Start the server

```bash
  node app.js
```
Visit you web browser :

```bash
  http://localhost:3000/
```

## API Reference - mailchimp

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `alphanumeric` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `numeric` | **Required**. Id of item to fetch |



## Tech Stack
- HTML
- CSS
- JavaScript
- Bootstrap
- Node.js
- Express.js

## API 
- The Mailchimp API


## Lessons Learned

While building a newsletter web application using Node.js, there are several valuable lessons I learned, particularly when working with Node.js, Express.js, and making API calls.

Understanding Node.js : I learned how to use modules and dependencies, manage packages with npm (Node Package Manager), and efficiently handle asynchronous operations using callbacks

Working with Express.js: Express.js is a popular web application framework for Node.js that simplifies the process of building the backend of web applications. I gained knowledge about handling HTTP requests, routing.
Handling HTTP requests: Express.js provided a clean and straightforward API for handling various types of HTTP requests, such as GET, POST, PUT. It allows you to define routes and associate them with specific request methods to handle incoming client requests.

API Integration: Integrating external APIs, such as the Mailchimp API for newsletter functionality, taught me how to make API calls from the backend to interact with third-party services. Additionally, I understood the importance of securely storing and managing API keys to protect sensitive information.
