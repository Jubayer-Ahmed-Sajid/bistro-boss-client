import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

 const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div className="w-full">
            <SectionTitle heading="Make Payment" subHeading='To confirm order'></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>

            </Elements>
            
        </div>
    );
};

export default Payment;