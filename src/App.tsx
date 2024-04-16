import { executors, filterAndSortExecutors } from "./config/executors";
import {
  BooleanParam,
  StringParam,
  useQueryParam,
  withDefault,
} from "use-query-params";
import {
  Detected,
  DetectedReadable,
  Key,
  KeyReadable,
  Platform,
  PriceType,
  PriceTypeReadable,
  Status,
  StatusReadable,
} from "./config/types";
import ExecutorData from "./components/executor-data";
import FilterSelect from "./components/filter-select";
import PlatformText from "./components/platform";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/select";
import { Button } from "./components/button";
import { ArrowLeftRight, GithubIcon } from "lucide-react";

export default function App() {
  const [reversed, setReversed] = useQueryParam(
    "reversed",
    withDefault(BooleanParam, false),
  );
  const [sort, setSort] = useQueryParam(
    "sort",
    withDefault(StringParam, "name"),
  );
  const stringParam = withDefault(StringParam, "all");
  const [os, setOS] = useQueryParam("os", stringParam);
  const [status, setStatus] = useQueryParam("status", stringParam);
  const [detected, setDetected] = useQueryParam("detected", stringParam);
  const [key, setKey] = useQueryParam("key", stringParam);
  const [price, setPrice] = useQueryParam("price", stringParam);

  const fsExecutors = filterAndSortExecutors(executors, {
    os,
    key,
    detected,
    sort,
    price,
    status,
  });

  return (
    <main className="text-white">
      <div className="flex bg-sky-600 p-10 text-center">
        <h1 className="text-3xl font-bold">Roblox Executors List</h1>
        <a
          href="https://github.com/mallusrgreatv2/roblox-executors"
          target="_blank"
          className="ml-auto"
        >
          <Button variant="secondary">
            <GithubIcon />
          </Button>
        </a>
      </div>
      <div className="ml-14 flex justify-center p-5 pb-0 md:ml-6">
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="mx-3 w-[180px] bg-[#181a1b]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-[#181a1b] text-white">
            <SelectGroup>
              <SelectLabel>Sort types</SelectLabel>
              <SelectItem value="name">Sort by name</SelectItem>
              <SelectItem value="price">Sort by price</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          onClick={() => setReversed((v) => !v)}
          className={reversed ? "" : "bg-green-800"}
        >
          <ArrowLeftRight />
        </Button>
      </div>
      <div className="flex flex-col justify-center p-5 pb-0 md:flex-row">
        <FilterSelect
          value={os}
          onValueChange={setOS}
          enum={Platform}
          label="OSes"
          placeholder="Select an OS"
          valueFormatFunction={(v) =>
            PlatformText({
              platform: v as Platform,
              width: 25,
              height: 25,
            })
          }
        />
        <FilterSelect
          value={status}
          onValueChange={setStatus}
          enum={Status}
          label="Statuses"
          placeholder="Select a status"
          valueFormatFunction={StatusReadable}
        />
        <FilterSelect
          value={key}
          onValueChange={setKey}
          enum={Key}
          label="Key Types"
          placeholder="Select a key type"
          valueFormatFunction={KeyReadable}
        />
        <FilterSelect
          value={price}
          onValueChange={setPrice}
          enum={PriceType}
          label="Price Types"
          placeholder="Select a price type"
          valueFormatFunction={PriceTypeReadable}
        />
        <FilterSelect
          value={detected}
          onValueChange={setDetected}
          enum={Detected}
          label="Detection Types"
          placeholder="Select a detection type"
          valueFormatFunction={DetectedReadable}
        />
      </div>
      <div className="flex flex-col p-4">
        {(reversed ? fsExecutors.reverse() : fsExecutors).map((executor) => (
          <ExecutorData executor={executor} />
        ))}
      </div>
      <footer className="absolute w-full bg-sky-600 p-10 text-center">
        Made by{" "}
        <a
          href="https://discopika.tk"
          className="hol pl-1 font-semibold text-blue-800 transition-colors hover:text-blue-900"
        >
          mallusrgreat
        </a>
      </footer>
    </main>
  );
}
