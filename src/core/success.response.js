"use strict";
const STATUS_CODE = require("../constants/status-code");
const SYSTEM_CODE = require("../constants/system-code");

class ResponseSuccess {
  constructor(statusCode, systemCode, message, metadata) {
    this.statusCode = statusCode;
    this.systemCode = systemCode;
    this.message = message;
    this.metadata = metadata;
  }

  send(res) {
    return res.status(this.statusCode).json(this);
  }
}

class OK extends ResponseSuccess {
  constructor(systemCode = SYSTEM_CODE.SUCCESS.code, message = SYSTEM_CODE.SUCCESS.message, metadata = {}) {
    super(STATUS_CODE.OK.code, systemCode, message, metadata);
  }
}

class CREATED extends ResponseSuccess {
  constructor(systemCode = SYSTEM_CODE.SUCCESS.code, message = SYSTEM_CODE.SUCCESS.message, metadata = {}) {
    super(STATUS_CODE.CREATED.code, systemCode, message, metadata);
  }
}

module.exports = {
  OK,
  CREATED
};
