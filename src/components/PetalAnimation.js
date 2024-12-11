import React, { useEffect, useRef } from "react";
import petal from "../assets/images/petal.png"

const PetalAnimation = () => {
    const canvasRef = useRef(null);
    const TOTAL = 100;
    const petalArray = [];
    const petalImg = new Image();
    petalImg.src = petal;
    let speed = .2;

    class Petal {
        constructor(canvasWidth, canvasHeight) {
            this.x = Math.random() * canvasWidth;
            this.y = Math.random() * canvasHeight * 2 - canvasHeight;
            this.w = 25 + Math.random() * 15;
            this.h = 20 + Math.random() * 10;
            this.opacity = this.w / 40;
            this.flip = Math.random();

            this.xSpeed = 1.5 + Math.random() * 2;
            this.ySpeed = 1 + Math.random() * 1;
            this.flipSpeed = Math.random() * 0.03;
        }

        draw(ctx) {
            if (this.y > ctx.canvas.height || this.x > ctx.canvas.width) {
                this.x = -petalImg.width;
                this.y =
                    Math.random() * ctx.canvas.height * 2 - ctx.canvas.height;
                this.xSpeed = 1.5 + Math.random() * 2;
                this.ySpeed = 1 + Math.random() * 1;
                this.flip = Math.random();
            }
            ctx.globalAlpha = this.opacity;
            ctx.drawImage(
                petalImg,
                this.x,
                this.y,
                this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
                this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
            );
        }

        animate(ctx) {
            this.x += this.xSpeed + speed * 5;
            this.y += this.ySpeed + speed * 2;
            this.flip += this.flipSpeed;
            this.draw(ctx);
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const initializePetals = () => {
            for (let i = 0; i < TOTAL; i++) {
                petalArray.push(new Petal(canvas.width, canvas.height));
            }
        };
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            petalArray.forEach((petal) => petal.animate(ctx));
            window.requestAnimationFrame(render);
        };

        setTimeout( () => {
            initializePetals();
            render();
        }, 100);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="petal-canvas" />;
};

export default PetalAnimation;
