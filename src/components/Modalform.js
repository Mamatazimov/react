import "./Modalform.css";
import { useRef } from "react";

function ModalForm({onClose,newData}) {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();



  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(false)
    const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
    }
    newData(data);
    console.log('Form submitted:' , data);

  };


  return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" ref={nameRef} />
          </label>
          <br></br>
          <label>
            Email:
            <input type="email" name="email" ref={emailRef} />
          </label>
          <br></br>
          <label>
            Message:
            <textarea name="message" ref={messageRef} ></textarea>
          </label>
          <br></br>
          <button type="submit">Submit</button>
        </form>
  );
}

export default ModalForm;