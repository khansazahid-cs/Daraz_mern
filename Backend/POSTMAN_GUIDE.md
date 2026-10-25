# Daraz Backend - customized to your uploaded folder

This is based on your uploaded `Mern_stack/Backend` structure. Existing models and auth signup were kept. CRUD controllers/routes were added for the other 12 models.

## Run it
1. Extract this ZIP.
2. Open terminal in `Mern_stack/Backend`.
3. Run `npm install` if needed.
4. Make sure MongoDB is running and `.env` contains:
   `MONGODB_URL=mongodb://localhost:27017/Daraz`
5. Run `node server.js`.

Your server runs at `http://localhost:5001`. Your existing signup stays:
`POST http://localhost:5001/api/auth/signup`

## Postman endpoints
Each resource supports POST, GET all, GET one by ID, PUT by ID, DELETE by ID.

- Category: `/api/categories`
- Product: `/api/products`
- Order: `/api/orders`
- Cart: `/api/cart`
- Review: `/api/reviews`
- Address: `/api/addresses`
- Wishlist: `/api/wishlist`
- Coupon: `/api/coupons`
- Payment: `/api/payments`
- Banner: `/api/banners`
- Notification: `/api/notifications`
- Seller: `/api/sellers`

Examples use `Body > raw > JSON`.

### 1. Create category
POST `http://localhost:5001/api/categories`
```json
{
  "name": "Electronics",
  "image": "electronics.jpg",
  "description": "Electronic products",
  "isActive": true
}
```

### 2. Create product
First create a category and copy its `_id`. Copy a user `_id` from your `users` collection for `seller`.
POST `http://localhost:5001/api/products`
```json
{
  "name": "Android Mobile",
  "description": "Android smartphone",
  "price": 45000,
  "discountPrice": 42000,
  "stock": 10,
  "image": "mobile.jpg",
  "category": "PASTE_CATEGORY_ID",
  "seller": "PASTE_USER_ID",
  "brand": "Example",
  "rating": 0
}
```

### 3. Create cart
POST `http://localhost:5001/api/cart`
```json
{
  "user": "PASTE_USER_ID",
  "products": [
    { "product": "PASTE_PRODUCT_ID", "quantity": 1 }
  ]
}
```

### 4. Create order
POST `http://localhost:5001/api/orders`
```json
{
  "user": "PASTE_USER_ID",
  "products": [
    { "product": "PASTE_PRODUCT_ID", "quantity": 1, "price": 42000 }
  ],
  "totalAmount": 42000,
  "paymentMethod": "cod",
  "paymentStatus": "pending",
  "orderStatus": "pending"
}
```

### 5. Create review
POST `http://localhost:5001/api/reviews`
```json
{
  "user": "PASTE_USER_ID",
  "product": "PASTE_PRODUCT_ID",
  "rating": 5,
  "comment": "Good product"
}
```

### 6. Create address
POST `http://localhost:5001/api/addresses`
```json
{
  "user": "PASTE_USER_ID",
  "name": "Ali Khan",
  "phone": "03001234567",
  "address": "House 10, Main Road",
  "city": "Lahore",
  "area": "Johar Town",
  "postalCode": "54000",
  "isDefault": true
}
```

### 7. Create wishlist
POST `http://localhost:5001/api/wishlist`
```json
{
  "user": "PASTE_USER_ID",
  "products": ["PASTE_PRODUCT_ID"]
}
```

### 8. Create coupon
POST `http://localhost:5001/api/coupons`
```json
{
  "code": "WELCOME10",
  "discountType": "percentage",
  "discountValue": 10,
  "minimumAmount": 1000,
  "expiryDate": "2027-12-31T23:59:59.000Z",
  "isActive": true
}
```

### 9. Create payment record (test only)
POST `http://localhost:5001/api/payments`
```json
{
  "order": "PASTE_ORDER_ID",
  "user": "PASTE_USER_ID",
  "paymentMethod": "cod",
  "amount": 42000,
  "status": "pending",
  "transactionId": "TEST-001"
}
```
This only saves a database record; it does not charge money.

### 10. Create banner
POST `http://localhost:5001/api/banners`
```json
{
  "title": "Mega Sale",
  "image": "mega-sale.jpg",
  "link": "/products",
  "isActive": true
}
```

### 11. Create notification
POST `http://localhost:5001/api/notifications`
```json
{
  "user": "PASTE_USER_ID",
  "title": "Order update",
  "message": "Your order has been confirmed",
  "type": "order",
  "isRead": false
}
```

### 12. Create seller profile
POST `http://localhost:5001/api/sellers`
```json
{
  "user": "PASTE_USER_ID",
  "shopName": "Ali Electronics",
  "phone": "03001234567",
  "address": "Lahore",
  "rating": 0,
  "isApproved": false
}
```

Replace all `PASTE_*_ID` placeholders with real MongoDB `_id` values. Create Category before Product; create Product before Cart, Order, Review, and Wishlist. In MongoDB Compass, refresh the same `Daraz` database and its collections.

Note: these CRUD endpoints are open for local development. Add login/authentication, authorization and input validation before deploying to the internet.
