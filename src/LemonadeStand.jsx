import { useSelector, useDispatch } from "react-redux";
import { buyLemon, sellLemonade } from "./store";

export default function LemonadeStand() {
  const cash = useSelector((state) => state.lemonade.cash);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center p-5 space-y-4">
      <h1 className="text-2xl font-bold">Lemonadeboden</h1>
      <p className="text-xl">Penge: ${cash}</p>
      <div class="flex gap-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(buyLemon())}
        >
          Køb Citroner (-$2)
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch(sellLemonade())}
        >
          Sælg Citroner (+$3)
        </button>
      </div>
    </div>
  );
}