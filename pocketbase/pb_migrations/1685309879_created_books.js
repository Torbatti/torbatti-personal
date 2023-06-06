migrate((db) => {
  const collection = new Collection({
    "id": "2auq9q0hiowkcvv",
    "created": "2023-05-28 21:37:59.501Z",
    "updated": "2023-05-28 21:37:59.501Z",
    "name": "books",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xsmtmxx9",
        "name": "book_title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ybyyabtn",
        "name": "book_publisher",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qzstberr",
        "name": "book_author",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "7z4t3oq4",
        "name": "page_number",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ybdjuq7l",
        "name": "book_rate",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 10
        }
      },
      {
        "system": false,
        "id": "1gx3jmgi",
        "name": "book_state",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "reading",
            "done",
            "plan",
            "wishlist"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv");

  return dao.deleteCollection(collection);
})
