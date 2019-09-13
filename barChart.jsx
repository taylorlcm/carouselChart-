import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component{

    render() {
        return(
            <div className="col-12 col-md-6 col-xl-6">
                <h3>{this.props.title}</h3>
                <Bar
                    data={this.props.data}
                    options={{
                        title:{
                            display:true,
                            text: this.props.title,
                            fontSize:25
                        },
                        legend:{
                            position:'bottom'
                        }

                    }}
                    height={200}

                />
            </div>
        )
    }
}


export default BarChart;
