export function graphicData(sentimentData) {
    // let positiveData, negativeData, neutralData = sentimentData 
    const data = {
        datasets: [
            {
                label: '% porcentagem',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgb(128, 0, 0)',
                    'rgb(26, 101, 26)',
                    'rgb(50, 50, 50)',
                ],
                borderColor: [
                    'rgb(128, 0, 0)',
                    'rgb(26, 101, 26)',
                    'rgb(50, 50, 50)',
                ],
                borderWidth: 1,
                // hoverOffset: 4,
                // circumference: 1
                radius: 190
            }
        ],
        // labels: ['Red', 'Blue', 'Yellow'],

    }

    return data;

}



// https://codesandbox.io/s/github/reactchartjs/react-chartjs-2/tree/master/sandboxes/pie/default?from-embed=&file=/App.tsx:36-41
// https://react-chartjs-2.js.org/examples/pie-chart/
