import Redis from "../middleware/redis.js";
import faqModel from "../models/faqModel.js";
import responseHandler from "../Utilities/responseHandler.js";
import trans from "../Utilities/translate.js";
const faqCntrl = Object();

faqCntrl.createFaq = async (req, res) => {
  console.log("---------------- create faqs ---------------");
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return responseHandler.sendError(
        "403",
        false,
        "all fields are required",
        (response) => {
          res.json(response);
        }
      );
    }

    const translations = {
      question_hi: await trans(question, "hi"),
      answer_hi: await trans(answer, "hi"),
      question_bn: await trans(question, "bn"),
      answer_bn: await trans(answer, "bn"),
    };
    const faq = new faqModel({ question, answer, translations });
    await faq.save();

    responseHandler.sendResponse(
      200,
      true,
      "faq created successfully ",
      (response) => {
        res.json(response);
      }
    );
  } catch (err) {
    console.log("Some error has occurred", err);
    responseHandler.sendError(
      500,
      false,
      "Internal Server Error",
      (response) => {
        res.json(response);
      }
    );
  }
};

faqCntrl.getAll = async (req, res) => {
  console.log("---------get all faqs--------------");
  try {
    const getDetails = await faqModel.find({});
    console.log(getDetails);
    if (getDetails) {
      responseHandler.sendResponse(200, true, getDetails, (response) => {
        res.json(response);
      });
    } else {
      responseHandler.sendError(400, false, "Not faq there", (response) => {
        res.json(response);
      });
    }
  } catch (err) {
    console.log("Some error has occurred", err);
    responseHandler.sendError(
      500,
      false,
      "Internal Server Error",
      (response) => {
        res.json(response);
      }
    );
  }
};

faqCntrl.getFaq = async (req, res) => {
  console.log("---------get faqs-------------");
  const { lang } = req.query;

  //   create redis key
  const cacheKey = `faq_${lang}`;
  const cachedData = null;
  try {
    const cachedFaq = await Redis.get(cacheKey);
    if (cachedData) {
      responseHandler.sendResponse(
        200,
        true,
        JSON.parse(cachedData),
        (response) => {
          res.json(response);
        }
      );
    } else {
      // now fetch the deatils
      const faqs = await faqModel.find({});
      const translatedFAQs = faqs.map((faq) => faq.getTranslatedFAQ(lang));

      await Redis.set(cacheKey, JSON.stringify(translatedFAQs), "EX", 36000); // Cache for 1 hour
      responseHandler.sendResponse(200, true, translatedFAQs, (response) => {
        res.json(response);
      });
    }
  } catch (err) {
    console.log("Some error has occurred", err);
    responseHandler.sendError(
      500,
      false,
      "Internal Server Error",
      (response) => {
        res.json(response);
      }
    );
  }
};

export default faqCntrl;
