import React from 'react';
import {Route, Router, browserHistory} from 'react-router';

import $ from 'jquery';

import InitialData from './InitialData';
import Navigation from './Navigation';
import FileStatPanel from './FileStatPanel';
import LineStatPanel from './LineStatPanel';


class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            fileStats: InitialData.fileStats,
            lineStats: InitialData.lineStats,
            activeRow: InitialData.activeRow
        };
        this.updateFileStats = this.updateFileStats.bind(this);
        this.onFileRowClick = this.onFileRowClick.bind(this);
    }

    componentDidMount() {
        this.updateFileStats();
    }

    updateFileStats() {
        $.get("/files", (data) => {
            this.setState({fileStats: data})
        });
    }

    onFileRowClick(row) {
        var id = row.props.data.id;
        console.log("On file row click file Name " + row.props.data.fileName);
        this.setState({activeRow: row});

        $.post("/lines/" + id, (data) => {
            this.setState({lineStats: data})
        });

        browserHistory.push("/lines");
    }

    render() {
        let fileStatPanel = () => <FileStatPanel fileStats={this.state.fileStats}
                                                 onFileRowClick={this.onFileRowClick}/>;
        let lineStatPanel = () => <LineStatPanel lineStats={this.state.lineStats}
                                                 activeRow={this.state.activeRow}
        />;

        return (
            <div>
                <Navigation/>
                <Router history={browserHistory}>
                    <Route path="/" component={fileStatPanel}/>
                    <Route path="/lines" component={lineStatPanel}/>
                </Router>
            </div>
        );
    }
}

export default Main;