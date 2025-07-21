import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7230a4fa-c1be-435a-aa87-c7581255e953");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
      
    }
  };
    return (

        <div className='flex flex-col justify-center items-center container 
                        mx-auto p-13 mt-5 md:px-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-4xl font-bold  mb-2'>Contact  <span className='font-light'>With Us</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8 '>Ready to Make a Move? Let’s Build Your Future Together</p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name'
                            placeholder='Your Name' required />
                    </div>

                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='email'
                            placeholder='Your Name' required />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Messages
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                        name="Messages" id="Messages"></textarea>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='bg-blue-500 px-8 py-3 mb-10 rounded text-white 
                    cursor-pointer flex flex-wrap justify-center items-center text-center'>
                        {result ? result : "Send Message"}
                    </button>
                </div>
            </form>

        </div>

    )
}

export default Contact
