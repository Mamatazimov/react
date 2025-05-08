import "./Saves.css"

function Saves({ saves }) {
  return (
    <div className="saves">
      {saves.map((save) => (
        <div key={save.id} className="save">
          <h3>{save.name}</h3>
          <h5>{save.message}</h5>
          <p>{save.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Saves;