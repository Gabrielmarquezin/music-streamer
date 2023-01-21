import React, { useContext } from "react";
import { RouterContext } from "../../hooks/useRouter";
import { Apresentation } from "../../styles/routes/home";

export default function Home(){
    const [,setRoute] = useContext(RouterContext)

    function handleButton(e){
        setRoute(e.target.value)
    }


    return(
        <Apresentation>
            <div className="container">
                <p>OLA INTERNAUTAS DE <br/> TODO PLANETA!</p>
                <p>
                    divirta-se ouvindo previews de suas melhores<br/>
                    musicas. A plataforma oferece musicas utilizando<br/>
                    deezer API
                </p>

                <div className="btn">
                    <button type="button" value="Musics" onClick={handleButton}>MUSICS</button>
                </div>
            </div>
        </Apresentation>
    )
}