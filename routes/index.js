import { Router } from "express";
import faqCntrl from "../controllers/faqCntrl.js";
const routes = Router();

routes.post("/faq", faqCntrl.createFaq);
routes.get("/faq-all", faqCntrl.getAll);
routes.get("/faq", faqCntrl.getFaq);
export default routes;
