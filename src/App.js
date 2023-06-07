import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Main from "./components/Main/Main";
import Search from "./components/SearchBar/Search";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "./features/apiSlice";

function App() {
  const [content, setContent] = useState(null);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const {
    data: allProductsData,
    isSuccess,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery();

  const { data: singleProductData } = useGetProductQuery(search);

  useEffect(() => {
    if (isSuccess && search === "") {
      setContent(allProductsData);
    } else if (search !== "") {
      setContent(singleProductData);
    }
  }, [isSuccess, allProductsData, search]);

  return (
    <div className={styles.app}>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {isSuccess && <Main content={content} />}
    </div>
  );
}

export default App;
