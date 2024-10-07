import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
//drawing PieChart and TimeAlloctation
import { useEffect, useRef } from 'react';
import styles from './TimeAllocation.module.css';
//const timeAllocationData: number[] = [54, 29, 9, 1, 6]
//<TimeAllocation data={timeAllocationData} height and width if you need to fix size/>
const PieChart = ({ data, height = 120, width = 120 }) => {
    const canvasRef = useRef(null);
    const labels = [
        'Assignment/Lab',
        'Concept/Lecture',
        'Guide/Review',
        'Test/Quiz',
        'Exam',
    ];
    const colors = ['#F4BE37', '#FF9F40', '#0D2535', '#5388D8', '#206EE5'];
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        const total = data.reduce((acc, value) => acc + value, 0);
        let startAngle = -0.5 * Math.PI;
        data.forEach((value, index) => {
            const sliceAngle = (value / total) * 2 * Math.PI;
            const endAngle = startAngle + sliceAngle;
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = colors[index];
            ctx.fill();
            startAngle = endAngle;
        });
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("p", { className: styles.timeHeader, children: "Time Allocation" }), _jsxs("div", { className: styles.chartContainer, children: [_jsx("canvas", { ref: canvasRef, width: width, height: height, className: styles.canvas }), _jsx("ul", { className: styles.PieChartDescription, children: labels.map((label, index) => (_jsxs("li", { style: { '--chart-color': colors[index] }, children: [label, " ", _jsxs("p", { children: [" (", data[index], "%)"] })] }, index))) })] })] }));
};
export default PieChart;
