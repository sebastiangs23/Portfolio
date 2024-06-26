import React from "react";
import progClase from "../../../assets/imagenes-trabajo/Inteligenio/ProgramarClase.drawio.png";

export default function JobDetailsinte(){
    return(
        <div>
            <h2 className="section__title">Inteligenio</h2>
            <img src={progClase} alt="" />
            <div>
                  <p>
                    -I Developed a service using Azure Speech AI which allows
                    the client to enter into a conversation with the system. All
                    the data is transformed into metrics and statistics, to be
                    rendered in graphs on the administrator dashboard. <br />
                    In addition to migrating the project from React 15 to React
                    18 and applying hexagonal architecture in the front.
                  </p>
                </div>
        </div>
    )
}