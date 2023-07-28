const express=require('express');
const router = express.Router();
const stripe = require ('stripe');
const Stripe =
stripe('sk_test_51NXU6nDpl52o7SJtI6RzMslCj7lUFo7dkMLkC1cJ2QVeCTzqBy7fmhkr4bLRuq1bCtrJnfMNlGT0yuOUtkmCdiaG00sa1RpIaM');
router.post('/', async (req, res) => { console.log(req.body)
let status, error;
const { token, amount } = req.body;



try {
await Stripe.charges.create({
source: token.id,
amount,
currency: 'usd',
});
status = 'success';
} catch (error) {
console.log(error);
status = 'Failure';
}
res.json({ error, status });
});
module.exports = router;