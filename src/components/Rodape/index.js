import './Rodape.css'


function Rodape(){
    return(
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <div class="rodape">
                <div class="rodape-rodape">
                    <div class="rodape-div">
                        <p class="rodape-texto">
                            Endereço: Travessa Professora Elza Bittencourt, 61 - Niterói - RJ
                        </p>
                    </div>

                    <div class="rodape-icon">
                        <a href="https://douglasdeziderio.com.br/" class="bi bi-globe-americas"></a>
                        <a href="https://www.instagram.com/douglasdezideriodev/" class="bi bi-instagram"></a>
                        <a href="https://api.whatsapp.com/send?phone=5521980091573&text=Gostaria%20de%20falar%20sobre%20mitologia%20grega!" class="bi bi-whatsapp"></a>
                    </div>
                </div>

                <div>
                    <p class="rodape-copy">
                        © 2024 por Douglas Deziderio - DEV.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Rodape