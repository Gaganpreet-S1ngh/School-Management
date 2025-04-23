import path from "path";
import { expressApp } from "./expressApp";
import { logger } from "./utils/logger";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const PORT = process.env.PORT || 7007;

const StartServer = async () => {
  const ExpressApp = await expressApp();

  ExpressApp.listen(PORT, () => {
    logger.info(`Listening to http://localhost:${PORT}`);
  });

  process.on("uncaughtException", async (err) => {
    logger.error(err);
    process.exit(1);
  });
};

StartServer().then(() => {
  logger.info("Server is up!");
});
