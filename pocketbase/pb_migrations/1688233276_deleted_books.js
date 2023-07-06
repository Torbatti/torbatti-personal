migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "2auq9q0hiowkcvv",
    "created": "2023-05-28 21:37:59.501Z",
    "updated": "2023-06-10 16:37:51.867Z",
    "name": "books",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xsmtmxx9",
        "name": "book_title",
        "type": "text",
        "required": false,
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
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "phnb6g03",
        "name": "book_translator",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xl9zq3qb",
        "name": "book_publisher",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fouaf29z",
        "name": "release_date",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ulqa4egf",
        "name": "book_genre",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
          "min": 0,
          "max": 10
        }
      },
      {
        "system": false,
        "id": "f1rlykbw",
        "name": "book_series_type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "مجموعه",
            "تک قسمت"
          ]
        }
      },
      {
        "system": false,
        "id": "gpw2pvak",
        "name": "book_series_title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ypuoczis",
        "name": "book_series_chapters",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vkxqhrib",
        "name": "book_buy_state",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "دارا",
            "خواهان"
          ]
        }
      },
      {
        "system": false,
        "id": "dqvnblsa",
        "name": "book_buy_priority",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 5
        }
      },
      {
        "system": false,
        "id": "3sfwcaow",
        "name": "book_read_state",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "خوانده",
            "درحال",
            "انتظار",
            "پرتاب"
          ]
        }
      },
      {
        "system": false,
        "id": "thztejyp",
        "name": "book_read_priority",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 5
        }
      },
      {
        "system": false,
        "id": "qxp9yewy",
        "name": "book_paper_type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "فیزیکی",
            "مجازی"
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
})
