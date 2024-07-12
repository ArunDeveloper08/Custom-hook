import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",  
    },
   
  };

  const { response, error, loading } = useFetch(API_URL, fetchOptions);

  const tableContainer = {
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
  };

  const tableHead = {
    padding: "4px",
    border: "1px solid black",
  };

  const tableRow = {
    border: "1px solid black",
    padding: "2px",
  };

  return (
    <div>
      {loading ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <table style={tableContainer}>
          <thead>
            <tr>
              <th style={tableHead}>Id</th>
              <th style={tableHead}>Name</th>
              <th style={tableHead}>Email</th>
              <th style={tableHead}>Username</th>
              <th style={tableHead}>Address</th>
            </tr>
          </thead>
          <tbody>
            {response?.map((item) => (
              <tr key={item.id}>
                <td style={tableRow}>{item.id}</td>
                <td style={tableRow}>{item.name}</td>
                <td style={tableRow}>{item.email}</td>
                <td style={tableRow}>{item.username}</td>
                <td style={tableRow}>{item.address.street}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
