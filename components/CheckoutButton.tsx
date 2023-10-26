"use client"

import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react"
import { useState } from 'react';

function CheckoutButton() {

  const {data: session} = useSession();

  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if(!session?.user?.id) return;

    // push a document into the firestore db
    setLoading(true);

    const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'), {
      price: "price_12dkdnk21901lds",
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    })

    // ...stripe extension on firebase will create checkout session

    // redirect user to checkout page
  }
  return (
    <div className="flex flex-col space-y-2">
      {/* If subscribed show user is subscribed */}
      <button onClick={() => createCheckoutSession()} className="bg-indigo-600 px-3.5 py-2 rounded-md mt-8 block text-white shadow-sm text-center hover:bg-indigo-500">
        Sign Up
      </button>
    </div>
    
  )
}

export default CheckoutButton