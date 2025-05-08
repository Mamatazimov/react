import "./Modal.css";


function Modal({ children, Btn_modal }) {
  return (
    <div className="Modal">
        <div className="Modal-content">
            <button className="close" onClick={Btn_modal}>X</button>
            {children}
        </div>
    </div>
  );
}


export default Modal;