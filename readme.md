# GIGIH TOKOPEDIA PLAY

Welcome to the Tokopedia Play Replica project! This is a frontend application aimed at replicating some of the features of Tokopedia Play. Tokopedia Play Replica allows users to view video thumbnails, access video details along with associated products, interact with comments, and gracefully handle unknown pages with a custom 404 page.

## Features

**1. Home Page** - Users can see a list of video thumbnails on the home page. 

**2. Detail Video Page** - when visit a specific video page, users can see a list of associated products, and engage with the comments section.

**3. Comments interaction** - Users can read existing comments on video pages and post new comments.

**4. 404 Not Found Page** - If a user tries to access an unknown page, they will be redirected to a custom 404 page. 

## Prerequisites

Before running the project, make sure you have the following software installed on your machine:
 * [Node.js-V18](https://nodejs.org/)
 * [MongoDB-(v6)](https://www.mongodb.com/)

## Installation

**1. Clone the Repository:** Use `git clone` to clone this repository to your local machine.

```
git clone https://github.com/Naufal-dzaki/GIGIH-TOKOPEDIA-PLAY-API.git
cd GIGIH-TOKOPEDIA-PLAY-API
```

**2. Install Dependencies:** Install the required dependencies using a package manager like npm or yarn.
```
npm install
# or
yarn install
```

**3. Configuration:** MongoDb Configuration

Create a `.env` file in the root directory of your project. If it doesn't exist already, you can create it or rename .env.axample to .env. This file will store your environment variables. and add mongoDB configuration there.
```
MONGODB_URI='mongodb+srv://<user>:<password>@atlascluster.n0t5pzb.mongodb.net/<db name>?retryWrites=true&w=majority'
PORT=3080
```

**4. Run the App:** Start the development server to run the app locally.
```
npm run dev
# or
yarn run dev
```

## Schema Database

### A. Videos

**1. Videos's Collection Structure**

| Key       | Type     | Description                   |
|-----------|----------|-------------------------------|
| _id       | ObjectId | unique identifier             |
| title     | String   | title for the video           |
| img_url   | String   | URL for the video's thumbnail |
| video_url | String   | URL for the video             |
| createdAt | date     | Auto generate by mongoDB      |
| updatedAt | date     | Auto generate by mongoDB      |

**2. Videos's API Structure**

**a. Get Videos Thumbnail List**

***End Point***
```bash
Method: GET
URL: http://localhost:3080/api/videos
```

***Response:***
```js
{
  "message": "Successfully fetched video list",
  "data": [
        {
        _id: "64d9d6261accf948a9f4bedc",
        title: 'Rambut Anti kering & bercabang diskon 30%',
        img_url: 'https://images.tokopedia.net/img/cache/296/jJtrdn/2023/8/10/156b11d9-1837-4931-9d11-32e1f1272853.jpg?ect=4g',
        video_url: 'https://www.youtube.com/watch?v=XrXsqzT7rzo',
        createdAt: '2023-08-14T07:12:25.905Z',
        updatedAt: '2023-08-14T07:12:25.905Z'
    },
    {
        _id: "64d9d6261accf948a9f4bedd",
        title: 'Voucher Diskon Besar-Besaran',
        img_url: 'https://images.tokopedia.net/img/cache/296/jJtrdn/2023/8/10/d8e8ed38-1703-4c9e-a929-a17a5f5acd9a.jpg?ect=4g',
        video_url: 'https://www.youtube.com/watch?v=gWo4UllBL08',
        createdAt: '2023-08-14T07:12:25.905Z',
        updatedAt: '2023-08-14T07:12:25.905Z'
    },
  ]
}
```

***status code:*** 200

**b. Get specific Video**

***End Point***
```bash
Method: GET
URL: http://localhost:3080/api/videos/:id
```

***Response:***
```js
{
  "message": "Successfully fetched video",
  "data": [
    {
        _id: "64d9d6261accf948a9f4bedc",
        title: 'Rambut Anti kering & bercabang diskon 30%',
        img_url: 'https://images.tokopedia.net/img/cache/296/jJtrdn/2023/8/10/156b11d9-1837-4931-9d11-32e1f1272853.jpg?ect=4g',
        video_url: 'https://www.youtube.com/watch?v=XrXsqzT7rzo',
        createdAt: '2023-08-14T07:12:25.905Z',
        updatedAt: '2023-08-14T07:12:25.905Z'
    }
  ]
}
```

***status code:*** 200

### A. Products

**1. products's Collection Structure**

| Key         | Type     | Description                          |
|-------------|----------|--------------------------------------|
| _id         | objectId | unique identifier                    |
| video_id    | objectId | video's collection unique identifier |
| product_url | String   | URL for the product link             |
| img_url     | String   | URL for the product image            |
| title       | String   | title for the product                |
| price       | Number   | price for the product                |
| createdAt   | date     | Auto generate by mongoDB             |
| updatedAt   | date     | Auto generate by mongoDB             |

**2. products's API Structure**

**a. Get Products List**

***End Point***
```bash
Method: GET
URL: http://localhost:3080/api/products/:video_id
```

***Response:***
```js
{
  "message": "Successfully fetched product list",
  "data": [
    {
      "_id": "64d9d7d91accf948a9f4bee8",
      "video_id": "64d9d6261accf948a9f4bedc",
      "product_url": 'https://www.tokopedia.com/unilevermall/lifebuoy-sabun-cair-charcoal-refill-825ml-lifebuoy-hair-mist-60ml?extParam=whid%3D7377294',
      "img_url": 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/9/29affd5c-dcbf-447d-a5c6-56f68a11c246.jpg',
      "title": 'Lifebuoy Sabun Cair Charcoal Refill 825Ml + Lifebuoy Hair Mist 60Ml',
      "price": 53400,
      "createdAt": '2023-08-14T07:25:48.242Z',
      "updatedAt": '2023-08-14T07:25:48.242Z'
    },
    {
      "_id": "64d9d7d91accf948a9f4bee9",
      "video_id": "64d9d6261accf948a9f4bedc",
      "product_url": 'https://www.tokopedia.com/unilevermall/lifebuoy-sabun-mandi-cair-shiso-mineral-clay-825ml-hair-mist-60ml?extParam=whid%3D7377294',
      "img_url": 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/9/ddbf4f3a-2feb-4a43-a5d7-ef671f5c77e8.jpg',
      "title": 'Lifebuoy Sabun Mandi Cair Shiso & Mineral Clay 825Ml + Hair Mist 60Ml',
      "price": 53400,
      "createdAt": '2023-08-14T07:25:48.242Z',
      "updatedAt": '2023-08-14T07:25:48.242Z'
    }
  ]
}
```

***status code:*** 200

**2. Comment's API Structure**

**a. Submit Comment**

***End Point***
```bash
Method: POST
URL: http://localhost:3080/api/comments/
```

***body request:***
```js
{
  "video_id": "64d9d6261accf948a9f4bedc",
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
URL: http://localhost:3080/api/comments/:videos_id
```

***Response:***
```js
{
  "message": "Successfully fetched comment list",
  "data": [
    {
      "_id": "64d9d846fd7732e5777cde16",
      "video_id": "64d9d6261accf948a9f4bedc",
      "username": 'adani',
      "comment": 'hai',
      "createdAt": "2023-08-14T07:31:18.929Z",
      "updatedAt": "2023-08-14T07:31:18.929Z",
    },
    {
      "_id": "64daf209b58b920b9b75999c",
      "video_id": "64d9d6261accf948a9f4bedd",
      "username": 'naufal',
      "comment": 'hai',
      "createdAt": "2023-08-15T03:33:29.540Z",
      "updatedAt": "2023-08-15T03:33:29.540Z",
    },
  ]
}
```

***status code:*** 200