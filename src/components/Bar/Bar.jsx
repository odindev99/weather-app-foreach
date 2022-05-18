import { Bar as VXBar } from "@vx/shape";

function Bar({ width, height, x, y }) {
	return (
		<VXBar
			x={x}
			y={y}
			width={width}
			height={height}
			fill="#4f98fe"
			bottom={0}
		/>
	);
}

export default Bar;
