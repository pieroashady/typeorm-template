import * as express from "express";
const router = express.Router();
import { Request, Response } from "express";
import { createConnection, getManager } from "typeorm";
import { Product } from "../entity/Product";
import QueryHelper from "../helpers/QueryHelper";

/* GET home page. */

createConnection().then((connection) => {
  const productRepository = connection.getRepository(Product);

  router.get("/", async (req: Request, res: Response, next) => {
    const isActive = req.query.is_active;

    const product = await productRepository.createQueryBuilder("product").where("product.isActive = :isActive", {
      isActive: isActive == 1 ? true : false,
    });

    const lewd = await product.getMany();

    res.send(lewd);
  });

  router.get("/by_category", async (req: Request, res: Response, next) => {
    const isActive = req.query.is_active;

    const product = await productRepository
      .createQueryBuilder("product")
      .leftJoinAndSelect("category", "category", "category.id = product.categoryId")
      .where("product.isActive = :isActive", {
        isActive: isActive == 1 ? true : false,
      });

    const lewd = await product.getRawMany();

    res.send(lewd);
  });

  router.get("", async (req, res) => {
    const results = await productRepository.findOne(req.query.product_id);
    return res.send(results);
  });

  router.get("/all-product", async (req, res) => {
    const asx = await QueryHelper(connection, "GetAllProduct", {
      id: "3ff159a5-21de-4249-9590-3081123c1b04",
      isActive: 0,
      type: 1,
    });

    return res.send(asx);
  });

  router.get("/product_by_id", async (req, res) => {
    const { is_active, limitz } = req.query;

    const product = await QueryHelper(connection, "GetProductByActive", {
      is_active,
      limitz: parseInt(limitz),
    });

    return res.send(product);
  });

  router.get("/create", async (req, res) => {
    console.log(req.query);
    const user = await productRepository.create(req.query);
    const results = await productRepository.save(user);
    return res.send(results);
  });

  router.post("/create", async (req, res) => {
    let product = new Product();

    product.name = req.body.name;
    product.price = parseInt(req.body.price);
    product.stock = parseInt(req.body.stock);
    product.isActive = req.body.isActive;

    const produx = await productRepository.create(product);
    const results = await productRepository.save(produx);

    return res.send(results);
  });

  router.get("/delete", async (req, res) => {
    const results = await productRepository.delete(req.query.product_id);
    return res.send(results);
  });
});

module.exports = router;
