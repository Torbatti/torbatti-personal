migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14qbs7xvklre0cs")

  // remove
  collection.schema.removeField("vhuhoxxf")

  // remove
  collection.schema.removeField("pcwh9n2i")

  // remove
  collection.schema.removeField("y1uyp06e")

  // remove
  collection.schema.removeField("wlavkers")

  // remove
  collection.schema.removeField("cf1zfxbo")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14qbs7xvklre0cs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vhuhoxxf",
    "name": "game_link_one",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pcwh9n2i",
    "name": "game_link_two",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y1uyp06e",
    "name": "game_link_three",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlavkers",
    "name": "game_developer",
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
    "id": "cf1zfxbo",
    "name": "game_publisher",
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
})
