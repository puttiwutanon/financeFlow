import express from "express";
import { createCustomer, createConnection, fetchAccounts, fetchTransactions } from "./saltedgeController.js";

const router = express.Router();

// Create customer
router.post("/customer", async (req, res) => {
  try {
    const { identifier } = req.body;
    const customer = await createCustomer(identifier);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create connection (Kasikorn Bank)
router.post("/connect", async (req, res) => {
  try {
    const { customerId } = req.body;
    const session = await createConnection(customerId, "kbank_th");
    res.json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch accounts
router.get("/accounts/:connectionId", async (req, res) => {
  try {
    const accounts = await fetchAccounts(req.params.connectionId);
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch transactions
router.get("/transactions/:accountId", async (req, res) => {
  try {
    const txs = await fetchTransactions(req.params.accountId);
    res.json(txs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;