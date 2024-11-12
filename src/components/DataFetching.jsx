import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using the provided API URL
        const response = await fetch(
          "https://api.express24.uz/client/v5/catalog/stores?latitude=41.311191&longitude=69.279776&limit=1200&rootCategoryId=1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();

        setData(jsonData.list || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Stores List</h1>
      <div className="store-list">
        {data.map((store) => (
          <div key={store.id} className="store-card">
            <img src={store.logo} alt={store.name} className="store-logo" />
            <h3>{store.name}</h3>
            <p>Branch ID: {store.branchId}</p>
            {/* Add any other store details you want to display */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
