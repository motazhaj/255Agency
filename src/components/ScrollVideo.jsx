'use client';

import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef } from 'react';

export default function ScrollVideo() {
	const containerRef = useRef(null);
	const canvasRef = useRef(null);
	const imagesRef = useRef([]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	useEffect(() => {
		if (typeof window !== 'undefined' && imagesRef.current.length === 0) {
			const loadedImages = [];
			for (let i = 1; i <= 1794; i++) {
				const img = new Image();
				img.src = `/images/${i}.webp`;
				loadedImages.push(img);
			}
			imagesRef.current = loadedImages;
		}
	}, []);

	const render = useCallback((index) => {
		if (imagesRef.current[index - 1]) {
			const canvas = canvasRef.current;
			const ctx = canvas?.getContext('2d');
			if (ctx && canvas) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(imagesRef.current[index - 1], 0, 0, canvas.width, canvas.height);
			}
		}
	}, []);

	const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 1794]);

	useMotionValueEvent(currentIndex, 'change', (latest) => {
		render(Math.round(latest));
	});

	useEffect(() => {
		render(1);
	}, [render]);

	return (
		<div
			ref={containerRef}
			style={{
				height: '1794vh',
				position: 'relative',
				width: '100vw',
			}}
		>
			<div 
				style={{ 
					position: 'sticky',
					top: 0,
					height: '100vh',
					width: '100vw',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'black',
				}}
			>
				<canvas 
					width={1920} 
					height={1080} 
					ref={canvasRef}
					style={{
						width: '100%',
						maxWidth: '100vw',
						height: '100vh',
						objectFit: 'contain',
					}}
				/>
			</div>
		</div>
	);
}
