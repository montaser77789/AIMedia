import React from "react";
import Form from "./_components/Form";

const SigninPage = () => {
  return (
    <main dir="ltr" className="mt-20">
      <div className="py-44 md:py-40 bg-gray-50 element-center">
        <div className="container element-center">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-black mb-4">
              Welcome Back
            </h2>
          <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SigninPage;
