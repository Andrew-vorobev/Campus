import React, { useState } from "react";
import "./analytic-users.css";
import MainTemplate from "../../features/main-template/main-template";
import { Line } from "react-chartjs-2";
import Fade from "react-reveal/Fade";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import * as PropTypes from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**
 *
 * @type {{duration: Requireable<number>}}
 */
Fade.propTypes = { duration: PropTypes.number };

/**
 * This page for analytics users
 * @returns {JSX.Element}
 * @constructor
 */
function AnalyticUsers() {
  const [countAnalytic, setCountAnalytic] = useState(90);
  const [textAnalytic, setTextAnalytic] = useState("Июл");

  /**
   * For Chart diagrams
   * @returns {{datasets: [{pointLabelFontSize: number, borderDash: *[], pointBackgroundColor: string, backgroundColor: (function(*): CanvasGradient), borderColor: string, pointHoverRadius: number, data: number[], borderDashOffset: number, borderCapStyle: string, pointHoverBorderWidth: number, pointBorderWidth: number, label: string, fill: string, borderJoinStyle: string, spanGaps: boolean, pointBorderColor: string, pointHoverBorderColor: string, pointHoverBackgroundColor: string, lineTension: number, pointRadius: number}], labels: string[]}}
   */
  const data = () => {
    return {
      labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл"],
      datasets: [
        {
          label: "Сеансы",
          data: [30, 80, 33, 55, 30, 70, 50],
          pointLabelFontSize: 10,
          fill: "start",
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "#FF7B7D");
            gradient.addColorStop(1, "rgba(255,123,125,0.06)");
            return gradient;
          },
          borderColor: "#FF7B7D",
          lineTension: 0.3,
          borderCapStyle: "round",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "bevel",
          pointBorderColor: "#ffffff",
          pointBackgroundColor: "#FF7B7D",
          pointBorderWidth: 3,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "#FF7B7D",
          pointHoverBorderColor: "#FF7B7D",
          pointHoverBorderWidth: 10,
          pointRadius: 8,
          spanGaps: false,
        },
      ],
    };
  };
  const dataBonus = () => {
    return {
      labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      datasets: [
        {
          label: "Бонусы",
          data: [11, 27, 50, 72, 23, 35, 63],
          pointLabelFontSize: 10,
          fill: "start",
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgba(255,123,125,0.3)");
            return gradient;
          },
          borderColor: "#F52D30",
          lineTension: 0.3,
          borderCapStyle: "round",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "bevel",
          pointBorderColor: "#F52D30",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 3,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "#F52D30",
          pointHoverBorderColor: "#F52D30",
          pointHoverBorderWidth: 10,
          pointRadius: 4,
          spanGaps: false,
        },
      ],
    };
  };
  const dataDynamic = () => {
    return {
      labels: [
        "Янв",
        "Фев",
        "Мар",
        "Апр",
        "Май",
        "Июн",
        "Июл",
        "Авг",
        "Сен",
        "Окт",
        "Ноя",
        "Дек",
      ],
      datasets: [
        {
          label: "Стипендия",
          data: [
            18000, 38000, 10000, 10000, 34000, 32000, 10500, 9500, 44000, 33000,
            28000, 23000,
          ],
          pointLabelFontSize: 10,
          fill: "start",
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            return gradient;
          },
          borderColor: "#F52D30",
          lineTension: 0.3,
          borderCapStyle: "round",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "bevel",
          pointBorderColor: "#F52D30",
          pointBackgroundColor: "#F52D30",
          pointBorderWidth: 3,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "#F52D30",
          pointHoverBorderColor: "#F52D30",
          pointHoverBorderWidth: 10,
          pointRadius: 2,
          spanGaps: false,
        },
      ],
    };
  };

  /**
   * Change information for hover diagram day
   * @param context
   */
  function changeInfoAnalytic(context) {
    setCountAnalytic(context.formattedValue);
    setTextAnalytic(context.label);
  }

  /**
   * Options for chart diagram
   * @type {{plugins: {legend: {display: boolean}, filler: {propagate: boolean}, tooltip: {callbacks: {label: changeInfoAnalytic}}}, responsive: boolean, scales: {x: {border: {dash: number[]}}, y: {display: boolean}}, elements: {line: {tension: number}}, interaction: {intersect: boolean}, maintainAspectRatio: boolean}}
   */
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        border: {
          dash: [2, 4],
        },
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.35,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: changeInfoAnalytic,
        },
      },
    },

    interaction: {
      intersect: true,
    },
  };
  const optionsOther = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        border: {
          dash: [2, 4],
        },
      },
      y: {
        border: {
          dash: [2, 4],
        },
      },
    },
    elements: {
      line: {
        tension: 0.35,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: changeInfoAnalytic,
        },
      },
    },

    interaction: {
      intersect: true,
    },
  };

  return (
    <MainTemplate className="AnalyticUsers Animations">
      <div className="def-content def-content-title">
        <h3 className="content-title">Анализ посещения</h3>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-5">
          <Fade duration={500}>
            <div className="def-content">
              <div className="user-register">
                <i className="fa-solid fa-caret-up green" />
                <span className="me-2 fw-bold">510</span> зарегестрированных
              </div>
              <div className="user-register">
                <i className="fa-solid fa-caret-down red" />
                <span className="me-2 fw-bold">429</span> уникальных
              </div>
            </div>
          </Fade>
          <Fade duration={1000}>
            <div className="def-content content2 mt-4">
              <h3 className="content-title">Просмотры страниц</h3>
              <div className="user-register mt-5">
                <i className="fa-solid fa-caret-up green" />
                <span className="me-2 fw-bold">1 908</span>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0">
          <Fade duration={1500}>
            <div className="def-content">
              <div className="chart-info mb-3">
                <span className="chart-info-title">Сеансы</span>
              </div>
              <div className="chart-info d-flex justify-content-between align-items-start">
                <div className="w-100" style={{ maxWidth: 450 }}>
                  <Line
                    options={options}
                    data={data()}
                    type="line"
                    height={300}
                  />
                </div>
                <div className="chart-info-counts d-none d-lg-block">
                  <p className="mb-0">{countAnalytic}</p>
                  <p className="fs-3">{textAnalytic}</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-7 mt-4 mt-md-0">
          <Fade duration={1500}>
            <div className="def-content">
              <div className="chart-info mb-3">
                <span className="chart-info-title">Динамика стипендий</span>
              </div>
              <div className="chart-info d-flex justify-content-between align-items-start">
                <div className="w-100">
                  <Line
                    options={optionsOther}
                    data={dataDynamic()}
                    type="line"
                    height={300}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-12 col-md-5 mt-4 mt-md-0">
          <Fade duration={1500}>
            <div className="def-content">
              <div className="chart-info mb-3">
                <span className="chart-info-title">Бонусная программа</span>
              </div>
              <div className="chart-info d-flex justify-content-between align-items-start">
                <div className="w-100">
                  <Line
                    options={optionsOther}
                    data={dataBonus()}
                    type="line"
                    height={300}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </MainTemplate>
  );
}

export default AnalyticUsers;
