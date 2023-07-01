migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4tnhn5l3",
    "name": "game_platform",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "none",
        "xbox",
        "psx",
        "pc",
        "nintendo"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // remove
  collection.schema.removeField("4tnhn5l3")

  return dao.saveCollection(collection)
})
