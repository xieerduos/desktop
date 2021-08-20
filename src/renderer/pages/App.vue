<template>
    <canvas id="my_canvas" class="clickThroughElement" style="-webkit-app-region: drag"></canvas>
</template>
<script>
// import {ipcRenderer} from 'electron';

export default {
    name: 'App',
    data() {
        return {};
    },
    mounted() {
        const el = document.getElementById('my_canvas');
        el.addEventListener('mouseenter', () => {
            window.electron.setIgnoreMouseEvents(true, {forward: true});
        });
        el.addEventListener('mouseleave', () => {
            window.electron.setIgnoreMouseEvents(false);
        });

        this.count = 0;
        this.canvas = document.getElementById('my_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx2 = this.canvas.getContext('2d');

        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;

        const fontSize = 16;

        const columns = this.canvas.width / fontSize;

        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        this.drops = drops;
        this.fontSize = fontSize;
        // const draw = () => {
        //     const canvas = this.canvas;
        //     const ctx = this.ctx;
        //     const drops = this.drops;
        //     const fontSize = this.fontSize;
        //     ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        //     ctx.fillRect(0, 0, canvas.width, canvas.height);

        //     ctx.fillStyle = '#0F0'; // green text
        //     ctx.font = fontSize + 'px arial';
        //     for (let i = 0; i < drops.length; i++) {
        //         const text = txts[Math.floor(Math.random() * txts.length)];
        //         ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        //         if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) drops[i] = 0;
        //         drops[i]++;
        //     }
        // };
        this.intervalId = setInterval(this.draw, 33);

        window.addEventListener('resize', this.onResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
        clearInterval(this.intervalId);
    },
    methods: {
        draw() {
            const canvas = this.canvas;
            const ctx = this.ctx;
            const ctx2 = this.ctx2;
            const drops = this.drops;
            const fontSize = this.fontSize;
            let txts = '01';
            txts = txts.split('');
            ctx2.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx2.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff00'; // green text
            ctx.font = fontSize + 'px arial';
            for (let i = 0; i < drops.length; i++) {
                const text = txts[Math.floor(Math.random() * txts.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) drops[i] = 0;
                drops[i]++;
            }
        },
        onResize() {
            clearInterval(this.intervalId);
            this.canvas.height = window.innerHeight;
            this.canvas.width = window.innerWidth;
            const fontSize = 16;

            const columns = this.canvas.width / fontSize;

            const drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = 1;
            }
            this.drops = drops;
            this.fontSize = fontSize;
            this.intervalId = setInterval(this.draw, 33);
        }
    }
};
</script>
<style>
html,
body {
    padding: 0;
    margin: 0;
}
html,
body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: transparent;
}
#my_canvas {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>
