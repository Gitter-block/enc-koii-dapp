
import { useRef } from "react";
import { properties } from "../lib/products"
import NumberInput from "./NumberInput";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

interface Props {
  submitTarget: string;
  enabled: boolean;
}

export default function Products({ submitTarget, enabled }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const { connected } = useWallet();

  return (
    <form method='get' action={submitTarget} ref={formRef}>
      <div className='flex flex-col gap-16'>
        <div className="grid grid-cols-1 gap-8">
          {properties.map(property => {
            return (
              <div className="rounded-md bg-white text-left p-8 shadow-lg" key={property.id}>
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold">{property.name}</h3>
                <p className="text-sm text-gray-800">{property.description}</p>
                <p className="text-sm text-blue-600">Location: {property.location}</p>
                <div className="my-4">
                  <p className="text-xl font-bold">{property.priceSol} SOL</p>
                  <p className="text-sm text-gray-600">Total Tokens: {property.tokenAllocation}</p>
                  <p className="text-sm text-green-600">Koii Rewards per Token: {property.koiiRewards}</p>
                </div>
                <div className="mt-1">
                  <label className="text-sm text-gray-600">Number of tokens to purchase:</label>
                  <NumberInput name={property.id} formRef={formRef} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="self-center flex flex-col items-center gap-4">
          <WalletMultiButton />
          {connected && (
            <button
              className="px-20 rounded-md py-2 max-w-fit bg-gray-900 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!enabled}
            >
              Purchase Tokens
            </button>
          )}
        </div>
      </div>
    </form>
  )
}
