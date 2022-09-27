import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
//需要添加连接数据库的
const EvidenceList = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
            <Dropdown/>
               <Styles>
                 <Table
                  data={articles}
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
}
 
export default EvidenceList; 
