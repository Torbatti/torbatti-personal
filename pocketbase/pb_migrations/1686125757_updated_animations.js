migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("847f3mihgse2nfs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ktis8bct",
    "name": "animation_type",
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
  const collection = dao.findCollectionByNameOrId("847f3mihgse2nfs")

  // remove
  collection.schema.removeField("ktis8bct")

  return dao.saveCollection(collection)
})
