import TablesAction from "../components/TablesAction";
import TablesTable from "../components/TablesTable";

const Tables = () => {
  return (
    <div className="m-3 vstack gap-3">
      <TablesAction />
      <TablesTable />
    </div>
  );
};

export default Tables;
