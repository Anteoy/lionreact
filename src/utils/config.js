console.log(`debug....evn:${ENV}`);
const config = {
  local: {
    server_addr: 'http://localhost:8080',
  },
  online: {
    server_addr: 'https://www.anteoy.site',
  },
};
module.exports = config[ENV];
