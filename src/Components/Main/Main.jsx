
const Main = (props) => {
    return (
        <div >
            <a href={props.link}><img src={props.url} alt="" /></a>
            <p>{props.marke}</p>
            <span>{props.preis}</span>
        </div>
    )
}

export default Main;