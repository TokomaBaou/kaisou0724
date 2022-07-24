import "./styles.css";

const response = { data: { resultData: { departmentList: [{}] } } };

const responseData: ResponseData = response.data;
const resultData: Result = responseData.resultData;
/** 第一階層 */
const setOrganizationList: OrganizationListType[] = resultData.departmentList.map(
  (dep) => {
    const belong: BelongType[] = [
      {
        belongList: dep.belongList,
        departmentCd: dep.departmentCd,
        departmentName: dep.departmentName
      }
    ];
    const topOrganization: OrganizationListType = {
      departmentCd: dep.departmentCd,
      departmentName: dep.departmentName,
      belongList: createBelongList(belong)
    };
    return topOrganization;
  }
);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
