interface PanelSpecs {
    brand: string;
    cellTechnology: string;
    powerRange: string;
    maxEfficiency: string;
    tempCoefficient: string;
    bifaciality: string;
    weight: string;
    moduleSize?: string;
    maxSystemVoltage: string;
    productWarranty: string;
    performanceWarranty: string;
    mechanicalLoad?: string;
    bestFor: string[];
    highlight: string;
}

interface SolarPanelData {
    title: string;
    subtitle: string;
    annualSavings: string;
    lifetimeSavings: string;
    color: string;
    crackProbability: number;
    specs: PanelSpecs;
    resultImage: string;
}

const SOLAR_DATA: Record<string, SolarPanelData> = {
    panel1: {
        title: "Adani Solar (Best Choice)",
        subtitle: "Best performance solar panel for homes",
        annualSavings: "₹ 24,000",
        lifetimeSavings: "₹ 6,00,000",
        color: "#d71920",
        crackProbability: 0,
        resultImage: "/solar_panel_result.jpg",
        specs: {
            brand: "Adani Solar",
            cellTechnology: "N-Type TOPCon",
            powerRange: "600 – 650 W",
            maxEfficiency: "Up to ~23–24%",
            tempCoefficient: "-0.28 % / °C",
            bifaciality: "~80 %",
            weight: "33.6 kg",
            maxSystemVoltage: "1500 V",
            productWarranty: "12 Years",
            performanceWarranty: "30 Years",
            bestFor: ["Residential rooftop", "Highest efficiency", "Hot climates"],
            highlight: "Recommended by Kondaas Solar"
        }
    },
    panel2: {
        title: "⚠ Waaree Solar",
        subtitle: "Standard solar performance",
        annualSavings: "₹ 21,200",
        lifetimeSavings: "₹ 5,30,000",
        color: "#d32f2f",
        crackProbability: 0.5,
        resultImage: "/solar_panel_result.jpg",
        specs: {
            brand: "Waaree Solar",
            cellTechnology: "Mono PERC / TOPCon",
            powerRange: "540 – 615 W",
            maxEfficiency: "~20–21 %",
            tempCoefficient: "-0.34 % / °C",
            bifaciality: "~70 %",
            weight: "28 kg",
            maxSystemVoltage: "1500 V",
            productWarranty: "10–12 Years",
            performanceWarranty: "25 Years",
            bestFor: ["Standard installations", "Budget choice"],
            highlight: "Lower Efficiency"
        }
    },
    panel3: {
        title: "⚠ Goldi Solar",
        subtitle: "Basic performance solar panel",
        annualSavings: "₹ 20,500",
        lifetimeSavings: "₹ 5,12,500",
        color: "#d32f2f",
        crackProbability: 0.5,
        resultImage: "/solar_panel_result.jpg",
        specs: {
            brand: "Goldi Solar",
            cellTechnology: "Mono PERC",
            powerRange: "525 – 600 W",
            maxEfficiency: "~20 %",
            tempCoefficient: "-0.35 % / °C",
            bifaciality: "0 %",
            weight: "27.5 kg",
            maxSystemVoltage: "1500 V",
            productWarranty: "10 Years",
            performanceWarranty: "25 Years",
            bestFor: ["Entry level systems"],
            highlight: "Small Scale Manufacturing"
        }
    },
    panel4: {
        title: "⚠ Vikram Solar",
        subtitle: "Better for large solar plants",
        annualSavings: "₹ 22,000",
        lifetimeSavings: "₹ 5,50,000",
        color: "#d32f2f",
        crackProbability: 0.5,
        resultImage: "/solar_panel_result.jpg",
        specs: {
            brand: "Vikram Solar",
            cellTechnology: "Mono PERC",
            powerRange: "540 – 680 W",
            maxEfficiency: "~20–21 %",
            tempCoefficient: "-0.35 % / °C",
            bifaciality: "~70 %",
            weight: "39.5 kg",
            maxSystemVoltage: "1500 V",
            productWarranty: "12 Years",
            performanceWarranty: "25–30 Years",
            bestFor: ["Utility scale", "Non-residential"],
            highlight: "Heavy Panel Weight"
        }
    },
    panel5: {
        title: "⚠ Tata Power Solar",
        subtitle: "Reliable but lower performance",
        annualSavings: "₹ 21,000",
        lifetimeSavings: "₹ 5,25,000",
        color: "#d32f2f",
        crackProbability: 0.5,
        resultImage: "/solar_panel_result.jpg",
        specs: {
            brand: "Tata Power Solar",
            cellTechnology: "Mono PERC",
            powerRange: "570 – 600 W",
            maxEfficiency: "~19–21 %",
            tempCoefficient: "-0.36 % / °C",
            bifaciality: "~70 %",
            weight: "31 kg",
            maxSystemVoltage: "1500 V",
            productWarranty: "10 Years",
            performanceWarranty: "25 Years",
            bestFor: ["Residential rooftop"],
            highlight: "Older Technology"
        }
    },
    panel6: {
        title: "⚠ RenewSys Solar",
        subtitle: "Standard performance solar panel",
        annualSavings: "₹ 21,500",
        lifetimeSavings: "₹ 5,37,500",
        color: "#d32f2f",
        crackProbability: 0.5,
        resultImage: "/solar_panel_result.jpg",
        specs: {
            brand: "RenewSys Solar",
            cellTechnology: "Mono PERC / TOPCon",
            powerRange: "550 – 635 W",
            maxEfficiency: "~20 %",
            tempCoefficient: "-0.30 % / °C",
            bifaciality: "~80 %",
            weight: "33.4 kg",
            maxSystemVoltage: "1500 V",
            productWarranty: "12 Years",
            performanceWarranty: "25 Years",
            bestFor: ["Standard rooftop"],
            highlight: "Less Advanced Tech"
        }
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
    private graphData: number[] = [
        ...Array(40).fill(100).map(() => 98 + Math.random() * 4),
        ...[90, 70, 45, 40, 40, 42, 50, 80, 95], // Historic Event 1
        ...Array(30).fill(100).map(() => 98 + Math.random() * 4),
        ...[85, 60, 55, 50, 52, 70, 90], // Historic Event 2
        ...Array(20).fill(100).map(() => 98 + Math.random() * 4),
        ...[95, 80, 50, 40, 40, 45, 75, 95], // Historic Event 3
        ...Array(26).fill(100).map(() => 98 + Math.random() * 4)
    ];
    private lastActivePanel: string | null = null;
    private isProcessingScan: boolean = false;
    private targetEfficiency: number = 100;
    private currentEfficiency: number = 100;
    private adQuotes = [
        {
            h: "45% of panels installed on rooftop solar plants in India show micro-defects",
            s: "EL imaging is the X-ray for solar panels — it finds internal micro-defects"
        },
        {
            h: "India's solar module defect rates are among the highest globally.",
            s: "Rapid expansion often compromises long-term manufacturing quality control."
        },
        {
            h: "One in six panels is defect-free. Are yours?",
            s: "EL testing detects hidden cracks with up to 99% precision."
        },
        {
            h: "Line cracks were found in 83% of solar sites assessed in India.",
            s: "These defects lead to hotspots and permanent generation loss."
        },
        {
            h: "Cell-related defects account for 22% of module production issues.",
            s: "Ensure your investment lasts its full 25-year lifetime with EL screening."
        }
    ];
    private currentQuoteIndex = 0;

    constructor() {
        // this.initDebugConsole(); // Deactivated for production
        // this.logDebug("Experience Centre Initializing...");
        new BackgroundAnimator();
        this.initNavigation();
        this.initShadowExperience();
        this.startLivePolling();
        this.initManualTestButtons();
        this.startAdTextRotation();
        this.startShadowDemoCycle();
    }

    private startShadowDemoCycle() {
        // Automatically simulate shadow impact every 20 seconds for demo
        setInterval(() => {
            if (this.currentView !== 'shadow-analysis-view') return;
            // Only trigger demo dip if currently at peak (no active sheet override)
            if (this.targetEfficiency > 95) {
                this.targetEfficiency = 45; // Simulated drop
                setTimeout(() => {
                    if (this.targetEfficiency < 50) this.targetEfficiency = 100; // Recovery
                }, 6000);
            }
        }, 22000);
    }

    private startAdTextRotation() {
        const hEl = document.getElementById('ad-headline');
        const sEl = document.getElementById('ad-subheadline');

        setInterval(() => {
            if (this.currentView !== 'solar-selection-view') return;
            if (!hEl || !sEl) return;

            // Fade out
            hEl.classList.add('fade-out');
            sEl.classList.add('fade-out');

            setTimeout(() => {
                this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.adQuotes.length;
                const quote = this.adQuotes[this.currentQuoteIndex];

                hEl.innerText = quote.h;
                sEl.innerText = quote.s;

                // Fade in
                hEl.classList.remove('fade-out');
                sEl.classList.remove('fade-out');
                hEl.classList.add('fade-in');
                sEl.classList.add('fade-in');

                setTimeout(() => {
                    hEl.classList.remove('fade-in');
                    sEl.classList.remove('fade-in');
                }, 500);
            }, 500);
        }, 5000);
    }

    private logDebug(_msg: string) {
        // Deactivated for production
    }

    /*
    private initDebugConsole() {
        window.onerror = (msg, _url, _line) => {
            this.logDebug(`ERROR: ${msg}`);
        };
    }
    */

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

        document.getElementById('ad-back-btn')?.addEventListener('click', () => {
            this.switchView('landing-page');
        });

        document.getElementById('back-to-menu')?.addEventListener('click', () => {
            this.switchView('landing-page');
        });

        document.getElementById('result-reset-btn')?.addEventListener('click', () => {
            // Re-fetch and re-trigger scan for current panel
            this.checkSheetUpdates();
            if (this.lastActivePanel) {
                this.triggerAutomaticTransition(this.lastActivePanel);
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

        if (this.currentView === 'solar-result-screen') {
            this.switchView('solar-selection-view');
        }

        this.startScanningFlow(panelType);
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

            let activePanel: string | null = null;
            let shadowMetrics = { voltage: 42.5, current: 9.2, efficiency: 100 };

            for (let i = lines.length - 1; i >= 1; i--) {
                const row = lines[i].split(delimiter).map(v => v.trim().toUpperCase().replace(/["']/g, ''));

                headers.forEach((h, j) => {
                    const val = row[j];
                    if (!val) return;

                    let matchedKey = null;
                    if (h === 'panel1' || h.includes('pan1')) matchedKey = 'panel1';
                    else if (h === 'panel2' || h.includes('pan2')) matchedKey = 'panel2';
                    else if (h === 'panel3' || h.includes('pan3')) matchedKey = 'panel3';
                    else if (h === 'panel4' || h.includes('pan4')) matchedKey = 'panel4';
                    else if (h === 'panel5' || h.includes('pan5')) matchedKey = 'panel5';
                    else if (h === 'panel6' || h.includes('pan6')) matchedKey = 'panel6';

                    if (matchedKey && (val === 'TRUE' || val === '1' || val === 'YES')) {
                        if (!activePanel) {
                            activePanel = matchedKey;
                            this.logDebug(`FOUND ACTIVE: ${activePanel} on Row ${i + 1}`);
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
                    statsEl.innerHTML = `Active Panel: <span style="color:var(--brand-red); font-weight:900;">${(activePanel as string).toUpperCase()}</span>`;
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

            const delimiter = lines[0].includes(';') ? ';' : ',';
            const headers = lines[0].split(delimiter).map(h => h.trim().toLowerCase());
            let dataIndex = headers.findIndex(h => h.includes('eff') || h.includes('gen') || h.includes('power'));
            if (dataIndex === -1) dataIndex = 0;

            const latestLine = lines[lines.length - 1]; // Only take the absolute latest point
            const latestVal = parseFloat(latestLine.split(delimiter)[dataIndex]?.trim());

            if (!isNaN(latestVal)) {
                this.targetEfficiency = latestVal; // Set the target, let sim pull the line
            }
        } catch (e) {
            console.warn("Graph fetch error:", e);
        }
    }

    private countUp(el: HTMLElement, target: number, prefix: string = '', suffix: string = '') {
        const currentText = el.innerText.replace(/[^0-9]/g, '');
        const start = parseInt(currentText) || 0;
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
        const livePctEl = document.getElementById('metric-live-pct')!;
        const energyLossEl = document.getElementById('metric-energy-loss')!;
        const savingsLossEl = document.getElementById('metric-savings-loss')!;
        const effPillEl = document.getElementById('gen-pct')!;
        const vEl = document.getElementById('live-voltage')!;
        const cEl = document.getElementById('live-current')!;

        // Calculate losses based on efficiency drop
        const drop = (100 - metrics.efficiency) / 100;
        const eLoss = Math.floor(1460 * drop);
        const sLoss = Math.floor(18000 * drop);

        // Update Big Numbers
        this.countUp(livePctEl, Math.floor(metrics.efficiency));
        this.countUp(energyLossEl, eLoss);
        this.countUp(savingsLossEl, sLoss, '₹');

        // Update Pill and Live Labels
        effPillEl.innerText = metrics.efficiency.toFixed(0);
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
            if (hint) hint.innerText = "SWITCH TO SOLARSQUARE OPTIMIZED";
            icon.innerText = "⚠️";
        } else if (eff < 90) {
            title.innerText = "MINOR SHADOW IMPACT";
            desc.innerText = "Slight generation loss detected. Ensure your panels have independent cell circuits to minimize impact from localized shadows.";
            if (hint) hint.innerText = "CONSIDER BYPASS DIODE AUDIT";
            icon.innerText = "🔍";
        } else {
            title.innerText = "OPTIMAL GENERATION";
            desc.innerText = "System is performing at peak efficiency. No shadows detected on current string.";
            if (hint) hint.innerText = "SYSTEM HEALTH PERFECT";
            icon.innerText = "✨";
        }
    }

    private startScanningFlow(type: string) {
        if (this.isProcessingScan) return;
        this.isProcessingScan = true;

        const overlay = document.getElementById('scanning-overlay')!;
        const scanImg = document.getElementById('scanning-img') as HTMLImageElement;
        const integrityEl = document.getElementById('scan-integrity')!;
        const thermalEl = document.getElementById('scan-thermal')!;
        const laser = overlay.querySelector('.scan-laser') as HTMLElement;

        // Set the solar panel image inside the scanning card box
        const panelImgUrl = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/solar_panel_result.jpg`, window.location.origin).href;
        scanImg.src = panelImgUrl;
        overlay.classList.remove('hidden');
        overlay.style.opacity = '1';

        let progress = 0;
        const totalSteps = 100;
        const stepTime = 50; // Total 5 seconds

        const interval = setInterval(() => {
            progress += 1;
            const pct = progress;

            // Sync laser background with progress
            if (laser) {
                laser.style.setProperty('--scan-pos', `${pct}%`);
            }

            // Metrics Logic: realistic fluctuations
            const isDefective = ['panel2', 'panel3', 'panel4', 'panel5', 'panel6'].includes(type);
            const targetIntegrity = isDefective ? 40 : 98.4;

            // At start, integrity is high then drops if defective
            const currentIntegrity = 100 - (pct / 100 * (100 - targetIntegrity));
            const jitter = (Math.random() - 0.5) * 2;
            integrityEl.innerText = `${(currentIntegrity + jitter).toFixed(1)}%`;

            const thermalBase = isDefective ? 12 : 0.8;
            const thermalVal = (pct / 100 * thermalBase) + (Math.random() * 2);
            thermalEl.innerText = `${thermalVal.toFixed(2)} W/m²`;

            if (progress >= totalSteps) {
                clearInterval(interval);
                // Smooth fade out before result
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.classList.add('hidden');
                    this.isProcessingScan = false;
                    this.showSolarResult(type);
                }, 500);
            }
        }, stepTime);
    }

    private showSolarResult(type: string, skipSwitch: boolean = false) {
        const data = SOLAR_DATA[type];
        const isDefective = data.crackProbability > 0.4; // Minor cracks in Vikram (0.1) are okay for "Great choice" flow in this context

        if (!skipSwitch) {
            this.switchView('solar-result-screen');
            // Update sidebar active state to match scanned panel
            document.querySelectorAll('.sidebar-item').forEach(li => li.classList.remove('active'));
            document.querySelector(`.sidebar-item[data-panel="${type}"]`)?.classList.add('active');
        }

        // Dynamic headline
        const headline = document.getElementById('result-headline');
        if (headline) {
            const brandSpan = `<span class="highlight-brand">${data.title}</span>`;
            headline.innerHTML = isDefective
                ? `Oops, you selected <br>${brandSpan}!`
                : `Great choice! You selected <br>${brandSpan}!`;
        }

        // Dynamic subtitle / tagline
        document.getElementById('solar-result-subtitle')!.innerText = data.subtitle;

        // Panel name tag on EL card
        document.getElementById('solar-result-title')!.innerText = data.title;

        // Savings intro sentence
        const intro = document.getElementById('result-savings-intro');
        if (intro) {
            intro.innerText = isDefective
                ? 'This damaged panel will cut your solar savings by'
                : 'This panel can boost your solar savings by';
        }

        // Update Specifications Info
        const specs = data.specs;
        document.getElementById('panel-highlight')!.innerText = specs.highlight;
        document.getElementById('spec-brand')!.innerText = specs.brand;
        document.getElementById('spec-tech')!.innerText = specs.cellTechnology;
        document.getElementById('spec-power')!.innerText = specs.powerRange;
        document.getElementById('spec-efficiency')!.innerText = specs.maxEfficiency;
        document.getElementById('spec-warranty')!.innerText = `${specs.productWarranty} / ${specs.performanceWarranty}`;

        const bestForEl = document.getElementById('spec-best-for')!;
        bestForEl.innerHTML = '';
        specs.bestFor.forEach(item => {
            const pill = document.createElement('span');
            pill.className = 'best-pill';
            pill.innerText = item;
            bestForEl.appendChild(pill);
        });

        this.renderEL(data.crackProbability, data.resultImage);
    }

    private renderEL(prob: number, panelImgUrl: string) {
        const canvas = document.getElementById('el-result-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d')!;
        const parent = canvas.parentElement!;
        const w = parent.clientWidth || 600;
        const h = parent.clientHeight || 450;
        canvas.width = w; canvas.height = h;

        const img = new Image();
        // Ensure absolute path with base URL
        const fullUrl = panelImgUrl.startsWith('http') ? panelImgUrl : new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}${panelImgUrl}`, window.location.origin).href;
        img.src = fullUrl;

        img.onload = () => {
            // Brighten the image slightly for better visibility on TV
            ctx.filter = 'brightness(1.1) contrast(1.05)';
            // Draw the base image
            ctx.drawImage(img, 0, 0, w, h);
            ctx.filter = 'none'; // Reset filter for cracks/grid

            // Removed dark overlay to keep image bright as requested

            // Re-draw a subtle technical grid on top of the image
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 1;
            const cols = 7, rows = 6;
            for (let i = 0; i <= cols; i++) {
                ctx.beginPath(); ctx.moveTo((i / cols) * w, 0); ctx.lineTo((i / cols) * w, h); ctx.stroke();
            }
            for (let j = 0; j <= rows; j++) {
                ctx.beginPath(); ctx.moveTo(0, (j / rows) * h); ctx.lineTo(w, (j / rows) * h); ctx.stroke();
            }

            if (prob > 0) {
                ctx.strokeStyle = '#fff'; ctx.shadowBlur = 15; ctx.shadowColor = '#00e5ff'; ctx.lineWidth = 1.5;
                const crackCount = Math.floor(prob * 10);
                for (let i = 0; i < crackCount; i++) {
                    this.drawProceduralCrack(ctx, Math.random() * w, Math.random() * h, prob);
                }
            } else {
                ctx.shadowBlur = 40; ctx.shadowColor = 'rgba(46, 125, 50, 0.3)';
                ctx.fillStyle = 'rgba(46, 125, 50, 0.05)'; ctx.fillRect(10, 10, w - 20, h - 20);
            }
        };

        img.onerror = () => {
            ctx.fillStyle = '#050a14'; ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = '#fff'; ctx.fillText("Image Load Failed", 20, 20);
        };
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

            // Smooth transition to target with a bit of live 'sensor noise'
            const baseTarget = this.targetEfficiency;
            const noise = (Math.random() - 0.5) * 0.8; // Subtle ±0.4% jitter
            const frameTarget = baseTarget + noise;

            this.currentEfficiency += (frameTarget - this.currentEfficiency) * 0.12;
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

        // Subtly lighter technical grid
        ctx.strokeStyle = '#f1f5f9';
        ctx.lineWidth = 1;
        const gridLines = 7; // 0, 20, 40, 60, 80, 100, 120

        // Horizontal Grid Lines
        for (let i = 0; i < gridLines; i++) {
            const y = h - (i / (gridLines - 1)) * h;
            ctx.beginPath();
            ctx.setLineDash([5, 5]); // Dashed lines for "technical" look
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
            ctx.setLineDash([]); // Reset
        }

        // Vertical separators (every 1/5th of the graph)
        for (let i = 1; i < 5; i++) {
            ctx.beginPath();
            ctx.strokeStyle = '#f8fafc';
            ctx.moveTo((i / 5) * w, 0);
            ctx.lineTo((i / 5) * w, h);
            ctx.stroke();
        }

        if (this.graphData.length < 2) return;

        // Area Gradient (Clean soft brand tint)
        const areaGrad = ctx.createLinearGradient(0, 0, 0, h);
        areaGrad.addColorStop(0, 'rgba(215, 25, 32, 0.08)');
        areaGrad.addColorStop(1, 'rgba(215, 25, 32, 0)');

        const step = w / (this.graphData.length - 1);

        ctx.beginPath();
        this.graphData.forEach((val, i) => {
            const x = i * step;
            const y = h - (val / 120) * h;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fillStyle = areaGrad;
        ctx.fill();

        // Main Performance Line (Glowing Red)
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(215, 25, 32, 0.3)';
        ctx.strokeStyle = '#D71920';
        ctx.lineWidth = 5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.beginPath();
        this.graphData.forEach((val, i) => {
            const x = i * step;
            const y = h - (val / 120) * h;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Reset effects
        ctx.shadowBlur = 0;

        // Live Pulse Dot at the end
        const lastVal = this.graphData[this.graphData.length - 1];
        const lastX = w;
        const lastY = h - (lastVal / 120) * h;

        ctx.fillStyle = '#D71920';
        ctx.beginPath();
        ctx.arc(lastX, lastY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Outer dot pulse
        const pulse = (Math.sin(Date.now() / 150) + 1) / 2;
        ctx.strokeStyle = `rgba(215, 25, 32, ${0.5 * pulse})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(lastX, lastY, 6 + 10 * pulse, 0, Math.PI * 2);
        ctx.stroke();

        // Scanning Scanline (Very subtle technical overlay)
        const scanX = (Date.now() / 15) % w;
        ctx.strokeStyle = 'rgba(215, 25, 32, 0.03)';
        ctx.lineWidth = 40;
        ctx.beginPath();
        ctx.moveTo(scanX, 0); ctx.lineTo(scanX, h);
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

