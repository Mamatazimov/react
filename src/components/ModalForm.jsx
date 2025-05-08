import "./ModalForm.css";
import { useRef } from "react";

function ModalForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const genderRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;
        const gender = event.target.elements.terms.value;

        // Form ma'lumotlarini yuborish
        console.log("Ism:", name);
        console.log("Email:", email);
        console.log("Xabar:", message);
        console.log("Jins:", gender);

        // Formni tozalash
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
    }

    return (
        <div>
            <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="nameForm" type="text" ref={nameRef} id="name" name="name" placeholder="Ism" required />
                </div>
                <div className="form-group">
                    <input className="emailForm" type="email" ref={emailRef} id="email" name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <textarea className="msgForm" id="message" ref={messageRef} name="message" placeholder="Xabar" required></textarea>
                </div>
                <div className="form-group">
                    <span>Jinsingiz: </span>
                    <label><input type="radio" id="terms" name="terms" value="erkak" /><small>Erkak</small></label>
                    <label><input type="radio" id='terms' name="terms" value="ayol" /><small>Ayol</small></label>
                </div>
                <button type="submit">Yuborish</button>
            </form>

        </div>
    );
}

export default ModalForm;
