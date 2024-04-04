type RouteName = keyof typeof routes;

const routes = {
  allhome: "AllHome",
  home: "Home",
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
  details:"Details",
  opay:"Opay",
  transfer:"Transfer"
};

export default Object.freeze(routes);
