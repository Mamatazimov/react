

function Message ({ message, isMessage, setIsMessage }) {
  return (
    <>
        {isMessage && <div className="message" style={{ 
            color: message.color,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "0.5rem",
            fontWeight: "bold",
            border: "2px solid",
            borderColor: message.color,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "var(--background-color)",
            borderRadius: "1rem",
            padding: "1rem",
        }}>
            <h1>{message.text}</h1>
            <button onClick={() => {setIsMessage(false)}} style={{
                position: "absolute",
                top: "0.2rem",
                right: "0.2rem"
            }}>x</button>
        </div>}
    </>
  );
}

export default Message;