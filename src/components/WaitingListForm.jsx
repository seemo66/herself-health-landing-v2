// waiting list form component
// handles user input, submission, and displays a temporary success message
import { useState, useEffect, useRef } from 'react';

export default function WaitingListForm() {
  // form state
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });

  // submission state
  const [submitted, setSubmitted] = useState(false);

  // ref to hold the timeout ID for clearing
  const timerRef = useRef(null);

  // form field definitions for easier mapping
  const fields = [
    {
      id: 'firstname',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter your first name',
      autoComplete: 'given-name',
    },
    {
      id: 'lastname',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter your last name',
      autoComplete: 'family-name',
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'your@email.com',
      autoComplete: 'email',
    },
    {
      id: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '(504) 994-1665',
      autoComplete: 'tel',
    },
  ];

  // update form state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setSubmitted(true);

    // clear any existing timer
    if (timerRef.current) clearTimeout(timerRef.current);

    // reset form and hide success message after 5 seconds
    timerRef.current = setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstname: '', lastname: '', email: '', phone: '' });
    }, 5000);
  };

  // cleanup timer on component unmount
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="relative flex items-center justify-center md:justify-start">
      {/* success message overlay */}
      <div
        className={`absolute transition-opacity duration-700 ease-in-out font-untitled text-[24px] 
                    text-darkPink text-lg font-medium mb-3 xl:text-[30px] xl:leading-tight text-center ${
                      submitted ? 'opacity-100' : 'opacity-0'
                    }`}
      >
        Thank you! Your form has been submitted.
      </div>

      {/* form container */}
      <form
        onSubmit={handleSubmit}
        className={`w-full transition-opacity duration-700 ease-in-out ${
          submitted ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } grid md:gap-x-[48px] md:grid-cols-2`}
      >
        {fields.map(({ id, label, type, placeholder, autoComplete }) => (
          <div key={id}>
            {/* input label */}
            <label
              htmlFor={id}
              className="font-untitled font-normal text-[18px] text-black block mb-1"
            >
              {label}
            </label>

            {/* input field */}
            <input
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className="border border-darkPink px-[10px] py-[8px] rounded-[5px] mb-4 w-full font-untitled font-normal text-[18px] placeholder:text-pink"
              value={formData[id]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* submit button */}
        <button
          type="submit"
          className="bg-purple text-white p-[10px] rounded-[10px] w-full mt-2 md:col-span-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
