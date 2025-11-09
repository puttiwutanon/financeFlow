import saltedge from "./saltedgeClient.js";

export const createCustomer = async (identifier) => {
  const res = await saltedge.post("/customers", {
    data: { identifier }
  });
  return res.data.data;
};

export const createConnection = async (customerId, providerCode) => {
  const res = await saltedge.post("/connect_sessions/create", {
    data: {
      customer_id: customerId,
      provider_code: providerCode, // e.g., 'kbank_th'
      consent: {
        scopes: ["account_details", "transactions"]
      },
      attempt: { return_to: "http://localhost:5173/dashboard" } // your React redirect URL
    }
  });
  return res.data.data;
};

export const fetchAccounts = async (connectionId) => {
  const res = await saltedge.get(`/accounts?connection_id=${connectionId}`);
  return res.data.data;
};

export const fetchTransactions = async (accountId) => {
  const res = await saltedge.get(`/transactions?account_id=${accountId}`);
  return res.data.data;
};