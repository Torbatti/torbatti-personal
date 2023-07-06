migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14qbs7xvklre0cs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wopn4efx",
    "name": "game_state_play",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "plan",
        "playing",
        "played",
        "replaying",
        "drop"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zsefuzcc",
    "name": "game_state_buy",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "bought",
        "wishlist"
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
