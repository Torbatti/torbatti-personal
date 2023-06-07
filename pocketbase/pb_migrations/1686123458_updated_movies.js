migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gqbmhwst",
    "name": "movie_type",
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
  }))

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg")

  // remove
  collection.schema.removeField("gqbmhwst")

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
        "drop"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
