import "express-async-errors";
import express from "express";
import helmet from "helmet";
import cors from "cors";

export default class Router {
	app: express.Express;

	constructor() {
		this.app = express();
		this.app.use(cors());
		this.app.use(helmet());
		this.app.use(express.json());

		this.setRoutes();
	}

	private setRoutes() {
		// rotas da aplicação
		this.app.get("/", (req, res) => {
			res.send("Hello World");
		});
	}

	public start(port: number) {
		this.app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	}
}
