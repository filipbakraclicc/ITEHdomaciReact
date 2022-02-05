import { useEffect, useState } from 'react'
import axios from 'axios'
import Gradovi from './Gradovi';

function PocetnaStranica() {

    const [gradoviBaza, SetGradoviBaza] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/grad').then(res => {

            SetGradoviBaza(res.data.data);
        })
    }, []);

    console.log(gradoviBaza)


    return (
        <div className="ps-div">
            <Gradovi gradovi={gradoviBaza} />
        </div>
    );
}

export default PocetnaStranica;
