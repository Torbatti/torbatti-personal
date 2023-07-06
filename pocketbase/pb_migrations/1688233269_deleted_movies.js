migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "6bxq67lholp4sjg",
    "created": "2023-05-28 21:53:22.554Z",
    "updated": "2023-06-08 10:53:45.302Z",
    "name": "movies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cp5wqeem",
        "name": "movie_title",
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
        "id": "nrquheeu",
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
        "id": "3azpaupk",
        "name": "movie_seasons",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "e5vgpvb2",
        "name": "movie_rate",
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
        "id": "lqh41utp",
        "name": "movie_seasons_type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "series",
            "oneshot"
          ]
        }
      },
      {
        "system": false,
        "id": "awbc01dn",
        "name": "movie_seasons_number",
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
        "id": "ylnoysfp",
        "name": "movie_watch_state",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "plan",
            "watching",
            "watched",
            "drop"
          ]
        }
      },
      {
        "system": false,
        "id": "voqwaxmg",
        "name": "movie_watch_priority",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
