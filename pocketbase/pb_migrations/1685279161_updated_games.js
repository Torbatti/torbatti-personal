migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // update
  collection.schema.addField(new SchemaField({
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
        "drop",
        "not owned"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
