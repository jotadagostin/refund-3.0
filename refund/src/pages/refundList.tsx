import { ButtonSearch } from "../components/buttonSearch";
import { Input } from "../components/input";
import MainHeader from "../components/main-header";

export default function RefundList() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />

      <section className="flex-1 bg-(--gray-400) px-16 py-8">
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 className="text-(--gray-100) text-[20px] font-bold mb-6 ">
              Requests
            </h1>
            <div className="flex items-center gap-2  justify-center pb-5 border-b border-gray-200">
              <Input
                inputSize="md"
                label=""
                placeholder="Search for the name"
              />
              <ButtonSearch size="sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
