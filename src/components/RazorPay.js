// const Razorpay = require('razorpay');

// // Create an instance of Razorpay
// var instance = new Razorpay({
//     key_id: 'rzp_test_uCnekcWoULOoWb',
//     key_secret: 'ECsS74pq7xlveKt94CmyMDw4'
// });

// // Create an order
// instance.orders.create({
//     amount: 50000,
//     currency: "INR",
//     receipt: "receipt#1",
//     notes: {
//         key1: "value3",
//         key2: "value2"
//     }
// }, function(err, order) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(order);
//     }
// });
// ---------------------------------------
const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  
  export default loadRazorpayScript;
  