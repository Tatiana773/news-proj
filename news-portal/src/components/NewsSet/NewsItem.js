import moment from 'moment'

const NewsItem = ({item}) => {
    return (
        <div>
            <p>
                <span>
                    {
                        moment(new Date(Date.now()).toISOString()).format("DD.MM.YY") === moment(item.timestamp).format("DD.MM.YY")?
                        moment(item.timestamp).format("hh:mm"):
                        moment(item.timestamp).format("DD.MM")
                    }
                </span>
                {item.title}
            </p>
        </div>
    )
}

export default NewsItem
