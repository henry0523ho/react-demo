import dynamic from "next/dynamic";

// 動態導入圖表組件，禁用 SSR
const MyChart = dynamic(() => import("@/app/chart/myChart"), {
  ssr: false,
});

function ChartPage() {
  return (
    <div className="bg-background w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl text-text p-2">在Next.js中的使用Recharts</h1>
      <MyChart />
    </div>
  );
}

export default ChartPage;
