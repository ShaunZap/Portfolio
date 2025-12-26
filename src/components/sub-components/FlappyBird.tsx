import { useState, useEffect, useCallback, useRef } from "react";
import { Helicopter } from "lucide-react";
import "../../styles/FlappyBird.css";

const BIRD_SIZE = 36;
// PHYSICS TWEAKS
const GRAVITY = 0.18;
const JUMP_STRENGTH = -4.5;
const PIPE_WIDTH = 44;
const PIPE_SPEED = 2.0;

// --- CHANGED: Made blocks thinner (20px instead of 40px) ---
const BLOCK_HEIGHT = 20;

const FlappyBird = () => {
    const [birdY, setBirdY] = useState(200);
    const [velocity, setVelocity] = useState(0);
    const [pipes, setPipes] = useState<{ x: number; height: number; gap: number }[]>([]);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const lastTouchRef = useRef<number>(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const requestRef = useRef<number | null>(null);

    // Sync dimensions
    useEffect(() => {
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
                if (!gameStarted) setBirdY(entry.contentRect.height / 2);
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, [gameStarted]);

    const handleJump = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
        if (gameOver) return;
        const now = Date.now();
        if (e) {
            if (e.type === 'touchstart') {
                lastTouchRef.current = now;
            } else if (e.type === 'mousedown') {
                if (now - lastTouchRef.current < 500) return;
            }
        }
        if (!gameStarted) setGameStarted(true);
        setVelocity(JUMP_STRENGTH);
    }, [gameOver, gameStarted]);

    const handleStartGame = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        resetGame();
        setGameStarted(true);
        handleJump(e);
    };

    const resetGame = () => {
        setBirdY(dimensions.height / 2);
        setVelocity(0);
        setPipes([]);
        setScore(0);
        setGameOver(false);
        setGameStarted(false);
    };

    const update = useCallback(() => {
        if (!gameStarted || gameOver || dimensions.height === 0) return;

        setBirdY((y) => y + velocity);
        setVelocity((v) => v + GRAVITY);

        setPipes((prevPipes) => {
            let newPipes = prevPipes.map(p => ({ ...p, x: p.x - PIPE_SPEED }));
            newPipes = newPipes.filter(p => p.x > -PIPE_WIDTH);

            prevPipes.forEach((p, i) => {
                if (p.x >= 50 && newPipes[i] && newPipes[i].x < 50) {
                    setScore(s => s + 1);
                }
            });

            // Spawning Logic
            const spawnDistance = dimensions.width < 400 ? 180 : 300;

            if (newPipes.length === 0 || newPipes[newPipes.length - 1].x < dimensions.width - spawnDistance) {

                // --- CHANGED: MOBILE GAP LOGIC ---
                const isMobile = dimensions.width < 600;
                const minPipeHeight = 50;

                // On mobile: Gap is 40% of screen, max 220px. 
                // On Desktop: Gap is 35% of screen, max 170px.
                const gapRatio = isMobile ? 0.40 : 0.35;
                const maxGapSize = isMobile ? 220 : 170;

                const currentGap = Math.min(maxGapSize, dimensions.height * gapRatio);
                const maxPipeHeight = dimensions.height - currentGap - minPipeHeight;

                if (maxPipeHeight > minPipeHeight) {
                    newPipes.push({
                        x: dimensions.width,
                        height: Math.floor(Math.random() * (maxPipeHeight - minPipeHeight)) + minPipeHeight,
                        gap: currentGap
                    });
                }
            }
            return newPipes;
        });

        const birdBottom = birdY + BIRD_SIZE;
        if (birdBottom > dimensions.height || birdY < 0) setGameOver(true);

        pipes.forEach(pipe => {
            if (
                pipe.x < 50 + BIRD_SIZE - 2 &&
                pipe.x + PIPE_WIDTH > 50 + 2 &&
                (birdY < pipe.height || birdY + BIRD_SIZE > pipe.height + pipe.gap)
            ) {
                setGameOver(true);
            }
        });

        requestRef.current = requestAnimationFrame(update);
    }, [birdY, velocity, pipes, gameStarted, gameOver, dimensions]);

    useEffect(() => {
        requestRef.current = requestAnimationFrame(update);
        return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
    }, [update]);

    const renderBuildingBlocks = (totalHeight: number) => {
        if (totalHeight <= 0) return null;
        const numBlocks = Math.ceil(totalHeight / BLOCK_HEIGHT);
        const blocks = [];
        for (let i = 0; i < numBlocks; i++) {
            const height = (i === numBlocks - 1)
                ? totalHeight - (i * BLOCK_HEIGHT)
                : BLOCK_HEIGHT;

            blocks.push(
                <div key={i} className="building-block" style={{
                    height: `${height}px`,
                    backgroundColor: i % 2 === 0 ? 'var(--color-brand-1000)' : 'var(--color-brand-1300)'
                }} />
            );
        }
        return blocks;
    };

    return (
        <div
            className="flappy-container"
            onMouseDown={handleJump}
            onTouchStart={handleJump}
            ref={containerRef}
        >
            {!gameStarted && <div className="Flappy-title">Wanna pass some time??</div>}

            <div className="score-display" style={{ color: 'var(--color-brand-500)' }}>{score}</div>

            <Helicopter
                className="bird-icon"
                size={BIRD_SIZE}
                style={{
                    top: birdY,
                    left: 50,
                    transform: `rotate(${Math.min(Math.max(velocity * 5, -20), 30)}deg)`
                }}
            />

            {pipes.map((pipe, i) => {
                const bottomHeight = Math.max(0, dimensions.height - (pipe.height + pipe.gap));
                return (
                    <div key={`pipe-${i}`}>
                        <div className="pipe building-container top" style={{ left: pipe.x, height: pipe.height, width: PIPE_WIDTH }}>
                            {renderBuildingBlocks(pipe.height)}
                        </div>
                        <div className="pipe building-container bottom" style={{
                            left: pipe.x,
                            top: pipe.height + pipe.gap,
                            width: PIPE_WIDTH,
                            height: bottomHeight
                        }}>
                            {renderBuildingBlocks(bottomHeight)}
                        </div>
                    </div>
                )
            })}

            {(!gameStarted || gameOver) && (
                <div className="message-overlay">
                    <div className="message-box">
                        <h2 style={{ color: 'var(--color-brand-700)' }}>{gameOver ? "GAME OVER" : "CHOPPER"}</h2>
                        <p style={{ color: 'var(--color-brand-700)' }}>{gameOver ? `Final Score: ${score}` : "Tap to fly!"}</p>

                        <button
                            className="start-btn"
                            onMouseDown={handleStartGame}
                            onTouchStart={handleStartGame}
                        >
                            {gameOver ? "TRY AGAIN" : "START GAME"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlappyBird;