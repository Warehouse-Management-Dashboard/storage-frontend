import { useEffect, useState } from "react";
import TablesAction from "../components/TablesAction";
import TablesTable from "../components/TablesTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import { useDebounce } from "../hooks/useDebounce";
import { fetchProductCategory } from "../redux/slices/productCategoriesSlice";

const Tables = () => {
  const [sortBySelect, setSortBySelect] = useState("");
  const [categorySelect, setCategorySelect] = useState();
  const [filterByName, setFilterByName] = useState("");

  const searchName = useDebounce(filterByName, 500);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const productCategory = useSelector((state) => state.productCategory);

  useEffect(() => {
    dispatch(
      fetchProducts({
        name: searchName,
        sortBy: sortBySelect,
        productCategoryId: categorySelect,
      })
    );
  }, [dispatch, searchName, categorySelect, filterByName, sortBySelect]);

  useEffect(() => {
    dispatch(fetchProductCategory({}));
  }, [dispatch]);

  return (
    <div className="px-4 py-3 vstack gap-3">
      <TablesAction
        sortBySelect={sortBySelect}
        setSortBySelect={setSortBySelect}
        categorySelect={categorySelect}
        setCategorySelect={setCategorySelect}
        filterByName={filterByName}
        setFilterByName={setFilterByName}
        productCategory={productCategory}
        products={products}
      />
      <TablesTable products={products} />
    </div>
  );
};

export default Tables;
