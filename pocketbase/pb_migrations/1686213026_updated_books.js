migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // remove
  collection.schema.removeField("1gx3jmgi")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // add
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
        "درحال خوانده شدن",
        "خوانده خواهد شد",
        "خوانده شده است",
        "سبد خرید",
        "رها شده"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
