import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../Components/hooks/useCart";
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";
import useAuth from "../../../Components/hooks/useAuth";

const CheckOutForm = () => {
 const stripe = useStripe()
 const elements = useElements()
 const [secret,setSecret] = useState('')
 const [error,setError] = useState('')
 const [cart] = useCart()
 const {user} = useAuth()
 const [transactionId, setTransactionId] = useState('')
 const axiosSecure = useAxiosSecure()
 const totalAmount = cart.reduce( (total,item) => total + item.price, 0)

 useEffect(()=>{
    axiosSecure.post('/create-payment',{price:totalAmount})
    .then(res =>{
        console.log(res.data)
        setSecret(res.data.clientSecret)
    })
 },[axiosSecure,totalAmount])

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
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            secret,
            {
                payment_method:{
                    card: card,
                    billing_details:{
                        email: user?.email || 'anonymous',
                        name:user?.displayName || 'anonymous'
                    }
                }
            }
            
        )
        if(confirmError){
            console.log('error message',confirmError)
        }
        if(paymentIntent){
            console.log('confirm payment',paymentIntent)
            setTransactionId(paymentIntent.id)
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
      <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !secret}>
        Pay
      </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-600">TransactionId: {transactionId}</p>}
            </form>
            
        </div>
        
    );
};

export default CheckOutForm;