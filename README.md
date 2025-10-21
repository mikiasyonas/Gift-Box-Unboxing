# nm

# **Gift Unboxing Animation**

A beautiful, accessible gift box unboxing experience built with React and TypeScript. Features smooth animations, confetti celebration.

## **🚀 Quick Start**

### **Prerequisites**

- Node.js 18+
- npm or yarn

### **Installation**

1. **Clone the repository**

bash

```
git clone https://github.com/mikiasyonas/Gift-Box-Unboxing
cd gift-unboxing-animation
```

1. **Install dependencies**

bash

```
npm install
```

1. **Run the development server**

bash

```
npm run dev
```

1. **Open your browser**
    
    Navigate to `http://localhost:3000` to see the application.
    

### **Running Tests**

bash

```
npm test
```

### **Building for Production**

bash

```
npm run build
```

## **Implementation Notes**

### **Architecture & Design Decisions**

**Technology Stack:**

- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **CSS Modules** for scoped styling
- **React Confetti** for celebration effects

**Component Structure:**

text

```
src/
├── components/
│   └── GiftBox/
│       ├── GiftBox.tsx      # Main component
│       └── GiftBox.test.tsx # Unit tests
├── App.tsx
└── main.tsx
```

**Key Design Decisions:**

1. **Custom CSS Animations**: Used over animation libraries for better performance and control
2. **Accessibility First**: Built with screen readers and keyboard navigation in mind
3. **Mobile-First Responsive**: Optimized for all screen sizes
4. **Performance Optimized**: Minimal bundle size with efficient animations

### **Animation Sequence**

1. **Hover State**: Gentle floating effect when hovering over closed box
2. **Click/Tap**: Lid flies off with rotation and fade-out
3. **Reveal**: Reward text pops up with scale and bounce effects
4. **Celebration**: Confetti rains down for 5 seconds
5. **Continuous Animation**: Reward text hovers gently after reveal

## **♿ Accessibility Features**

- **Keyboard Navigation**: Full support for Enter/Space keys to open the gift
- **Focus Management**: Clear visual focus indicators
- **Semantic HTML**: Proper heading structure and button semantics

## **📊 Performance Considerations**

### **Bundle Size Optimization**

- **Tree Shaking**: Only included used code from dependencies
- **Code Splitting**: Lazy loading where applicable
- **Asset Optimization**: Compressed images and efficient CSS

### **Animation Performance**

- **CSS Transforms**: Used `transform` and `opacity` for GPU-accelerated animations
- **will-change**: Hinted browser for optimal rendering
- **Efficient Confetti**: Limited particle count with automatic cleanup

## **📦 Dependencies**

### **Production Dependencies**

- `react` & `react-dom` - Core framework
- `react-confetti` - Celebration effects
    - **Why chosen**: Lightweight, well-maintained, and performant confetti implementation

### **Development Dependencies**

- `@vitejs/plugin-react` - Vite React integration
- `typescript` - Type safety

## **⏱️ Time Spent & Future Improvements**

### **Time Allocation (Total: ~5 hours)**

- **Planning & Setup**: 45 minutes
- **Core Animation Development**: 2 hours
- **Accessibility Implementation**: 1 hour
- **Testing & Polish**: 1 hour
- **Documentation**: 15 minutes

### **What I Prioritized**

1. **Smooth Animations**: Professional-grade transition effects
2. **Accessibility Compliance**: Full keyboard and screen reader support
3. **Code Quality**: Clean, maintainable TypeScript code
4. **User Experience**: Intuitive interactions with visual feedback

### **Future Improvements (Given More Time)**

1. **Sound Effects**: Optional celebratory sounds on opening
2. **Multiple Rewards**: Different content reveals
3. **Advanced Animations**: 3D transforms and particle effects
4. **Theming System**: Multiple gift box designs
5. **Analytics Integration**: Track user interactions
6. **PWA Features**: Offline capability and install prompt

## **🎥 Screen Recording**

https://mikias.neetorecord.com/watch/eb3810ad-6170-48f2-bcf0-a96e38073a3b


## **🤝 Contributing**

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
