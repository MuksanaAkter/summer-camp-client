import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
 import UseClass from "../../../hooks/UseClass";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [classes] = UseClass();
    const total = classes.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full mx-5 text-xl text-black ps-10">
            <span className="ps-10">Please Payment</span>
            
            
            <Elements stripe={stripePromise}>
                <CheckoutForm price= {price} classes={classes}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;