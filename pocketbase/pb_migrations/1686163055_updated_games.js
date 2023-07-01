migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eromwydv",
    "name": "game_played_time",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // remove
  collection.schema.removeField("eromwydv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k7qevh1s",
    "name": "game_own_state",
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
  }))

  return dao.saveCollection(collection)
})
