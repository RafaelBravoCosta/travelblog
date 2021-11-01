import { Link } from 'react-router-dom';


const About = () => {

  return (
      <div>
    <Link to={{pathname: "/"}}>
        <button>
          Home
        </button>
        
        </Link>
        <div class="container">
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

                
                <div>
                <h3>Rafael Costa</h3>
                <p>Participo neste projecto para ganhar mais experiencia com React</p>
                </div>
                    
                <div>
                
                <h3>Yolanda Sampaio</h3>
                <p>Nunc mattis feugiat ex scelerisque congue</p>
                </div>
                <div>
                
                <h3>Maria Alves</h3>
                <p>Participo neste projecto porque sempre adorei viajar.</p>
                <p>Principalmente em sítios cheios de cultura e cidades com muito para ver e explorar</p>
                </div>
                </div>
                
</div>
    <div>
                <h1>Our mission</h1>
                <p>Partilhar as nossas experiencias das viagem que fizemos a varios lugares</p>
                </div>
    
    </div>

  );
};
export default About;
