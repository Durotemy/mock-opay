import axios from "axios";

const baseUrl = "https://mock-opay-backend.onrender.com";

interface registerProps {
  name: string;
  nickname: string;
  age: string;
  balance: string;
  phone: string;
  address: string;
  gender: string;
  email: string;
  password: string;
}

interface transactionProps {
  senderPhone: string;
  receiverPhone: string;
  amount: string;
}

interface phoneAmountProps {
  phone: string;
  amount: string;
  account?:string,
}

const register = async (data: registerProps) => {
  const response = await axios.post(`${baseUrl}/create-user`, data);
  return response;
};

const transaction = async (data: transactionProps) => {
  const response = await axios.post(`${baseUrl}/transaction`, data);
  return response;
};

const fundWallet = async (data: phoneAmountProps) => {
  const response = await axios.post(`${baseUrl}/fund,`, data);
  console.log("response", response);
  return response;
};

const getAlluser = async () => {
  const response = await axios.get(`${baseUrl}/alluser`);
  return response;
};

const userTransaction = async () => {
  const response = await axios.get(`${baseUrl}/user-transaction`);
  return response;
};

export { register, transaction, fundWallet, getAlluser, userTransaction };
