migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("847f3mihgse2nfs");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "847f3mihgse2nfs",
    "created": "2023-05-28 21:42:57.718Z",
    "updated": "2023-06-07 08:28:09.377Z",
    "name": "animations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nqucoojs",
        "name": "animation_title",
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
        "id": "zx4uec44",
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
        "id": "v2l126c8",
        "name": "animation_rate",
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
        "id": "ktis8bct",
        "name": "animation_type",
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
        "id": "zrqgstjm",
        "name": "animation_seasons",
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
        "id": "gptwpmwr",
        "name": "animation_state",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "watching",
            "watched",
            "plan",
            "drop",
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
})
