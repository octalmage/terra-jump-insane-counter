module.exports = ({ wallets, refs, config, client }) => ({
  getCount: () => client.query("counter", { get_count: {} }),
  increment: (signer = wallets.test1) =>
    client.execute(signer, "counter", { increment: {} }),
  sweep: (signer = wallets.test1) =>
    client.execute(signer, "counter", { sweep: {} }),
  updateToken: (token, signer = wallets.test1) =>
    client.execute(signer, "counter", { update_token: { token } }),
  reset: (count, signer = wallets.test1) =>
    client.execute(signer, "counter", { reset: { count } }),
});
