import TablesAction from "../components/TablesAction";
import TablesTable from "../components/TablesTable";

const Tables = () => {
  return (
    <div className="px-4 py-3 vstack gap-3">
      <TablesAction />
      <TablesTable />
    </div>
  );
};

export default Tables;
