import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
 const stripe = useStripe()
 const elements = useElements()
 const [error,setError] = useState('')

    const handleSubmit =async(event)=>{
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(!card){
            return
        }
        const {error,paymentMethod} =await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log(error.message)
            setError(error.message)
        }
        else{
            console.log(paymentMethod)
            setError('')
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe}>
        Pay
      </button>
        <p className="text-red-600">{error}</p>
            </form>
            
        </div>
        
    );
};

export default CheckOutForm;