function Greeting(props){ //функц component  with props. олон html render лэнэ
    return(
    <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <p>{props.study ? "Irsen" : "Cholootei"}</p>
        <p>{props.point [0]}</p>
        <p>{props.point [1]}</p>
        <p>{props.point [2]}</p>

        {props.point.map(
            (el, index) =>
            <p key={index}>{el}</p>
        )}

        <p>{props.myObj.mergejil}</p>
        <p>{props.myObj.index}</p>
    </div>
    )
}

ReactDOM.render(
    <Greeting name={"Sarah"}
     age={22} 
     study={false}
     point={[80, "Seventy nine", false]}
     myObj={{mergejil: 'SW', index: 'SW18D048'}}/>,
document.getElementById('root')
);

