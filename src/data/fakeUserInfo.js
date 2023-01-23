import avatar from "../assets/userAvatars/JohnDoe.jpg";

export default {
  id: 1,
  userName: "Alexander Musienko",
  userAvatar: avatar,
  accountStatus: "unverified",
  estimatedBalanceCoins: [
    {
      coin: "btc",
      hot: 0,
    },
    {
      coin: "eth",
      hot: 1,
    },
  ],
  estimatedBalanceFiats: [
    {
      fiat: "usd",
      hot: 0,
    },
    {
      fiat: "rub",
      hot: 0,
    },
  ],
};
