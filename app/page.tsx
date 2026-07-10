'use client';

import { useState } from 'react';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: '',
  });

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      queryType: '',
      message: '',
      consent: '',
    };

    if (!formData.firstName.trim())
      newErrors.firstName = 'This field is required';
    if (!formData.lastName.trim())
      newErrors.lastName = 'This field is required';

    if (!formData.email.trim()) {
      newErrors.email = 'This field is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.queryType) newErrors.queryType = 'Please select a query type';
    if (!formData.message.trim()) newErrors.message = 'This field is required';
    if (!formData.consent)
      newErrors.consent =
        'To submit this form, please consent to being contacted';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setError(newErrors);
    if (Object.values(newErrors).every((err) => err === '')) {
      console.log('Form válido:', formData);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {isSubmitted && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-300 flex w-[90%] max-w-md flex-col gap-100 rounded-lg bg-grey-900 p-300 text-white"
        >
          <p className="flex items-center gap-100 text-preset-3 font-bold">
            {/* swap for the check-icon.svg from the challenge assets */}✓
            Message Sent!
          </p>
          <p className="text-grey-300 text-preset-4">
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex w-[90%] flex-col gap-300 rounded-2xl bg-white p-300 text-grey-900"
      >
        <h1 className="mb-100 text-preset-1">Contact Us</h1>

        {/* Begin of First Name */}

        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-100 text-preset-4">
            First Name<span className="ml-100 text-green-600">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            className={`rounded-lg border px-300 py-150 transition-colors duration-200 placeholder:text-grey-500 focus:outline-none ${error.firstName ? 'border-red text-red focus:border-red' : 'border-grey-500 text-grey-900 hover:border-green-600 focus:border-green-600'}`}
          />
          {error.firstName && (
            <p className="mt-100 text-preset-4 text-red">{error.firstName}</p>
          )}
        </div>

        {/* Begin of Last Name */}

        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-100 text-preset-4">
            Last Name<span className="ml-100 text-green-600">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            className={`rounded-lg border px-300 py-150 transition-colors duration-200 focus:outline-none ${error.lastName ? 'border-red text-red focus:border-red' : 'border-grey-500 text-grey-900 hover:border-green-600 focus:border-green-600'}`}
          />
          {error.lastName && (
            <p className="mt-100 text-preset-4 text-red">{error.lastName}</p>
          )}
        </div>

        {/* Begin of Email Address */}

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-100 text-preset-4">
            Email Address<span className="ml-100 text-green-600" aria-hidden="true">*</span>
            <span className="sr-only">required</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            aria-describedby={error.email ? 'email-error' : undefined}
            className={`rounded-lg border px-300 py-150 ${error.email ? 'border border-red text-red' : 'border-grey-500 text-grey-900'}`}
          />
          {error.email && (
            <p id="email-error" className="mt-100 text-preset-4 text-red" role="alert">{error.email}</p>
          )}
        </div>

        {/* Begin of Query Type */}

        <fieldset className="flex flex-col">
          <legend className="mb-200 text-preset-4">
            Query Type<span className="ml-100 text-green-600" aria-hidden="true">*</span>
            <span className="sr-only">required</span>
          </legend>
          <div className="mb-200 flex flex-row items-center gap-150 rounded-lg border border-grey-500 px-300 py-150 text-grey-900">
            <input
              type="radio"
              id="queryType1"
              name="queryType"
              value="General Enquiry"
              checked={formData.queryType === 'General Enquiry'}
              onChange={handleChange}
              className="h-5 w-5 appearance-none rounded-full border border-grey-500 opacity-[0.5]"
            />
            <label htmlFor="queryType1">General Enquiry</label>
          </div>

          <div className="flex flex-row items-center gap-150 rounded-lg border border-grey-500 px-300 py-150 text-grey-900">
            <input
              type="radio"
              id="queryType2"
              name="queryType"
              value="Support Enquiry"
              checked={formData.queryType === 'Support Enquiry'}
              onChange={handleChange}
              className="h-5 w-5 appearance-none rounded-full border border-grey-500 opacity-[0.5]"
            />
            <label htmlFor="queryType2">Support Enquiry</label>
          </div>
          {error.queryType && (
            <p className="mt-100 text-preset-4 text-red" role="alert">{error.queryType}</p>
          )}
        </fieldset>

        {/* Begin of Consent */}

        <div className="flex flex-col gap-100">
          <label htmlFor="review" className="text-preset-4">
            Message<span className="ml-100 text-green-600">*</span>
          </label>
          <textarea
            id="review"
            name="review"
            className="rounded-lg border border-grey-500 text-grey-900"
          ></textarea>
        </div>
        <div className="flex flex-row gap-200">
          <input type="checkbox"></input>
          <label htmlFor="" className="mr-200">
            I consent to being contacted by the team
            <span className="ml-100 text-green-600">*</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-green-600 px-500 py-200 text-preset-2 text-white"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
