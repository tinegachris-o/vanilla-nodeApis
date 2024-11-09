module.exports = async (request) => {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on('data', (chunk) => {
      body += chunk;
    });

    request.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        console.error("Failed to parse JSON:", error);
        reject(error);
      }
    });

    request.on('error', (error) => {
      console.error("Request error:", error);
      reject(error);
    });
  });
};
