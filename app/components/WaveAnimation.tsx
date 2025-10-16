const WaveAnimation = () => {
  return (
    <div className="w-full overflow-hidden">
      <svg
        className="w-full h-40"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="30%" stopColor="#3B82F6" />
            <stop offset="70%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(30, 64, 175, 0.4)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0.4)" />
          </linearGradient>
        </defs>
        
        {/* Main surfable wave */}
        <path
          fill="url(#waveGradient)"
          d="M0,120 C150,40 300,160 450,80 C600,20 750,140 900,60 C1050,10 1150,120 1200,80 L1200,200 L0,200 Z"
        >
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="M0,120 C150,40 300,160 450,80 C600,20 750,140 900,60 C1050,10 1150,120 1200,80 L1200,200 L0,200 Z;
                    M0,140 C150,60 300,140 450,100 C600,40 750,120 900,80 C1050,30 1150,100 1200,100 L1200,200 L0,200 Z;
                    M0,100 C150,180 300,40 450,120 C600,180 750,60 900,140 C1050,180 1150,80 1200,120 L1200,200 L0,200 Z;
                    M0,120 C150,40 300,160 450,80 C600,20 750,140 900,60 C1050,10 1150,120 1200,80 L1200,200 L0,200 Z"
          />
        </path>
        
        {/* Secondary wave layer */}
        <path
          fill="url(#waveGradient2)"
          d="M0,160 C200,100 400,180 600,140 C800,80 1000,160 1200,120 L1200,200 L0,200 Z"
        >
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="M0,160 C200,100 400,180 600,140 C800,80 1000,160 1200,120 L1200,200 L0,200 Z;
                    M0,180 C200,120 400,160 600,120 C800,100 1000,140 1200,140 L1200,200 L0,200 Z;
                    M0,140 C200,180 400,100 600,160 C800,180 1000,100 1200,160 L1200,200 L0,200 Z;
                    M0,160 C200,100 400,180 600,140 C800,80 1000,160 1200,120 L1200,200 L0,200 Z"
          />
        </path>
        
        {/* Wave foam/whitecap effect */}
        <path
          fill="rgba(255, 255, 255, 0.6)"
          d="M0,140 C100,120 200,150 350,130 C500,110 650,145 800,125 C950,105 1100,135 1200,115 L1200,200 L0,200 Z"
        >
          <animate
            attributeName="d"
            dur="3s"
            repeatCount="indefinite"
            values="M0,140 C100,120 200,150 350,130 C500,110 650,145 800,125 C950,105 1100,135 1200,115 L1200,200 L0,200 Z;
                    M0,155 C100,135 200,165 350,145 C500,125 650,160 800,140 C950,120 1100,150 1200,130 L1200,200 L0,200 Z;
                    M0,125 C100,165 200,135 350,155 C500,175 650,130 800,150 C950,170 1100,120 1200,145 L1200,200 L0,200 Z;
                    M0,140 C100,120 200,150 350,130 C500,110 650,145 800,125 C950,105 1100,135 1200,115 L1200,200 L0,200 Z"
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveAnimation;