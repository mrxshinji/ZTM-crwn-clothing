import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useState } from "react";

import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { BUTTON_TYPE_CLASSES } from "../Button/Button.components";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./PaymentForm.styles";




const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault();
    setIsProcessingPayment(true)
    if (!stripe || !elements) {
      return;
    }

    

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    const clientSecret = response.paymentIntent.client_secret
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        }
      }
    })

    if(paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment success.')
      }
    }
    setIsProcessingPayment(false)
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted} isLoading={isProcessingPayment}> Pay Now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;