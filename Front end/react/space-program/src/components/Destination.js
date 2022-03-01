import data from "../utils/data"

function Destination() {
  return (
    <section className="destination">
        <div className="container">
            {data.destinations.map((planet,key) =>{
                return(
                    <div className="destination__content">
                        <h5 className="destination__content--heading">
                            <span>01</span>Pick Your Destination
                        </h5>
                        <div className="destination__details">
                            <div className="destination__details--left">
                                <img
                                    src={`${planet.images.png}`}
                                    alt="Planet"
                                />
                            </div>
                            <div className="destination__details--right">
                                {/* <nav className="destination__navigation">
                                    <ul className="destination__navigation--list" >
                                        {
                                            data.destinations.map((planet,key)=>{
                                                return(
                                                    <li className="destination__navigation--item">
                                                        {planet.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </nav> */}
                                <h2>
                                    {planet.name}
                                </h2>
                                <p>
                                    {planet.description}
                                </p>
                                <div className="destination__planet">
                                    <div className="destination__planet--destination">
                                        <span className="subheading-secondary">
                                            AVG. DISTANCE
                                        </span>
                                        <div className="subheading-primary">
                                            {planet.distance}
                                        </div>
                                    </div>
                                    <div className="destination__planet--traveltime">
                                        <span className="subheading-secondary">
                                            Est. travel time
                                        </span>
                                        <div className="subheading-primary">
                                            {planet.travel}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Destination