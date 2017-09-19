import React from 'react';
import {Panel} from 'react-bootstrap';
import Griddle from 'griddle-react';

const LineStatPanel = React.createClass({

    render() {

        let lineStats = this.props.lineStats;
        let activeRow = null;
        if (this.props.activeRow.props !== undefined) {
            activeRow = this.props.activeRow.props.data;
        } else {
            activeRow = this.props.activeRow;
        }

        return (
            <div>
                <div>
                    <h3>This page contains list of lines statistic for file {activeRow.fileName}</h3>
                </div>
                <div>
                    <Panel className="TablePanel">
                        <h4>Lines statistic</h4>
                        <Griddle results={lineStats} tableClassName="LineStatsTable" showFilter={true}
                                 showSettings={true}
                                 columns={["id", "longestWord", "shortestWord", "lineLength", "averageWordLength"]}
                        />
                    </Panel>
                </div>
            </div>
        )
    }
});

export default LineStatPanel;








