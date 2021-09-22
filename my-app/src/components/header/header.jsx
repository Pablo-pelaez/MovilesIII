
const Header = ({title, description}) => {
    return (
        <div className="jumbotron text-center" style={{"marginBottom":0}}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
export default Header;