import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const RadarChart = () => {
  const data = {
    labels: [
      "JavaScript",
      "React",
      "Node.js",
      "Figma",
      "CSS",
      "Tailwind CSS",
      "Next.js",
      "MongoDB",
      "Python",
      "C/C++",
    ],
    datasets: [
      {
        label: "Skill Proficiency (%)",
        data: [80, 70, 60, 75, 80, 80, 40, 75, 60, 60],
        backgroundColor: "rgba(128, 255, 210, 0.3)",
        borderColor: "#80ffd2", 
        borderWidth: 2,
        pointBackgroundColor: "#80ffd2", 
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#80ffd2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          color: "rgba(128, 255, 210, 0.2)", // Color of angle lines
        },
        grid: {
          color: "rgba(128, 255, 210, 0.2)", // Color of grid lines
        },
        pointLabels: {
          font: {
            size: 14,
          },
          color: "#80ffd2", 
        },
        ticks: {
          beginAtZero: true,
          color: "#666", // Tick mark color
          stepSize: 20, // Increment for tick values
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#80ffd2",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center mt-5 h-full bg-cover" style={{ width: "100%",height:"100%" }}>
      <Radar className="md:w-radarWidth" data={data} options={options} />
    </div>
  );
};