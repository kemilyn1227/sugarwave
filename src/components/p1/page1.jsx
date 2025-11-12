import 'bootstrap/dist/css/bootstrap.min.css';
import './Page1.css';

import Wave from "./wave1";
import Wave2 from './wave2';
import Button from 'react-bootstrap/Button';
import Carrosel from './carrousel';
import { FaWhatsapp } from "react-icons/fa";
import React, { useState, useEffect } from "react";



import Icon from './icons';
import PMel from '../../assets/Ptradicional.png';
import PKpop from '../../assets/PKpop.png';
import PNut from '../../assets/PNutella.png';
import PDl from '../../assets/PDoceLeite.png';
import InfinitiCarrousel from './carrouseIn/infinityCarrousel';

function Home() {

  const [offset, setOffset] = useState(563);

  const [offsetDiv2, setOffsetdiv2] = useState(209);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 480) setOffset(150);
        else if (window.innerWidth < 768) setOffset(663);
        else setOffset(563);
      };

      window.addEventListener("resize", handleResize);
      handleResize(); // ajusta ao carregar

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 480) setOffsetdiv2(150);
        else if (window.innerWidth < 768) setOffsetdiv2(76);
        else setOffsetdiv2(222);
      };

      window.addEventListener("resize", handleResize);
      handleResize(); // ajusta ao carregar

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
    <div >

        <Wave position="top" color="rgb(213, 185, 215)" height="120px" offset="31px" />

        <div className="container div1 ">
            <div className="row align-items-center">
            
              {/* Coluna do texto */}
              <div className="col-md-6 text-center text-md-start divTittle">
                <h1>Confeitaria Artesanal</h1>
                <p>Doces que encantam como sua música favorita de K-pop</p>
                <Button 
                    className="order-button" 
                    href="https://wa.me/5516000000000" 
                    target="_blank"
                  >
                    <FaWhatsapp style={{ marginRight: '8px' }} /> Peça já!
                </Button>
              </div>

              {/* Coluna do carrossel */}
              <div className="col-md-6 carResp">
                <Carrosel />
              </div>

            </div>
         </div>
      

        <Wave position="bottom" color="#9d8ae9" offset={`${offsetDiv2}px`}/>
        <div className='divIcon div2'>

            <section>

              <Icon imagem={PMel}/>
              <Button 
                    className="order-button buttonIcon" 
                    href="https://wa.me/5516997540762?text=Olá,+quero+fazer+um+pedido+,+adoraria+experimentar+o+sabor+tradicional!
" 
                    target="_blank"
                  >
                    <FaWhatsapp style={{ marginLeft: '8px' }} /> Tradicional
                </Button>

            </section>
            <section>

              <Icon imagem={PKpop}/>
              <Button 
                    className="order-button buttonIcon" 
                    href="https://wa.me/5516997540762?text=Olá,+quero+fazer+um+pedido+,+adoraria+experimentar+o+sabor+de+brigadeiro!
" 
                    target="_blank"
                  >
                    <FaWhatsapp style={{ marginRight: '8px' }} />Brigadeiro
                </Button>

            </section>

            <section>

              <Icon imagem={PNut}/>
              <Button 
                    className="order-button buttonIcon" 
                    href="https://wa.me/5516997540762?text=Olá,+quero+fazer+um+pedido+,+adoraria+experimentar+o+sabor+de+nutella!
" 
                    target="_blank"
                  >
                    <FaWhatsapp style={{ marginRight: '8px' }} />Nutella
                </Button>

            </section>
            <section>

              <Icon imagem={PDl}/>
              <Button 
                    className="order-button buttonIcon" 
                    href="https://wa.me/5516997540762?text=Olá,+quero+fazer+um+pedido+,+adoraria+experimentar+o+sabor+de+doce+de+leite!
" 
                    target="_blank"
                  >
                    <FaWhatsapp style={{ marginRight: '8px' }} /> Doce de leite
                </Button>

            </section>

        </div>

       <div className='div2Resp'>

        <InfinitiCarrousel/>

       </div>
        

    </div>
);
  
}

export default Home;