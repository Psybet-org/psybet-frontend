import Layout from "../src/components/layout";
import useEthereum from "../src/services/ethereum/useEthereum";
import { sign } from "../src/services/ethereum/api/ethAuth";
import { getNonce, verifySignature } from "../src/services/api/users";
import { EventEmitter } from "stream";


export default function Home() {

  const { connect , isConnected, isInitialized, currentAccount } = useEthereum();
  const handleSign = async () => {
    if(currentAccount){
      const { data : { data : { nonce }}} = await getNonce(currentAccount);
      console.log({nonce})
      const signature = await sign({account : currentAccount, message : nonce});
      const user = await verifySignature(currentAccount, signature);
      console.log({user})
    }
  } 

  return (
    <Layout>
        <div className="flex flex-col gap-y-4">
          <button className="border p-3" onClick={connect} disabled={isConnected}>
            connect
          </button>
          <button className="border p-3" onClick={handleSign} disabled={!isInitialized || !isConnected}>
            sign
          </button>
        </div>
    </Layout>
  );
}
