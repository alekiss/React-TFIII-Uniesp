import { FaPlus, FaSearch, FaList, FaRegIdBadge, FaPoo } from "react-icons/fa";
import "./styles.css"
import Cards from "../../components/Card";
import { FaAtom } from "react-icons/fa6";

const Home = () => {
    const data = [
        {
            "image": <FaPlus />,
            "title": "Simple Counter",
            "route": "simple-counter"
        },
        {
            "image": <FaSearch />,
            "title": "Filter Search",
            "route": "filter-search",
        },
        {
            "image": <FaList />,
            "title": "Display List",
            "route": "display-list"
        },
        {
            "image": <FaAtom />,
            "title": "Context Api",
            "route": "context-api"
        },
        {
            "image": <FaRegIdBadge />,
            "title": "Call to API with Fetch",
            "route": "fetch"
        },
        {
            "image": <FaPoo />,
            "title": "Call to API with Axios",
            "route": "axios" 
        }
    ];

    return (
        <div className="home">
            <div className="home_content">
                {data.map((item, index) => (
                    <div className="cards" key={index}>
                        <Cards 
                            image={item.image}
                            title={item.title}
                            route={item.route}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home
