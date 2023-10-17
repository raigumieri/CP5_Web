import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  
  return (
    <>
      <main className='main'>
        <h1 className='titulo_home'>
          Delícias do Oriente: Sabores Autênticos no Nosso Restaurante Japonês
        </h1>
        
        <div id="carrossel"  className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="src\assets\comida1.jpeg" className="d-block" alt=" Comida 1" />
            </div>
            <div className="carousel-item">
              <img src="src\assets\comida2.jpeg" className="d-block " alt="comida 2" />
            </div>
            <div className="carousel-item">
              <img src="src\assets\comida3.jpeg" className="d-block" alt="comida 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carrossel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carrossel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        <div className='paragrafo_home'>
          <p className='texto'>
            Bem-vindo ao nosso pedaço do Japão no coração da cidade! Na nossa loja de comida japonesa, mergulhe em uma experiência culinária autêntica que o transportará para as ruas movimentadas de Tóquio e os tranquilos templos de Kyoto.
          </p>
          <p className='texto'>
          Nossos chefs apaixonados e experientes dominam a arte da culinária     japonesa, garantindo que cada prato seja uma explosão de sabores e uma obra de arte visual. Desde sushis frescos e sashimis impecáveis até os deliciosos ramens e tempuras crocantes, cada mordida é uma jornada sensorial.
          </p>
          
          <div>
            <div className='card_superior'>
              
              <div className="card" style={{ width: '14rem' }}>
                <img src="src/assets/Onigiri.jpeg" className="card-img-top" alt="Descrição da imagem" />
                <div className="card-body">
                  <h2>Onigiri:</h2>
                  <p className="card-text">
                    O tesouro da culinária japonesa - arroz moldado à mão com recheios incríveis, uma explosão de sabor em cada mordida!
                  </p>
                  <h4 className='valor_onigiri'>Preço: R$6,80</h4>
                </div>
              </div>

              <div className="card" style={{ width: '14rem' }}>
                <img src="src\assets\Uramaki.jpg" className="card-img-top" alt="Descrição da imagem" />
                <div className="card-body">
                  <h2>Uramaki:</h2>
                  <p className="card-text">
                    Sushi sofisticado com arroz por fora, oferecendo uma combinação única de sabores e texturas. Aprecie uma experiência culinária memorável.
                  </p>
                  <h4>Preço: R$19,99</h4>
                </div>
              </div>

              <div className="card" style={{ width: '14rem' }}>
                <img src="src\assets\temaki.jpeg" className="card-img-top" alt="Descrição da imagem" />
                <div className="card-body">
                  <h2>Temaki:</h2>
                  <p className="card-text">
                    O sushi em cone, recheado com arroz, peixes frescos e vegetais, oferece sabor incrível em um formato descontraído. Aprecie uma iguaria japonesa única.
                  </p>
                  <h4>Preço: R$19,39</h4>
                </div>
              </div>

            </div>

            <div className='card_inferior'>
              
              <div className="card" style={{ width: '14rem' }}>
                <img src="src\assets\Shimeji.jpeg" className="card-img-top" alt="Descrição da imagem" />
                <div className="card-body">
                  <h2>Shimeji:</h2>
                  <p className="card-text">
                    Cogumelo suave com sabor umami, versátil e delicioso em diversas preparações. Adoce seus pratos com o shimeji.
                  </p>
                  <h4>Preço: R$24,49</h4>
                </div>
              </div>

              <div className="card" style={{ width: '14rem' }}>
                <img src="src\assets\sashimi.jpeg" className="card-img-top" alt="Descrição da imagem" />
                <div className="card-body">
                  <h2>Sashimi:</h2>
                  <p className="card-text">
                    Fatias frescas de peixe ou frutos do mar, um deleite gastronômico que celebra a pureza do sabor.
                  </p>
                  <h4 className='valor_sashimi'>Preço: R$48,70</h4>
                </div>
              </div>

              <div className="card" style={{ width: '14rem' }}>
                <img src="src\assets\HotRoll.jpeg" className="card-img-top" alt="Descrição da imagem" />
                <div className="card-body">
                  <h2>Hot Roll:</h2>
                  <p className="card-text">
                    Sushi frito com sabores picantes, uma explosão de sabor quente e delicioso. A fusão perfeita para o paladar.
                  </p>
                  <h4>Preço: R$21,79</h4>
                </div>
              </div>

            </div>
          </div>
          






          <p className='texto'> 
            Usamos apenas ingredientes de alta qualidade, selecionados com cuidado, para oferecer a você o melhor da gastronomia japonesa. Se você é um amante de peixes frescos ou um fã de pratos quentes e saudáveis, temos algo para satisfazer todos os gostos.
          </p> 
          <p className='texto'>
            Nossa atmosfera é um reflexo da hospitalidade japonesa, onde a simplicidade e a elegância se encontram. Estamos ansiosos para recebê-lo em nossa loja, seja para uma refeição rápida durante o almoço ou para uma noite memorável com amigos e familiares.
          </p> 
          <p className='texto'>
            Venha nos visitar e descubra por que somos a sua escolha número um para comida japonesa na cidade. Domo arigato por nos escolher!
          </p>
        </div>
      </main>

      
    </>
  );
}
