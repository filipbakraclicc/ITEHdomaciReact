import { useEffect, useState } from 'react'
import axios from 'axios'
import InfoGradovi from './InfoGradovi'

function InfoStranica() {

    const [gradoviBaza, SetGradoviBaza] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/grad').then(res => {

            SetGradoviBaza(res.data.data);
        })
    }, []);

    console.log(gradoviBaza)


    function gradInfo(id) {
        for (let i = 0; i < gradoviBaza.length; i++) {
            if (gradoviBaza[i].id === id) {
                alert('Naziv grada: ' + gradoviBaza[i].naziv + '\n' +
                    'Država: ' + gradoviBaza[i].drzava + '\n' +
                    'Region: ' + gradoviBaza[i].region + '\n' +
                    'Poštanski broj: ' + gradoviBaza[i].postanskiBroj
                )
            }
        }
    }


    return (
        <div className="ps-div">
            <InfoGradovi gradovi={gradoviBaza} info={gradInfo} />
        </div>
    );
}

export default InfoStranica;
