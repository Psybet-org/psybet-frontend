// import useEthereum from "../../src/services/ethereum/useEthereum";
// import { sign } from "../../src/services/ethereum/api/ethAuth";
// import {
//   getNonce,
//   updateWallets,
//   verifySignature,
// } from "../../src/services/api/users";
// import { etherValue, weiValue } from "../../src/utils/ethSwaper";
// import { useEffect, useState } from "react";
// import { sendMoney } from "../../src/services/ethereum/api/ethFinance";
// import axios from "../../src/services/api/axios";

// function App() {
//   const [user, setUser] = useState(null);
//   const [ethValue, setEthValue] = useState<Number>(0);
//   const { connect, isConnected, isInitialized, currentAccount } = useEthereum();
//   const [token, setToken] = useState("");
//   const isLogedIn = !!token;

//   const handleSign = async () => {
//     if (currentAccount) {
//       const {
//         data: {
//           data: { nonce },
//         },
//       } = await getNonce(currentAccount);
//       const signature = await sign({ account: currentAccount, message: nonce });
//       const {
//         // eslint-disable-next-line @typescript-eslint/no-shadow
//         data: { token, user },
//       }: any = await verifySignature(currentAccount, signature);

//       localStorage.setItem("token", token);
//       axios.defaults.headers.common["Authorization"] = token;

//       setToken(token);
//       setUser(user);
//     }
//   };

//   const handleChargeWallet = async () => {
//     await sendMoney(Number(weiValue(ethValue + "")), currentAccount || "");
//     let updatedUser = await updateWallets();

//     setUser(updatedUser.data.data.user);
//   };

//   useEffect(() => {
//     (async () => {
//       const tokn: string = (await localStorage.getItem("token")) || "";
//       if (tokn) {
//         let res = await updateWallets();
//         setUser(res.data.data.user);
//       }
//     })();
//   }, []);

//   return (
//     <div className="flex flex-col">
//       this is app
//       <button className="border p-3" onClick={connect} disabled={isConnected}>
//         connect
//       </button>
//       <button
//         className="border p-3"
//         onClick={handleSign}
//         disabled={!isInitialized || !isConnected || isLogedIn}
//       >
//         sign
//       </button>
//       <div className="flex flex-row gap-4">
//         <input
//           className="border px-4"
//           type="number"
//           placeholder="ETH VALUE"
//           // @ts-ignore
//           value={ethValue}
//           onChange={({ target: { value } }) => {
//             setEthValue(Number(value));
//           }}
//         />
//         <button className="border p-3" onClick={handleChargeWallet}>
//           charge
//         </button>
//       </div>
//       {
//         // @ts-ignore
//         user && user.wallet && (
//           <div>
//             <h1>
//               {
//                 // @ts-ignore
//                 user.wallet.ethAddress
//               }
//             </h1>
//             <h2>
//               {etherValue(
//                 // @ts-ignore
//                 user.wallet.ethValue + ""
//               )}
//             </h2>
//           </div>
//         )
//       }
//     </div>
//   );
// }

// export default App;

function App() {
  return "app";
}
export default App;
