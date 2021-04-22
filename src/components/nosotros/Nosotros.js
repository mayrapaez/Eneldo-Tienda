import './styles.css';

const Nosotros = () => {
    return (
        <>
            <div className="container-fluid"/>

            <div className="col-12 d-flex justify-content-center">
                <img className="card-img-top img-fluid imagen" src="../images/nosotros/nosotros.webp" alt="foto dueños eneldo"></img>
                <p id="textNosotros">
                Eneldo es un puente entre lo natural y vos, donde
                el espíritu de los mercados vuelve en un entorno moderno y fresco. 
                En nuestro mercado natural queremos acercarte día a día una alimentación mas sana y saludable para que puedas mejorar tu calidad de vida.<br></br>
                </p>
                <img class="card-img-top img-fluid nosotrosFraseImg" src="../images/nosotros/frase.webp" alt="frase dueños"></img>   
		    </div>

        </>
    );
};

export default Nosotros;