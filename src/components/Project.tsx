interface Item {
    props: {
        id: string;
        title: string;
        description: string;
        imageURL: string;
        tipo: string;
        github: string;
        link: string;
        hosted: boolean;
    }
}

function Project({props}:Item) {
  return (
    <div className="project">
        <img src={props.imageURL} alt="" />
        <div className="texts">
            <h2>
                {props.title}
            </h2>
            <p>
                {props.description}
            </p>
        </div>
        <div className="links">
            <a href={props.github}>Github</a>
            {props.hosted && <a href={props.link} target='_black'>Website</a>}
        </div>
    </div>
  )
}

export default Project