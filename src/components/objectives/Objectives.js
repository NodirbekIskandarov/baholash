import React from "react";
import {
  AiOutlineAppstoreAdd,
  AiFillCar,
  AiFillInsurance,
  AiOutlinePartition,
} from "react-icons/ai";
import { TbTransferIn } from "react-icons/tb";
import { BiPieChart, BiTransfer } from "react-icons/bi";
import { RiExchangeFundsLine, RiAuctionLine } from "react-icons/ri";
import { FaHouseDamage } from "react-icons/fa";
import { MdCarRental, MdOutlineManageHistory } from "react-icons/md";
function Objectives() {
  const data = [
    {
      logo: <AiOutlineAppstoreAdd />,
      text: "Внесение имущества в уставной капитал",
    },
    {
      logo: <TbTransferIn />,
      text: "Передача прав собственности",
    },
    {
      logo: <BiPieChart />,
      text: "Оценка с целью переоценки основныхфондов",
    },
    {
      logo: <RiExchangeFundsLine />,
      text: "Внесение имущества в уставной капитал",
    },
    {
      logo: <AiFillCar />,
      text: "Залог",
    },
    {
      logo: <AiFillInsurance />,
      text: "Страхование",
    },
    {
      logo: <FaHouseDamage />,
      text: "Возмещение ущерба",
    },
    {
      logo: <AiOutlinePartition />,
      text: "Раздел, наследство, дарение",
    },
    {
      logo: <BiTransfer />,
      text: "Купля-продажа",
    },
    {
      logo: <RiAuctionLine />,
      text: "Проведение конкурсов, аукционов, торгов",
    },
    {
      logo: <MdCarRental />,
      text: "Аренда, лизинг",
    },
    {
      logo: <MdOutlineManageHistory />,
      text: "Передача в доверительное управление",
    },
  ];
  return (
    <div>
      <div className="container">
        <h1 className="otsenki">ЦЕЛИ ОЦЕНКИ</h1>
        <div className="row my-5">
          {data &&
            data.map((item, index) => {
              return (
                <div key={index} className="col-3">
                  <a href="https://www.youtube.com/">
                    <div className="property">
                      <span>{item.logo}</span>
                      <p>{item.text}</p>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Objectives;
