import './CorpoPrincipal.css'
import Banner from './héstia.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons'


function CorpoPrincipal(){
    return(
        <>
            <div className='box'>
                <div className="box-div">
                    <h1>
                        Fogo de Héstia
                    </h1>
                        
                    <h2>
                        Tudo sobre a mitologia grega em um só lugar.
                    </h2>
                        
                    <div className='box-div-bt'>
                        <a className='box-bt'><FontAwesomeIcon icon={faCloud} />Era<br></br>Primordial</a>
                        <a className='box-bt'><FontAwesomeIcon icon={faHourglassHalf} />Era<br></br>Titânica</a>
                        <a className='box-bt'><FontAwesomeIcon icon={faCloudBolt} />Era<br></br>Olimpiana</a>
                    </div>
                </div>


                <div className="box-div-img">
                    <img className="box-img" src={Banner} alt='Banner' title='Banner'/>
                </div>      
            </div>
        </>
    )
}

export default CorpoPrincipal