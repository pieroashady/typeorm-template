import * as express from "express";
const router = express.Router();
import { Request, Response } from "express";
import { join } from "path";
import { createConnection } from "typeorm";
import { OrderDetails } from "../entity/OrderDetails";
import { User } from "../entity/User";

/* GET home page. */

createConnection()
  .then((connection) => {
    const userRepository = connection.getRepository(User);
    const orderDetailsRepository = connection.getRepository(OrderDetails);

    /**
     * get data from left join query
     * @param aliases
     * @param joinTable
     * @param joinTableAliases
     * @param condition
     */
    const getAllWithJoinQuery = async (aliases: string, joinTable: string, joinTableAliases: string, condition: string) => {
      return await userRepository
        .createQueryBuilder(aliases)
        .leftJoinAndSelect(joinTable, joinTableAliases, condition)
        .orderBy("order.price", "DESC")
        .where("order.price NOT IN (0)")
        .getRawMany();
    };

    // register routes

    router.get("/", function (req: Request, res: Response, next) {
      res.send("woke");
    });

    // /join?user
    router.get("/join", async (req, res) => {
      const userID = req.query.user_id;

      if (!userID) {
        return res.json(await getAllWithJoinQuery("user", "order_details", "order", "order.userID = user.id"));
      }

      const users = await userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("order_details", "order", "order.userID = user.id")
        .where("user.id = :id", { id: userID })
        .orderBy("order.price", "DESC")
        .getRawMany();

      res.json(users);
    });

    router.get("/joinx", async (req, res) => {
      const users = await userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("order_details", "order", "order.userID = user.id")
        .getRawMany();

      res.json(users);
    });

    router.get("/users", async function (req, res) {
      const users = await userRepository.find();
      res.json(users);
    });

    router.get("/users/:id", async function (req, res) {
      const results = await userRepository.findOne(req.params.id);
      return res.send(results);
    });

    router.get("/usersx", async function (req, res) {
      console.log(req.query);
      const user = await userRepository.create(req.query);
      const results = await userRepository.save(user);
      return res.send(results);
    });

    router.put("/users/:id", async function (req, res) {
      const user = await userRepository.findOne(req.params.id);
      userRepository.merge(user, req.body);
      const results = await userRepository.save(user);
      return res.send(results);
    });

    router.get("/delete_users/:id", async function (req, res) {
      const results = await userRepository.delete(req.params.id);
      return res.send(results);
    });

    router.get("/delete_order_details/:id", async function (req, res) {
      const results = await orderDetailsRepository.delete(req.params.id);
      return res.send(results);
    });
  })
  .catch((err) => console.error("Connection refused. Check your connection to database"));

module.exports = router;
