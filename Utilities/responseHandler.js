"use strict";
import statusCode from "./statusCode.js";

const responseHandler = {
  sendResponse: function (codeRes, statusRes, resultRes, cb) {
    if (statusRes) {
      cb({
        code: codeRes,
        message: statusCode[codeRes],
        status: statusRes,
        result: resultRes,
      });
    } else {
      cb({
        code: codeRes,
        message: statusCode[codeRes],
        status: statusRes,
      });
    }
  },

  sendError: function (codeRes, statusRes, errMessage, cb) {
    cb({
      code: codeRes,
      message: errMessage,
      status: statusRes,
    });
  },
  sendResponseMsg: function (codeRes, statusRes, message, cb) {
    cb({
      code: codeRes,
      message: message,
      status: statusRes,
    });
  },
};

export default responseHandler;
