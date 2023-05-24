export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-12 bg-gray-950 text-gray-200">
      <div className="border-r border-gray-100 col-span-2">
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
          <div className="col-span-10 ">
            <div className="flex justify-around gap-2">
              <div className="bg-gray-900 p-4 w-[288px] rounded-md">
                <h2 className="text-center text-lg font-bold my-2">
                  Posição Atual
                </h2>
                <h1 className="text-2xl font-medium text-center">
                  R$ 10.000,00
                </h1>
              </div>
              <div className=" bg-gray-900 p-4 w-[288px] rounded-md">
                <h2 className="text-center text-lg font-bold my-2">
                  Dividendos Recebidos
                </h2>
                <h1 className="text-2xl font-medium text-center text-green-500">
                  R$ 10.000,00
                </h1>
              </div>
              <div className=" bg-gray-900 p-4 w-[288px] rounded-md">
                <h2 className="text-center text-lg font-bold my-2 ">
                  Total Investido
                </h2>
                <h1 className="text-2xl font-medium text-center">
                  R$ 10.000,00
                </h1>
              </div>
              <div className=" bg-gray-900 p-4 w-[288px] rounded-md">
                <h2 className="text-center text-lg font-bold my-2">Lucro</h2>
                <h1 className="text-2xl font-medium text-center text-green-500">
                  R$ 10.000,00
                </h1>
              </div>
            </div>
          </div>
          <div className="col-span-2  "></div>
        </div>
      </div>
    </div>
  );
}
