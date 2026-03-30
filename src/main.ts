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
    description: string;
}

interface SolarPanelData {
    title: string;
    subtitle: string;
    annualSavings: string;
    lifetimeSavings: string;
    color: string;
    crackProbability: number;
    score: number;
    scans: number;
    specs: PanelSpecs;
    resultImage: string;
    carbonOffset: string;
}

const SOLAR_DATA: Record<string, SolarPanelData> = {
    panel1: {
        title: "Adani Solar (Best Choice)",
        subtitle: "Best performance solar panel for homes",
        annualSavings: "₹ 24,000",
        lifetimeSavings: "₹ 6,00,000",
        color: "#d71920",
        crackProbability: 0,
        score: 9.9,
        scans: 156,
        resultImage: "/solar_carport.jpg",
        carbonOffset: "245 Tonnes",
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
            highlight: "Recommended by Kondaas Solar",
            description: "Adani Solar's premium N-Type modules offer industry-leading reliability and superior energy yield even in extreme temperatures."
        }
    },
    panel2: {
        title: "⚠ Waaree Solar",
        subtitle: "Standard solar performance",
        annualSavings: "₹ 21,200",
        lifetimeSavings: "₹ 5,30,000",
        color: "#d32f2f",
        crackProbability: 0.5,
        score: 6.2,
        scans: 112,
        resultImage: "/solar_carport.jpg",
        carbonOffset: "220 Tonnes",
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
            highlight: "Lower Efficiency",
            description: "Waaree provides standard industrial-grade panels suitable for general applications where balance of cost and performance is key."
        }
    },
    panel3: {
        title: "⚠ Goldi Solar",
        subtitle: "Basic performance solar panel",
        annualSavings: "₹ 20,500",
        lifetimeSavings: "₹ 5,12,500",
        color: "#d32f2f",
        crackProbability: 0.5,
        score: 5.8,
        scans: 87,
        resultImage: "/solar_carport.jpg",
        carbonOffset: "205 Tonnes",
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
            highlight: "Entry Level System",
            description: "Goldi Solar panels are an entry-level solution for basic solar requirements, focusing on essential power generation needs."
        }
    },
    panel4: {
        title: "⚠ Vikram Solar",
        subtitle: "Better for large solar plants",
        annualSavings: "₹ 22,000",
        lifetimeSavings: "₹ 5,50,000",
        color: "#d32f2f",
        crackProbability: 0.5,
        score: 6.8,
        scans: 94,
        resultImage: "/solar_carport.jpg",
        carbonOffset: "218 Tonnes",
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
            highlight: "Heavy Panel Weight",
            description: "Vikram Solar's high-wattage modules are optimized for large-scale utility plants but their significant weight may require reinforced mounting."
        }
    },
    panel5: {
        title: "⚠ Tata Power Solar",
        subtitle: "Reliable but lower performance",
        annualSavings: "₹ 21,000",
        lifetimeSavings: "₹ 5,25,000",
        color: "#d32f2f",
        crackProbability: 0.5,
        score: 6.0,
        scans: 210,
        resultImage: "/solar_carport.jpg",
        carbonOffset: "212 Tonnes",
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
            highlight: "Older Technology",
            description: "Tata Power Solar brings decades of trust and reliability, though their standard series often uses slightly older cell architectures."
        }
    },
    panel6: {
        title: "⚠ RenewSys Solar",
        subtitle: "Standard performance solar panel",
        annualSavings: "₹ 21,500",
        lifetimeSavings: "₹ 5,37,500",
        color: "#d32f2f",
        crackProbability: 0.5,
        score: 7.0,
        scans: 64,
        resultImage: "/solar_panel_result.jpg",
        carbonOffset: "220 Tonnes",
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
            highlight: "Less Advanced Tech",
            description: "RenewSys offers balanced performance for standard residential setups, providing stable generation across typical Indian conditions."
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
        this.initShadowBackButton();
    }

    private initShadowBackButton() {
        document.getElementById('shadow-back-btn')?.addEventListener('click', () => {
            this.switchView('landing-page');
        });
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
        const stepTime = 25; // Reduced from 50ms to 25ms (Total 2.5 seconds)

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
        const isDefective = data.crackProbability > 0.4;

        if (!skipSwitch) {
            this.switchView('solar-result-screen');
            document.querySelectorAll('.sidebar-item').forEach(li => li.classList.remove('active'));
            document.querySelector(`.sidebar-item[data-panel="${type}"]`)?.classList.add('active');
        }

        // Header
        const brandNameEl = document.getElementById('result-brand-name');
        const statusEl = document.getElementById('result-status-suffix');
        const iconEl = document.getElementById('result-caution-icon');

        if (brandNameEl) brandNameEl.innerText = data.specs.brand;
        if (statusEl) statusEl.innerText = isDefective ? 'Selected' : 'Best Choice';
        if (iconEl) {
            iconEl.className = `caution-icon ${isDefective ? 'status-warning' : 'status-success'}`;
            iconEl.innerText = ''; // Clear text, let CSS handle symbol
        }
        document.getElementById('solar-result-subtitle')!.innerText = data.subtitle;

        // Header Status Pill
        const headerPill = document.getElementById('header-status-pill')!;
        const headerPillText = document.getElementById('header-status-text')!;
        headerPill.className = `header-status-pill ${isDefective ? 'red-pill' : 'green-pill'}`;
        headerPillText.innerText = isDefective ? 'LOW EFFICIENCY' : 'HIGH PERFORMANCE';
        const headerPillIcon = headerPill.querySelector('.pill-icon') as HTMLElement;
        if (headerPillIcon) {
            headerPillIcon.className = `pill-icon ${isDefective ? 'status-warning' : 'status-success'}`;
            headerPillIcon.innerText = '';
        }

        // Score Card
        const scoreValEl = document.getElementById('performance-score-val')!;
        const scanCountEl = document.getElementById('scan-count-text')!;
        
        const score = data.score || (isDefective ? 6.2 : 9.4);
        scoreValEl.innerText = score.toFixed(1);
        
        // SVG Gauge Animation
        const fullOffset = 251.3;
        const offset = fullOffset - (score / 10) * fullOffset;
        const svgFill = document.getElementById('performance-gauge-fill-svg') as SVGPathElement | null;
        if (svgFill) {
            svgFill.style.strokeDashoffset = offset.toString();
            svgFill.style.setProperty('--gauge-color', (data.specs.brand === 'Adani Solar') ? '#16a34a' : '#D71920');
        }
        
        scanCountEl.innerText = `Based on ${data.scans || 120} Scans`;

        // Savings Card
        document.getElementById('result-lifetime-savings')!.innerText = data.lifetimeSavings;
        const carbonEl = document.getElementById('result-carbon-offset');
        if (carbonEl) carbonEl.innerText = data.carbonOffset;

        // Details Table
        const specs = data.specs;
        document.getElementById('spec-brand')!.innerText = specs.brand;
        document.getElementById('spec-tech')!.innerText = specs.cellTechnology;
        document.getElementById('spec-power')!.innerText = specs.powerRange;
        document.getElementById('spec-efficiency')!.innerText = specs.maxEfficiency;
        document.getElementById('spec-warranty-product')!.innerText = specs.productWarranty;
        document.getElementById('spec-warranty-perf')!.innerText = specs.performanceWarranty;
        document.getElementById('spec-temp')!.innerText = specs.tempCoefficient;
        document.getElementById('spec-bifacial')!.innerText = specs.bifaciality;
        document.getElementById('spec-voltage')!.innerText = specs.maxSystemVoltage;
        document.getElementById('spec-weight')!.innerText = specs.weight;


        // Populate Best For Tags
        const tagsContainer = document.getElementById('spec-best-for')!;
        tagsContainer.innerHTML = '';
        specs.bestFor.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.innerText = tag;
            tagsContainer.appendChild(span);
        });

        // Description
        document.getElementById('spec-description')!.innerText = specs.description;

        // Summary List (Right column)
        document.getElementById('sum-brand')!.innerText = specs.brand;
        document.getElementById('sum-tech')!.innerText = specs.cellTechnology;

        // Visual Card & Overlay
        const statusPill = document.getElementById('visual-status-pill')!;
        const statusText = document.getElementById('visual-status-text')!;
        
        statusPill.className = `visual-overlay-status ${isDefective ? 'red-overlay' : 'green-overlay'}`;
        statusText.innerText = isDefective ? 'LOW EFFICIENCY' : 'HIGH PERFORMANCE';
        const statusIcon = statusPill.querySelector('.status-icon') as HTMLElement;
        if (statusIcon) statusIcon.innerText = isDefective ? '⚠' : '✓';

        // Adani Upsell visibility (Hide if already Adani)
        const adaniCta = document.querySelector('.adani-upsell-card') as HTMLElement;
        if (adaniCta) {
            adaniCta.style.display = (type === 'panel1') ? 'none' : 'flex';
        }

        this.renderEL(data.crackProbability, data.resultImage);
    }

    private renderEL(_prob: number, panelImgUrl: string) {
        const canvas = document.getElementById('el-result-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d')!;
        const parent = canvas.parentElement!;
        const w = parent.clientWidth || 600;
        const h = parent.clientHeight || 450;
        canvas.width = w; canvas.height = h;

        const img = new Image();
        const fullUrl = panelImgUrl.startsWith('http') ? panelImgUrl : new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}${panelImgUrl}`, window.location.origin).href;
        img.src = fullUrl;

        img.onload = () => {
            // Center crop logic to fill the square container
            const imgAspect = img.width / img.height;
            const canvasAspect = w / h;
            let sx, sy, sw, sh;

            if (imgAspect > canvasAspect) {
                // Image is wider than container
                sh = img.height;
                sw = img.height * canvasAspect;
                sx = (img.width - sw) / 2;
                sy = 0;
            } else {
                // Image is taller than container
                sw = img.width;
                sh = img.width / canvasAspect;
                sx = 0;
                sy = (img.height - sh) / 2;
            }

            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);

            // Subtle professional overlay
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, w, h);
        };

        img.onerror = () => {
            ctx.fillStyle = '#050a14'; ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = '#fff'; ctx.fillText("Image Load Failed", 20, 20);
        };
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

        const updateCanvasSize = () => {
            const parent = this.graphCanvas!.parentElement!;
            if (parent.clientWidth > 0 && parent.clientHeight > 0) {
                this.graphCanvas!.width = parent.clientWidth;
                this.graphCanvas!.height = parent.clientHeight;
            }
        };

        // Resize once at start and on window resize
        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        const loop = () => {
            if (this.currentView !== 'shadow-analysis-view') {
                requestAnimationFrame(loop);
                return;
            }

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
        
        // Internal padding to keep all labels and data perfectly visible
        const padding = { top: 25, right: 40, bottom: 35, left: 60 }; // Aligned with CSS adjustments
        const graphW = w - padding.left - padding.right;
        const graphH = h - padding.top - padding.bottom;
        
        ctx.clearRect(0, 0, w, h);

        // Subtle Technical Grid (Mockup-Style)
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.lineWidth = 1;
        const gridLines = 7;

        for (let i = 0; i < gridLines; i++) {
            const y = padding.top + graphH - (i / (gridLines - 1)) * graphH;
            ctx.beginPath();
            ctx.setLineDash([5, 8]); 
            ctx.moveTo(padding.left, y);
            ctx.lineTo(padding.left + graphW, y);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        for (let i = 1; i < 6; i++) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.03)';
            ctx.moveTo(padding.left + (i / 6) * graphW, padding.top);
            ctx.lineTo(padding.left + (i / 6) * graphW, padding.top + graphH);
            ctx.stroke();
        }

        if (this.graphData.length < 2) return;

        // Area Gradient (Vibrant Red Glow)
        const areaGrad = ctx.createLinearGradient(0, padding.top, 0, padding.top + graphH);
        areaGrad.addColorStop(0, 'rgba(215, 25, 32, 0.15)');
        areaGrad.addColorStop(1, 'rgba(215, 25, 32, 0)');

        const step = graphW / (this.graphData.length - 1);

        // Drawing the smooth area fill
        ctx.beginPath();
        const startY = padding.top + graphH - (this.graphData[0] / 120) * graphH;
        ctx.moveTo(padding.left, startY);

        for (let i = 0; i < this.graphData.length - 1; i++) {
            const x1 = padding.left + i * step;
            const y1 = padding.top + graphH - (this.graphData[i] / 120) * graphH;
            const x2 = padding.left + (i + 1) * step;
            const y2 = padding.top + graphH - (this.graphData[i + 1] / 120) * graphH;
            
            const cpX = (x1 + x2) / 2;
            ctx.quadraticCurveTo(x1, y1, cpX, (y1 + y2) / 2);
        }
        
        const lastX = padding.left + graphW;
        const lastY = padding.top + graphH - (this.graphData[this.graphData.length - 1] / 120) * graphH;
        ctx.lineTo(lastX, lastY);
        ctx.lineTo(padding.left + graphW, padding.top + graphH);
        ctx.lineTo(padding.left, padding.top + graphH);
        ctx.closePath();
        ctx.fillStyle = areaGrad;
        ctx.fill();

        // Main Performance Line (Liquid Smoothing + Neon Glow)
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(215, 25, 32, 0.6)';
        ctx.strokeStyle = '#D71920';
        ctx.lineWidth = 6;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(padding.left, startY);

        for (let i = 0; i < this.graphData.length - 1; i++) {
            const x1 = padding.left + i * step;
            const y1 = padding.top + graphH - (this.graphData[i] / 120) * graphH;
            const x2 = padding.left + (i + 1) * step;
            const y2 = padding.top + graphH - (this.graphData[i + 1] / 120) * graphH;
            
            const cpX = (x1 + x2) / 2;
            ctx.quadraticCurveTo(x1, y1, cpX, (y1 + y2) / 2);
        }
        ctx.lineTo(lastX, lastY);
        ctx.stroke();

        // Reset effects
        ctx.shadowBlur = 0;

        // Live Liquid Pulse Dot
        const pulse = (Math.sin(Date.now() / 200) + 1) / 2;
        
        // Inner Dot 
        ctx.fillStyle = '#D71920';
        ctx.beginPath();
        ctx.arc(lastX, lastY, 7, 0, Math.PI * 2);
        ctx.fill();
        
        // White core for "Glass" look
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(lastX, lastY, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Outer Glow Rings
        ctx.strokeStyle = `rgba(215, 25, 32, ${0.4 * pulse})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(lastX, lastY, 7 + 12 * pulse, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `rgba(215, 25, 32, ${0.2 * (1 - pulse)})`;
        ctx.beginPath();
        ctx.arc(lastX, lastY, 7 + 25 * (1-pulse), 0, Math.PI * 2);
        ctx.stroke();

        // Floating Live Label
        const latestEff = this.graphData[this.graphData.length - 1];
        ctx.fillStyle = '#ef4444'; // Red label to match mockup
        ctx.font = '900 1rem var(--font-main)';
        ctx.textAlign = 'left';
        ctx.fillText(`${latestEff.toFixed(1)}%`, lastX + 15, lastY + 5);

        // High-Tech Sweep Scanline
        const scanX = padding.left + (Date.now() / 15) % graphW;
        const scanGrad = ctx.createLinearGradient(scanX - 50, 0, scanX + 50, 0);
        scanGrad.addColorStop(0, 'rgba(215, 25, 32, 0)');
        scanGrad.addColorStop(0.5, 'rgba(215, 25, 32, 0.05)');
        scanGrad.addColorStop(1, 'rgba(215, 25, 32, 0)');
        
        ctx.fillStyle = scanGrad;
        ctx.fillRect(scanX - 50, padding.top, 100, graphH);
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

