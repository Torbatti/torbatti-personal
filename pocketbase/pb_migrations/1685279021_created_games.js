migrate((db) => {
  const collection = new Collection({
    "id": "4tua9dz9d3yeo2y",
    "created": "2023-05-28 13:03:41.879Z",
    "updated": "2023-05-28 13:03:41.879Z",
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
          "min": 1,
          "max": 10
        }
      },
      {
        "system": false,
        "id": "8sili7mw",
        "name": "game_state",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "plan",
            "done",
            "doing",
            "drop"
          ]
        }
      },
      {
        "system": false,
        "id": "7zk2pk0x",
        "name": "buy_state",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "buy",
            "plan",
            "refund"
          ]
        }
      },
      {
        "system": false,
        "id": "zdprbogw",
        "name": "game_platform",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "ps1",
            "ps2",
            "ps3",
            "ps4",
            "ps5",
            "steam",
            "epicgames",
            "gog",
            "xbox 360",
            "xbox series",
            "nintendo switch",
            "psp",
            "psvita"
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
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y");

  return dao.deleteCollection(collection);
})
