migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg")

  // update
  collection.schema.addField(new SchemaField({
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
        "watched",
        "plan",
        "drop",
        "wishlist"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg")

  // update
  collection.schema.addField(new SchemaField({
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
        "drop",
        "wishlist"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
