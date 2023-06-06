migrate((db) => {
  const collection = new Collection({
    "id": "6bxq67lholp4sjg",
    "created": "2023-05-28 21:53:22.554Z",
    "updated": "2023-05-28 21:53:22.554Z",
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
          "min": 1,
          "max": 10
        }
      },
      {
        "system": false,
        "id": "gfnlwojk",
        "name": "movie_state",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "watching",
            "done",
            "plan",
            "drop"
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
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg");

  return dao.deleteCollection(collection);
})
