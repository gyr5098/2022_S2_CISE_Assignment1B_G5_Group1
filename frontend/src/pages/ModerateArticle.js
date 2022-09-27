import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
//部分功能并未完成
//需要连接数据库，将数据库中用户输入的数据提取出来
//添加一个按钮 来改变信息状态
const ModerateArticle = () => {
    return (
      <div>
        <h2>Moderate an Article</h2>
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
 
export default ModerateArticle; 
