import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

export default function FilterSelect(options: {
  value: string;
  onValueChange: (value: string) => void;
  enum: Record<string, string>;
  label: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valueFormatFunction: (value: any) => any;
}) {
  return (
    <Select onValueChange={options.onValueChange} value={options.value}>
      <SelectTrigger className="m-3 my-1 w-[180px] self-center bg-[#181a1b]">
        <SelectValue placeholder={options.placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-[#181a1b] text-white">
        <SelectGroup>
          <SelectLabel>{options.label}</SelectLabel>
          <SelectItem value="all">All {options.label}</SelectItem>
          {Object.values(options.enum).map((v) => (
            <SelectItem key={v} value={v}>
              {options.valueFormatFunction(v)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
