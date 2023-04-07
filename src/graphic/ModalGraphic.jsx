import  Modal from 'react-bootstrap/Modal';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { graphicData }  from './Graphic';


export default function ModalGraphic () {
    ChartJS.register(ArcElement, Tooltip, Legend);

    let data = null;
    data = graphicData();

    return (
        <>
            {data && <Pie data={data} />}
        </>
    )
}