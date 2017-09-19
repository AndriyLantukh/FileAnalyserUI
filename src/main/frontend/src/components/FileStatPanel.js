import React from 'react';
import { Panel} from 'react-bootstrap';
import Griddle from 'griddle-react';

const FileStatPanel = React.createClass({

    onRowClick(row) {
        this.props.onFileRowClick(row);
    },

    render() {

        let fileStats = this.props.fileStats;

        return (
            <div>
                <h3>This page contains list of files statistic</h3>
                <h5>To get line statistic for file - click on the row in table</h5>
                <Panel className="TablePanel">
                    <Griddle results={fileStats} tableClassName="FileStatsTable" showFilter={true}
                             onRowClick={this.onRowClick}
                             showSettings={true}
                             columns={["fileName", "longestWord", "shortestWord", "averageLineLength", "averageWordLength"]}
                    />
                </Panel>
            </div>

        )
    }
});

export default FileStatPanel;








