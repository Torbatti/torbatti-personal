migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("847f3mihgse2nfs")

  // remove
  collection.schema.removeField("2pr7eysu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrqgstjm",
    "name": "animation_seasons",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2pr7eysu",
    "name": "animation_seasons",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("zrqgstjm")

  return dao.saveCollection(collection)
})
