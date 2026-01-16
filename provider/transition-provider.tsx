'use client'

import { useRef, useEffect } from 'react'
import { TransitionRouter } from 'next-transition-router'
import gsap from 'gsap'

const GRID_SIZE = 60;

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
    const transitionGridRef = useRef<HTMLDivElement>(null);
    const transitionBlocksRef = useRef<HTMLDivElement[]>([]);

    const createTransitionGrid = () => {
        if (!transitionGridRef.current) return;
        const container = transitionGridRef.current;
        container.innerHTML = '';
        transitionBlocksRef.current = [];

        const grid_width = window.innerWidth;
        const grid_height = window.innerHeight;
        const columns = Math.ceil(grid_width / GRID_SIZE);
        const rows = Math.ceil(grid_height / GRID_SIZE);
        const offsetX = (grid_width - columns * GRID_SIZE) / 2;
        const offsetY = (grid_height - rows * GRID_SIZE) / 2;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                const block = document.createElement('div');
                block.className = 'transition-block';
                block.style.cssText = `
                    width: ${GRID_SIZE}px;
                    height: ${GRID_SIZE}px;
                    top: ${row * GRID_SIZE + offsetY}px;
                    left: ${col * GRID_SIZE + offsetX}px;
                `;
                container.appendChild(block);
                transitionBlocksRef.current.push(block);
            }
        }
        gsap.set(transitionBlocksRef.current, { opacity: 0 });
    }
    useEffect(() => {
        createTransitionGrid();
        window.addEventListener('resize', createTransitionGrid);
        return () => {
            window.removeEventListener('resize', createTransitionGrid);
        }
    }, []);

    return (
        <TransitionRouter
            auto
            leave={(next) => {
                const tween = gsap.to(transitionBlocksRef.current, {
                    opacity: 1,
                    duration: 0.05,
                    ease: 'power2.inOut',
                    stagger: { amount: 0.5, from: 'random' },
                    onComplete: next,
                });
                return () => tween.kill();
            }}
            enter={(next) => {
                const tween = gsap.to(transitionBlocksRef.current, {
                    opacity: 0,
                    duration: 0.05,
                    delay: 0.3,
                    ease: 'power2.inOut',
                    stagger: { amount: 0.5, from: 'random' },
                    onComplete: next,
                });
                return () => tween.kill();
            }}
        >
            <div ref={transitionGridRef} className="transition-grid" />
            {children}
        </TransitionRouter>
    )
}

export default TransitionProvider