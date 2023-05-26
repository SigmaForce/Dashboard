"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false, // Define como "false" para remover o grid horizontal (eixo x)
      },
    },
    y: {
      grid: {
        display: false, // Define como "false" para remover o grid vertical (eixo y)
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false, // Define como "false" para remover a legenda
    },
  },
};

const labels = [
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [
        300, 350, 120, 120, 150, 180, 160, 200, 250, 190, 280, 300, 360, 500,
        400, 450, 350, 800, 900,
      ],
      grid: {
        display: false,
      },
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-12 bg-gray-950 text-gray-200">
      <div className="border-r border-gray-900 col-span-2">
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Desempenho</a>
          </li>
          <li>
            <a href="">Histórico</a>
          </li>
        </ul>
      </div>
      <div className="col-span-10">
        <div className="w-full flex justify-between items-center  px-6 py-4">
          <div>
            <h1>Acompanhe suas Operações</h1>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-9 ">
            <div className="flex justify-around gap-2 mx-5 flex-col lg:flex-row ">
              <div className="bg-gray-900 p-4 w-full lg:w-1/4 rounded-md">
                <h2 className="text-center text-lg font-bold my-2">
                  Posição Atual
                </h2>
                <h1 className="text-2xl font-medium text-center">
                  R$ 10.000,00
                </h1>
              </div>
              <div className=" bg-gray-900 p-4 w-full lg:w-1/4 rounded-md">
                <h2 className="text-center text-lg font-bold my-2">
                  Dividendos Recebidos
                </h2>
                <h1 className="text-2xl font-medium text-center text-green-500">
                  R$ 10.000,00
                </h1>
              </div>
              <div className=" bg-gray-900 p-4 w-full lg:w-1/4 rounded-md">
                <h2 className="text-center text-lg font-bold my-2 ">
                  Total Investido
                </h2>
                <h1 className="text-2xl font-medium text-center">
                  R$ 10.000,00
                </h1>
              </div>
              <div className=" bg-gray-900 p-4 w-full lg:w-1/4 rounded-md">
                <h2 className="text-center text-lg font-bold my-2">Lucro</h2>
                <h1 className="text-2xl font-medium text-center text-green-500">
                  R$ 10.000,00
                </h1>
              </div>
            </div>
            <div className="div bg-gray-900 px-6 py-4 mx-5 rounded-lg my-6">
              <Line options={options} data={data} />
            </div>
          </div>
          <div className="col-span-3">
            <div className="rounded-lg mx-5">
              <ul className="flex flex-col justify-center items-center">
                <li className="flex justify-between bg-gray-900 w-full rounded-md p-4 my-2">
                  <div className="flex flex-col">
                    <h2 className="font-bold text-2xl leading-tight ">
                      R$ 300
                    </h2>
                    <span className="text-sm leading-relaxed">
                      Último preço: R$ 16,55
                    </span>
                    <span className="text-sm leading-relaxed text-red-500">
                      Preço Médio: R$ 20,46
                    </span>
                    <span className="text-sm leading-relaxed">
                      Quantidade: 15
                    </span>
                    <span className="text-sm leading-relaxed text-red-500">
                      Rentabilidade: -15,0%
                    </span>
                    <a href=""></a>
                  </div>
                  <div className="flex">
                    <div>
                      <h1 className="text-2xl font-bold">FLRY3</h1>
                      <span>Fleury</span>
                    </div>
                    <img
                      className="w-14 h-14"
                      src="https://cdn.cosmicjs.com/4ee53c30-7063-11e9-948f-7b6a64396c21-icon.png"
                      alt=""
                    />
                  </div>
                </li>
                <li className="flex justify-between bg-gray-900 w-full rounded-md p-4 my-2">
                  <div className="flex flex-col">
                    <h2 className="font-bold text-2xl leading-tight ">
                      R$ 300
                    </h2>
                    <span className="text-sm leading-relaxed">
                      Último preço: R$ 16,55
                    </span>
                    <span className="text-sm leading-relaxed text-red-500">
                      Preço Médio: R$ 20,46
                    </span>
                    <span className="text-sm leading-relaxed">
                      Quantidade: 15
                    </span>
                    <span className="text-sm leading-relaxed text-red-500">
                      Rentabilidade: -15,0%
                    </span>
                    <a href=""></a>
                  </div>
                  <div className="flex">
                    <div>
                      <h1 className="text-2xl font-bold">FLRY3</h1>
                      <span>Fleury</span>
                    </div>
                    <img
                      className="w-14 h-14"
                      src="https://cdn.cosmicjs.com/4ee53c30-7063-11e9-948f-7b6a64396c21-icon.png"
                      alt=""
                    />
                  </div>
                </li>
                <li className="flex justify-between bg-gray-900 w-full rounded-md p-4 my-2">
                  <div className="flex flex-col">
                    <h2 className="font-bold text-2xl leading-tight ">
                      R$ 300
                    </h2>
                    <span className="text-sm leading-relaxed">
                      Último preço: R$ 16,55
                    </span>
                    <span className="text-sm leading-relaxed text-red-500">
                      Preço Médio: R$ 20,46
                    </span>
                    <span className="text-sm leading-relaxed">
                      Quantidade: 15
                    </span>
                    <span className="text-sm leading-relaxed text-red-500">
                      Rentabilidade: -15,0%
                    </span>
                    <a href=""></a>
                  </div>
                  <div className="flex">
                    <div>
                      <h1 className="text-2xl font-bold">FLRY3</h1>
                      <span>Fleury</span>
                    </div>
                    <img
                      className="w-14 h-14"
                      src="https://cdn.cosmicjs.com/4ee53c30-7063-11e9-948f-7b6a64396c21-icon.png"
                      alt=""
                    />
                  </div>
                </li>
                <li className="flex justify-between bg-gray-900 w-full rounded-md p-4 my-2">
                  <div className="flex flex-col">
                    <h2 className="font-bold text-2xl leading-tight ">
                      R$ 300
                    </h2>
                    <span className="text-sm leading-relaxed">
                      Último preço: R$ 16,55
                    </span>
                    <span className="text-sm leading-relaxed text-red-500">
                      Preço Médio: R$ 20,46
                    </span>
                    <span className="text-sm leading-relaxed">
                      Quantidade: 15
                    </span>
                    <span className="text-sm leading-relaxed text-red-500">
                      Rentabilidade: -15,0%
                    </span>
                    <a href=""></a>
                  </div>
                  <div className="flex">
                    <div>
                      <h1 className="text-2xl font-bold">FLRY3</h1>
                      <span>Fleury</span>
                    </div>
                    <img
                      className="w-14 h-14"
                      src="https://cdn.cosmicjs.com/4ee53c30-7063-11e9-948f-7b6a64396c21-icon.png"
                      alt=""
                    />
                  </div>
                </li>
                <li className="flex justify-between bg-gray-900 w-full rounded-md p-4 my-2">
                  <div className="flex flex-col">
                    <h2 className="font-bold text-2xl leading-tight ">
                      R$ 300
                    </h2>
                    <span className="text-sm leading-relaxed">
                      Último preço: R$ 16,55
                    </span>
                    <span className="text-sm leading-relaxed text-red-500">
                      Preço Médio: R$ 20,46
                    </span>
                    <span className="text-sm leading-relaxed">
                      Quantidade: 15
                    </span>
                    <span className="text-sm leading-relaxed text-red-500">
                      Rentabilidade: -15,0%
                    </span>
                    <a href=""></a>
                  </div>
                  <div className="flex">
                    <div>
                      <h1 className="text-2xl font-bold">FLRY3</h1>
                      <span>Fleury</span>
                    </div>
                    <img
                      className="w-14 h-14"
                      src="https://cdn.cosmicjs.com/4ee53c30-7063-11e9-948f-7b6a64396c21-icon.png"
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
