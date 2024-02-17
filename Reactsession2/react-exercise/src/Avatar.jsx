export default function Avatar({ name, imageID, size, surName }) {
    return (
        <>
      <img
        className="avatar"
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
        alt={name + surName}
        id={imageID}
      />
      <h1> {name} </h1>
      <h2> {surName}</h2>
      <h2> {size}</h2>
      </>
    );
  }
  
  
  