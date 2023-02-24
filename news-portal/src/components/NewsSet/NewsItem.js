import moment from 'moment'
import { Link } from "react-router-dom";

const NewsItem = ({item}) => {
    return (
        <div>
            <span>
            {
                moment(new Date(Date.now()).toISOString()).format("DD.MM.YY") === moment(item.timestamp).format("DD.MM.YY")?
                moment(item.timestamp).format("hh:mm"):
                moment(item.timestamp).format("DD.MM")
            }
            </span>
            <Link to = {"/news/"+ item.id}>
                {item.title}
            </Link>
        </div>
    )
}

export default NewsItem
