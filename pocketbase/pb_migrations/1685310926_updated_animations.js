migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("847f3mihgse2nfs")

  // remove
  collection.schema.removeField("wa4nt5yl")

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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gptwpmwr",
    "name": "animation_state",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("847f3mihgse2nfs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wa4nt5yl",
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

  // remove
  collection.schema.removeField("2pr7eysu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gptwpmwr",
    "name": "field",
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
