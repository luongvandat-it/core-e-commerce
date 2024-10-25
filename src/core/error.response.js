"use strict";
const STATUS_CODE = require("../constants/status-code");
const SYSTEM_CODE = require("../constants/system-code");

class ResponseError extends Error {
    constructor(statusCode, systemCode, message, metadata) {
        super();
        this.statusCode = statusCode;
        this.systemCode = systemCode;
        this.message = message;
        this.metadata = metadata;
    }
}

class NO_CONTENT extends ResponseError {
    constructor(systemCode = SYSTEM_CODE.ERROR.code, message = STATUS_CODE.NO_CONTENT.message, metadata = {}) {
        super(STATUS_CODE.NO_CONTENT.code, systemCode, message, metadata);
    }
}

class BAD_REQUEST extends ResponseError {
    constructor(systemCode = SYSTEM_CODE.ERROR.code, message = STATUS_CODE.BAD_REQUEST.message, metadata = {}) {
        super(STATUS_CODE.BAD_REQUEST.code, systemCode, message, metadata);
    }
}

class UNAUTHORIZED extends ResponseError {
    constructor(systemCode = SYSTEM_CODE.ERROR.code, message = STATUS_CODE.UNAUTHORIZED.message, metadata = {}) {
        super(STATUS_CODE.UNAUTHORIZED.code, systemCode, message, metadata);
    }
}

class FORBIDDEN extends ResponseError {
    constructor(systemCode = SYSTEM_CODE.ERROR.code, message = STATUS_CODE.FORBIDDEN.message, metadata = {}) {
        super(STATUS_CODE.FORBIDDEN.code, systemCode, message, metadata);
    }
}

class NOT_FOUND extends ResponseError {
    constructor(systemCode = SYSTEM_CODE.ERROR.code, message = STATUS_CODE.NOT_FOUND.message, metadata = {}) {
        super(STATUS_CODE.NOT_FOUND.code, systemCode, message, metadata);
    }
}

class METHOD_NOT_ALLOWED extends ResponseError {
    constructor(systemCode = SYSTEM_CODE.ERROR.code, message = STATUS_CODE.METHOD_NOT_ALLOWED.message, metadata = {}) {
        super(STATUS_CODE.METHOD_NOT_ALLOWED.code, systemCode, message, metadata);
    }
}

class CONFLICT extends ResponseError {
    constructor(systemCode = SYSTEM_CODE.ERROR.code, message = STATUS_CODE.CONFLICT.message, metadata = {}) {
        super(STATUS_CODE.CONFLICT.code, systemCode, message, metadata);
    }
}

class INTERNAL_SERVER_ERROR extends ResponseError {
    constructor(systemCode = SYSTEM_CODE.ERROR.code, message = STATUS_CODE.INTERNAL_SERVER_ERROR.message, metadata = {}) {
        super(STATUS_CODE.INTERNAL_SERVER_ERROR.code, systemCode, message, metadata);
    }
}

class SERVICE_UNAVAILABLE extends ResponseError {
    constructor(systemCode = SYSTEM_CODE.ERROR.code, message = STATUS_CODE.SERVICE_UNAVAILABLE.message, metadata = {}) {
        super(STATUS_CODE.SERVICE_UNAVAILABLE.code, systemCode, message, metadata);
    }
}

module.exports = {
    NO_CONTENT,
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    CONFLICT,
    INTERNAL_SERVER_ERROR,
    SERVICE_UNAVAILABLE
};
