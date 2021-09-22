import { useState } from "react";
import Article01 from "./articles/articles01";

const Container = () => {
    //Primero se pasa la varible y luego la función que va a modificar el estado de la variable

    const [articles, setArticle] = useState(articles = [
        {
            id: 1,
            title: "TITLE HEADING 1",
            date: "Title description, Dec 7, 2017",
            description: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Vietnam, quis nostrud exercitation ullamco"
        },
        {
            id: 2,
            title: "TITLE HEADING 2",
            date: "Title description, Dec 7, 2017",
            description: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Vietnam, quis nostrud exercitation ullamco"
        },
        {
            id: 3,
            title: "TITLE HEADING 3",
            date: "Title description, Dec 7, 2017",
            description: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Vietnam, quis nostrud exercitation ullamco"
        },
    ]);


    return (
        <div className="col-sm-8">
            { articles.map( article => {
                <Article01 
                key={article.id}
                title={article.title}
                date={article.date}
                description={article.description}
                />
            })}
        </div>
    )
}
export default Container;