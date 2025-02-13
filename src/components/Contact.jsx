import { useState } from "react"
// import dotenv from 'dotenv';

// dotenv.config();
import emailjs from '@emailjs/browser';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const notify = () => toast("Message sent successfully!");
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_jyv9eta';
    const templateId = 'template_dorizbx';
    const publicKey = 'YDiOcHlF-BVFVJDig';

    const templateParams = {
      from_name: name,
      from_email:email,
      to_name: 'Dinesh',
      message:message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(() => {
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err)=>{
      console.log('Error sending email:', err)
    })
  }


  return (
    <main id="contact" className="pt-[30px] pb-[100px] px-4 md:px-[80px] space-y-5 flex flex-col md:flex-row justify-between items-center">
      <section className="space-y-10">
        <div>
          <h1 className="text-4xl md:text-7xl font-medium"><span className="text-gray-400">Let&apos;s</span><br />Connect.</h1>
        </div>
        <div className="space-y-10">
          <div className="text-gray-400 text-xl">
            <p>santhosh@gmail.com</p>
          </div>
          <div className="flex items-center justify-between text-2xl space-x-5">
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaFacebookF />
          </div>
        </div>
      </section>

      <section className="">
        <div>
          <h1 className="mb-2 text-4xl md:text-7xl font-medium"><span className="text-gray-400">Contact</span> <br />Me</h1>
        </div>

        <div className="mt-10 text-sm border-t-5 border-l-10 border-b-4 border-r rounded-2xl px-5 border-gray-600 text-gray-300 py-3">
          <form action="" onSubmit={handleSubmit}>
            <ul className="list-none space-y-5">
              <div className="inline-block md:inline-flex w-full gap-20 items-center justify-between py-4">
                <div className="inline-flex flex-col w-full space-y-2">
                  <label htmlFor="" className="text-2xl font-medium">Name</label>
                  <input className="outline-none border-b-2 text-sm font-medium" type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className=" inline-flex flex-col w-full space-y-2">
                  <label htmlFor="" className="text-2xl font-medium">Email</label>
                  <input className="outline-none border-b-2 text-sm font-medium" type="email" placeholder="email@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
              </div>
              <div className=" inline-flex flex-col w-full space-y-2">
                <label htmlFor="" className="text-2xl font-medium">Message</label>
                <input className="outline-none border-b-2 text-sm font-medium" type="text" placeholder="Hello, I'm ..." value={message} onChange={(e)=>setMessage(e.target.value)}/>
              </div>
              <div className="flex mt-4">
                <button type="submit" onClick={notify} className="bg-gray-50 rounded-full text-black font-medium px-4 py-1 text-[12px]">Send message</button>
                <ToastContainer />
              </div>
            </ul>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
