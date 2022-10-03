// import Table from "../components/evidenceTable";
// import tablecolumns from "../components/tableColumns";
import ShowArticleList from "../components/ShowArticleList";
import "../App.css";

  const EvidenceList = () =>  {
    return (
      <div>
        {/* <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Styles>
          <Table data={articles} columns={tablecolumns} />
        </Styles> */}
        <ShowArticleList/>
      </div>
    );
  }

export default EvidenceList;
