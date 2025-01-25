"use client";

import * as React from "react";

interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function Page() {
  function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault();
    console.log(event.currentTarget.elements.firstName.value);
    console.log(event.currentTarget.elements.lastName.value);
  }

  return (
    <form className="flex flex-col " onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Page;
