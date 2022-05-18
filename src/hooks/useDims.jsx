import { useState, useLayoutEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";

function useDims(ref, isSvg = false) {
	const screenWidth = useWindowDimensions();

	const [dim, setDim] = useState({
		height: 0,
		width: 0,
		top: 0,
		left: 0,
	});

	useLayoutEffect(() => {
		if (ref && ref.current) {
			if (isSvg) {
				const { height, width, x, y } = ref.current.getBBox();
				setDim({
					height,
					width,
					top: y,
					left: x,
				});
			} else {
				setDim({
					height: ref.current.offsetHeight,
					width: ref.current.offsetWidth,
					top: ref.current.offsetTop,
					left: ref.current.offsetLeft,
				});
			}
		}
	}, [ref, isSvg, screenWidth]);

	return dim;
}

export default useDims;
