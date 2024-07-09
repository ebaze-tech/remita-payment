import "./App.css";
import RemitaPayment from "react-remita";
import { useState } from "react";

function App() {
  const email = "ebaze.technologies@gmail.com";
  const phone_number = "08145789334";
  const name = "Tolu";

  const [paymentData, setpaymentData] = useState({
    key: "76da6fb87d7fb874acec01c92f66f668", // enter your key here
    customerId: "",
    firstName: name,
    lastName: "",
    email: email,
    amount: 100,
    narration: "TEST",
  });
  let data = {
    ...paymentData,
    onSuccess: function (response) {
      // function callback when payment is successful
      console.log("callback Successful Response", response);
      alert('Payment successful.')
    },
    onError: function (response) {
      // function callback when payment fails
      console.log("callback Error Response", response);
    },
    onClose: function () {
      // function callback when payment modal is closed
      console.log("closed");
      alert("Payment portal closed.")
    },
  };

  return (
    <div className="App">
      <div className="container">
        <p>Pay with remita example</p>
        <input
          type="text"
          placeholder="firstname"
          onChange={(e) =>
            setpaymentData({ ...paymentData, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={(e) =>
            setpaymentData({ ...paymentData, lastName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) =>
            setpaymentData({ ...paymentData, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="amount"
          onChange={(e) =>
            setpaymentData({ ...paymentData, amount: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="description(optional)"
          onChange={(e) =>
            setpaymentData({ ...paymentData, narration: e.target.value })
          }
        />
        <RemitaPayment
          remitaData={data}
          className="btn" // class to style the button
          text="Pay with Remita" //text to show on button
          // add a 'live' prop to use the live urls/keys
        />
      </div>
    </div>
  );
}

export default App;
