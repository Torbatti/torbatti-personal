migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14qbs7xvklre0cs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u3epimub",
    "name": "game_rate",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14qbs7xvklre0cs")

  // remove
  collection.schema.removeField("u3epimub")

  return dao.saveCollection(collection)
})
