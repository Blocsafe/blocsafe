import React from 'react'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const TransactionForm = () => {

//     const selectData = [
//         {
//             placeHolder: "My role",
//             options: [
//                 {
//                     label: "My role",
//                     value: "myRole",
//                 }
//             ]
//         },
//         {
//             label: "Token",
//             value: "token",
//             placeHolder: "Token"
//         },
//         {
//             label: "Inspection period",
//             value: "inspectionPeriod",
//             placeHolder: "Inspection role"
//         },
//     ]

  return (
    <div className='py-4'>
        <form action="" className='border-[1px] border-gray-300 max-w-[600px] mx-auto rounded-md shadow-md p-4'>
            <h1 className='text-2xl text-white'>Start Transaction</h1>

            <div>
                <div className='w-full py-2'>
                    <input className='p-2 w-full rounded-md' placeholder='Transaction title' />
                </div>
                <div className='flex w-full gap-2'>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="My role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="seller">Seller</SelectItem>
                            <SelectItem value="buyer">Buyer</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Tokens" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="seller">LSK</SelectItem>
                            <SelectItem value="buyer">USDT</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                <div className='py-4'>
                    <h2 className='text-white text-xl'>Transaction Details</h2>
                </div>
                <div>
                    <div className='flex gap-2'>
                        <div className='w-full'>
                        <input className='p-2 w-full rounded-md' placeholder='Item name' />
                        </div>
                        <div className='w-full'>
                        <input className='p-2 w-full rounded-md' placeholder='Price' />
                        </div>
                    </div>
                    <div className='py-2 flex flex-col gap-2'>
                        <div className='w-full'>
                        <input className='p-2 w-full rounded-md' placeholder='Item category' />
                        </div>
                        <div className='w-full'>
                        <input className='p-2 w-full rounded-md' placeholder='Item description' />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default TransactionForm