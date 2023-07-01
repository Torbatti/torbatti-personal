migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg")

  // remove
  collection.schema.removeField("gfnlwojk")

  // remove
  collection.schema.removeField("gqbmhwst")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ylnoysfp",
    "name": "movie_watch_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "plan",
        "watching",
        "watched",
        "drop"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lqh41utp",
    "name": "movie_seasons_type",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg")

  // add
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

  // remove
  collection.schema.removeField("ylnoysfp")

  // remove
  collection.schema.removeField("lqh41utp")

  return dao.saveCollection(collection)
})
