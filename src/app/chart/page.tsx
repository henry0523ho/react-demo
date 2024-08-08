import dynamic from 'next/dynamic';

// 動態導入圖表組件，禁用 SSR
const MyChart = dynamic(() => import('@/app/chart/myChart'), {
  ssr: false,
});

function ChartPage(){
  return (
    <div>
      <h1>Recharts 在 Next.js 中的使用</h1>
      <MyChart />
    </div>
  )
}

export default ChartPage
