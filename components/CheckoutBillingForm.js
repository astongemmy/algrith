import { useEffect, useState } from "react"
import CheckoutLoginForm from "./CheckoutLoginForm";
import CheckoutSignUpForm from "./CheckoutSignUpForm";

export default function CheckoutBillingForm({ Package }) {
  const [ loginForm, toggleLoginForm ] = useState(false)
  const [auth, setAuth] = useState({})
  useEffect(() => {
    function payWithPaystack() {
      let handler = PaystackPop.setup({
        key: 'pk_test_3851bb68ea57c1da0fea7acffa71c1e3fbcbe477', // Replace with your public key
        email: auth.user.email,
        amount: Package.price * 100,
        ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function() {
          setAuth(prevAuth => { return { ...prevAuth, status: false }})
          alert('Window closed.');
        },
        callback: function(response) {
          let message = 'Payment complete! Reference: ' + response.reference;
          alert(message);
        }
      });
      handler.openIframe();
    }
    if (auth.status) payWithPaystack()
  }, [ auth ])
  
  return (
    <div className="w-full md:w-1/2 mb-8 pl-0 md:pl-4">
      <div className="relative bg-white rounded-lg border pb-4">
        <h3 className="relative px-4 py-3 border-b text-2xl font-heading font-medium">
          Billing details
        </h3>
        
        <div className="relative overflow-hidden pt-6 w-full">
          { !loginForm && <CheckoutSignUpForm getAuth={(auth) => setAuth(auth)} /> }
          { loginForm && <CheckoutLoginForm getAuth={(auth) => setAuth(auth)} /> }
        </div>

        <div className="h-full p-6 pb-6 text-center w-full">
          <p>After sign up / login, payment process will begin automatically.</p>
          <span className="block text-lg">
            <span className="text-lg font-bold">
              {!loginForm ? "Already have an account?" : "Don't have an account?"}
            </span>
            <button onClick={(e) => { e.preventDefault(); toggleLoginForm(!loginForm) }} className={` ${!loginForm ? 'bg-green-500' : 'bg-red-500'} mt-3 w-full py-3 rounded-full text-white`}>
              {!loginForm ? 'Login & Pay' : 'Sign & Pay'}
            </button>
          </span>
        </div>

      </div>
    </div>
  )
}