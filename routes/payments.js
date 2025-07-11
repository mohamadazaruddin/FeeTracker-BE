// Code Generated by Sidekick is for learning and experimentation purposes only.
const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/paymentsController");

router.post("/", paymentsController.createPayment);
router.get("/student/:studentId", paymentsController.getPaymentsByStudent);

module.exports = router;
