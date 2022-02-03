import React, { useState }  from 'react'
import './Contact.css';
import axios from '../../axios';
import Loader from "react-js-loader";
import { useForm } from "react-hook-form";
import { formDefault, defaultValidator, nameValidator, emailValidator } from "./validator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormError('');
  }

  const handleResponse = (response) => {
    toast.success(response.data.message, {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: true,
      closeOnClick: true,
    });
  }

  const sendMessage = async (data) => {
    try {
      setFormError('');
      setIsLoading(true);
      const res = await axios.post('', data);
      setIsLoading(false);
      handleResponse(res);
      reset(formDefault);
    } catch(e) {
      setIsLoading(false);
      setFormError(e.message !== undefined ? e.message : e.response.data.error);
    }
  }

  return (
    <section id="contact" className="contact">
        <div id="section">
            <div className="contact__row">
                <h2>Get In Touch</h2>

                <div className="form_wrapper">
                  { formError && <p className="form_error">{formError}</p> }

                  <div className="split_width">
                    <div className="field_wrapper name">
                      <input 
                        { ...register("name", nameValidator) }
                        className="half_width" 
                        onChange={handleChange} 
                        placeholder="Name" 
                        type="text" 
                        />
                      {errors.name && <span>{errors.name.message}</span>}
                    </div>

                    <div className="field_wrapper">
                      <input 
                        { ...register("email", emailValidator) }
                        className="half_width" 
                        onChange={handleChange} 
                        placeholder="Email" 
                        type="email" 
                        />
                      {errors.email && <span>{errors.email.message}</span>}
                    </div>
                  </div>


                  <div className="field_wrapper">
                    <input 
                      { ...register("subject", defaultValidator) }
                      onChange={handleChange} 
                      placeholder="Subject" 
                      type="text" 
                      />
                    {errors.subject && <span>{errors.subject.message}</span>}
                  </div>


                  <div className="field_wrapper">
                    <textarea 
                      { ...register("message", defaultValidator) }
                      onChange={handleChange} 
                      placeholder="Message" 
                      rows="10" 
                      />
                    {errors.message && <span>{errors.message.message}</span>}
                  </div>

                  <div 
                    className="submit_button"  
                    type="submit"
                    onClick={
                      handleSubmit((data) => sendMessage(data))
                  }>
                    {
                      isLoading
                        ? <Loader type="spinner-default" bgColor={"#FFFFFF"} color={'#FFFFFF'} size={40} />
                        : <p> Send Message </p>
                    } 
                  </div>          
                </div>

            </div>

            <div>
              <ToastContainer />
            </div>
        </div>
    </section>
  );
}

export default Contact;



