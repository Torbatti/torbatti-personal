migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("847f3mihgse2nfs")

  // update
  collection.schema.addField(new SchemaField({
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
        "done",
        "plan",
        "drop",
        "wishlist"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("847f3mihgse2nfs")

  // update
  collection.schema.addField(new SchemaField({
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
        "done",
        "plan",
        "drop"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
