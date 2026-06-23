'use client';

import { useState } from 'react';

export default function Home() {
  const [error, setError] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('This field is required');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-[90%] flex-col gap-300 rounded-2xl bg-white p-300 text-grey-900"
      >
        <h1 className="mb-100 text-preset-1">Contact Us</h1>

        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-100 text-preset-4">
            First Name<span className="ml-100 text-green-600">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="John"
            onChange={(e) => setName(e.target.value)}
            className={`rounded-lg border px-300 py-150 ${error ? 'border border-red text-red' : 'border-grey-500 text-grey-900'}`}
          />
          {error && <p className="mt-100 text-preset-4 text-red">{error}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-100 text-preset-4">
            Last Name<span className="ml-100 text-green-600">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Doe"
            onChange={(e) => setName(e.target.value)}
            className={`rounded-lg border px-300 py-150 ${error ? 'border border-red text-red' : 'border-grey-500 text-grey-900'}`}
          />
          {error && <p className="mt-100 text-preset-4 text-red">{error}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="emailAddress" className="mb-100 text-preset-4">
            Email Address<span className="ml-100 text-green-600">*</span>
          </label>
          <input
            type="text"
            id="emailAddress"
            placeholder="john.doe@mail.com"
            onChange={(e) => setName(e.target.value)}
            className={`rounded-lg border px-300 py-150 ${error ? 'border border-red text-red' : 'border-grey-500 text-grey-900'}`}
          />
          {error && <p className="mt-100 text-preset-4 text-red">{error}</p>}
        </div>

        <div className="flex flex-col">
          <label className="mb-200 text-preset-4">
            Query Type<span className="ml-100 text-green-600">*</span>
          </label>
          <div
            className={`mb-200 flex flex-row items-center gap-150 rounded-lg px-300 py-150 ${error ? 'border-red text-red' : 'rounded-lg border border-grey-500 text-grey-900'}`}
          >
            <input
              type="checkbox"
              id="queryType1"
              value="General Enquiry"
              className={`h-5 w-5 appearance-none rounded-full opacity-[0.5] ${error ? 'border border-red text-red' : 'border-grey-500 text-grey-900'}`}
            />
            <label htmlFor="queryType1">General Enquiry</label>
          </div>
          <div
            className={`flex flex-row items-center gap-150 rounded-lg border border-grey-500 px-300 py-150`}
          >
            <input
              type="checkbox"
              id="queryType2"
              value="Support Enquiry"
              className={`h-5 w-5 appearance-none rounded-full opacity-[0.5] ${error ? 'border border-red text-red' : 'border-grey-500 text-grey-900'}`}
            />
            <label htmlFor="queryType2">Support Enquiry</label>
          </div>
          {error && <p className="mt-100 text-preset-4 text-red">{error}</p>}
        </div>

        <div className="flex flex-col gap-100">
          <label htmlFor="review" className="text-preset-4">
            Message<span className="ml-100 text-green-600">*</span>
          </label>
          <textarea
            id="review"
            name="review"
            className="rounded-lg border border-grey-500 text-grey-900"
            value=""
          ></textarea>
        </div>
        <div className="flex flex-row gap-200">
          <input type="checkbox"></input>
          <label htmlFor="">
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
        {/* <p>Message Sent!</p>
        <p>Thanks for completing the form. We'll be in touch soon!</p> */}
      </form>
    </main>
  );
}
