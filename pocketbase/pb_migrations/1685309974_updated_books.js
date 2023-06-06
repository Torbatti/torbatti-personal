migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1gx3jmgi",
    "name": "book_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "reading",
        "done",
        "plan",
        "wishlist",
        "drop"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1gx3jmgi",
    "name": "book_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "reading",
        "done",
        "plan",
        "wishlist"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
