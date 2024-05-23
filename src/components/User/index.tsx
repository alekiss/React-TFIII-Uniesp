export interface UserProps {
    name: {
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    picture: {
      large: string;
    };
  }

const User = ({name, email, phone, picture}: UserProps) => {
  return (
    <div>
        <img src={picture.large} alt={name.first + " " + name.last} />
        <h2>{name.first + " " + name.last}</h2>
        <p>E-mail:{email}</p>
        <p>Telefone:{phone}</p>
    </div>
  )
}

export default User