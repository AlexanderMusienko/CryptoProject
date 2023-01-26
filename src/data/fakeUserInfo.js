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
  exchangeHistory: [
    {
      coin: "btc",
      dealType: "buy",
      orderAmount: "11220",
      fiat: "$",
      deliveryDate: new Date(),
      dealStatus: "success",
      executorName: "John Doe",
      executorId: 3
    },
    {
      coin: "btc",
      dealType: "buy",
      orderAmount: "11220",
      fiat: "$",
      deliveryDate: new Date(),
      dealStatus: "success",
      executorName: "John Doe",
      executorId: 3
    },
    {
      coin: "btc",
      dealType: "buy",
      orderAmount: "11220",
      fiat: "$",
      deliveryDate: new Date(),
      dealStatus: "success",
      executorName: "John Doe",
      executorId: 3
    },
  ]
};
