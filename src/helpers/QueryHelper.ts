import { Connection, getManager } from "typeorm";
import * as fs from "fs";
import * as path from "path";

/**
 * Execute query using external sql file
 *
 * @param connection Connection from TypeORM driver
 * @param sql Sql directory file
 * @param param Escaped parameter query
 */
export default async function QueryHelper(
  connection: Connection,
  sql: string,
  param: object
) {
  const escape = connection.driver;
  const db = getManager();

  let queryString = "";

  try {
    queryString = fs
      .readFileSync(path.join(__dirname, `../sql/${sql}.sql`))
      .toString();
  } catch (err) {
    console.error("Directory not found");
    return;
  }

  console.log({ queryString });

  const [query, parameter] = escape.escapeQueryWithParameters(
    queryString,
    param,
    {}
  );

  try {
    const results = await db.query(query, parameter);
    console.log({ query, parameter });
    return results;
  } catch (error) {
    console.log(error);
    return;
  }
}
