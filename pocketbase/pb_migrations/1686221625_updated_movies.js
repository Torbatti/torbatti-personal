migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "awbc01dn",
    "name": "movie_seasons_number",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "voqwaxmg",
    "name": "movie_watch_priority",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg")

  // remove
  collection.schema.removeField("awbc01dn")

  // remove
  collection.schema.removeField("voqwaxmg")

  return dao.saveCollection(collection)
})
