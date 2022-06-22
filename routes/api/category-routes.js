const router = require('express').Router();
const { request } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {

    const categoryData = await Category.findAll({ include: Product });

    if (!categoryData) {
      res.status(404).json({ message: "No categories found" });
      return;
    }

    res.status(200).json({ 
      message: "Successfully retrieved categories data",
      data: categoryData
    });

  } catch (err) {

    res.status(500).json({ 
      message: "Internal server error",
      error: err 
    });

  };

});

router.get('/:id', async ({ params: { id } }, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {

    const categoryData = await Category.findByPk(id, { include: Product });

    if (!categoryData) {
      res.status(404).json({ message: "No category with that ID found" });
      return;
    }

    res.status(200).json({ 
      message: "Successfully retrieved category",
      data: categoryData
    });

  } catch (err) {

    res.status(500).json({ 
      message: "Internal server error",
      error: err 
    });

  };

});

router.post('/', async ({ body, body: { category_name } }, res) => {
  // create a new category
  if (!category_name) {
    res.status(400).json({ message: "Bad request, must include a category_name" });
    return;
  };

  try {

    const createCategory = await Category.create(body);

    res.status(200).json({ 
      message: "Successfully created category",
      data: createCategory
    });

  } catch (err) {

    res.status(500).json({ 
      message: "Internal server error",
      error: err 
    });

  };

});

router.put('/:id', async ({ body, body: { category_name }, params}, res) => {
  // update a category by its `id` value
  if (!category_name) {
    res.status(400).json({ message: "Bad request, must include a category_name" });
    return;
  };

  if (!/^[0-9]+$/.test(params.id)) {
    res.status(400).json({ message: "Bad request, id must be a number" });
    return;
  };

  try {

    const beforeData = await Category.findByPk(params.id);

    if (category_name === beforeData.category_name) {
      res.status(202).json({ message: "No changes made, category already has that name" });
      return;
    };

    await Category.update(body, { where: { id: params.id } });
    const afterData = await Category.findByPk(params.id);

    res.status(200).json({ 
      message: "Successfully updated category",
      data: afterData
    });

  } catch (err) {

    if (!err.length) {
      res.status(404).json({ message: "Unable to update category" });
      return;
    };

    res.status(500).json({ 
      message: "Internal server error",
      error: err 
    });

  };

});

router.delete('/:id', async ({ params }, res) => {
  // delete a category by its `id` value
  if (!/^[0-9]+$/.test(params.id)) {
    res.status(400).json({ message: "Bad request, id must be a number" });
    return;
  };

  try {

    const beforeData = await Category.findByPk(params.id);
    const deleteCategory = await Category.destroy({ where: { id: params.id } });

    if (!deleteCategory) {
      res.status(404).json({ message: "No category with that ID found" });
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
