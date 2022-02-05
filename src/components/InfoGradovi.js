
import { useState, useEffect } from 'react'
import axios from 'axios'

function InfoGradovi(props) {

    const [gradoviInfo, SetGradoviInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/grad').then(res => {
            SetGradoviInfo(res.data.data);
        })
    }, []);

    const slika = "data:image/jpeg;base64,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"


    function obrisiGrad(id) {
        var gradoviInfo1 = gradoviInfo.filter((grad) => grad.id !== id);
        SetGradoviInfo(gradoviInfo1);
        alert('Grad obrisan!');
    }


    return (
        <div className="infogradovi">
            {
                gradoviInfo.map((grad) => (
                    <div className="jedan-grad" key={grad.id}>
                        <h2>{grad.naziv}</h2>
                        <img src={slika}></img>
                        <h2>{grad.drzava}</h2>
                        <div className="btns">
                            <button id='btn_info' onClick={() => props.info(grad.id)} className="btn btn-lg btn-primary">Info</button>
                            <button id='btn_delete' onClick={() => obrisiGrad(grad.id)} className="btn btn-lg btn-danger">Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default InfoGradovi;
