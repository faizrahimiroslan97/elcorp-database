// app/routes/login.jsx

import { json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";
import { Layout } from "~/components/layout";
import { FormField } from "~/components/form-field";
import { login, register, getUser } from "~/utils/auth.server";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "~/utils/validators.server";

export const action = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("_action");
  const email = form.get("email");
  const password = form.get("password");
  let firstName = form.get("firstName");
  let lastName = form.get("lastName");

  // Validation checks
  if (
    typeof action !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }

  if (
    action === "register" &&
    (typeof firstName !== "string" || typeof lastName !== "string")
  ) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...(action === "register"
      ? {
          firstName: validateName(firstName || ""),
          lastName: validateName(lastName || ""),
        }
      : {}),
  };

  if (Object.values(errors).some(Boolean))
    return json(
      {
        errors,
        fields: { email, password, firstName, lastName },
        form: action,
      },
      { status: 400 }
    );

  switch (action) {
    case "login": {
      return await login({ email, password });
    }
    case "register": {
      firstName = firstName;
      lastName = lastName;
      return await register({ email, password, firstName, lastName });
    }
    default:
      return json({ error: `Invalid Form Data` }, { status: 400 });
  }
};

export const loader = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return (await getUser(request)) ? redirect("/") : null;
};

export default function Login() {
  const [action, setAction] = useState("login");
  const actionData = useActionData();

  const firstLoad = useRef(true);
  const [errors, setErrors] = useState(actionData?.errors || {});
  const [formError, setFormError] = useState(actionData?.error || "");

  const [formData, setFormData] = useState({
    email: actionData?.fields?.email || "",
    password: actionData?.fields?.password || "",
    firstName: actionData?.fields?.lastName || "",
    lastName: actionData?.fields?.firstName || "",
  });

  // Updates the form data when an input changes
  const handleInputChange = (event) => {
    setFormData(event.target.value);
  };

  return (
    <Layout>
      <div className="w-full flex h-full">
        <div className="w-1/2 h-full justify-center items-center flex flex-col bg-sky-800 rounded-r-full">
          <h1 className="text-6xl font-extrabold text-white">
            ElCorp Technology
          </h1>
          <h1 className="text-4xl font-extrabold text-white">
            Internal Database
          </h1>
        </div>
        <div className="h-full justify-center items-center flex flex-col gap-y-4 w-1/2">
          {/*<button
          onClick={() => setAction(action == "login" ? "register" : "login")}
          className="absolute top-8 right-8 rounded-xl bg-blue-600 font-semibold text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-blue-400 hover:-translate-y-1"
        >
          {action === "login" ? "Sign Up" : "Sign In"}
  </button>*/}
          <p className="font-semibold">
            {action === "login"
              ? "Log In To Get Started!"
              : "Sign Up To Get Started!"}
          </p>
          <form method="post" className="rounded-2xl bg-gray-200 p-6 w-96">
            <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full">
              {formError}
            </div>
            <FormField
              htmlFor="email"
              label="Email"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email")}
              error={errors?.email}
            />
            <FormField
              htmlFor="password"
              type="password"
              label="Password"
              value={formData.password}
              onChange={(e) => handleInputChange(e, "password")}
              error={errors?.password}
            />
            {action === "register" && (
              <>
                <FormField
                  htmlFor="firstName"
                  label="First Name"
                  onChange={(e) => handleInputChange(e, "firstName")}
                  value={formData.firstName}
                  error={errors?.firstName}
                />
                <FormField
                  htmlFor="lastName"
                  label="Last Name"
                  onChange={(e) => handleInputChange(e, "lastName")}
                  value={formData.lastName}
                  error={errors?.lastName}
                />
              </>
            )}
            <div className="w-full text-center">
              <button
                type="submit"
                name="_action"
                value={action}
                className="rounded-xl mt-2 bg-blue-600 px-3 py-2 text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-400 hover:-translate-y-1"
              >
                {action === "login" ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
