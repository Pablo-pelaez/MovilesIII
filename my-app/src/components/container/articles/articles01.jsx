import  './articles01.jsx'

const Article01 = ({date, title, description}) => {

    // const {id, title, date, description} = article

    return (
        <>
            <h2>{title}</h2>
            <h5>{date}</h5>
            <div class="fakeimg">Fake Image</div>
            <p>Some text..</p>
            <p>{description}</p>
        </>
    )
}
export default Article01;