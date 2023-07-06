migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4tua9dz9d3yeo2y",
    "created": "2023-05-28 13:03:41.879Z",
    "updated": "2023-06-07 19:23:08.829Z",
    "name": "games",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ncy2ht2r",
        "name": "game_title",
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
        "id": "t2uyzpcb",
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
        "id": "5lxqhldd",
        "name": "game_rate",
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
        "id": "4tnhn5l3",
        "name": "game_platform",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "xbox",
            "psx",
            "pc",
            "other"
          ]
        }
      },
      {
        "system": false,
        "id": "k7qevh1s",
        "name": "game_buy_state",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "owned",
            "wishlist"
          ]
        }
      },
      {
        "system": false,
        "id": "p7hjltwx",
        "name": "game_buy_priority",
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
        "id": "v56qpdty",
        "name": "game_play_state",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "plan",
            "playing",
            "played",
            "drop"
          ]
        }
      },
      {
        "system": false,
        "id": "y71s2auq",
        "name": "game_play_priority",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 5
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
