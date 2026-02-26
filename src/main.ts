interface SolarPanelData {
    title: string;
    subtitle: string;
    annualSavings: string;
    lifetimeSavings: string;
    color: string;
    crackProbability: number;
}

const SOLAR_DATA: Record<string, SolarPanelData> = {
    premium: {
        title: "Premium A+ Grade",
        subtitle: "Max efficiency, perfect for high performance.",
        annualSavings: "₹ 24,000",
        lifetimeSavings: "₹ 6,00,000",
        color: "#2e7d32",
        crackProbability: 0
    },
    standard: {
        title: "Standard Grade",
        subtitle: "Good value, but expect minor quality variations.",
        annualSavings: "₹ 20,500",
        lifetimeSavings: "₹ 5,12,000",
        color: "#f39200",
        crackProbability: 0.1
    },
    microcrack: {
        title: "Micro-cracked Panel",
        subtitle: "Invisible cracks cause significant power loss over time.",
        annualSavings: "₹ 15,200",
        lifetimeSavings: "₹ 3,80,000",
        color: "#d32f2f",
        crackProbability: 0.8
    },
    hotspot: {
        title: "Hotspot Damaged",
        subtitle: "Severe damage that can lead to localized cell failure.",
        annualSavings: "₹ 12,000",
        lifetimeSavings: "₹ 3,00,000",
        color: "#d32f2f",
        crackProbability: 0.95
    },
    leaking: {
        title: "Energy Leaking Panel",
        subtitle: "Poor insulation causes direct current leakage.",
        annualSavings: "₹ 18,000",
        lifetimeSavings: "₹ 4,50,000",
        color: "#d32f2f",
        crackProbability: 0.4
    },
    "solar-square": {
        title: "SolarSquare Optimized",
        subtitle: "Double EL-tested for absolute zero-defect guarantee.",
        annualSavings: "₹ 26,500",
        lifetimeSavings: "₹ 6,65,000",
        color: "#131ca2",
        crackProbability: 0
    }
};

const SHADOW_DATA: Record<string, any> = {
    clear: {
        ordinary: { efficiency: 100, loss: 0, mLoss: 0, desc: "Standard performance." },
        premium: { efficiency: 100, loss: 0, mLoss: 0, desc: "Optimized performance." }
    },
    dust: {
        ordinary: { efficiency: 80, loss: 920, mLoss: 12400, desc: "Dust affects all cells in series." },
        premium: { efficiency: 95, loss: 310, mLoss: 4200, desc: "Anti-dust coating preserves yield." }
    },
    bird: {
        ordinary: { efficiency: 60, loss: 1450, mLoss: 18600, desc: "Localized shading kills the whole string." },
        premium: { efficiency: 85, loss: 540, mLoss: 7200, desc: "Bypass diodes isolate the shaded area." }
    },
    leaf: {
        ordinary: { efficiency: 35, loss: 2200, mLoss: 28000, desc: "One leaf can drop output by 65%+ in series panels." },
        premium: { efficiency: 88, loss: 420, mLoss: 5500, desc: "Independent cell circuits maintain high output." }
    }
};



class BackgroundAnimator {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private particles: { x: number, y: number, r: number, vx: number, vy: number }[] = [];

    constructor() {
        this.canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.init());
    }

    private init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.particles = [];
        for (let i = 0; i < 60; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                r: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3
            });
        }
    }

    private animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';

        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

class ExperienceCentre {
    private currentView: string = 'landing';
    private graphCanvas: HTMLCanvasElement | null = null;

    private graphData: number[] = Array(50).fill(100);


    constructor() {
        new BackgroundAnimator();
        this.initNavigation();

        this.initSolarSelection();
        this.initShadowExperience();
    }


    private initNavigation() {
        document.getElementById('btn-which-solar')?.addEventListener('click', () => this.switchView('solar-selection-view'));
        document.getElementById('btn-shadow-analysis')?.addEventListener('click', () => this.switchView('shadow-analysis-view'));

        document.getElementById('back-to-menu')?.addEventListener('click', () => {
            if (this.currentView === 'solar-result-screen') {
                this.switchView('solar-selection-view');
            } else {
                this.switchView('landing-page');
            }
        });
    }

    private switchView(viewId: string) {
        document.querySelectorAll('.view-screen').forEach(el => el.classList.add('hidden'));
        document.getElementById(viewId)?.classList.remove('hidden');
        this.currentView = viewId;

        const backBtn = document.getElementById('back-to-menu')!;
        backBtn.classList.toggle('hidden', viewId === 'landing-page');

        if (viewId === 'shadow-analysis-view') this.startShadowSim();
    }


    private initSolarSelection() {
        document.querySelectorAll('.panel-card-mystery').forEach(card => {
            card.addEventListener('click', (e) => {
                const target = e.currentTarget as HTMLElement;
                const type = target.dataset.type!;
                const img = target.querySelector('img')?.src || '';
                this.startScanningFlow(type, img);
            });
        });
    }

    private startScanningFlow(type: string, imgSrc: string) {
        const overlay = document.getElementById('scanning-overlay')!;
        const scanImg = document.getElementById('scanning-img') as HTMLImageElement;
        const integrity = document.getElementById('scan-integrity')!;
        const thermal = document.getElementById('scan-thermal')!;

        scanImg.src = imgSrc;
        overlay.classList.remove('hidden');

        // Animation logic
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            integrity.innerText = `${Math.min(100, Math.floor(Math.random() * 20) + 80)}%`;
            thermal.innerText = `${(Math.random() * 2).toFixed(2)} W/m²`;

            if (progress > 30) { // approx 3 seconds
                clearInterval(interval);
                overlay.classList.add('hidden');
                this.showSolarResult(type);
            }
        }, 100);
    }

    private showSolarResult(type: string) {
        const data = SOLAR_DATA[type];
        this.switchView('solar-result-screen');

        document.getElementById('solar-result-title')!.innerText = data.title;
        document.getElementById('solar-result-subtitle')!.innerText = data.subtitle;
        document.getElementById('annual-savings')!.innerText = data.annualSavings;
        document.getElementById('lifetime-savings')!.innerText = data.lifetimeSavings;


        const amountElems = document.querySelectorAll('.tv-value-red');
        amountElems.forEach(el => (el as HTMLElement).style.color = data.color);

        this.renderEL(data.crackProbability);
    }


    private renderEL(prob: number) {
        const canvas = document.getElementById('el-result-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d')!;
        canvas.width = 600;
        canvas.height = 450;

        // Space Blue Base
        ctx.fillStyle = '#050a14';
        ctx.fillRect(0, 0, 600, 450);

        // Electric Blue Grid
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 6; i++) {
            ctx.beginPath(); ctx.moveTo(i * 100, 0); ctx.lineTo(i * 100, 450); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, i * 75); ctx.lineTo(600, i * 75); ctx.stroke();
        }

        if (prob > 0) {
            ctx.strokeStyle = '#fff';
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#00e5ff';
            ctx.lineWidth = 1.5;

            // Multiple crack sites based on probability
            const crackCount = Math.floor(prob * 10);
            for (let i = 0; i < crackCount; i++) {
                this.drawProceduralCrack(ctx, Math.random() * 600, Math.random() * 450, prob);
            }
        } else {
            // Pristine Glow
            ctx.shadowBlur = 40;
            ctx.shadowColor = 'rgba(46, 125, 50, 0.3)';
            ctx.fillStyle = 'rgba(46, 125, 50, 0.05)';
            ctx.fillRect(10, 10, 580, 430);
        }
    }

    private drawProceduralCrack(ctx: CanvasRenderingContext2D, x: number, y: number, severity: number) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        let cx = x, cy = y;
        const segments = 5 + Math.random() * 10;
        for (let i = 0; i < segments; i++) {
            cx += (Math.random() - 0.5) * (20 + severity * 40);
            cy += (Math.random() - 0.5) * (20 + severity * 40);
            ctx.lineTo(cx, cy);

            // Branching
            if (Math.random() < 0.2) {
                this.drawProceduralCrack(ctx, cx, cy, severity * 0.5);
                ctx.moveTo(cx, cy);
            }
        }
        ctx.stroke();
    }



    private initShadowExperience() {

        // Drag and Drop Logic
        const dropZone = document.getElementById('panel-drop-zone')!;

        document.querySelectorAll('.plate-item.draggable').forEach(item => {
            item.addEventListener('dragstart', (e) => {
                const dt = (e as DragEvent).dataTransfer!;
                dt.setData('text/plain', (e.currentTarget as HTMLElement).dataset.sample!);
                dt.effectAllowed = 'move';
            });
        });

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('zone-over');
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('zone-over');
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('zone-over');
            const sample = (e as DragEvent).dataTransfer!.getData('text/plain');
            this.applySample(sample);
        });

        // Click fallback for mobile/etc
        document.querySelectorAll('.plate-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const sample = (e.currentTarget as HTMLElement).dataset.sample!;
                this.applySample(sample);
            });
        });

        // Reset Plate Button
        document.querySelector('.reset-plate')?.addEventListener('click', () => {
            this.applySample('clear');
        });
    }

    private applySample(sample: string) {
        const plateOnPanel = document.getElementById('plate-on-panel')!;

        if (sample === 'clear') {
            plateOnPanel.innerHTML = '';
        } else {
            plateOnPanel.innerHTML = `<img src="/${sample}_slide.png" alt="Plate" style="width:100%; height:100%; object-fit:cover; opacity:0.8;">`;
        }

        this.updateShadowImpact(sample);
    }

    private updateShadowImpact(sample: string) {
        const fullData = SHADOW_DATA[sample];
        // Mirroring the TV experience (showing impact on standard panels)
        const data = fullData['ordinary'];

        const genPct = document.getElementById('gen-pct')!;
        const energyLoss = document.getElementById('energy-loss')!;
        const moneyLoss = document.getElementById('money-loss')!;

        genPct.innerText = data.efficiency;
        energyLoss.innerText = data.loss.toLocaleString();
        moneyLoss.innerText = `₹ ${data.mLoss.toLocaleString()}`;

        // Target efficiency for graph
        this.targetEfficiency = data.efficiency;
    }

    private targetEfficiency = 100;
    private currentEfficiency = 100;

    private startShadowSim() {
        if (this.graphCanvas) return;
        this.graphCanvas = document.getElementById('shadow-graph-canvas') as HTMLCanvasElement;
        const ctx = this.graphCanvas.getContext('2d')!;

        const loop = () => {
            if (this.currentView !== 'shadow-analysis-view') {
                requestAnimationFrame(loop);
                return;
            }

            this.graphCanvas!.width = this.graphCanvas!.parentElement!.clientWidth;
            this.graphCanvas!.height = this.graphCanvas!.parentElement!.clientHeight;

            // Smooth transition
            this.currentEfficiency += (this.targetEfficiency - this.currentEfficiency) * 0.05; // Slower transition for TV feel
            this.graphData.push(this.currentEfficiency);
            this.graphData.shift();

            this.renderGraph(ctx);
            requestAnimationFrame(loop);
        };
        loop();
    }

    private renderGraph(ctx: CanvasRenderingContext2D) {
        const w = this.graphCanvas!.width;
        const h = this.graphCanvas!.height;

        // Fill dark background so canvas is never white
        ctx.fillStyle = '#060e20';
        ctx.fillRect(0, 0, w, h);

        // Grid lines (White subtle lines as in image)
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 6; i++) {
            const y = h - (i / 6) * h;
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();

            // Percentage labels matching image
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.font = '12px Inter';
            ctx.fillText(`${i * 20}%`, 5, y - 5);
        }

        // Graph Line (White and Bold as in image)
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';

        const step = w / (this.graphData.length - 1);
        this.graphData.forEach((val, i) => {
            const x = i * step;
            const y = h - (val / 120) * h;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();
    }


}


/**
 * BACK NAVIGATION LOCK
 * Prevents ALL forms of browser back navigation.
 * Only the "Main Menu" button can navigate between views.
 */
function lockBrowserHistory() {
    const url = window.location.href;

    // Push 30 dummy states immediately so the back button
    // would need to be pressed 30+ times to escape this page
    for (let i = 0; i < 30; i++) {
        history.pushState({ locked: true, i }, '', url);
    }

    // Every time popstate fires (back/forward pressed),
    // immediately re-push 5 more states to re-trap the user
    window.addEventListener('popstate', () => {
        for (let i = 0; i < 5; i++) {
            history.pushState({ locked: true }, '', url);
        }
    });

    // Block Alt + Left Arrow (Windows/Linux back shortcut)
    // Block Backspace key (back in some browsers when not in an input)
    // Block Mouse Button 4 (browser hardware back button on mice)
    window.addEventListener('keydown', (e: KeyboardEvent) => {
        const tag = (e.target as HTMLElement).tagName;
        const inInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

        if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'Left')) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (e.key === 'Backspace' && !inInput) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true); // capture phase = catches it before anything else

    // Block Mouse Button 3 & 4 (back/forward on some mice)
    window.addEventListener('mousedown', (e: MouseEvent) => {
        if (e.button === 3 || e.button === 4) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    // Block context menu on those buttons too
    window.addEventListener('auxclick', (e: MouseEvent) => {
        if (e.button === 3 || e.button === 4) {
            e.preventDefault();
        }
    }, true);
}

window.addEventListener('DOMContentLoaded', () => {
    lockBrowserHistory();
    new ExperienceCentre();
});

