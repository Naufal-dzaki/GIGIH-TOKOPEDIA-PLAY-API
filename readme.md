
# GIGIH Fake Tokopedia Play Api 

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Configuration](#configuration)
* [Running-Server](#running-server)
* [API-Documentation](#api-documentation)
  * [Videos](#videos)
  * [Products](#products)
  * [Comments](#comments)


## Prerequisites
Before running the project, make sure you have the following software installed on your machine:
 * [Node.js-(V18)] (https://nodejs.org/)
 * [MongoDB-(v6)] (https://www.mongodb.com/)


## Installation
1. clone the project repository to your local machine
```
git clone https://github.com/Naufal-dzaki/GIGIH-TOKOPEDIA-PLAY-API.git
```
2. Open a terminal or command prompt, navigate to the project's root directory, and install the required dependencies by running:
```
npm install
```


## Configuration
Make sure you have MongoDB installed and running. By default, MongoDB runs on localhost and port 27017. If your MongoDB instance is running on a different host or port, make sure to update the connection settings in the ./config/development.json file.
```
{
    "PORT": 8080,
    "DB_URL": "mongodb://127.0.0.1:27017/tokopedia_play_db"
}
```


## Running Server
To start the Express.js server and run the API, run the following command in the terminal:
```
npm run dev
```


## API Documentation

### Videos

#### 1. Video's Collection Structure
| Key | Type | Description |
| --- | ------|-------------|
| _id | Number | unique identifier |
| title | String | title for the video |
| img_url | String | URL for the video's thumbnail |
| createdAt | date | Auto generate by mongoDB |
| updatedAt | date | Auto generate by mongoDB |

### 2. Video's API Structure
**a. Get Videos Thumbnail List**
***End Point***
```bash
Method: GET
URL: http://localhost:8080/api/videos
```

***Response:***
```js
{
  "message": "Successfully fetched video list",
  "data": [
    {
      "_id": 1234,
      "title": "PAY DAY BAGI-BAGI DISKON",
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKeRcGiOBkpjuegjMY8_ZXBZzFspd-eSnTA&usqp=CAU",
      "createdAt": "2023-07-19T15:50:23.829Z",
      "updatedAt": "2023-07-19T15:50:23.829Z"
    },
    {
      "_id": 5678,
      "title": "JUMAT BERKAH DISKON 20%",
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKeRcGiOBkpjuegjMY8_ZXBZzFspd-eSnTA&usqp=CAU",
      "createdAt": "2023-07-19T15:50:23.829Z",
      "updatedAt": "2023-07-19T15:50:23.829Z"
    }
  ]
}
```

***status code:*** 200

### Products

#### 1. Product's Collection Structure
| Key | Type | Description |
| --- | ------|-------------|
| _id | Number | unique identifier |
| video_id | Number | video's collection unique identifier |
| product_url | String | URL for the product link |
| title | String | title for the product |
| price | Number | price for the product |
| createdAt | date | Auto generate by mongoDB |
| updatedAt | date | Auto generate by mongoDB |

### 2. Product's API Structure
**a. Get Products List**
***End Point***
```bash
Method: GET
URL: http://localhost:8080/api/products/:videos_id
```

***Response:***
```js
{
  "message": "Successfully fetched product list",
  "data": [
    {
      "_id": 2341,
      "video_id": 1234,
      "product_url": "tokopedia.com/pengupas-buah",
      "title": "Alat Pengupas Buah",
      "price": 20000,
      "createdAt": "2023-07-19T15:50:23.829Z",
      "updatedAt": "2023-07-19T15:50:23.829Z"
    },
    {
      "_id": 3412,
      "video_id": 1234,
      "product_url": "tokopedia.com/cangkul",
      "title": "Cangkul Murah Meriah",
      "price": 40000,
      "createdAt": "2023-07-19T15:50:23.829Z",
      "updatedAt": "2023-07-19T15:50:23.829Z"
    }
  ]
}
```

***status code:*** 200

### Comments

#### 1. Comment's Collection Structure
| Key | Type | Description |
| --- | ------|-------------|
| _id | Number | unique identifier |
| video_id | Number | video's collection unique identifier |
| username | String | The name of the commenter |
| comment | String | message from the commenter |
| createdAt | date | Auto generate by mongoDB |
| updatedAt | date | Auto generate by mongoDB |

### 2. Comment's API Structure
**a. Submit Comment**
***End Point***
```bash
Method: POST
URL: http://localhost:8080/api/comments/
```

***body request:***
```js
{
  "video_id": 5678,
  "username": "naufal",
  "comment": "Hoodienya ada warna apa aja kak?"
}
```

***Response:***
```js
{
  "message": "Comment submited successfully!"
}
```

***status code:*** 201

**b. Get Comment's List**
***End Point***
```bash
Method: GET
URL: http://localhost:8080/api/comments/:videos_id
```

***Response:***
```js
{
  "message": "Successfully fetched comment list",
  "data": [
    {
      "_id": 97040,
      "video_id": 5678,
      "username": "naufal",
      "comment": "Hoodienya ada warna apa aja kak?",
      "createdAt": "2023-07-28T02:17:21.403Z",
      "updatedAt": "2023-07-28T02:17:21.403Z",
      "__v": 0
    },
    {
      "_id": 66963,
      "video_id": 5678,
      "username": "dzaki",
      "comment": "Kaos polos warna putih apa ada kak?",
      "createdAt": "2023-07-28T02:18:35.339Z",
      "updatedAt": "2023-07-28T02:18:35.339Z",
      "__v": 0
    }
  ]
}
```

***status code:*** 200
