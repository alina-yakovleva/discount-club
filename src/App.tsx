import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PageCards from "./Pages/PageCards";
import PageReceipts from "./Pages/PageReceipts";
import PageTransactions from "./Pages/PageTransactions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageCards />} />
        <Route path="/card/:uuid/receipts" element={<PageReceipts />} />
        <Route path="/card/:uuid/transactions" element={<PageTransactions />} />
      </Route>
    </Routes>
  );
}

export default App;
