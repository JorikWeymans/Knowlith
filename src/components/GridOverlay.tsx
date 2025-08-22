// components/GridOverlay.tsx
"use client";
import { useEffect } from "react";

export default function GridOverlay({ show = true }) {
    useEffect(() => {
        if (!show) return;

        const host = document.createElement("div");
        host.style.position = "fixed";
        host.style.inset = "0";
        host.style.zIndex = "2147483647";
        host.style.pointerEvents = "none";
        host.style.contain = "paint";
        document.body.appendChild(host);

        const shadow = host.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = `
      :host { all: initial; }

      .overlay {
        position: fixed;
        top: 0;
        left: 50%;
        padding:20px;
        transform: translateX(-50%);
        width: var(--width-app);
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        column-gap: var(--gutter-app);
        box-sizing: border-box;
        pointer-events: none;
        z-index: 2147483647;
      }

      .col {
        height: 100%;
        background: var(--col-color);
      }

      @media (prefers-color-scheme: dark) {
        .col { background: rgba(0, 200, 255, 0.12); }
      }
    `;

        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.style.setProperty("--col-color", "rgba(255,0,0,0.12)");

        for (let i = 0; i < 15; i++) {
            const col = document.createElement("div");
            col.className = "col";
            overlay.appendChild(col);
        }

        shadow.append(style, overlay);

        return () => {
            host.remove();
        };
    }, [show]);

    return null;
}
