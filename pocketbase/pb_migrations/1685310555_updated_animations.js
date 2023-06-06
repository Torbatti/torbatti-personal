migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("847f3mihgse2nfs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wa4nt5yl",
    "name": "animation_series",
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
  const collection = dao.findCollectionByNameOrId("847f3mihgse2nfs")

  // remove
  collection.schema.removeField("wa4nt5yl")

  return dao.saveCollection(collection)
})
