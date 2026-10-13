import os

OUT_DIR = "d:/ngodingin/portfolio-ku/design/logos"
os.makedirs(OUT_DIR, exist_ok=True)

# ---------------------------------------------------------------------------
# CONCEPT A: ARCHITECTURAL DW MONOGRAM
# ---------------------------------------------------------------------------
concept_a_symbol = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <title>Architectural DW Monogram</title>
  <!-- Outer D Stem (Left Vertical Column) -->
  <path d="M 44 48 L 84 48 L 84 208 L 44 208 Z" fill="#02241A" />
  
  <!-- Upper D Arch -->
  <path d="M 84 48 L 152 48 C 188 48 212 72 212 108 C 212 128 202 144 186 156 L 154 124 C 160 118 164 112 164 104 C 164 88 152 80 136 80 L 84 80 Z" fill="#02241A" />
  
  <!-- Lower D Arch returning to base -->
  <path d="M 84 176 L 136 176 C 148 176 158 172 166 164 L 194 192 C 178 204 158 208 136 208 L 84 208 Z" fill="#02241A" />
  
  <!-- Interlocking W Center (Terracotta Accent) -->
  <path d="M 98 116 L 126 116 L 148 176 L 126 176 Z" fill="#AC3407" />
  <path d="M 148 176 L 170 116 L 196 116 L 168 188 L 148 188 Z" fill="#AC3407" />
  <rect x="98" y="148" width="22" height="28" fill="#AC3407" />
</svg>'''

concept_a_lockup = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 220" width="760" height="220">
  <title>Architectural DW Lockup</title>
  <style>
    .brand-title { font-family: 'Oswald', 'Arial Black', sans-serif; font-size: 58px; font-weight: 700; fill: #02241A; letter-spacing: 3px; text-transform: uppercase; }
    .brand-sub { font-family: 'Space Mono', monospace; font-size: 15px; font-weight: 700; fill: #AC3407; letter-spacing: 4px; text-transform: uppercase; }
    .stamp { font-family: 'Oswald', sans-serif; font-size: 11px; fill: #1a3a2f; letter-spacing: 2px; }
  </style>
  <!-- Nested Symbol (scaled to 150x150, centered vertically at y=35) -->
  <g transform="translate(30, 35) scale(0.586)">
    <path d="M 44 48 L 84 48 L 84 208 L 44 208 Z" fill="#02241A" />
    <path d="M 84 48 L 152 48 C 188 48 212 72 212 108 C 212 128 202 144 186 156 L 154 124 C 160 118 164 112 164 104 C 164 88 152 80 136 80 L 84 80 Z" fill="#02241A" />
    <path d="M 84 176 L 136 176 C 148 176 158 172 166 164 L 194 192 C 178 204 158 208 136 208 L 84 208 Z" fill="#02241A" />
    <path d="M 98 116 L 126 116 L 148 176 L 126 176 Z" fill="#AC3407" />
    <path d="M 148 176 L 170 116 L 196 116 L 168 188 L 148 188 Z" fill="#AC3407" />
    <rect x="98" y="148" width="22" height="28" fill="#AC3407" />
  </g>
  <!-- Divider Line -->
  <line x1="200" y1="45" x2="200" y2="175" stroke="#1A3A2F" stroke-width="2" opacity="0.3" />
  <!-- Text Lockup -->
  <text x="235" y="108" class="brand-title">DENTO WAHYU</text>
  <text x="238" y="148" class="brand-sub">DESIGN-DRIVEN FULL-STACK</text>
  <rect x="238" y="162" width="60" height="16" rx="2" fill="#EBE8DF" />
  <text x="246" y="174" class="stamp">EST. 2024</text>
</svg>'''

# ---------------------------------------------------------------------------
# CONCEPT B: THE ARTISAN TERMINAL (DIAMOND SEAL)
# ---------------------------------------------------------------------------
concept_b_symbol = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <title>Artisan Terminal Diamond Emblem</title>
  <!-- Outer Chamfered Diamond Badge (Vintage Stamp Contour) -->
  <path d="M 128 36 L 204 112 C 214 122 214 134 204 144 L 144 204 C 134 214 122 214 112 204 L 52 144 C 42 134 42 122 52 112 L 112 52 C 122 42 124 36 128 36 Z" 
        fill="#02241A" />
  
  <!-- Inner Diamond Cutout (creates border ring) -->
  <path d="M 128 56 L 192 120 C 196 124 196 132 192 136 L 136 192 C 132 196 124 196 120 192 L 64 136 C 60 132 60 124 64 120 L 120 64 C 124 60 126 56 128 56 Z" 
        fill="#FCF9F0" />

  <!-- Code Prompt Chevron ( > ) -->
  <path d="M 88 94 L 122 128 L 88 162 L 102 176 L 150 128 L 102 80 Z" fill="#AC3407" />

  <!-- Terminal Cursor Underline Bar ( _ ) -->
  <rect x="136" y="156" width="36" height="14" rx="2" fill="#02241A" />

  <!-- Subtle Precision Spark at Top Right -->
  <polygon points="152,86 156,76 160,86 170,90 160,94 156,104 152,94 142,90" fill="#AC3407" />
</svg>'''

concept_b_lockup = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 220" width="760" height="220">
  <title>Artisan Terminal Lockup</title>
  <style>
    .brand-title { font-family: 'Oswald', 'Arial Black', sans-serif; font-size: 58px; font-weight: 700; fill: #02241A; letter-spacing: 3px; text-transform: uppercase; }
    .brand-sub { font-family: 'Space Mono', monospace; font-size: 15px; font-weight: 700; fill: #AC3407; letter-spacing: 4px; text-transform: uppercase; }
    .stamp { font-family: 'Oswald', sans-serif; font-size: 11px; fill: #1a3a2f; letter-spacing: 2px; }
  </style>
  <g transform="translate(30, 35) scale(0.586)">
    <path d="M 128 36 L 204 112 C 214 122 214 134 204 144 L 144 204 C 134 214 122 214 112 204 L 52 144 C 42 134 42 122 52 112 L 112 52 C 122 42 124 36 128 36 Z" fill="#02241A" />
    <path d="M 128 56 L 192 120 C 196 124 196 132 192 136 L 136 192 C 132 196 124 196 120 192 L 64 136 C 60 132 60 124 64 120 L 120 64 C 124 60 126 56 128 56 Z" fill="#FCF9F0" />
    <path d="M 88 94 L 122 128 L 88 162 L 102 176 L 150 128 L 102 80 Z" fill="#AC3407" />
    <rect x="136" y="156" width="36" height="14" rx="2" fill="#02241A" />
    <polygon points="152,86 156,76 160,86 170,90 160,94 156,104 152,94 142,90" fill="#AC3407" />
  </g>
  <line x1="200" y1="45" x2="200" y2="175" stroke="#1A3A2F" stroke-width="2" opacity="0.3" />
  <text x="235" y="108" class="brand-title">DENTO WAHYU</text>
  <text x="238" y="148" class="brand-sub">TERMINAL • DESIGN CRAFT</text>
  <rect x="238" y="162" width="70" height="16" rx="2" fill="#EBE8DF" />
  <text x="246" y="174" class="stamp">CODE • UI</text>
</svg>'''

# ---------------------------------------------------------------------------
# CONCEPT C: THE FLOW PULSE (CONTINUOUS LOOP 'd')
# ---------------------------------------------------------------------------
concept_c_symbol = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <title>The Flow Pulse Mark</title>
  <!-- Right Ascender Pillar with 45-degree clean chamfer -->
  <path d="M 152 40 L 192 80 L 192 216 L 152 216 Z" fill="#02241A" />

  <!-- Circular Outer Loop of 'd' (EvenOdd Counter) -->
  <path fill-rule="evenodd" d="M 120 96 C 160 96 176 120 176 156 C 176 192 152 216 120 216 C 80 216 52 188 52 156 C 52 124 80 96 120 96 Z M 120 134 C 104 134 92 144 92 156 C 92 168 104 178 120 178 C 136 178 146 168 146 156 C 146 144 136 134 120 134 Z" fill="#02241A" />

  <!-- Signal Pulse Crest at 90-degree alignment -->
  <path d="M 88 80 C 112 68 136 68 160 80 L 148 106 C 132 98 116 98 100 106 Z" fill="#AC3407" />
  
  <!-- Tactile Telemetry Dot Accent -->
  <circle cx="72" cy="72" r="12" fill="#AC3407" />
</svg>'''

concept_c_lockup = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 220" width="760" height="220">
  <title>The Flow Pulse Lockup</title>
  <style>
    .brand-title { font-family: 'Oswald', 'Arial Black', sans-serif; font-size: 58px; font-weight: 700; fill: #02241A; letter-spacing: 3px; text-transform: uppercase; }
    .brand-sub { font-family: 'Space Mono', monospace; font-size: 15px; font-weight: 700; fill: #AC3407; letter-spacing: 4px; text-transform: uppercase; }
    .stamp { font-family: 'Oswald', sans-serif; font-size: 11px; fill: #1a3a2f; letter-spacing: 2px; }
  </style>
  <g transform="translate(30, 35) scale(0.586)">
    <path d="M 152 40 L 192 80 L 192 216 L 152 216 Z" fill="#02241A" />
    <path fill-rule="evenodd" d="M 120 96 C 160 96 176 120 176 156 C 176 192 152 216 120 216 C 80 216 52 188 52 156 C 52 124 80 96 120 96 Z M 120 134 C 104 134 92 144 92 156 C 92 168 104 178 120 178 C 136 178 146 168 146 156 C 146 144 136 134 120 134 Z" fill="#02241A" />
    <path d="M 88 80 C 112 68 136 68 160 80 L 148 106 C 132 98 116 98 100 106 Z" fill="#AC3407" />
    <circle cx="72" cy="72" r="12" fill="#AC3407" />
  </g>
  <line x1="200" y1="45" x2="200" y2="175" stroke="#1A3A2F" stroke-width="2" opacity="0.3" />
  <text x="235" y="108" class="brand-title">DENTO WAHYU</text>
  <text x="238" y="148" class="brand-sub">SOFTWARE ARCHITECTURE</text>
  <rect x="238" y="162" width="78" height="16" rx="2" fill="#EBE8DF" />
  <text x="246" y="174" class="stamp">FLOW • SCALE</text>
</svg>'''

files = {
    "concept-a-symbol.svg": concept_a_symbol,
    "concept-a-lockup.svg": concept_a_lockup,
    "concept-b-symbol.svg": concept_b_symbol,
    "concept-b-lockup.svg": concept_b_lockup,
    "concept-c-symbol.svg": concept_c_symbol,
    "concept-c-lockup.svg": concept_c_lockup,
}

for name, content in files.items():
    with open(f"{OUT_DIR}/{name}", "w", encoding="utf-8") as f:
        f.write(content)

print("Generated all 6 SVG files!")
