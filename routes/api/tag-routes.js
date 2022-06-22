const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {

		const tagsData = await Tag.findAll({ include: Product });

		if (!tagsData) {
			res.status(404).json({ message: "No tags found" });
			return;
		};

		res.status(200).json({ 
      message: "Successfully retrieved tags",
      data: tagsData
    });

	} catch (err) {

		res.status(500).json({ 
      message: "Internal server error",
      error: err 
    });

	};

});

router.get('/:id', async ({ params: { id }}, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  if (!/^[0-9]+$/.test(id)) {
    res.status(400).json({ message: "Bad request, id must be a number" });
    return;
  };

  try {

		const tagData = await Tag.findByPk(id, { include: Product });

		if (!tagData) {
			res.status(404).json({ message: "No tag with that id found" });
			return;
		};

		res.status(200).json({ 
      message: "Successfully retrieved tag",
      data: tagData
    });

	} catch (err) {

		res.status(500).json({ 
      message: "Internal server error",
      error: err 
    });

	};

});

router.post('/', async ({ body, body: { tag_name} }, res) => {
  // create a new tag
  if (!tag_name) {
    res.status(400).json({ message: "Bad request, must include a non-empty tag_name" });
    return;
  };

  try {

    const createTag = await Tag.create(body);

    res.status(200).json({ 
      message: "Successfully created tag",
      data: createTag
    });

  } catch (err) {

    res.status(500).json({ 
      message: "Internal server error",
      error: err 
    });

  };

});

router.put('/:id', async ({ body, body: { tag_name }, params }, res) => {
  // update a tag's name by its `id` value
  if (!tag_name) {
    res.status(400).json({ message: "Bad request, must include a non-empty tag_name" });
    return;
  };

  if (!/^[0-9]+$/.test(params.id)) {
    res.status(400).json({ message: "Bad request, id must be a number" });
    return;
  };

  try {

    const beforeData = await Tag.findByPk(params.id);

    if (tag_name === beforeData.tag_name) {
      res.status(202).json({ message: "No changes made, tag already has that name" });
      return;
    };

    await Tag.update(body, { where: { id: params.id } });
    const afterData = await Tag.findByPk(params.id);

    res.status(200).json({ 
      message: "Successfully updated tag",
      data: afterData
    });

  } catch (err) {

    if (!err.length) {
      res.status(404).json({ message: "Unable to update tag" });
      return;
    };

    res.status(500).json({ 
      message: "Internal server error",
      error: err 
    });

  };

});

router.delete('/:id', async ({ params }, res) => {
  // delete on tag by its `id` value
  if (!/^[0-9]+$/.test(params.id)) {
    res.status(400).json({ message: "Bad request, id must be a number" });
    return;
  };

  try {

    const beforeData = await Tag.findByPk(params.id);
    const deleteTag = await Tag.destroy({ where: { id: params.id } });

    if (!deleteTag) {
      res.status(404).json({ message: "No tag with that ID found" });
      return;
    }

    res.status(200).json({ 
      message: "Successfully deleted category",
      data: beforeData
    });

  } catch (err) {

    res.status(500).json({ 
      message: "Internal server error",
      error: err 
    });

  };

});

module.exports = router;
