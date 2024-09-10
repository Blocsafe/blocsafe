import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
  
interface Ioptions {
    label: string,
    value: string
}

const SelectInput = ({ placeholder, options }:{ placeholder: string, options: Ioptions[] }) => {
  return (
    <div>
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options?.map((item) => (
                    <SelectItem value={`${item.value}`}>{item.label}</SelectItem>
                ))}
                {/* <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem> */}
            </SelectContent>
        </Select>
    </div>
  )
}

export default SelectInput