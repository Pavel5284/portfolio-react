import React, {useEffect, useRef, useState} from "react";
import {useLocalStorage} from "../../../../utils/useLocalStorage";
import {detectDarkMode} from "../../../../utils/detectDarkMode";



interface VantaBackgroundProps {
    children: React.ReactNode;
    effect?: "birds" | "waves" | "fog" | "net" | "halo" | "globe" | "rings";
    className?: string;
}

export const VantaBackground: React.FC<VantaBackgroundProps> = ({
                                                                    children,
                                                                    effect = "birds",
                                                                    className = "",
                                                                }) => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [darkMode] = useLocalStorage('darkMode', detectDarkMode())

    // Проверяем, что мы в браузере
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const initVanta = async () => {
            if (!isClient || !vantaRef.current) return;

            try {
                // Если эффект уже существует, обновляем его параметры вместо пересоздания
                if (vantaEffect) {
                    vantaEffect.setOptions({
                        backgroundColor: 0x202428,
                        backgroundAlpha: darkMode === 'dark' ? 1 : 0
                    });
                    return;
                }

                // Загружаем зависимости только в браузере
                const THREE = await import("three");

                let VANTA_EFFECT: any;
                switch (effect) {
                    case "birds":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.birds.min")).VantaBirds;
                        break;
                    case "waves":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.waves.min")).default;
                        break;
                    case "fog":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.fog.min")).default;
                        break;
                    case "net":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.net.min")).default;
                        break;
                    case "halo":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.halo.min")).default;
                        break;
                    case "globe":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.globe.min")).default;
                        break;
                    case "rings":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.rings.min")).default;
                        break;
                    default:
                        VANTA_EFFECT = (await import("vanta/dist/vanta.birds.min")).default;
                }

                const effectInstance = VANTA_EFFECT({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    //color: darkMode === 'dark' ? 0x171818 : 0x97a7a7,
                    color: 0x88ff00,
                    //baseColor: 0x1a59,
                    // backgroundColor: darkMode === 'dark' ? 0x171818 : 0x97a7a7,
                    backgroundColor: 0x202428,
                    backgroundAlpha: darkMode === 'dark' ? 1 : 0
                });

                setVantaEffect(effectInstance);
            } catch (error) {
                console.warn("Vanta.js failed to load:", error);
                // Fallback для случая ошибки загрузки
            }
        };

        initVanta();

        return () => {
            if (vantaEffect && typeof vantaEffect.destroy === "function") {
                vantaEffect.destroy();
                setVantaEffect(null);
            }
        };
    }, [isClient, vantaEffect, effect, darkMode]);

    if (!isClient) {
        // SSR fallback
        return (
            <div
                className={className}
                style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
                }}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            ref={vantaRef}
            className={className}
            style={{
                width: "100%",
                //minHeight: "100vh"
            }}
        >
            <div style={{
                position: "relative",
                zIndex: 10,
                width: "100%",
                //height: "100%"
            }}>
                {children}
            </div>
        </div>
    );
};


/*
interface VantaBackgroundProps {
    children: React.ReactNode;
    effect?: "birds" | "waves" | "fog" | "net" | "halo" | "globe" | "rings";
    className?: string;
}

export const VantaBackground: React.FC<VantaBackgroundProps> = ({
                                                                    children,
                                                                    effect = "birds",
                                                                    className = "",
                                                                }) => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [darkMode] = useLocalStorage('darkMode', detectDarkMode())

    // Проверяем, что мы в браузере
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const initVanta = async () => {
            if (!isClient || !vantaRef.current || vantaEffect) return;

            try {
                // Загружаем зависимости только в браузере
                const THREE = await import("three");

                let VANTA_EFFECT: any;
                switch (effect) {
                    case "birds":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.birds.min")).VantaBirds;
                        break;
                    case "waves":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.waves.min")).default;
                        break;
                    case "fog":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.fog.min")).default;
                        break;
                    case "net":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.net.min")).default;
                        break;
                    case "halo":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.halo.min")).default;
                        break;
                    case "globe":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.globe.min")).default;
                        break;
                    case "rings":
                        VANTA_EFFECT = (await import("vanta/dist/vanta.rings.min")).default;
                        break;
                    default:
                        VANTA_EFFECT = (await import("vanta/dist/vanta.birds.min")).default;
                }

                const effectInstance = VANTA_EFFECT({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    //color: darkMode === 'dark' ? 0x171818 : 0x97a7a7,
                    color: 0x88ff00,
                    //baseColor: 0x1a59,
                   // backgroundColor: darkMode === 'dark' ? 0x171818 : 0x97a7a7,
                    backgroundColor: 0x202428,
                    backgroundAlpha: darkMode === 'dark' ? 1 : 0
                });

                setVantaEffect(effectInstance);
            } catch (error) {
                console.warn("Vanta.js failed to load:", error);
                // Fallback для случая ошибки загрузки
            }
        };

        initVanta();

        return () => {
            if (vantaEffect && typeof vantaEffect.destroy === "function") {
                vantaEffect.destroy();
                setVantaEffect(null);
            }
        };
    }, [isClient, vantaEffect, effect, darkMode]);

    if (!isClient) {
        // SSR fallback
        return (
            <div
                className={className}
                style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
                }}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            ref={vantaRef}
            className={className}
            style={{
                width: "100%",
                //minHeight: "100vh"
            }}
        >
            <div style={{
                position: "relative",
                zIndex: 10,
                width: "100%",
                //height: "100%"
            }}>
                {children}
            </div>
        </div>
    );
};*/
