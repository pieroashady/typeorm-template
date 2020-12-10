import * as express from "express";
const router = express.Router();
import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Category } from "../entity/Category";
import { Product } from "../entity/Product";

/* GET home page. */

createConnection().then((connection) => {
  const categoryRepo = connection.getRepository(Category);

  router.get("/", async function (req: Request, res: Response, next) {
    const isActive = req.query.is_active;

    const product = await categoryRepo.createQueryBuilder("product");
    //   .where("product.isActive = :isActive", {
    //     isActive: isActive == 1 ? true : false,
    //   });

    const lewd = await product.getMany();

    res.send(lewd);
  });

  //   router.get("", async function (req, res) {
  //     const results = await productRepository.findOne(req.query.product_id);
  //     return res.send(results);
  //   });

  router.get("/create", async function (req, res) {
    console.log(req.query);
    const category = await categoryRepo.create(req.query);
    const results = await categoryRepo.save(category);
    return res.send(results);
  });

  //   router.post("/create", async function (req, res) {
  //     let product = new Product();

  //     product.name = req.body.name;
  //     product.price = parseInt(req.body.price);
  //     product.stock = parseInt(req.body.stock);
  //     product.isActive = req.body.isActive;

  //     const produx = await productRepository.create(product);
  //     const results = await productRepository.save(produx);

  //     return res.send(results);
  //   });

  //   router.get("/delete", async function (req, res) {
  //     const results = await productRepository.delete(req.query.product_id);
  //     return res.send(results);
  //   });
});

module.exports = router;
