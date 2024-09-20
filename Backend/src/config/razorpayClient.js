const Razorpay = require('razorpay');

apiKey="rzp_test_zNhGjNPHOItrxd"
apiSecret="Ba1HR1vJaCuuxw9AqjwOIFo9"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;