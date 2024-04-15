type RouteName = keyof typeof routes;

const routes = {
  allhome: "AllHome",
  homes: "Home",
  card: "Card",
  finance: "Finance",
  reward: "Reward",
  account: "Account",
  cards: "cards",
  scan: "scan",
  profile: "profile",
  ProfilePhoto: "Profile Photo",
  login: "Login",
  register: "Register",
  details: "Details",
  opay: "Opay",
  transfer: "Transfer",
  success: "Success",
  share: "Share",
  authsuccess:"Auth success"
};

export default Object.freeze(routes);
