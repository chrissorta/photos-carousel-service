## Server API for Photos Carousel Service

### Get restaurant photos
  * GET `/api/restaurants/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {

      "restaurant_id": "Number",
      "photo_id": "String",
      "photo": "String",
      "description": "String",
      "date": "Date",
      "category": "String",
      "user_id": "Number",


    }
```

### Add image to restaurant
  * POST `/api/restaurants/:restaurantId/images`

**Path Parameters:**

  * `restaurantId` restaurant id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "restaurant_id": "Number",
      "photo_id": "String",
      "photo": "String",
      "description": "String",
      "date": "Date",
      "category": "String",
      "user_id": "Number",
    }
```

### Update photo info
  * PATCH `/api/restaurants/:restaurantId/:photoId`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "photo": "String",
      "description": "String",
      "date": "Date",
      "category": "String",
      "user_id": "Number",
    }
```

### Delete restaurant
  * DELETE `/api/restaurant/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

