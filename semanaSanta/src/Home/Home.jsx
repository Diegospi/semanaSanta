import { semanaSanta } from "../utils/semanasantaBD";

export function Home(){

    //ZONA DE ANALISIS DE DATOS
    let filtro=semanaSanta.filter(function(dia){
        return(dia.costoEvento<=15000)
    })
    let filtro2=semanaSanta.filter(function(diasanto){
        return(diasanto.cantidadFeligreses<3500 && diasanto.costoEvento<35000 && diasanto.necesitaConfesion==false)
    })
    
    return(
        <>
        <section className="container">
            <div className="row">
                <div className="col-12 col-md-8">
                    <h3>PROGRAMACIÓN SEMANA MAYOR</h3>
                    <hr />
                    {
                        semanaSanta.map(function(dia){
                            return(
                                <h1>{dia.eventoPrincipal}: costo $ {dia.costoEvento}</h1>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        </>
    )
}