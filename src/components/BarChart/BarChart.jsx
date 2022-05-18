import { useRef } from "react";
import { Group } from "@vx/group";
import { LinearGradient } from "@vx/gradient";
import { scaleBand, scaleLinear } from "@vx/scale";
import { AxisLeft, AxisBottom } from "@vx/axis";
import Bar from "../Bar/Bar";
import useDims from "../../hooks/useDims";

// accessors
const x = (d) => d.label;
const y = (d) => d.value;

function BarChart({ data, colorMultiplier, xAxieLabel }) {
	const wrapRef = useRef(null);
	const { width, height } = useDims(wrapRef);

	// bounds
	const xMax = width - 80;
	const yMax = height - 80;

	// scales
	const xScale = scaleBand({
		rangeRound: [0, xMax],
		domain: data.map(x),
		padding: 0.4,
	});

	const yScale = scaleLinear({
		rangeRound: [0, yMax],
		domain: [Math.max(...data.map(y)), 0],
	});

	return (
		<div style={{ width: "100%", height: "100%" }} ref={wrapRef}>
			<svg width={width} height={height}>
				<LinearGradient
					from={`#222`}
					to={`#111`}
					id={`gradient${colorMultiplier}`}
				/>
				<rect
					width={width}
					height={height}
					fill={`url(#gradient${colorMultiplier})`}
					rx={5}
				/>
				<Group top={25} left={55}>
					<AxisLeft
						left={10}
						scale={yScale}
						numTicks={4}
						label="Temperatura en °C"
					/>
					{data.map((d, i) => {
						const label = x(d);
						const barWidth = xScale.bandwidth();
						const barHeight = yMax - yScale(y(d));
						const barX = xScale(label);
						const barY = yMax - barHeight;

						return (
							<Bar
								key={`bar-${label}`}
								x={barX}
								y={barY}
								width={barWidth}
								height={barHeight}
							/>
						);
					})}
					<AxisBottom scale={xScale} label={xAxieLabel} labelOffset={15} top={yMax} />
				</Group>
			</svg>
		</div>
	);
}

export default BarChart;
