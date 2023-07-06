migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14qbs7xvklre0cs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dzagvdfy",
    "name": "game_platform",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 15,
      "values": [
        "xbox",
        "xbox360",
        "xboxOne",
        "xboxseriesS",
        "xboxseriesX",
        "psX",
        "ps2",
        "ps3",
        "ps4",
        "ps5",
        "steam",
        "gog",
        "epicgames",
        "itch",
        "nintendoSwitch"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14qbs7xvklre0cs")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
