const { server, PORT } = require("./app");

server.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
