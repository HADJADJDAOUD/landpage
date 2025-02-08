import { useState } from "react";
import axios from "axios";

const SentimentAnalyzer = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSentiment = async () => {
    if (!text) return;
    setLoading(true);
    
    try {
      const response = await axios.post("http://localhost:8000/analyze", { text });
      setSentiment(response.data);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
    
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold">Sentiment Analysis</h2>
      <textarea
        className="border p-2 w-full"
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a sentence..."
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2"
        onClick={analyzeSentiment}
      >
        Analyze
      </button>

      {loading && <p>Loading...</p>}

      {sentiment && (
        <div className="mt-4">
          <p><strong>Sentiment:</strong> {sentiment.sentiment}</p>
          <p><strong>Confidence:</strong> {sentiment.confidence.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalyzer;
