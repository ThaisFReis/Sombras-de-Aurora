import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fictionalMap } from "@/data/mapData";

type MapAppProps = {
  onClose: () => void;
  onSelectLocation?: (locationId: string) => void;
};

export const MapApp = ({onSelectLocation }: MapAppProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: string) => {
    setSelectedLocation(id);
    onSelectLocation?.(id);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.001;
    setZoom((prev) => Math.min(2.5, Math.max(0.6, prev + delta)));
  };

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    lastPos.current = { x: clientX, y: clientY };
  };

  const duringDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const clientY = "touches" in e ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
    const dx = clientX - lastPos.current.x;
    const dy = clientY - lastPos.current.y;
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    lastPos.current = { x: clientX, y: clientY };
  };

  const stopDrag = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", duringDrag);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", duringDrag);
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mousemove", duringDrag);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", duringDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [isDragging]);

  return (
      <div
        ref={containerRef}
        className="relative w-[80vw] h-[80vh] bg-zinc-800 overflow-hidden rounded-xl cursor-grab active:cursor-grabbing mx-auto"
        onWheel={handleWheel}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div
          className="absolute inset-0 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transformOrigin: "center center",
          }}
        >
          <img
            src="/src/assets/concepMap.png"
            alt="Mapa de Aurora"
            className="w-full h-full object-cover pointer-events-none"
          />

          {fictionalMap.locations.map((loc) => {
            const isSelected = loc.id === selectedLocation;
            return (
              <div
                key={loc.id}
                style={{ top: loc.position.y, left: loc.position.x }}
                className="absolute flex items-center justify-center"
              >
                {loc.unlocked && (
                  <span className="absolute inline-flex h-6 w-6 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                )}
                <button
                  onClick={() => handleSelect(loc.id)}
                  disabled={!loc.unlocked}
                  title={loc.name}
                  className={`relative z-10 text-2xl transition-all duration-300 rounded-full ${
                    loc.unlocked
                      ? "text-green-400 hover:text-white hover:scale-110"
                      : "text-zinc-500 cursor-not-allowed"
                  } ${isSelected ? "ring-2 ring-green-300" : ""}`}
                >
                  <MapPin />
                </button>
              </div>
            );
          })}
        </div>

        {selectedLocation && (
          <div className="absolute bottom-4 left-4 p-4 bg-zinc-900/90 border border-zinc-700 rounded-xl max-w-xs shadow-md animate-fade-in">
            <h3 className="text-white text-lg font-bold">
              {fictionalMap.locations.find((l) => l.id === selectedLocation)?.name}
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              {fictionalMap.locations.find((l) => l.id === selectedLocation)?.description}
            </p>
          </div>
        )}
      </div>
  );
};
