import { Link } from "react-router-dom"
import "./styles.css"

type CardProps = {
    image: React.ReactNode;
    title: string;
    route: string;
}

const Cards = ({image, title, route}: CardProps) => {
  return (
    <Link to={route} style={{textDecoration: "none"}}>
        <div className="cards">
            <div className="image">
                {image}
                {title}
            </div>
        </div>
    </Link>
  )
}

export default Cards