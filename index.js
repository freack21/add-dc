const axios = require("axios");
const env = require("./env");

(async () => {
    setInterval(async () => {
        for (const ch of env.channels) {
            let val = "";
            try {
                const response = await axios.post(
                    env.url.replace("name-ch", ch),
                    {
                        content: env.content,
                    },
                    {
                        headers: {
                            Authorization: env.Authorization,
                        },
                    }
                );

                val = response.status;
            } catch (error) {
                val = error.message;
            }
            console.log(`${ch} : ${val}`);
        }
    }, 5000);
})();
