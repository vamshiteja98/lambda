// index.js

exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Cool it is working!',
        }),
    };
};

