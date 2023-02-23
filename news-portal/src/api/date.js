import { faker } from '@faker-js/faker'
import moment from 'moment'

const timeStamp = () => {
    const newDate = new Date(Date.now()).toISOString()
    return moment(faker.date.recent(2, newDate)).format()
}
export default timeStamp

