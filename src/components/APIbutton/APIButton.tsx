import React from "react";
import axios from "axios";

interface IPost {
  id: string;
  name: string;
  address: string;
  email?: string;
  car?: string;
}

const defaultPosts: IPost[] = [];

export const APIButton = () => {
  const [customers, setCustomers]: [IPost[], (posts: IPost[]) => void] =
    React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(false);
  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  const toggleCustomer = () => {
    setLoading(!loading);
  };

  React.useEffect(() => {
    axios
      .get<IPost[]>("http://localhost:3001/customer/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
      });
  }, []);

  return (
    <div className="main-flex-container">
      <button className="customer-btn" onClick={toggleCustomer}>
        Get Customer
      </button>
      {loading &&
        customers.map((customer, i) => {
          return (
            <div key={i}>
              <p>Name: {customer.name}</p>
              <p>Address: {customer.address}</p>
              <p>Email: {customer.email}</p>
              <p>Car: {customer.car}</p>
            </div>
          );
        })}
      <div>{loading && <p>{error}</p>}</div>
    </div>
  );
};
