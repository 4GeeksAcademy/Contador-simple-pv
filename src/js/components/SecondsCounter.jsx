

function SecondsCounter ({seconds}) {

    return (
        <div className="container">
            <div className="row bg-dark mt-5 text-center"> 
                <div className="col text-light"><i className="fa-solid fa-clock"></i></div>
                <div className="col text-light">{Math.floor(seconds/100000)% 10}</div>
                <div className="col text-light">{Math.floor(seconds/10000)% 10}</div>
                <div className="col text-light">{Math.floor(seconds/1000)% 10}</div>
                <div className="col text-light">{Math.floor(seconds/100)% 10}</div>
                <div className="col text-light">{Math.floor(seconds/10)% 10}</div>
                <div className="col text-light">{Math.floor(seconds/1)% 10}</div>
            </div>
        </div>
    )
}

export default SecondsCounter