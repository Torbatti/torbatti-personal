migrate((db) => {
  const collection = new Collection({
    "id": "14qbs7xvklre0cs",
    "created": "2023-07-01 18:12:28.111Z",
    "updated": "2023-07-01 18:12:28.111Z",
    "name": "games",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6kh5ixkn",
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
        "id": "dzagvdfy",
        "name": "game_platform",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Not Set"
          ]
        }
      },
      {
        "system": false,
        "id": "wopn4efx",
        "name": "game_state_play",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Not Set"
          ]
        }
      },
      {
        "system": false,
        "id": "zsefuzcc",
        "name": "game_state_buy",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Not Set"
          ]
        }
      },
      {
        "system": false,
        "id": "k6eoi9pj",
        "name": "game_release_date",
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
        "id": "vhuhoxxf",
        "name": "game_link_one",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "pcwh9n2i",
        "name": "game_link_two",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "y1uyp06e",
        "name": "game_link_three",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "wlavkers",
        "name": "game_developer",
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
        "id": "cf1zfxbo",
        "name": "game_publisher",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("14qbs7xvklre0cs");

  return dao.deleteCollection(collection);
})
