'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/cart-context';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, Truck, Check } from 'lucide-react';

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { state, dispatch } = useCart();
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the payment
    // For demo purposes, we'll just simulate a successful payment
    setStep('confirmation');
    dispatch({ type: 'CLEAR_CART' });
  };

  if (step === 'confirmation') {
    return (
      <>
        <PageHeader
          title="Order Confirmed"
          description="Thank you for your purchase!"
        />
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                Your order has been confirmed!
              </h2>
              <p className="text-muted-foreground mb-8">
                We'll send you a confirmation email with your order details.
              </p>
              <Button onClick={() => router.push('/')}>Return to Home</Button>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Checkout"
        description="Complete your purchase securely."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {step === 'shipping' && (
                <motion.form
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handleSubmitShipping}
                  className="space-y-8"
                >
                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <Truck className="w-6 h-6 text-primary" />
                      <h2 className="text-xl font-semibold">Shipping Information</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <label htmlFor="address" className="text-sm font-medium">
                          Address
                        </label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-medium">
                          City
                        </label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="postalCode" className="text-sm font-medium">
                          Postal Code
                        </label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <label htmlFor="country" className="text-sm font-medium">
                          Country
                        </label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full mt-6">
                      Continue to Payment
                    </Button>
                  </div>
                </motion.form>
              )}

              {step === 'payment' && (
                <motion.form
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handleSubmitPayment}
                  className="space-y-8"
                >
                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <CreditCard className="w-6 h-6 text-primary" />
                      <h2 className="text-xl font-semibold">Payment Information</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="cardNumber" className="text-sm font-medium">
                          Card Number
                        </label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="cardExpiry" className="text-sm font-medium">
                            Expiry Date
                          </label>
                          <Input
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="cardCvc" className="text-sm font-medium">
                            CVC
                          </label>
                          <Input
                            id="cardCvc"
                            name="cardCvc"
                            value={formData.cardCvc}
                            onChange={handleInputChange}
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep('shipping')}
                      >
                        Back
                      </Button>
                      <Button type="submit" className="flex-1">
                        Place Order
                      </Button>
                    </div>
                  </div>
                </motion.form>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-lg border p-6 space-y-6">
                <h3 className="text-xl font-semibold">Order Summary</h3>
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {item.title} × {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 