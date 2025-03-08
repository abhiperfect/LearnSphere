function classifyUser(answers) {
  // Initialize scores for each learning style
  let learningStyles = {
      video: 0,       // 🎥 Visual Learner
      reading: 0,     // 📖 Text-Based Learner
      interactive: 0, // 🎮 Gamified Learner
      audio: 0,       // 🎧 Audio Learner
      handsOn: 0      // 🛠️ Hands-On Learner
  };

  // Mapping user answers to learning styles
  const mapping = {
      "🎥 Short Videos": "video",
      "📖 Reading Articles": "reading",
      "🎮 Playing Games": "interactive",
      "🎧 Listening to Podcasts": "audio",
      "🛠️ Hands-On Practice": "handsOn",
      
      "🎬 Visuals & explainer videos": "video",
      "📜 Reading step-by-step guides": "reading",
      "🏆 Quizzes & interactive games": "interactive",
      "🎙️ Listening to experts": "audio",
      "🔧 Practical application": "handsOn",
      
      "📹 Watch a video tutorial": "video",
      "📑 Read a blog or article": "reading",
      "🎯 Solve a quiz or challenge": "interactive",
      "🎧 Listen to a podcast": "audio",
      "🛠️ Try solving it practically": "handsOn",
      
      "🎥 Watch a recap video": "video",
      "📝 Read notes or a summary": "reading",
      "🎮 Play a game-based quiz": "interactive",
      "🎙️ Listen to an audio summary": "audio",
      "🔬 Apply it to real-world scenarios": "handsOn",

      "📺 Short, engaging videos": "video",
      "📜 Detailed text-based explanations": "reading",
      "🎲 Games & interactive puzzles": "interactive",
      "🎤 Listening to real-life stories": "audio",
      "⚒️ Hands-on exercises": "handsOn",

      "📹 Watch an animated explainer video": "video",
      "📚 Read a structured guide": "reading",
      "🧩 Solve an interactive puzzle": "interactive",
      "🎙️ Listen to expert discussions": "audio",
      "🛠️ Experiment and learn by doing": "handsOn",

      "🎬 Watching tutorial videos": "video",
      "📖 Reading in-depth articles": "reading",
      "🎮 Playing interactive games": "interactive",
      "🎧 Listening to audio content": "audio",
      "🔧 Doing hands-on practice": "handsOn",

      "📺 Watch a YouTube tutorial": "video",
      "📚 Read the official documentation": "reading",
      "🎯 Use an interactive simulation": "interactive",
      "🎙️ Listen to a podcast about its features": "audio",
      "🔍 Start using it immediately": "handsOn",

      "🎥 Seeing things in action through visuals": "video",
      "📜 Understanding details through text": "reading",
      "🏆 Making learning fun with challenges": "interactive",
      "🎙️ Hearing real-world insights": "audio",
      "🛠️ Applying knowledge practically": "handsOn",

      "🎥 Engaging videos that simplify concepts": "video",
      "📖 Well-structured reading materials": "reading",
      "🎮 Leveling up in a game": "interactive",
      "🎧 Listening to thought-provoking discussions": "audio",
      "🏗️ Working on real-world applications": "handsOn"
  };
console.log("Answers Array: ",answers)
  // Process user answers
  answers.forEach(answer => {
      let category = mapping[answer];
      if (category) {
          learningStyles[category] += 1;
      }
  });

  // Determine dominant learning style
  let maxScore = Math.max(...Object.values(learningStyles));
  let userType = Object.keys(learningStyles).filter(style => learningStyles[style] === maxScore);

  return userType.length === 1 ? userType[0] : userType; // Return dominant or multiple top styles
}

// Example Usage
const userAnswers = [
  "🎥 Short Videos", "🎬 Visuals & explainer videos", "📹 Watch a video tutorial",
  "🎥 Watch a recap video", "📺 Short, engaging videos", "📹 Watch an animated explainer video",
  "🎬 Watching tutorial videos", "📺 Watch a YouTube tutorial", "🎥 Seeing things in action through visuals",
  "🎥 Engaging videos that simplify concepts"
];

// console.log(classifyUser(userAnswers)); // Output: "video"
export default classifyUser;