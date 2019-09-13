import React, { Component } from 'react';
import BarChart from './barChart';
import NavBar from './navBar';

class Analysis extends Component {
    state = {
        serverData: [
            {
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: '数量',
                        data: [65, 59, 17, 81, 56, 55, 40, 21],
                        backgroundColor: '#f7e8f6',
                        borderWidth: 1,
                        hoverBackgroundColor: '#f1c6e7',
                    }]
                },
                title: "新玩家用户"
            },
            {
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: '数量',
                        data: [15, 29, 30, 41, 56, 65, 70, 22],
                        backgroundColor: '#d9eeec',
                        borderWidth: 1,
                        hoverBackgroundColor: '#64b2cd',
                    }]
                },
                title: "投注额趋势"

            },

            {
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: '数量',
                        data: [85, 39, 100, 61, 22, 73, 14, 59],
                        backgroundColor: '#010a43',
                        borderWidth: 1,
                        hoverBackgroundColor: '#f3d3d3',
                    }]
                },
                title: "在线充值"

            },

            {
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: '数量',
                        data: [95, 29, 70, 61, 56, 35, 40, 12],
                        backgroundColor: '#f6f6f6',
                        borderWidth: 1,
                        hoverBackgroundColor: '#eae9e9',
                    }]
                },
                title: "提款额"

            },


        ],
        chartData: {},
    };


    componentDidMount() {
        let i = 1;
        let barData;
        let barDatas = [...this.state.serverData];
        barData = JSON.parse(JSON.stringify(barDatas[0]));
        this.setState({chartData: barData});

        setInterval(() => {
            if(i >= barDatas.length){
                i = 0;
            }
            barData = JSON.parse(JSON.stringify(barDatas[i]));
            this.setState({chartData: barData});
            i++;


        }, 5000);

    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className="col-12">
                    <h1>分析</h1>
                    <hr></hr>

                    <BarChart
                        data = {this.state.chartData.data}
                        title = {this.state.chartData.title}
                    />
                </div>
            </div>
        );
    }
}

export default Analysis;
