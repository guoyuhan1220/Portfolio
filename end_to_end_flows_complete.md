# End-to-End Flows by Artifact Type
## Complete User Journeys with Design Rationale

---

## Document (Word, PDF, Reports, PRDs)

### Tagline
**"Fast to first word, less surprise at export"**

### Design Rationale
Users should start writing immediately without style decisions. Light styling provides context without distraction. Full styling options at export when content is solid.

### Complete Flow

```
1. INTENT CAPTURE
   ↓
   User: "Create a PRD for mobile checkout feature"
   System: Analyzes intent → PRD, mobile, checkout
   
2. RECOMMEND TEMPLATE
   ↓
   AI suggests:
   • Modern PRD (85 PMs use this) ⭐
   • Technical PRD
   • Lean PRD
   
   User selects: Modern PRD
   
3. GENERATE ARTIFACT
   ↓
   System:
   • Populates template structure
   • Asks key questions:
     - "What problem does this solve?"
     - "Who are the users?"
   • Generates draft content
   
4. APPLY SUBTLE BRAND
   ↓
   Auto-applied (no user action):
   ✓ Company logo (top right)
   ✓ Brand colors (headers only, subtle)
   ✓ Clean fonts (Helvetica)
   ✓ Standard margins
   
   Result: Professional but minimal styling
   
5. INLINE EDIT & REFINE
   ↓
   User focuses on content:
   • Edit text inline OR
   • Chat with AI to refine
   • Add sections, data, images
   • See light styled preview
   
   [Style: Default ▼] ← Available but subtle
   
   Time spent: 80% here
   
6. PREVIEW & EXPORT
   ↓
   User clicks [Preview & Export]
   
   Shows:
   ┌─────────────────────────────────────┐
   │ Current style: Company Default ✓    │
   │ [FULL PREVIEW - exactly what exports]│
   │                                     │
   │ [Continue with this style] ← 80%   │
   │                                     │
   │ Or try different:                   │
   │ [Executive] [Technical] [Minimal]   │
   │                                     │
   │ Format: ○ Word  ○ PDF              │
   │ [Export]                            │
   └─────────────────────────────────────┘
   
   Result: Download file
```

### Key Moments

| Step | User Focus | System Does | Time |
|------|-----------|-------------|------|
| Intent | Describe goal | Parse and understand | 10s |
| Template | Choose structure | Recommend best matches | 15s |
| Generate | Answer questions | Create draft | 20s |
| Brand | Nothing (automatic) | Apply company brand | 0s |
| Edit | Write content | Light preview, AI help | 30min |
| Export | Choose final look | Apply full styling | 30s |

**Total: ~35 minutes** (vs. 4-6 hours traditional)

---

## Presentation (PowerPoint, Slides)

### Tagline
**"Visual style and layout first, content draft next"**

### Design Rationale
Slide layout determines content amount. Users must see styled slides to write appropriate text. Style cannot be separated from content creation.

### Complete Flow

```
1. INTENT CAPTURE
   ↓
   User: "Create a presentation for Q1 marketing results"
   System: Analyzes intent → Presentation, Q1 results, marketing
   
2. RECOMMEND TEMPLATE + STYLE (COMBINED)
   ↓
   AI suggests:
   
   ┌─────────────────────────────────────┐
   │ Executive Summary ⭐                │
   │ [Preview: minimal slides]           │
   │ • 8 slides, data-focused            │
   │ • Large numbers, clean charts       │
   │ Best for: Leadership updates        │
   └─────────────────────────────────────┘
   
   ┌─────────────────────────────────────┐
   │ Marketing Bold                      │
   │ [Preview: colorful slides]          │
   │ • 12 slides, visual-heavy           │
   │ • Vibrant, storytelling             │
   │ Best for: Campaign reviews          │
   └─────────────────────────────────────┘
   
   User selects: Executive Summary
   
   Why now? Layout affects content.
   
3. GENERATE ARTIFACT
   ↓
   System:
   • Creates 8-slide structure
   • Asks key questions:
     - "What were key metrics?"
     - "Which channels performed best?"
   • Generates slide content
   
4. APPLY FULL BRAND & STYLE
   ↓
   Auto-applied (complete styling):
   ✓ Company logo (on master slide)
   ✓ Brand colors (full palette)
   ✓ Executive style layout (minimal text)
   ✓ Large numbers, clean charts
   
   Result: Fully styled slides
   
5. EDIT WITH FULL PREVIEW
   ↓
   User sees styled slides:
   
   [Thumbnails] | [Current Slide - Fully Styled]
   
   • Edit text on slides
   • Add/remove slides
   • Insert charts
   • Reorder slides
   
   User writes to fit the layout.
   
   Time spent: 60% here
   
6. EXPORT WITH MINOR REFINEMENT
   ↓
   User clicks [Export]
   
   Shows:
   ┌─────────────────────────────────────┐
   │ Current style: Executive Summary ✓  │
   │ [SLIDE PREVIEW]                     │
   │                                     │
   │ [Continue with this style] ← 70%   │
   │                                     │
   │ ⚠️ Changing style may need edits   │
   │                                     │
   │ Try anyway:                         │
   │ [Marketing] [Corporate] [Creative]  │
   │                                     │
   │ Format: ○ PPTX  ○ PDF              │
   │ ☑ Animations  ☑ Speaker notes      │
   │ [Export]                            │
   └─────────────────────────────────────┘
   
   Result: Download file
```

### Key Moments

| Step | User Focus | System Does | Time |
|------|-----------|-------------|------|
| Intent | Describe goal | Parse and understand | 10s |
| Template + Style | Choose visual approach | Show combined options | 30s |
| Generate | Answer questions | Create slides | 25s |
| Brand | Nothing (automatic) | Apply full styling | 0s |
| Edit | Write slide content | Show full preview | 45min |
| Export | Confirm or tweak | Minor adjustments | 20s |

**Total: ~50 minutes** (vs. 3-4 hours traditional)

---

## Spreadsheet (Excel, Google Sheets)

### Tagline
**"Function over form, data is the focus"**

### Design Rationale
Spreadsheets are tools, not presentations. Styling is irrelevant. Users focus 100% on data and formulas. Export is about format, not appearance.

### Complete Flow

```
1. INTENT CAPTURE
   ↓
   User: "Create a budget tracker for Q1 marketing"
   System: Analyzes intent → Budget tracker, Q1, marketing
   
2. RECOMMEND TEMPLATE (STRUCTURE ONLY)
   ↓
   AI suggests:
   • Marketing Budget Tracker ⭐
     Columns: Channel, Budget, Actual, Variance, %
     Includes: Auto-formulas, charts
   • Detailed Expense Tracker
   • Simple Budget Grid
   
   User selects: Marketing Budget Tracker
   
3. GENERATE ARTIFACT
   ↓
   System:
   • Creates columns
   • Asks key questions:
     - "What are your main channels?"
     - "Total budget?"
   • Sets up formulas
   • Generates rows
   
4. APPLY MINIMAL FUNCTIONAL STYLING
   ↓
   Auto-applied (functional only):
   ✓ Header row (light background)
   ✓ Grid borders
   ✓ Number/currency formatting
   ✓ Conditional formatting (if applicable)
   
   Result: Clean, readable grid
   
5. EDIT DATA (NO SEPARATE PREVIEW)
   ↓
   User works with data:
   
   | Channel | Budget  | Actual | Variance | %   |
   |---------|---------|--------|----------|-----|
   | Social  | $30,000 | $28,500| $1,500   | 95% |
   | Email   | $20,000 | [edit] | [calc]   |[calc]|
   
   • Enter data
   • Adjust formulas
   • Add rows/columns
   • Create charts
   
   What you see = What you get
   
   Time spent: 90% here
   
6. EXPORT (FORMAT ONLY)
   ↓
   User clicks [Export]
   
   Shows:
   ┌─────────────────────────────────────┐
   │ Export Spreadsheet                  │
   │                                     │
   │ NO style selection                  │
   │                                     │
   │ Format:                             │
   │ ○ Excel (.xlsx) - With formulas    │
   │ ○ CSV (.csv) - Data only           │
   │ ○ PDF (.pdf) - Snapshot            │
   │                                     │
   │ Options:                            │
   │ ☑ Include formulas                  │
   │ ☑ Include charts                    │
   │ ☑ Freeze header row                 │
   │                                     │
   │ [Export]                            │
   └─────────────────────────────────────┘
   
   Result: Download file
```

### Key Moments

| Step | User Focus | System Does | Time |
|------|-----------|-------------|------|
| Intent | Describe goal | Parse and understand | 10s |
| Template | Choose structure | Recommend grid layout | 15s |
| Generate | Answer questions | Create columns/formulas | 15s |
| Styling | Nothing (automatic) | Minimal functional style | 0s |
| Edit | Enter data | Calculate, visualize | 25min |
| Export | Choose format | Convert to file type | 10s |

**Total: ~30 minutes** (vs. 2-3 hours traditional)

---

## Visual (Infographic, Diagram, Social Graphic)

### Tagline
**"Style IS content, choose visual first"**

### Design Rationale
Visuals cannot exist without style. A timeline infographic is fundamentally different from a technical diagram. Style must be chosen before content to define what information fits.

### Complete Flow

```
1. INTENT CAPTURE
   ↓
   User: "Create an infographic for product launch timeline"
   System: Analyzes intent → Infographic, timeline, product launch
   
2. RECOMMEND STYLE (REQUIRED FIRST)
   ↓
   AI suggests visual styles:
   
   ┌─────────────────────────────────────┐
   │ Modern Timeline ⭐                  │
   │ [Visual Preview]                    │
   │ • Horizontal, clean                 │
   │ • Icons + short text                │
   │ • Professional                      │
   │ Best for: Executive, professional   │
   └─────────────────────────────────────┘
   
   ┌─────────────────────────────────────┐
   │ Bold & Colorful                     │
   │ [Visual Preview]                    │
   │ • Vibrant, playful                  │
   │ • Large text, illustrations         │
   │ Best for: Social media, marketing   │
   └─────────────────────────────────────┘
   
   User MUST select: Modern Timeline
   
   Can't skip - style determines structure.
   
3. INPUT STRUCTURED DATA
   ↓
   System prompts for content:
   
   Event 1:
   Date: [Jan 15, 2026]
   Title: [Alpha Testing]
   Icon: [🧪 Test tube ▼]
   
   Event 2:
   Date: [Feb 1, 2026]
   Title: [Beta Launch]
   Icon: [👥 Users ▼]
   
   [+ Add event]
   
4. GENERATE WITH FULL STYLING
   ↓
   System:
   • Applies chosen visual style
   • Places elements in design
   • Uses brand colors
   • Creates complete visual
   
   Result: Fully designed infographic
   
5. EDIT + PREVIEW (COMBINED)
   ↓
   User sees and edits design:
   
   [Full Visual Preview]
   
   • Edit text (must fit design)
   • Change icons
   • Adjust colors (within brand)
   • Move elements
   • Zoom to inspect
   
   Edit and preview are the same.
   
   Time spent: 70% here
   
6. EXPORT (TECHNICAL SPECS)
   ↓
   User clicks [Export]
   
   Shows:
   ┌─────────────────────────────────────┐
   │ Export Visual                       │
   │                                     │
   │ Style locked: Modern Timeline       │
   │ (Changing requires redesign)        │
   │                                     │
   │ Where will you use this?            │
   │ ○ Social Media (1080×1080 PNG)     │
   │ ○ Website (1920×1080 PNG)          │
   │ ○ Print Poster (300 DPI PDF)       │
   │ ○ Custom size                       │
   │                                     │
   │ Format: ○ PNG  ○ JPG  ○ SVG        │
   │ Background: ○ Transparent  ○ White │
   │                                     │
   │ [Export]                            │
   └─────────────────────────────────────┘
   
   Result: Download file
```

### Key Moments

| Step | User Focus | System Does | Time |
|------|-----------|-------------|------|
| Intent | Describe goal | Parse and understand | 10s |
| Style | Choose visual approach | Show style options | 45s |
| Input | Provide data | Structure for design | 2min |
| Generate | Nothing (automatic) | Create full design | 10s |
| Edit | Refine visual | Live preview | 20min |
| Export | Choose specs | Render at resolution | 15s |

**Total: ~25 minutes** (vs. 2-4 hours traditional)

---

## Audio (Podcast Script, Voiceover)

### Tagline
**"Script first, voice later, content is king"**

### Design Rationale
Audio has no visual component. Users focus on script content. Voice selection happens when ready to generate audio, not during writing.

### Complete Flow

```
1. INTENT CAPTURE
   ↓
   User: "Create a podcast script about our product launch"
   System: Analyzes intent → Podcast, product launch
   
2. RECOMMEND TEMPLATE (SCRIPT STRUCTURE)
   ↓
   AI suggests:
   • Interview Format ⭐
     Intro + Q&A + Wrap-up
     ~12 minutes
   • Narrative Story
     Single narrator
   • Panel Discussion
   
   User selects: Interview Format
   
3. GENERATE SCRIPT
   ↓
   System:
   • Creates script structure
   • Asks key questions:
     - "What's the product?"
     - "Key benefits?"
     - "Who's the guest?"
   • Generates dialogue
   • Adds production cues
   
4. NO VISUAL STYLING (IT'S AUDIO)
   ↓
   Script displayed in clean format:
   
   [INTRO MUSIC - 5 seconds]
   
   HOST: Welcome back to...
   
   [PAUSE - 2 seconds]
   
   GUEST: Thanks for having me!
   
   No styling needed.
   
5. EDIT SCRIPT
   ↓
   User refines content:
   
   [Script] [Audio Preview (30-sec sample)]
   
   • Edit dialogue
   • Add production cues
   • Adjust timing
   • Preview with AI voice
   
   Focus: What they'll SAY
   
   Time spent: 85% here
   
6. EXPORT WITH VOICE SELECTION
   ↓
   User clicks [Export]
   
   Shows:
   ┌─────────────────────────────────────┐
   │ Export Podcast                      │
   │                                     │
   │ What to export:                     │
   │ ☑ Script document (.docx)           │
   │ ☑ Audio file (.mp3)                 │
   │ ○ Transcript (.srt)                 │
   │                                     │
   │ Voice Selection (for audio):        │
   │ Host (Sarah):                       │
   │ [Professional Female ▼] 🔊         │
   │                                     │
   │ Guest (Jane):                       │
   │ [Friendly Female ▼] 🔊             │
   │                                     │
   │ Speed: [1.0x ▼]                     │
   │ Quality: ○ Standard  ● High        │
   │                                     │
   │ ⏱️ Generation time: ~2 minutes      │
   │                                     │
   │ [Export]                            │
   └─────────────────────────────────────┘
   
   Result: Download script + audio
```

### Key Moments

| Step | User Focus | System Does | Time |
|------|-----------|-------------|------|
| Intent | Describe goal | Parse and understand | 10s |
| Template | Choose format | Show script structures | 20s |
| Generate | Answer questions | Create script draft | 20s |
| Styling | N/A (audio) | Clean text display | 0s |
| Edit | Write dialogue | Show duration estimate | 30min |
| Export | Choose voice | Generate audio | 2min |

**Total: ~35 minutes** (vs. 3-5 hours traditional)

---

## Quick Comparison: All Artifacts

### Flow Patterns

```
DOCUMENT
Intent → Template → Generate → Light Style → Edit → Preview + Export Style
[Fast to first word, refine look later]

PRESENTATION  
Intent → Template + Style → Generate → Full Style → Edit → Export Tweak
[Visual style first, content fits layout]

SPREADSHEET
Intent → Template → Generate → Functional → Edit → Export Format
[Function over form, no styling]

VISUAL
Intent → Style Required → Input Data → Full Design → Edit+Preview → Export Specs
[Style IS content, choose first]

AUDIO
Intent → Template → Generate Script → No Visual → Edit → Export Voice
[Script first, voice later]
```

### Style Timing Matrix

| Artifact | When Style Applied | Why |
|----------|-------------------|-----|
| **Document** | Light during edit, Full at export | Focus on content first |
| **Presentation** | Full during edit | Layout affects content |
| **Spreadsheet** | Minimal (functional only) | Style irrelevant |
| **Visual** | Required before content | Style defines structure |
| **Audio** | N/A (voice at export) | No visual component |

### Time Distribution

| Artifact | Template | Generate | Edit | Export | Total |
|----------|----------|----------|------|--------|-------|
| **Document** | 15s | 20s | 30m | 30s | ~35m |
| **Presentation** | 30s | 25s | 45m | 20s | ~50m |
| **Spreadsheet** | 15s | 15s | 25m | 10s | ~30m |
| **Visual** | 45s | 2m | 20m | 15s | ~25m |
| **Audio** | 20s | 20s | 30m | 2m | ~35m |

### User Focus by Phase

```
DOCUMENT:     10% Template | 10% Generate | 75% Edit | 5% Export
PRESENTATION: 15% Template | 10% Generate | 65% Edit | 10% Export
SPREADSHEET:  5% Template  | 5% Generate  | 85% Edit | 5% Export
VISUAL:       20% Style    | 10% Input    | 60% Edit | 10% Export
AUDIO:        5% Template  | 5% Generate  | 80% Edit | 10% Export
```

---

## Design Principles Summary

### 1. Documents & Audio
**"Content first, style when ready"**
- Fast to start writing
- Light styling doesn't distract
- Full options at export
- Less surprise, more control

### 2. Presentations
**"Layout matters, style early"**
- Style affects content amount
- Must see layout while writing
- Full styling during creation
- Minor refinement at export

### 3. Spreadsheets
**"Function only, no styling"**
- Data is the focus
- Styling is noise
- Export is format choice
- Keep it simple

### 4. Visuals
**"Style defines content"**
- Choose style before creating
- Can't separate style from content
- Edit and preview combined
- Export focuses on technical specs

### 5. Audio
**"Script focus, voice later"**
- Write without visual distraction
- Voice selection at generation
- Can export script without audio
- Content is king

---

## Key Takeaways

✅ **Different artifacts = Different flows**  
Each respects the unique relationship between content and style

✅ **Style timing is strategic**  
Not random - based on how content and style interact

✅ **Edit ≠ Preview for most types**  
Separation helps users focus, except when visual feedback is essential

✅ **Export is a design moment**  
Not just technical - where final refinement happens

✅ **Time distribution reflects priorities**  
Most time spent where it matters most (editing content)

✅ **Taglines guide the approach**  
Each summarizes the core philosophy for that artifact type

---

## Implementation Checklist

### Documents
- [ ] Intent capture with NLP
- [ ] Template recommendation engine
- [ ] Light brand auto-application
- [ ] Inline editor OR AI chat
- [ ] Preview mode (high-fidelity)
- [ ] Export with style options

### Presentations
- [ ] Combined template + style selector
- [ ] Full styling during edit
- [ ] Slide thumbnail navigation
- [ ] Presentation mode preview
- [ ] Export with minor refinement

### Spreadsheets
- [ ] Structure-only templates
- [ ] Minimal functional styling
- [ ] Formula auto-generation
- [ ] No separate preview mode
- [ ] Format-focused export

### Visuals
- [ ] Mandatory style selection
- [ ] Structured data input
- [ ] Combined edit + preview
- [ ] Visual editing tools
- [ ] Use-case driven export

### Audio
- [ ] Script structure templates
- [ ] Clean text editor
- [ ] 30-second preview sample
- [ ] Voice library
- [ ] Audio generation engine

---

**Remember:** The flow should match the artifact's relationship with style. Force users to think about style only when absolutely necessary for creating good content.
