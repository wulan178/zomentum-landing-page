import ListItem from '../molecules/ListItem/listItem'

export default function Items() {
    return (
        <div className="container-fluid text-center list-container">
            <h1 className="list-heading text-center">List. Sell. Grow</h1>
            <div className="row text-center mx-auto list-row">
                <ListItem icon="/icons/listSell1.svg" desc="Be a part of the only  All-In-One platform for IT services" />
                <ListItem icon="/icons/listSell2.svg" desc="Come closer to finding your next customer" />
                <ListItem icon="/icons/listSell3.svg" desc="Grow your business with a single click" />
            </div>
        </div>
    )
}
