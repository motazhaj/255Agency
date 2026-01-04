'use client';

import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function ScrollVideo() {
	const containerRef = useRef(null);
	const canvasRef = useRef(null);
	const imagesRef = useRef({});
	const loadingRef = useRef(new Set());
	const [isInView, setIsInView] = useState(false);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ rootMargin: '200px' }
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const loadImage = useCallback((index) => {
		if (imagesRef.current[index] || loadingRef.current.has(index)) {
			return;
		}

		loadingRef.current.add(index);
		const img = new Image();
		img.src = `/images/${index}.webp`;
		img.onload = () => {
			imagesRef.current[index] = img;
			loadingRef.current.delete(index);
		};
		img.onerror = () => {
			loadingRef.current.delete(index);
		};
	}, []);

	const render = useCallback((index) => {
		if (!isInView) return;

		const roundedIndex = Math.round(index);
		
		loadImage(roundedIndex);
		for (let i = Math.max(1, roundedIndex - 3); i <= Math.min(1794, roundedIndex + 3); i++) {
			loadImage(i);
		}

		if (imagesRef.current[roundedIndex]) {
			const canvas = canvasRef.current;
			const ctx = canvas?.getContext('2d');
			if (ctx && canvas) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(imagesRef.current[roundedIndex], 0, 0, canvas.width, canvas.height);
			}
		}
	}, [isInView, loadImage]);

	const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 1794]);

	useMotionValueEvent(currentIndex, 'change', (latest) => {
		render(latest);
	});

	useEffect(() => {
		if (isInView) {
			render(1);
		}
	}, [render, isInView]);

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
