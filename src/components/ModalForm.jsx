import "./ModalForm.css";
import { useRef } from "react";

function ModalForm({ Msg, setIsOpen }) {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const genderRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;
        const gender = event.target.elements.terms.value;

        // Form ma'lumotlarini yuborish
        try {
            const response = await fetch("http://127.0.0.1:8000/users/usercreate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message, gender }),
            });

            if (response.ok) {
                const responseData = await response.json();
                Msg("Muvaffaqiyatli!","green",5000)
                nameRef.current.value = "";
                emailRef.current.value = "";
                messageRef.current.value = "";
            } else {
                console.error("Formni jo'natishda xatolik yuz berdi.");
            }
        } catch (error) {
            console.error("Tarmoq xatosi:", error);
            Msg("Xatolik yuz berdi!","red",5000)


        }
        setIsOpen(false);
        console.log("Modal yopildi");

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
