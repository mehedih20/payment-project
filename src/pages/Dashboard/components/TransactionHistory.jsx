import { useSelector } from "react-redux";
import { useGetTransactionsHistoryQuery } from "../../../redux/features/transaction/transactionApi";
import TransactionData from "./TransactionData";

function convertToDateString(isoDateString) {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dateString = `${year}/${month}/${day}`;

  return dateString;
}

const TransactionHistory = () => {
  const { userData } = useSelector((state) => state.user);
  const { data } = useGetTransactionsHistoryQuery(userData.username);

  return (
    <div className="bg-gray-100 mt-10 mr-8 border-transparent shadow-xl p-4 rounded-xl h-5/6 overflow-y-scroll">
      <div className="text-2xl font-semibold">Transaction history</div>

      <div className="flex justify-around pt-4">
        <div>
          <p className="text-gray-400 text-lg pb-2">Receiver</p>
        </div>
        <div>
          <p className="text-gray-400 text-lg pb-2">Type</p>
        </div>
        <div>
          <p className="text-gray-400 text-lg pb-2">Date</p>
        </div>
        <div>
          <p className="text-gray-400 text-lg pb-2">Amount</p>
        </div>
      </div>

      {data &&
        data.data.map((item) => {
          const { amount, receiver, transactionType, createdAt, _id } = item;

          return (
            <TransactionData
              key={_id}
              receiver={receiver}
              type={transactionType}
              date={convertToDateString(createdAt)}
              amount={`$${amount}`}
            />
          );
        })}
    </div>
  );
};

export default TransactionHistory;
