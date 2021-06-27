# Shopcart API NodeJS [![Build Status](https://travis-ci.org/leduong/shopcart-nodejs-backend.svg?branch=master)](https://travis-ci.org/leduong/shopcart-nodejs-backend)

DEMO https://aqueous-hollows-62462.herokuapp.com/api

![image](https://user-images.githubusercontent.com/1042749/98623710-dd23fd80-233e-11eb-8838-dc9c57e5de22.png)


## Requirement

- Nodejs 12+
- SQL server (Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server)

## Install package npm and build

```bash
npm install
npm run build:dev
or
npm run build:prod
```

### For development, default http://localhost:3000, change by process.env.PORT

`npm run dev`

## Start

Set ENV for Production, default use SQLite with ENV development/test

ex:

```
$ export NODE_ENV="production"
$ export DATABASE_URL="mysql://username:password@host:port/data"
$ npm start
```

### Testing with Curl, change `https://aqueous-hollows-62462.herokuapp.com` to `http://localhost:3000` on local computer.

Color Enum: `['random', 'red', 'green', 'blue', 'gray', 'black']`

```
// Create a product, http status: 201 create success

$ curl -d '{"name":"iPhone", "branch":"Apple", "color": "black", "price": "99.99"}' -H "Content-Type: application/json" -X POST https://aqueous-hollows-62462.herokuapp.com/api/product

// Get all products
$ curl https://aqueous-hollows-62462.herokuapp.com/api/product

// Get all products with filter params:
    - name, branch, color: string
    - min_price, max_price: number, `require min_price < max_price`
    - sort: enum [`name`, `branch`, `color`, `price`, `created_at`, `updated_at`]
    - order: enum [`asc`, `desc`]
$ curl https://aqueous-hollows-62462.herokuapp.com/api/product?name=DRY&branch=Capital&min_price=10&max_price=2000&color=blue

// Get a product by uuid, http status: 404 product not found
$ curl https://aqueous-hollows-62462.herokuapp.com/api/product/daa50ae7-6363-4de0-af3c-2814515c470b

// Update a product by uuid, http status: 404 product not found
$ curl -d '{"name":"iPhone", "branch":"Apple", "color": "black", "price": "99.99"}' -H "Content-Type: application/json" -X POST https://aqueous-hollows-62462.herokuapp.com/api/product/daa50ae7-6363-4de0-af3c-2814515c470b

// Delete a product by uuid, http status : 204 success, http status: 404 product not found
$ curl -H "Content-Type: application/json" -X DELETE https://aqueous-hollows-62462.herokuapp.com/api/product/daa50ae7-6363-4de0-af3c-2814515c470b


// Create a order, http status: 201 create success
$ curl -d '{"product_id":"daa50ae7-6363-4de0-af3c-2814515c470b", "data":"qty:1,freeship:true..."}' -H "Content-Type: application/json" -X POST https://aqueous-hollows-62462.herokuapp.com/api/order

// Get all orders
$ curl https://aqueous-hollows-62462.herokuapp.com/api/orders

// Get a order by uuid, http status: 404 order not found
$ curl https://aqueous-hollows-62462.herokuapp.com/api/order/daa50ae7-6363-4de0-af3c-2814515c470b

// Update a product by uuid, http status: 404 order not found
$ curl -d '{"product_id":"daa50ae7-6363-4de0-af3c-2814515c470b", "data":"qty:10,freeship:true..."}' -H "Content-Type: application/json" -X POST https://aqueous-hollows-62462.herokuapp.com/api/order/daa50ae7-6363-4de0-af3c-2814515c470b

// Delete a order by uuid, http status : 204 success, http status: 404 order not found
$ curl -H "Content-Type: application/json" -X DELETE https://aqueous-hollows-62462.herokuapp.com/api/order/daa50ae7-6363-4de0-af3c-2814515c470b


// Get all tracking for re-marketing
$ curl https://aqueous-hollows-62462.herokuapp.com/api/remarketing
```
