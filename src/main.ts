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


class BackgroundAnimator {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private particles: { x: number, y: number, length: number, speed: number, alpha: number }[] = [];

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

        for (let i = 0; i < 80; i++) { // Increased density
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                length: Math.random() * 120 + 60,
                speed: Math.random() * 2.5 + 1.2,
                alpha: Math.random() * 0.4 + 0.05
            });
        }
    }

    private animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const isWhiteTheme = document.body.classList.contains('shadow-tv-theme');

        const photonColor = isWhiteTheme ? '215, 25, 32' : '255, 255, 255';

        // Draw Energy Streaks (Photons)
        this.particles.forEach(p => {
            p.y -= p.speed;
            if (p.y + p.length < 0) p.y = this.canvas.height;

            const grad = this.ctx.createLinearGradient(0, p.y, 0, p.y + p.length);
            grad.addColorStop(0, `rgba(${photonColor}, 0)`);
            grad.addColorStop(0.5, `rgba(${photonColor}, ${p.alpha})`);
            grad.addColorStop(1, `rgba(${photonColor}, 0)`);

            this.ctx.strokeStyle = grad;
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.x, p.y + p.length);
            this.ctx.stroke();
        });

        requestAnimationFrame(() => this.animate());
    }
}

const SHEET_BASE_URL = 'https://docs.google.com/spreadsheets/d/1oLP0BewTDx7fpv7G5sUkwRWzWhYSSaVVN_8IbKSmldY/export?format=csv';
const MAIN_GID = '0';
const GRAPH_GID = '1519374238';

class ExperienceCentre {
    private currentView: string = 'landing';
    private graphCanvas: HTMLCanvasElement | null = null;
    private graphData: number[] = Array(50).fill(100);
    private lastActivePanel: string | null = null;
    private isProcessingScan: boolean = false;
    private targetEfficiency: number = 100;
    private currentEfficiency: number = 100;

    constructor() {
        // this.initDebugConsole(); // Deactivated for production
        // this.logDebug("Experience Centre Initializing...");
        new BackgroundAnimator();
        this.initNavigation();
        this.initShadowExperience();
        this.startLivePolling();
        this.initManualTestButtons();
    }

    private logDebug(msg: string) {
        // Deactivated for production
        // console.log(msg);
        /* 
        let consoleEl = document.getElementById('debug-console');
        if (!consoleEl) {
            consoleEl = document.createElement('div');
            consoleEl.id = 'debug-console';
            consoleEl.className = 'debug-console';
            document.body.appendChild(consoleEl);
        }
        const time = new Date().toLocaleTimeString();
        consoleEl.innerHTML = `<div>[${time}] ${msg}</div>` + consoleEl.innerHTML;
        */
    }

    private initDebugConsole() {
        window.onerror = (msg, url, line) => {
            this.logDebug(`ERROR: ${msg} at ${line}`);
        };
    }

    private initManualTestButtons() {
        document.querySelectorAll('.test-panel-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const panel = (e.target as HTMLElement).getAttribute('data-panel');
                if (panel) this.triggerAutomaticTransition(panel);
            });
        });
    }

    private initNavigation() {
        document.getElementById('btn-which-solar')?.addEventListener('click', () => {
            this.switchView('solar-selection-view');
            this.syncWithCurrentState();
        });
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
        // Show back button on all screens except landing
        backBtn.classList.toggle('hidden', viewId === 'landing-page' || viewId === 'landing');

        // Toggle shadow theme for background/animation rules
        if (viewId === 'shadow-analysis-view') {
            document.body.classList.add('shadow-tv-theme');
            this.startShadowSim();
        } else {
            document.body.classList.remove('shadow-tv-theme');
        }
    }

    private startLivePolling() {
        this.checkSheetUpdates();
        setInterval(() => this.checkSheetUpdates(), 3000);
        setInterval(() => this.fetchGraphData(), 3000);
    }

    private async checkSheetUpdates() {
        if (this.isProcessingScan) return;

        try {
            const data = await this.fetchAllSheetData();

            // Solar Panel Logic
            if (data.activePanel) {
                const isWaitingOnSelectView = this.currentView === 'solar-selection-view' && !this.isProcessingScan;
                const hasChanged = data.activePanel !== this.lastActivePanel;

                if (hasChanged || isWaitingOnSelectView) {
                    this.lastActivePanel = data.activePanel;
                    // Only auto-trigger the scanning flow if the user has ALREADY entered the selection view
                    if (this.currentView === 'solar-selection-view' || this.currentView === 'solar-result-screen') {
                        this.triggerAutomaticTransition(data.activePanel);
                    }
                }
            } else {
                this.lastActivePanel = null;
            }

            // Shadow/Generation Logic
            if (this.currentView === 'shadow-analysis-view') {
                this.updateLiveShadowMetrics(data.shadow);
            }

        } catch (error) {
            console.warn("Polling error:", error);
        }
    }

    private syncWithCurrentState() {
        if (this.lastActivePanel && !this.isProcessingScan) {
            this.triggerAutomaticTransition(this.lastActivePanel);
        }
    }

    private triggerAutomaticTransition(panelType: string) {
        const isDefective = ['microcrack', 'hotspot', 'leaking'].includes(panelType);
        const imgSrc = isDefective ? '/panel_defective.png' : '/panel_premium.png';

        if (this.currentView === 'solar-result-screen') {
            this.switchView('solar-selection-view');
        }

        this.startScanningFlow(panelType, imgSrc);
    }

    private async fetchAllSheetData() {
        const statsEl = document.querySelector('.status-subtitle');
        try {
            const url = `${SHEET_BASE_URL}&gid=${MAIN_GID}&t=${Date.now()}`;
            this.logDebug(`Fetching Sheet: GID=${MAIN_GID}`);
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const csvText = (await response.text()).trim();
            let lines = csvText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            lines = lines.filter(line => line.replace(/[,;]/g, '').length > 0);
            
            this.logDebug(`Sheet Received. Rows: ${lines.length}`);

            if (lines.length < 2) {
                if (statsEl) statsEl.innerHTML = "Connected. Row mismatch?";
                return { activePanel: null, shadow: { voltage: 42.5, current: 9.2, efficiency: 100 } };
            }

            const delimiter = lines[0].includes(';') ? ';' : ',';
            const headers = lines[0].split(delimiter).map(h => h.trim().toLowerCase().replace(/[^a-z0-9]/g, ''));

            let activePanel = null;
            let shadowMetrics = { voltage: 42.5, current: 9.2, efficiency: 100 };
            
            for (let i = lines.length - 1; i >= 1; i--) {
                const row = lines[i].split(delimiter).map(v => v.trim().toUpperCase().replace(/["']/g, ''));
                
                headers.forEach((h, j) => {
                    const val = row[j];
                    if (!val) return;

                    let matchedKey = null;
                    if (h === 'panel1' || (h.includes('pan') && h.includes('1'))) matchedKey = 'premium';
                    else if (h === 'panel2' || (h.includes('pan') && h.includes('2'))) matchedKey = 'microcrack';
                    else if (h === 'panel3' || (h.includes('pan') && h.includes('3'))) matchedKey = 'hotspot';
                    else if (h === 'panel4' || (h.includes('pan') && h.includes('4'))) matchedKey = 'standard';
                    else if (h === 'panel5' || (h.includes('pan') && h.includes('5'))) matchedKey = 'leaking';
                    else if (h === 'panel6' || (h.includes('pan') && h.includes('6'))) matchedKey = 'solar-square';

                    if (matchedKey && (val === 'TRUE' || val === '1' || val === 'YES')) {
                        if (!activePanel) {
                            activePanel = matchedKey;
                            this.logDebug(`FOUND ACTIVE: ${activePanel} on Row ${i+1}`);
                        }
                    }
                    
                    if (i === lines.length - 1) {
                        if (h.includes('volt')) shadowMetrics.voltage = parseFloat(val) || shadowMetrics.voltage;
                        if (h.includes('curr')) shadowMetrics.current = parseFloat(val) || shadowMetrics.current;
                        if (h.includes('eff') || h.includes('gen')) shadowMetrics.efficiency = parseFloat(val) || shadowMetrics.efficiency;
                    }
                });
                if (activePanel) break;
            }

            if (statsEl) {
                if (activePanel) {
                    statsEl.innerHTML = `Active Panel: <span style="color:var(--brand-red); font-weight:900;">${activePanel.toUpperCase()}</span>`;
                } else {
                    statsEl.innerHTML = `Scanning ${lines.length} rows... No TRUE found.`;
                }
            }

            return { activePanel, shadow: shadowMetrics };
        } catch (e: any) {
            this.logDebug(`FETCH ERROR: ${e.message}`);
            if (statsEl) statsEl.innerHTML = `<span style="color:orange">⚠️ Link Error: ${e.message}</span>`;
            throw e;
        }
    }

    private async fetchGraphData() {
        if (this.currentView !== 'shadow-analysis-view') return;
        try {
            const response = await fetch(`${SHEET_BASE_URL}&gid=${GRAPH_GID}&t=${Date.now()}`);
            const csvText = await response.text();
            const lines = csvText.trim().split('\n');
            if (lines.length < 2) return;

            const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
            // Look for 'efficiency', 'generation', or default to column 0
            let dataIndex = headers.findIndex(h => h.includes('eff') || h.includes('gen') || h.includes('power'));
            if (dataIndex === -1) dataIndex = 0;

            const newData = lines.slice(1)
                .map(line => {
                    const cols = line.split(',');
                    return parseFloat(cols[dataIndex]?.trim());
                })
                .filter(val => !isNaN(val))
                .slice(-50);

            if (newData.length > 0) {
                this.graphData = newData;
            }
        } catch (e) {
            console.warn("Graph fetch error:", e);
        }
    }

    private countUp(el: HTMLElement, target: number, prefix: string = '', suffix: string = '') {
        const start = parseInt(el.innerText.replace(/[^0-9]/g, '')) || 0;
        const duration = 1000;
        const startTime = performance.now();

        const update = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const current = Math.floor(progress * (target - start) + start);
            el.innerText = `${prefix}${current.toLocaleString()}${suffix}`;
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }

    private updateLiveShadowMetrics(metrics: any) {
        const energyLossEl = document.getElementById('metric-energy-loss')!;
        const savingsLossEl = document.getElementById('metric-savings-loss')!;
        const effEl = document.getElementById('gen-pct')!;
        const vEl = document.getElementById('live-voltage')!;
        const cEl = document.getElementById('live-current')!;

        // Calculate losses based on efficiency drop
        const drop = (100 - metrics.efficiency) / 100;
        const eLoss = Math.floor(1460 * drop);
        const sLoss = Math.floor(18000 * drop);

        this.countUp(energyLossEl, eLoss);
        this.countUp(savingsLossEl, sLoss, '₹');

        effEl.innerText = metrics.efficiency.toFixed(0);
        vEl.innerText = metrics.voltage.toFixed(1);
        cEl.innerText = metrics.current.toFixed(1);

        this.targetEfficiency = metrics.efficiency;
        this.updateRecommendation(metrics.efficiency);
    }

    private updateRecommendation(eff: number) {
        const title = document.getElementById('advice-title');
        const desc = document.getElementById('advice-desc');
        const hint = document.getElementById('hint-text');
        const icon = document.querySelector('.action-icon') as HTMLElement;

        if (!title || !desc) return; // Silent return if elements missing

        if (eff < 70) {
            title.innerText = "CRITICAL SHADOW LOSS";
            desc.innerText = "Significant generation drop detected. Conventional panels are suffering from series-mismatch. Upgrade to SolarSquare Optimized panels recommended.";
            hint.innerText = "SWITCH TO SOLARSQUARE OPTIMIZED";
            icon.innerText = "⚠️";
        } else if (eff < 90) {
            title.innerText = "MINOR SHADOW IMPACT";
            desc.innerText = "Slight generation loss detected. Ensure your panels have independent cell circuits to minimize impact from localized shadows.";
            hint.innerText = "CONSIDER BYPASS DIODE AUDIT";
            icon.innerText = "🔍";
        } else {
            title.innerText = "OPTIMAL GENERATION";
            desc.innerText = "System is performing at peak efficiency. No shadows detected on current string.";
            hint.innerText = "SYSTEM HEALTH PERFECT";
            icon.innerText = "✨";
        }
    }

    private startScanningFlow(type: string, imgSrc: string) {
        if (this.isProcessingScan) return;
        this.isProcessingScan = true;

        const overlay = document.getElementById('scanning-overlay')!;
        const scanImg = document.getElementById('scanning-img') as HTMLImageElement;
        const integrity = document.getElementById('scan-integrity')!;
        const thermal = document.getElementById('scan-thermal')!;

        scanImg.src = imgSrc;
        overlay.classList.remove('hidden');

        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            const isDefective = ['microcrack', 'hotspot', 'leaking'].includes(type);
            const targetIntegrity = isDefective ? 40 : 98;
            integrity.innerText = `${Math.min(100, Math.floor(Math.random() * 10) + targetIntegrity)}%`;
            thermal.innerText = `${(Math.random() * (isDefective ? 15 : 2)).toFixed(2)} W/m²`;

            if (progress > 40) {
                clearInterval(interval);
                overlay.classList.add('hidden');
                this.isProcessingScan = false;
                this.showSolarResult(type);
            }
        }, 80);
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
        canvas.width = 600; canvas.height = 450;
        ctx.fillStyle = '#050a14'; ctx.fillRect(0, 0, 600, 450);
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)'; ctx.lineWidth = 1;
        for (let i = 0; i <= 6; i++) {
            ctx.beginPath(); ctx.moveTo(i * 100, 0); ctx.lineTo(i * 100, 450); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, i * 75); ctx.lineTo(600, i * 75); ctx.stroke();
        }
        if (prob > 0) {
            ctx.strokeStyle = '#fff'; ctx.shadowBlur = 15; ctx.shadowColor = '#00e5ff'; ctx.lineWidth = 1.5;
            const crackCount = Math.floor(prob * 10);
            for (let i = 0; i < crackCount; i++) {
                this.drawProceduralCrack(ctx, Math.random() * 600, Math.random() * 450, prob);
            }
        } else {
            ctx.shadowBlur = 40; ctx.shadowColor = 'rgba(46, 125, 50, 0.3)';
            ctx.fillStyle = 'rgba(46, 125, 50, 0.05)'; ctx.fillRect(10, 10, 580, 430);
        }
    }

    private drawProceduralCrack(ctx: CanvasRenderingContext2D, x: number, y: number, severity: number) {
        ctx.beginPath(); ctx.moveTo(x, y);
        let cx = x, cy = y;
        const segments = 5 + Math.random() * 10;
        for (let i = 0; i < segments; i++) {
            cx += (Math.random() - 0.5) * (20 + severity * 40);
            cy += (Math.random() - 0.5) * (20 + severity * 40);
            ctx.lineTo(cx, cy);
            if (Math.random() < 0.2) {
                this.drawProceduralCrack(ctx, cx, cy, severity * 0.5);
                ctx.moveTo(cx, cy);
            }
        }
        ctx.stroke();
    }

    private initShadowExperience() {
        const graphBox = document.querySelector('.graph-container-replica') || document.querySelector('.interactive-graph');
        const tooltip = document.getElementById('graph-tooltip');

        if (!graphBox || !tooltip) {
            console.warn("Shadow UI elements missing, skipping tooltip init");
            return;
        }

        graphBox.addEventListener('mousemove', (e: any) => {
            const rect = graphBox.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            tooltip.style.display = 'block';
            tooltip.style.left = `${x + 15}px`;
            tooltip.style.top = `${y - 15}px`;

            // Map graph position to power value
            const powerAtPoint = (400 - (y / rect.height) * 400).toFixed(1);
            tooltip.innerText = `${powerAtPoint} Watts`;
        });

        graphBox.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    }

    private startShadowSim() {
        if (this.graphCanvas) return;
        this.graphCanvas = document.getElementById('shadow-graph-canvas') as HTMLCanvasElement;
        const ctx = this.graphCanvas.getContext('2d')!;

        const loop = () => {
            if (this.currentView !== 'shadow-analysis-view') {
                requestAnimationFrame(loop);
                return;
            }

            const parent = this.graphCanvas!.parentElement!;
            this.graphCanvas!.width = parent.clientWidth;
            this.graphCanvas!.height = parent.clientHeight;

            // Smooth transition
            this.currentEfficiency += (this.targetEfficiency - this.currentEfficiency) * 0.1;
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
        ctx.clearRect(0, 0, w, h);

        // Grid (Soft grey as per white theme)
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        for (let i = 0; i < 6; i++) {
            const y = h - (i / 5) * h;
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }

        // Gradient for area under curve (Soft red)
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, 'rgba(215, 25, 32, 0.05)');
        grad.addColorStop(1, 'rgba(215, 25, 32, 0)');

        ctx.beginPath();
        const step = w / (this.graphData.length - 1);
        this.graphData.forEach((val, i) => {
            const x = i * step;
            const y = h - (val / 120) * h;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });

        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.fillStyle = grad;
        ctx.fill();

        // Stroke line (Bold Red for visibility on white)
        ctx.beginPath();
        ctx.strokeStyle = '#D71920';
        ctx.lineWidth = 4;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(215, 25, 32, 0.1)';
        this.graphData.forEach((val, i) => {
            const x = i * step;
            const y = h - (val / 120) * h;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Diagnostic Scanning Line
        const scanX = (Date.now() / 20) % w;
        ctx.strokeStyle = 'rgba(215, 25, 32, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(scanX, 0); ctx.lineTo(scanX, h);
        ctx.stroke();

        // Glow on scan line
        const scanGrad = ctx.createLinearGradient(scanX - 20, 0, scanX + 20, 0);
        scanGrad.addColorStop(0, 'rgba(215, 25, 32, 0)');
        scanGrad.addColorStop(0.5, 'rgba(215, 25, 32, 0.1)');
        scanGrad.addColorStop(1, 'rgba(215, 25, 32, 0)');
        ctx.fillStyle = scanGrad;
        ctx.fillRect(scanX - 20, 0, 40, h);
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

