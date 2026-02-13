# 💕 Valentine's Day Web App

A beautiful, production-ready Valentine's Day proposal web app built with Flask. Create a memorable experience for your special someone with this elegant, romantic website.

## ✨ Features

- **Multi-Card Navigation**: Smooth card-by-card progression
- **Introduction Card**: Introduce yourself beautifully
- **Feelings Card**: Express how you feel about your relationship
- **Proposal Card**: Ask them to be your Valentine with YES/NO options
- **Response Cards**: Celebrate if they say YES or playfully respond if they say NO
- **Dark Romantic Theme**: Beautiful dark purple/burgundy gradients
- **Rose Flower Animations**: Floating roses throughout the background
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Heart animations, button effects, and card transitions

## 🎨 Design Features

- Dark romantic background with rose red accents
- Playfair Display for elegant titles
- Montserrat for clean body text
- Great Vibes for the romantic proposal question
- Beautiful Unsplash images on each card
- Confetti animation on YES response
- Playful animations on NO response

## 🚀 Quick Start

### Prerequisites
- Python 3.7+
- pip or conda

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/valentines-app.git
cd valentines-app
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the app:
```bash
python app.py
```

5. Open your browser and navigate to:
```
http://127.0.0.1:8080
```

## 📁 Project Structure

```
valentines-app/
├── app.py              # Flask backend
├── requirements.txt    # Python dependencies
├── README.md          # This file
├── static/
│   ├── style.css      # Beautiful styling
│   └── script.js      # Interactive functionality
└── templates/
    └── index.html     # Main HTML with all cards
```

## 🎯 How It Works

1. **Card 1 - Introduction**: Present yourself with a beautiful introduction
2. **Card 2 - Feelings**: Share how you feel about your relationship
3. **Card 3 - The Question**: Ask the big question with YES/NO buttons
4. **Card 4 - Success**: If YES, show a beautiful celebration message
5. **Card 5 - Maybe Later**: If NO, show a playful response with reconsider option

## 🛠️ Customization

Edit the text in `templates/index.html` to personalize the messages:
- Introduce yourself on the first card
- Write your feelings on the second card
- Customize the proposal question
- Add your own sweet messages for the responses

Change images by updating the image URLs in the HTML (currently using Unsplash images).

## 🌐 Deployment

This app is ready to deploy to:
- **Heroku**: Follow Heroku's Flask deployment guide
- **PythonAnywhere**: Simple Flask hosting
- **DigitalOcean**: VPS deployment
- **AWS/Azure**: Cloud deployment options

For production, update `app.py`:
```python
if __name__ == '__main__':
    app.run(debug=False)  # Disable debug mode
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 💖 Tips for Success

- Test on the device they'll use
- Have a nice setting (candles, music)
- Share the link with them in a special way
- Capture their reaction! 📸

## 📄 License

MIT License - Feel free to use this for your Valentine's Day proposal!

## 🎉 Good Luck!

May this beautiful app help you create an unforgettable moment! 💕

---

*Made with 💕 for love*
