var apiConfig = {
    STATUS_CODE: {
        ERROR: 500,
        SUCCESS: 200,
        INVALID_INPUT: 400,
        NOT_FOUND: 404
    },
    ERROR_MSG: {
        DEFAULT: {
            message: "Internal Server Error"
        }
    },
    SUCCESS_MSG: {
        DEFAULT: {
            message: "Success"
        }
    },
    HEADER: {
        DEFAULT: {
            "Content-Type": "application/json"
        }
    }
};
module.exports = apiConfig;